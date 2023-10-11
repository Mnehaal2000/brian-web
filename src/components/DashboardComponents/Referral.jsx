import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import icon1 from "../../assets/dashboard/referral/chain.png"
import icon2 from "../../assets/dashboard/referral/market.png"


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



const Referral = () => {
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
                <div className="main w-[900px] mt-[20px] flex flex-row justify-center gap-[23px] items-center">
                    <div className='w-[536px] h-[326px] flex flex-col rounded-lg justify-center items-center gap-4 ' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
                        <img className='w-[70] h-[70]' src={icon1} alt="" />
                        <h3 className='font-bold text-white text-3xl'>Refer & Earn</h3>
                        <h3 className='font-light text-[16px] text-center p-[10px] text-white'>Earn 20% Sponsor bonus when you refer friends and new customers, plus 5% to 10% on the affiliate program down to the Fifth level, and there’s no limit to the amount you can earn building your affiliate business.</h3>
                    </div>
                    <div className='w-[536px] h-[326px] flex flex-col rounded-lg justify-center items-center gap-4 ' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
                        <img className='w-[70] h-[70]' src={icon2} alt="" />
                        <h3 className='font-bold text-white text-3xl'>My Referral Link</h3>
                        <h3 className='font-light text-[16px] text-center text-white'>Invite your audience, friends, and family to join our sustainable journey through your unique link.</h3>
                        <div className='flex flex-row'>
                            <input placeholder='https://ecocenturymlma.com/refera/admin' className='pr-2 pl-2 bg-transparent rounded-l-lg border w-[280px] border-r-transparent border-white outline-none text-white' type="text" name="" id="" />
                            <button className='ml-[-5px] w-[97px] h-[38px] bg-[#288AB8] rounded-r-lg text-white'>Copy link</button>
                        </div>
                    </div>
                </div>
                <div className='w-[900px] gap-2 flex flex-col'>
                    <h3 className='mt-[20px] mb-[20px] text-white font-bold text-2xl'>Business Builder Benefits</h3>
                    <div className="flex flex-col">
                        <label className="text-white" htmlFor="payment">
                            Select Rank to View
                        </label>
                        <select
                            className="bg-transparent p-5 mt-[10px] mb-[30px] w-[130px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                            name="payment"
                            id="payment"
                        >
                            <option className='text-black' value="credit-card">Member</option>
                            <option className='text-black' value="bank-transfer">Bank Transfer</option>
                            <option className='text-black' value="paypal">PayPal</option>
                        </select>
                    </div>
                    <p className='text-[18px] text-white font-light'>• 20% Sponsor Bonus</p>
                    <p className='text-[18px] text-white font-light'>• [5% Level 1] [2.5 % Level 2] [1.5% Level 3] [1% Level 4] [1% Level 5]</p>
                    <p className='text-[18px] text-white font-light'>• Bonus in Achievements</p>
                </div>
                <div
                    className="w-[900px] h-[471px] mt-[20px] flex flex-col p-5 rounded-md"
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

export default Referral