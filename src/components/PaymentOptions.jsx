import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { getDoc, doc } from 'firebase/firestore'

function PaymentOptions() {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };


    const [paypal, setpaypal] = useState('');
    const [creditcard, setcreditcard] = useState('');
    const [banktransfer, setbanktransfer] = useState('');


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


    return (
        <div className='mt-[20px] mb-[20px]'>
            <button
                onClick={toggleOptions}
                className={`px-4 py-2 text-white rounded-lg ${showOptions ? 'bg-red-500' : 'bg-blue-500'
                    } hover:bg-opacity-75`}
            >
                {showOptions ? 'Hide Payment Options' : 'Show Payment Options'}
            </button>
            {showOptions && (
                <div className='bg-white rounded-lg p-4 mt-[20px] mb-[20px]'>
                    <p className="mt-4">
                        <span className="text-green-700 font-bold text-2xl">PayPal:</span>
                        <span className="text-gray-600 text-lg">{paypal}</span>
                    </p>
                    <p className="mt-2">
                        <span className="text-green-700 font-bold text-2xl">Credit Card:</span>
                        <span className="text-gray-600 text-lg">{creditcard}</span>
                    </p>
                    <p className="mt-2">
                        <span className="text-green-700 font-bold text-2xl">Bank Transfer:</span>
                        <span className="text-gray-600 text-lg">{banktransfer}</span>
                    </p>
                </div>
            )}
        </div>
    );
}

export default PaymentOptions;
