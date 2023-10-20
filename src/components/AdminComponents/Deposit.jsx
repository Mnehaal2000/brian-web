import React, { useCallback, useMemo, useContext, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
    Box,
    Button,
    IconButton,
    Tooltip,
    createTheme, ThemeProvider, useTheme
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { collection, getDocs, query, where, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
import AuthContext from "../../AuthContext"

const Deposit = () => {

    const { userRole } = useContext(AuthContext)

    useEffect(() => {
        getAllDeposits();
    }, [])

    let data = [
    ];

    const getAllDeposits = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "deposits"));
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
                setTableData(data)
            });
        } catch (error) {
            console.log(error)
        }
    }

    const handleDepositReject = async (selectedRowId) => {
        try {
            const depositsCollectionRef = collection(db, "deposits");

            const querySnapshot = await getDocs(depositsCollectionRef);

            for (const doc of querySnapshot.docs) {
                const data = doc.data();
                if (data.transactionId === selectedRowId) {

                    await updateDoc(doc.ref, {
                        Status: "rejected"
                    });
                    console.log("Document updated successfully.");
                    return;
                }
            }

            console.log("No matching document found.");
        } catch (error) {
            console.error("Error updating document:", error);
        }
    };


    const handleDepositApprove = async (selectedRowId) => {
        try {
            const depositsCollectionRef = collection(db, "deposits");

            const querySnapshot = await getDocs(depositsCollectionRef);

            for (const doc of querySnapshot.docs) {
                const data = doc.data();
                if (data.transactionId === selectedRowId) {

                    await updateDoc(doc.ref, {
                        Status: "approved"
                    });
                    console.log("Document updated successfully.");
                    return;
                }
            }

            console.log("No matching document found.");
        } catch (error) {
            console.error("Error updating document:", error);
        }
    }

    const [tableData, setTableData] = useState([]);
    const [validationErrors, setValidationErrors] = useState({});


    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        if (!Object.keys(validationErrors).length) {
            tableData[row.index] = values;
            //send/receive api updates here, then refetch or update local table data for re-render
            setTableData([...tableData]);
            exitEditingMode(); //required to exit editing mode and close modal
        }
    };

    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };

    const handleDeleteRow = useCallback(
        (row) => {
            if (
                !confirm(`Are you sure you want to delete # ${row.getValue('transactionId')}?`)
            ) {
                return;
            }
            //send api delete request here, then refetch or update local table data for re-render
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
        },
        [tableData],
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: 'Name',
                header: 'Name',
                size: 140,
            },
            {
                accessorKey: 'depositMethod',
                header: 'Deposit Method',
                size: 140,
            },
            {
                accessorKey: 'depositAmount',
                header: 'Deposit Amount',
            },
            {
                accessorKey: 'transactionId',
                header: 'Transaction Id',
                size: 80,
            },
            {
                accessorKey: 'Email',
                header: 'Email',
            },
        ],
        [],
    );

    const globalTheme = useTheme();

    const tableTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: 'dark',
                    background: {
                        default:
                            'rgba(0,0,0,0)',
                    },
                },
            }),
        [globalTheme],
    );

    return (
        <>
            <div className="main w-full flex flex-col justify-center items-center">
                <div className="w-full mb-[50px] items-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-center">
                    <div className="bg-[#014D64] w-full sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1120px] 2xl:w-[1120px] h-[auto] flex flex-col p-5 rounded-md">
                        <div className="flex flex-row justify-end">
                            <span className="font-bold text-white text-3xl mb-2 mt-2 sm:mb-4 sm:mt-4 md:mb-3 md:mt-3 lg:mb-3 lg:mt-3 xl:mb-3 xl:mt-3 2xl:mb-3 2xl:mt-3">{userRole}</span>
                        </div>
                        <ThemeProvider theme={tableTheme}>
                            <MaterialReactTable
                                muiTablePaperProps={{
                                    elevation: 0,
                                    sx: {
                                        backgroundColor: 'rgba(0,0,0,0)',
                                        borderRadius: '0',
                                    },
                                }}
                                displayColumnDefOptions={{
                                    'mrt-row-actions': {
                                        muiTableHeadCellProps: {
                                            align: 'center',
                                        },
                                        size: 120,
                                    },
                                }}
                                columns={columns}
                                data={tableData}
                                enableRowSelection
                                editingMode="modal" //default
                                enableColumnOrdering
                                enableEditing
                                onEditingRowSave={handleSaveRowEdits}
                                onEditingRowCancel={handleCancelRowEdits}
                                renderRowActions={({ row, table }) => (
                                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                                        <Tooltip arrow placement="left" title="Edit">
                                            <IconButton onClick={() => table.setEditingRow(row)}>
                                                <Edit />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip arrow placement="right" title="Delete">
                                            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                                                <Delete />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                )}
                                renderTopToolbarCustomActions={({ table }) => {
                                    const handleReject = () => {
                                        const selectedRows = table.getSelectedRowModel().flatRows;

                                        if (selectedRows.length === 1) {
                                            const selectedRow = selectedRows[0];
                                            const selectedRowId = selectedRow.original.transactionId;
                                            alert('Rejecting Deposit with TransactionId: ' + selectedRowId);
                                            handleDepositReject(selectedRowId)
                                        } else {
                                            alert('Please select a single row to reject.');
                                        }
                                    };
                                    const handleApprove = () => {
                                        const selectedRows = table.getSelectedRowModel().flatRows;

                                        if (selectedRows.length === 1) {
                                            const selectedRow = selectedRows[0];
                                            const selectedRowId = selectedRow.original.transactionId;
                                            alert('Approving Deposit with TransactionId: ' + selectedRowId);
                                            handleDepositApprove(selectedRowId)
                                        } else {
                                            alert('Please select a single row to approve.');
                                        }
                                    };


                                    return (
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <Button
                                                color="error"
                                                disabled={!table.getIsSomeRowsSelected()}
                                                onClick={handleReject}
                                                variant="contained"
                                            >
                                                Reject
                                            </Button>
                                            <Button
                                                color="success"
                                                disabled={!table.getIsSomeRowsSelected()}
                                                onClick={handleApprove}
                                                variant="contained"
                                            >
                                                Approve
                                            </Button>
                                        </div>
                                    );
                                }}

                            />
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposit