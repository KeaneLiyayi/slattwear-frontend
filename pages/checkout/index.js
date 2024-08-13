import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useShoppingCartContext } from '@/contexts/CartContext';
import 'intasend-inlinejs-sdk'
import toast from 'react-hot-toast';

const Index = () => {
    const [value, setValue] = useState('female');
    const { cart } = useShoppingCartContext();
    const [total, setTotal] = useState(0);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [zipcode, setZipcode] = useState('');
    const cartPrice = cart.reduce((acc, item) => acc + item.price, 0);


    useEffect(() => {
        const calculateTotal = () => {
            if (deliveryMethod === 'nation') {
                setTotal(cartPrice + 300);
            } else if (deliveryMethod === 'agent') {
                setTotal(cartPrice + 120);
            } else if (deliveryMethod === 'free') {
                setTotal(cartPrice);
            }
        };
        calculateTotal();
    }, [deliveryMethod, cartPrice]);

    useEffect(() => {
        setTotal(cartPrice)


    }, [])

    useEffect(() => {
        // Ensure InstaSend script is loaded
        if (typeof window !== 'undefined' && window.IntaSend) {
            const intaSendInstance = new window.IntaSend({
                publicAPIKey: 'ISPubKey_test_aea0c2d4-412a-4a67-9668-8783db236943',
                live: false // or true for live environment
            });

            intaSendInstance
                .on("COMPLETE", (response) => { console.log("COMPLETE:", response); })
                .on("FAILED", (response) => { console.log("FAILED:", response); })
                .on("IN-PROGRESS", () => { console.log("IN-PROGRESS ..."); });

            // Make the instance accessible globally or within the scope where it’s needed
            window.instaSendInstance = intaSendInstance;
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!deliveryMethod) {
            toast.error("Please select a delivery method")
            return
        }
        try {
            const name = `${firstName} ${lastName}`;
            const data = {
                email,
                address,
                name,
                phone,
                city,
                deliverymethod: deliveryMethod,
                total,
                items: cart,
                zipcode
            };
            // Send data to backend
            const response = await axios.post('/api/order', data);
            console.log(response);

            // Trigger the payment
            if (window.instaSendInstance) {
                window.instaSendInstance.startPayment({ amount: total, currency: "KES" });
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <section>
                <div className='md:flex max-w-screen-xl mx-auto '>
                    <div className="font-sans md:w-1/2 bg-white p-4">
                        <div className="max-w-4xl">
                            <form className="mt-12" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-1 gap-4">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-300">01</h3>
                                        <h3 className="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
                                    </div>
                                    <div className="md:col-span-2">
                                        <div className="grid grid-cols-1 gap-4">
                                            <div className='flex'>
                                                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="First name"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Last name"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email address"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Phone number"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-1 gap-4 mt-12">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-300">02</h3>
                                        <h3 className="text-xl font-bold text-gray-800 mt-1">Delivery Address</h3>
                                    </div>
                                    <div className="md:col-span-2">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <input type="text" required onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Address (e.g., Karen)"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="text" required onChange={(e) => setCity(e.target.value)} value={city} placeholder="City"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="State"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="number" onChange={(e) => setZipcode(e.target.value)} value={zipcode} placeholder="Zip Code (optional)"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-1 gap-4 mt-12">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-300">03</h3>
                                        <h3 className="text-xl font-bold text-gray-800 mt-1">Delivery Method</h3>
                                    </div>
                                    <div className="md:col-span-2">
                                        <div className="mx-auto w-full">
                                            <div className="divide-y divide-gray-200 border-y border-gray-200">
                                                <div className="flex justify-between space-x-2 py-3">
                                                    <label htmlFor="example12" className="text-sm">
                                                        <div className="font-medium text-gray-700">Pickup Point (HH Towers opposite Naivas)</div>
                                                        <p className="text-gray-500">Free.</p>
                                                    </label>
                                                    <div className="flex h-5 items-center">
                                                        <input type="radio" onChange={() => setDeliveryMethod('free')} id="example12" name="checkGroup5" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-between space-x-2 py-3">
                                                    <label htmlFor="example13" className="text-sm">
                                                        <div className="font-medium text-gray-700">Pickup Point near you (Pickup Mtaani agent)</div>
                                                        <p className="text-gray-500">Ksh 120.</p>
                                                    </label>
                                                    <div className="flex h-5 items-center">
                                                        <input type="radio" onChange={() => setDeliveryMethod('agent')} id="example13" name="checkGroup5" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-between space-x-2 py-3">
                                                    <label htmlFor="example14" className="text-sm">
                                                        <div className="font-medium text-gray-700">Nationwide</div>
                                                        <p className="text-gray-500">Ksh 300.</p>
                                                    </label>
                                                    <div className="flex h-5 items-center">
                                                        <input type="radio" onChange={() => setDeliveryMethod('nation')} id="example14" name="checkGroup5" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-end gap-4 mt-12">
                                    <button type="submit" className="intaSendPayButton px-6 w-full py-3 text-base font-semibold tracking-wide bg-slate-950 text-white rounded-md hover:bg-slate-900" data-amount={total} data-currency="KES">Pay Ksh {total}</button>


                                </div>
                            </form>
                        </div>
                    </div>
                    <div>

                        <div className="bg-slate-950 text-white p-8 rounded-lg shadow-lg flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105">
                            <div>
                                <h2 className="text-xl font-bold mb-2">Total Amount</h2>
                                <p className="text-base">Your total amount for purchased goods is  <span className="text-orange-500 font-semibold text-lg">Ksh {total ? total : cartPrice}</span></p>
                                <p className="text-base mt-4">Shipping Fee: <span className="text-orange-500 font-semibold">{deliveryMethod}</span></p>
                                <p className="text-base">Items Price: <span className="text-orange-500 font-semibold">Ksh {cartPrice}</span></p>
                            </div>
                            <img undefinedhidden="true" alt="money-icon" src="https://openui.fly.dev/openui/24x24.svg?text=💰" className="w-16 h-16 transition-transform duration-300 transform hover:scale-110" />
                        </div>






                    </div>
                </div>

            </section>
        </>
    );
}

export default dynamic(() => Promise.resolve(Index), { ssr: false });
