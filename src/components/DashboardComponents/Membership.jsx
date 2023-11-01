import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import usericon from "../../assets/dashboard/membership/user.png"


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


const Membership = () => {

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
            <div className="main w-[1000px] lg:w-full mb-[90px] flex flex-col justify-center items-center">
                <div className="w-[900px] mt-[30px] flex flex-col gap-[20px] justify-center">
                    <div className='flex flex-col gap-5 mt-[20px] mb-[20px]'>
                        <div className='flex flex-row gap-5 items-center'><p className='text-white font-bold text-[24px]'>Member</p><img className='w-[50px] h-[50px]' src={usericon} alt="" /></div>
                        <p className='text-white font-light text-[22px]'>Become a member and join eco-century in making a zero emission world</p>
                        <button className='w-[336px] h-[68px] rounded-md text-white font-bold text-2xl bg-[#0AC15F]'>Become a Member</button>
                    </div>
                    <div className='flex flex-col gap-5 mt-[20px] mb-[20px]'>
                        <p className='text-white font-bold text-[24px]'>Trailblazer</p>
                        <p className='text-white font-light text-[22px]'>You will be redirected to the Partners page to partner as an individual, after which your partnership status will be updated here</p>
                        <button className='w-[336px] h-[68px] rounded-md text-white font-bold text-2xl bg-[#F2A229]'>Become a Trailblazer</button>
                    </div>
                    <div className='flex flex-col gap-5 mt-[20px] mb-[20px]'>
                        <p className='text-white font-bold text-[24px]'>Trailblazer Omega</p>
                        <p className='text-white font-light text-[22px]'>You will be redirected to the Partners page to partner as a business, after which your partnership status will be updated here</p>
                        <button className='w-[381px] h-[68px] rounded-md text-white font-bold text-2xl bg-[#29A5DE]'>Become a Trailblazer Omega</button>
                    </div>
                    <div
                        className="w-[900px] h-[471px] flex flex-col p-5 rounded-md"
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
            </div>
        </>
    )
}

export default Membership