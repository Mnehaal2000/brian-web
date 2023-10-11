import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';


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


const FundingHistory = () => {

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
            <div className="main w-full flex flex-col justify-center items-center">
                <div className="w-[900px] mt-[30px] flex flex-col gap-[20px] justify-center">
                    <p className="text-3xl font-bold text-white">Deposit History</p>
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
                                        backgroundColor:'rgba(0,0,0,0)',
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

export default FundingHistory