import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import icon1 from "../../assets/dashboard/accountstatement/1.png"
import icon2 from "../../assets/dashboard/accountstatement/2.png"

const data = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
];


const AccountStatement = () => {

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
                size: 150,
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
                size: 150,
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Address',
                size: 200,
            },
            {
                accessorKey: 'city',
                header: 'City',
                size: 150,
            },
            {
                accessorKey: 'state',
                header: 'State',
                size: 150,
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
            <div className="main w-full flex mb-[50px] flex-col justify-center items-center">
                <div className="main w-full mt-[20px] flex flex-row justify-center gap-[23px] items-center">
                    <div className='w-[536px] h-[326px] flex flex-col rounded-lg justify-center items-center gap-4 ' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
                        <img className='w-[70] h-[70]' src={icon1} alt="" />
                        <h3 className='font-bold text-white text-3xl'>Current Balance</h3>
                        <h3 className='font-bold text-white text-3xl'>$ 15,626</h3>
                    </div>
                    <div className='w-[536px] h-[326px] flex flex-col rounded-lg justify-center items-center gap-4 ' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
                        <img className='w-[70] h-[70]' src={icon2} alt="" />
                        <h3 className='font-bold text-white text-3xl'>Current Balance</h3>
                        <h3 className='font-bold text-white text-3xl'>$ 15,626</h3>
                    </div>
                </div>
                <div
                    className="w-[1100px] h-[471px] mt-[20px] flex flex-col p-5 rounded-md"
                    style={{ background: "linear-gradient(#29A9E3, #272C36)" }}
                >
                    <ThemeProvider theme={tableTheme}>
                        <MaterialReactTable
                            columns={columns}
                            data={data}
                            enableColumnOrdering
                            enablePinning

                            muiTablePaperProps={{
                                elevation: 0,
                                sx: {
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    borderRadius: '0',
                                },
                            }}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </>
    )
}

export default AccountStatement