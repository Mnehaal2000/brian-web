import React, { useMemo, useContext, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
    Button,
    createTheme, ThemeProvider, useTheme
} from '@mui/material';
import { collection, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
import AuthContext from "../../AuthContext"

const Feedbacks = () => {
    const { userRole } = useContext(AuthContext)

    useEffect(() => {
        getAllFeedbacks();
    }, [])

    let data = [
    ];
    const getAllFeedbacks = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "feedbacks"));
            querySnapshot.forEach((doc) => {
                if (doc.data().status === "pending") {
                    let d = {
                        id:doc.id,
                        ...doc.data()
                    }
                    data.push(d);
                }
                setTableData(data)
            });
        } catch (error) {
            console.log(error)
        }
    }

    const handleFeedbackReject = async (selectedRowId) => {
        try {
            const feedbacksCollectionRef = collection(db, "feedbacks");

            const querySnapshot = await getDocs(feedbacksCollectionRef);

            for (const doc of querySnapshot.docs) {
                const data = doc.id;
                if (data === selectedRowId) {

                    await updateDoc(doc.ref, {
                        status: "rejected"
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


    const handleFeedbackApprove = async (selectedRowId) => {
        try {
            const FeedbacksCollectionRef = collection(db, "feedbacks");

            const querySnapshot = await getDocs(FeedbacksCollectionRef);

            for (const doc of querySnapshot.docs) {
                const data = doc.id;
                if (data === selectedRowId) {

                    await updateDoc(doc.ref, {
                        status: "approved"
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


    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'Feedback Id',
                size: 140,
            },
            {
                accessorKey: 'user',
                header: 'user',
                size: 140,
            },
            {
                accessorKey: 'feedback_subject',
                header: 'Subject',
                size: 140,
            },
            {
                accessorKey: 'feedback',
                header: 'Feedback',
            }
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
            <div className="main w-[500px] lg:w-full flex flex-col justify-center items-center">
                <div className="w-full mb-[50px] pr-2 pl-2 items-start lg:items-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-center">
                    <h1 className='font-semibold md:text-[40px] text-[25px] text-white'>Feedbacks</h1>
                    <div className="bg-[#014D64] w-full sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[970px] 2xl:w-[1120px] h-[auto] flex flex-col p-5 rounded-md">
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
                                renderTopToolbarCustomActions={({ table }) => {
                                    const handleReject = () => {
                                        const selectedRows = table.getSelectedRowModel().flatRows;

                                        if (selectedRows.length === 1) {
                                            const selectedRow = selectedRows[0];
                                            const selectedRowId = selectedRow.original.id;
                                            alert('Rejecting Deposit with TransactionId: ' + selectedRowId);
                                            handleFeedbackReject(selectedRowId)
                                        } else {
                                            alert('Please select a single row to reject.');
                                        }
                                    };
                                    const handleApprove = () => {
                                        const selectedRows = table.getSelectedRowModel().flatRows;

                                        if (selectedRows.length === 1) {
                                            const selectedRow = selectedRows[0];
                                            const selectedRowId = selectedRow.original.id;
                                            alert('Approving Deposit with TransactionId: ' + selectedRowId);
                                            handleFeedbackApprove(selectedRowId)
                                        } else {
                                            alert('Please select a single row to approve.');
                                        }
                                    };


                                    return (
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <Button
                                                color="error"
                                                // disabled={!table.getIsSomeRowsSelected()}
                                                onClick={handleReject}
                                                variant="contained"
                                            >
                                                Reject
                                            </Button>
                                            <Button
                                                color="success"
                                                //  disabled={!table.getIsSomeRowsSelected()}
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

export default Feedbacks