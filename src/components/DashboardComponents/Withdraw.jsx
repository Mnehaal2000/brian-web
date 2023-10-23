import React, { useContext, useState, useEffect } from 'react';
import AuthContext from "../../AuthContext"
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';

const Withdraw = () => {

    const { currentUser } = useContext(AuthContext)
    const [paymentMethod, setpaymentMethod] = useState('Credit-Card');
    const [Amount, setAmount] = useState('');
    const [TransactionId, setTransactionId] = useState('');
    const [buttonStatus, setbuttonStatus] = useState('Confirm');

    const uid = currentUser.uid

    const submithandler = async () => {
        try {
            setbuttonStatus('Confirming')
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const docRef = await addDoc(collection(db, "withdraws"), {
                    withdrawMethod: paymentMethod,
                    withdrawAmount: Amount,
                    transactionId: TransactionId,
                    Name: docSnap.data().Name,
                    Email: docSnap.data().Email,
                    Status: "pending"
                })
            }
            setbuttonStatus('Confirmed')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setbuttonStatus('Confirm')
    }, [])

    return (
        <div className="main w-full flex flex-col justify-center items-center">
            <div className="w-[900px] mt-[30px] flex flex-col gap-[20px] justify-center">
                <p className="text-3xl font-bold text-white">Withdraw Money</p>
                <div
                    className="w-[783px] flex flex-col p-5 rounded-md"
                    style={{ background: "linear-gradient(#29A9E3, #272C36)" }}
                >
                    <label className="text-white" htmlFor="payment">
                        Select a Withdraw Method *
                    </label>
                    <select
                        className="bg-transparent p-5 mt-[10px] mb-[30px] w-[600px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                        name="payment"
                        id="payment"
                        onChange={(e) => setpaymentMethod(e.target.value)}
                        value={paymentMethod}
                    >
                        <option className='text-black' value="Credit-Card">Credit Card</option>
                        <option className='text-black' value="Bank-Transfer">Bank Transfer</option>
                        <option className='text-black' value="PayPal">PayPal</option>
                    </select>
                    <label className="text-white" htmlFor="payment">
                        Amount in (USD)
                    </label>
                    <input
                        className="bg-transparent p-5 mt-[10px] mb-[30px] w-[600px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                        name="payment"
                        id="payment"
                        type='number'
                        onChange={(e) => setAmount(e.target.value)}
                        value={Amount}
                        min={0}
                    />
                    {paymentMethod === "PayPal" && (
                        <><label className="text-white" htmlFor="payment">
                            Transaction ID * (The id on which your paypal transaction is processed)
                        </label>
                            <input
                                className="bg-transparent p-5 mt-[10px] mb-[30px] w-[600px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                                name="transactionid"
                                id="transactionid"
                                type='text'
                                onChange={(e) => setTransactionId(e.target.value)}
                                value={TransactionId}
                            />
                        </>)}
                    <button onClick={submithandler} className='w-[199px] h-[68px] bg-[#0AC15F] text-white font-bold text-2xl rounded-lg'>{buttonStatus}</button>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;
