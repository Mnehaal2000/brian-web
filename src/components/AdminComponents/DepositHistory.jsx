import React, { useMemo, useContext, useEffect,useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import AuthContext from "../../AuthContext"
import { MaterialReactTable } from 'material-react-table';
import {
    createTheme, ThemeProvider, useTheme
} from '@mui/material';

const DepositHistory = () => {
    const [tableData, setTableData] = useState([]);
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
                if (doc.data().Status !== "pending") {
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

    const columns = useMemo(
        () => [
            {
                accessorKey: 'Status',
                header: 'Status',
                size: 140,
            },
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
                accessorKey: 'id',
                header: 'Deposit Id',
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
            <div className="main w-[1000px] lg:w-full flex flex-col justify-center items-center">
                <div className="w-full mb-[50px] items-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-center">
                    <h1 className='font-semibold md:text-[40px] text-[25px] text-white'>Deposits History</h1>
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
                                enableColumnOrdering
                            />
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepositHistory