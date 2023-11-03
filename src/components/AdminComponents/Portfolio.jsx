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
import { collection, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
import AuthContext from "../../AuthContext"

const Portfolio = () => {

  const { userRole } = useContext(AuthContext)
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    getAllPartners();
  }, [])

  let data = [
  ];

  const getAllPartners = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "portfolios"));
      querySnapshot.forEach((doc) => {
        if (doc.data().status === "pending") {
          let d = {
            id: doc.id,
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

  const handlePortfolioReject = async (selectedRowId) => {
    try {
      const portfoliosCollectionRef = collection(db, "portfolios");

      const querySnapshot = await getDocs(portfoliosCollectionRef);

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


  const handlePortfolioApprove = async (selectedRowId) => {
    try {
      const portfoliosCollectionRef = collection(db, "portfolios");

      const querySnapshot = await getDocs(portfoliosCollectionRef);

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


  const [validationErrors, setValidationErrors] = useState({});


  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      const selectedRowId = values.id;
      try {
        const portfoliosCollectionRef = collection(db, "portfolios");
        const querySnapshot = await getDocs(portfoliosCollectionRef);

        for (const doc of querySnapshot.docs) {
          const data = doc.id;
          if (data === selectedRowId) {
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
      const selectedRowId = row.original.id;

      if (!confirm(`Are you sure you want to delete # ${selectedRowId}?`)) {
        return;
      }

      try {
        const portfoliosCollectionRef = collection(db, "portfolios");
        const querySnapshot = await getDocs(portfoliosCollectionRef);

        for (const doc of querySnapshot.docs) {
          const data = doc.id;
          if (data === selectedRowId) {
            await deleteDoc(doc.ref);
            console.log(`Document with id ${selectedRowId} deleted successfully.`);
            break;
          }
        }

        const updatedTableData = tableData.filter(
          (rowData) => rowData.id !== selectedRowId
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
        accessorKey: 'amount',
        header: 'Amount',
        size: 140,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 140,
      },
      {
        accessorKey: 'method',
        header: 'Method',
        size: 140,
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'portfolio',
        header: 'Portfolio',
        size: 80,
      },
      {
        accessorKey: 'id',
        header: 'Portfolio Id',
        size: 80,
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
      <div className="main w-[1000px] lg:w-full flex flex-col justify-center items-center">
        <div className="w-full mb-[50px] items-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-center">
          <h1 className='font-semibold md:text-[40px] text-[25px] text-white'>Portfolios</h1>
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
                      const selectedRowId = selectedRow.original.id;
                      alert('Rejecting Portfolio with id: ' + selectedRowId);
                      handlePortfolioReject(selectedRowId)
                    } else {
                      alert('Please select a single row to reject.');
                    }
                  };
                  const handleApprove = () => {
                    const selectedRows = table.getSelectedRowModel().flatRows;

                    if (selectedRows.length === 1) {
                      const selectedRow = selectedRows[0];
                      const selectedRowId = selectedRow.original.id;
                      alert('Approving Portfolio with id: ' + selectedRowId);
                      handlePortfolioApprove(selectedRowId)
                    } else {
                      alert('Please select a single row to approve.');
                    }
                  };


                  return (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Button
                        color="error"
                        //disabled={!table.getIsSomeRowsSelected()}
                        onClick={handleReject}
                        variant="contained"
                      >
                        Reject
                      </Button>
                      <Button
                        color="success"
                        //disabled={!table.getIsSomeRowsSelected()}
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

export default Portfolio