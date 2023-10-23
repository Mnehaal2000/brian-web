import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { getDoc, doc, updateDoc } from 'firebase/firestore'

const BankDetails = () => {
    const [paypal, setpaypal] = useState('');
    const [creditcard, setcreditcard] = useState('');
    const [banktransfer, setbanktransfer] = useState('');
    const [buttonstatus, setbuttonstatus] = useState('Update');


    useEffect(() => {
        getbankdetails()
    }, [])

    const getbankdetails = async () => {
        try {
            const docRef = doc(db, "banks", "r61jZHDdQ08upcUe0jm7");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setpaypal(docSnap.data().PayPal)
                setbanktransfer(docSnap.data().BankTransfer)
                setcreditcard(docSnap.data().CreditCard)
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updatehandler = async () => {
        try {
            setbuttonstatus('Updating')
            const updateref = doc(db, "banks", "r61jZHDdQ08upcUe0jm7");
            await updateDoc(updateref, {
                PayPal: paypal,
                BankTransfer: banktransfer,
                CreditCard: creditcard
            });
            setbuttonstatus('Update')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="main w-full flex flex-col justify-center items-center">
                <div className="w-full mb-[50px] items-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-center">
                    <p className='text-4xl text-white font-bold'>BANK DETAILS</p>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>PayPal</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            value={paypal}
                            onChange={(e) => setpaypal(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Credit Card</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            value={creditcard}
                            onChange={(e) => setcreditcard(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Bank Transfer</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            value={banktransfer}
                            onChange={(e) => setbanktransfer(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <button onClick={updatehandler} className='w-[199px] h-[68px] bg-[#0AC15F] text-white font-bold text-2xl rounded-lg'>{buttonstatus}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankDetails