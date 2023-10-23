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
import { collection, getDocs,deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
import AuthContext from "../../AuthContext"

const Withdraw = () => {

    const { userRole } = useContext(AuthContext)

    useEffect(() => {
        getAllWithdraws();
    }, [])

    let data = [
    ];

    const getAllWithdraws = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "withdraws"));
            querySnapshot.forEach((doc) => {
                if(doc.data().Status==="pending")
                {
                    data.push(doc.data());
                }
                setTableData(data)
            });
        } catch (error) {
            console.log(error)
        }
    }

    const handleWithdrawReject = async (selectedRowId) => {
        try {
            const withdrawCollectionRef = collection(db, "withdraws");

            const querySnapshot = await getDocs(withdrawCollectionRef);

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


    const handleWithdrawApprove = async (selectedRowId) => {
        try {
            const withdrawCollectionRef = collection(db, "withdraws");

            const querySnapshot = await getDocs(withdrawCollectionRef);

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
            const selectedRowId = values.transactionId;
            try {
                const withdrawsCollectionRef = collection(db, "withdraws");
                const querySnapshot = await getDocs(withdrawsCollectionRef);
    
                for (const doc of querySnapshot.docs) {
                    const data = doc.data();
                    if (data.transactionId === selectedRowId) {
                        await updateDoc(doc.ref, values);
                        console.log("Document updated successfully.");
                        break;
                    }
                }
    
                tableData[row.index] = values;
                setTableData([...tableData]);
    
                exitEditingMode(); 
            } catch (error) {
                console.error("Error updating document:", error);
            }
        }
    };

    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };

    const handleDeleteRow = useCallback(
        async (row) => {
          const selectedRowId = row.original.transactionId;
      
          if (!confirm(`Are you sure you want to delete # ${selectedRowId}?`)) {
            return;
          }
      
          try {
            const withdrawsCollectionRef = collection(db, "withdraws");
            const querySnapshot = await getDocs(withdrawsCollectionRef);
      
            for (const doc of querySnapshot.docs) {
              const data = doc.data();
              if (data.transactionId === selectedRowId) {
                await deleteDoc(doc.ref);
                console.log(`Document with transactionId ${selectedRowId} deleted successfully.`);
                break;
              }
            }
      
            const updatedTableData = tableData.filter(
              (rowData) => rowData.transactionId !== selectedRowId
            );
            setTableData(updatedTableData);
          } catch (error) {
            console.error("Error deleting document:", error);
          }
        },
        [tableData]
      );
      

    const columns = useMemo(
        () => [
            {
                accessorKey: 'Name',
                header: 'Name',
                size: 140,
            },
            {
                accessorKey: 'withdrawMethod',
                header: 'Withdraw Method',
                size: 140,
            },
            {
                accessorKey: 'withdrawAmount',
                header: 'Withdraw Amount',
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
                                            alert('Rejecting Withdraw with TransactionId: ' + selectedRowId);
                                            handleWithdrawReject(selectedRowId)
                                        } else {
                                            alert('Please select a single row to reject.');
                                        }
                                    };
                                    const handleApprove = () => {
                                        const selectedRows = table.getSelectedRowModel().flatRows;

                                        if (selectedRows.length === 1) {
                                            const selectedRow = selectedRows[0];
                                            const selectedRowId = selectedRow.original.transactionId;
                                            alert('Approving Withdraw with TransactionId: ' + selectedRowId);
                                            handleWithdrawApprove(selectedRowId)
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

export default Withdraw