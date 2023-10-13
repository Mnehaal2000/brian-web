import { useContext, useEffect, useState } from "react";
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword} from "firebase/auth";

const SignUpPage = () => {
     const [err, setErr] = useState(false);
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();

    const loadCountries = async (inputValue) => {
        if(inputValue)
        {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
                if (!response.ok) {
                  throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const data = await response.json();
            
                // Map the API response to an array of country options
                const countryOptions = data.map((country) => ({
                  label: country.name.common,
                  value: country.cca2,
                }));
            
                return countryOptions;
              } catch (error) {
                console.error('Error loading countries:', error);
                return [];
              }
        }
        else{
            console.log('')
        }
      };
      


    const validationSchema = Yup.object({
        FirstName: Yup.string().required('First Name is required'),
        LastName: Yup.string().required('Last Name is required'),
        Email: Yup.string().email('Invalid email format').required('Email is required'),
        Phone: Yup.string().required('Phone is required'),
        UserName: Yup.string().required('User Name is required'),
        Gender: Yup.string().required('Gender is required'),
        Password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .max(16, 'Password must be at most 16 characters')
            .required('Password is required'),
        ConfirmPassword: Yup.string()
            .oneOf([Yup.ref('Password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        Country: Yup.string().required('Country is required'),
        Name: Yup.string().required('Name is required'),
        AddressLine1: Yup.string().required('Address Line 1 is required'),
        City: Yup.string().required('City is required'),
        State: Yup.string().required('State is required'),
        ZIPCode: Yup.string().required('ZIP Code is required'),
    });
    const formik = useFormik({
        initialValues: {
            FirstName: '',
            LastName: '',
            Email: '',
            Phone: '',
            UserName: '',
            Gender: '',
            Password: '',
            ConfirmPassword: '',
            Country: '',
            Name: '',
            AddressLine1: '',
            AddressLine2: '',
            City: '',
            State: '',
            ZIPCode: '',
        },
        validationSchema,
        onSubmit: async(values) => {
            // Your form submission logic here
            setLoading(true);
          
            try {
              // Create user
              const res = await createUserWithEmailAndPassword(auth,values.Email,values.ConfirmPassword);
          
              // Create user on firestore in "users" collection
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                FirstName:values.FirstName,
                LastName:values.LastName,
                Emai:values.Email,
                Phone:values.Phone,
                UserName:values.UserName,
                Gender:values.Gender,
                Country:values.Country,
                Name:values.Name,
                AddressLine1:values.AddressLine1,
                AddressLine2:values.AddressLine2,
                City:values.City,
                State:values.State,
                ZIPCode:values.ZIPCode,

              });
              navigate("/dashboard/home")
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
            }
            console.log(values);
        },
    });
    return (
        <div className="main bg-[#F1F5F9] flex flex-col items-center h-full w-full">
            <form onSubmit={formik.handleSubmit}>
                <div className="firstform mt-5 md:w-[600px] bg-white p-5 rounded-md flex flex-col justify-center items-center shadow-md">
                    <h1 className="text-[#12664F] text-sm md:text-xl font-semibold">Congratulations! Let’s Get You Started</h1>
                    <h3 className="text-[#12664F] text-lg">Personal Info</h3>
                    <div className="formitem mt-5 w-full md:w-[400px]">
                        <label htmlFor="FirstName" className="text-[#12664F]">First Name</label>
                        <input
                            type="text"
                            name="FirstName"
                            id="FirstName"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.FirstName}
                        />
                        {formik.touched.FirstName && formik.errors.FirstName ? (
                            <div className="text-red-500">{formik.errors.FirstName}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 w-full md:w-[400px]">
                        <label htmlFor="LastName" className="text-[#12664F]">Last Name</label>
                        <input
                            type="text"
                            name="LastName"
                            id="LastName"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.LastName}
                        />
                        {formik.touched.LastName && formik.errors.LastName ? (
                            <div className="text-red-500">{formik.errors.LastName}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 w-full md:w-[400px]">
                        <label htmlFor="Email" className="text-[#12664F]">Email</label>
                        <input
                            type="text"
                            name="Email"
                            id="Email"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Email}
                        />
                        {formik.touched.Email && formik.errors.Email ? (
                            <div className="text-red-500">{formik.errors.Email}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 mb-5 w-full md:w-[400px]">
                        <label htmlFor="Phone" className="text-[#12664F]">Phone</label>
                        <input
                            type="text"
                            name="Phone"
                            id="Phone"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Phone}
                        />
                        {formik.touched.Phone && formik.errors.Phone ? (
                            <div className="text-red-500">{formik.errors.Phone}</div>
                        ) : null}
                    </div>
                </div>
                <div className="textpop mt-8 mb-[30px] flex flex-col items-center gap-2 w-full md:w-[600px]">
                    <h3 className="text-[#12664F] text-lg">Create Your Account</h3>
                    <div className="text p-4">
                        <span className="text-[#12664F] text-md">Congratulations on taking the first step towards a more sustainable future! Please choose your username to continue. By creating your account, you agree to pay a membership fee of $50 monthly for 12 months or a one-time payment of $500 and save 16.67% on membership, 2% or even more on discounted and promo products and access to all basic membership incentives.</span>
                    </div>
                </div>
                <div className="secondform mt-5 mb-7 w-full md:w-[600px] bg-white p-5 rounded-md flex flex-col justify-center items-center shadow-md">
                    <div className="formitem mt-5 w-full md:w-[400px]">
                        <label htmlFor="UserName" className="text-[#12664F]">User Name</label>
                        <input
                            type="text"
                            name="UserName"
                            id="UserName"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.UserName}
                        />
                        {formik.touched.UserName && formik.errors.UserName ? (
                            <div className="text-red-500">{formik.errors.UserName}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 w-full md:w-[400px]">
                        <label htmlFor="Gender" className="text-[#12664F]">Select Gender</label>
                        <select
                            name="Gender"
                            id="Gender"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Gender}
                        >
                            <option value="" label="Select Gender" />
                            <option value="Male" label="Male" />
                            <option value="Female" label="Female" />
                            <option value="Other" label="Other" />
                        </select>
                        {formik.touched.Gender && formik.errors.Gender ? (
                            <div className="text-red-500">{formik.errors.Gender}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 w-full md:w-[400px]">
                        <label htmlFor="Password" className="text-[#12664F]">Password <span className='text-[#12664F] text-xs'>(Passwords must be between 6 and 16 characters long)</span></label>
                        <input
                            type="text"
                            name="Password"
                            id="Password"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Password}
                        />
                        {formik.touched.Password && formik.errors.Password ? (
                            <div className="text-red-500">{formik.errors.Password}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 mb-5 w-full md:w-[400px]">
                        <label htmlFor="ConfirmPassword" className="text-[#12664F]">Confirm Password</label>
                        <input
                            type="text"
                            name="ConfirmPassword"
                            id="ConfirmPassword"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ConfirmPassword}
                        />
                        {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (
                            <div className="text-red-500">{formik.errors.ConfirmPassword}</div>
                        ) : null}
                    </div>
                </div>


                <div className="thirdform mt-5 mb-7 w-full md:w-[600px] bg-white p-5 rounded-md flex flex-col justify-center items-center shadow-md">
                    <h3 className="text-[#12664F] text-lg">Shipping Information</h3>
                    <div className="formitem mt-5 w-full md:w-[400px]">
                        <label htmlFor="Country" className="text-[#12664F]">Country</label>
                        <AsyncSelect
                            name="Country"
                            id="Country"
                            cacheOptions
                            defaultOptions
                            loadOptions={loadCountries}
                            onChange={(selectedOption) => {
                                // Set the selected country value in formik
                                formik.setFieldValue('Country', selectedOption?.value || '');
                            }}
                            onBlur={formik.handleBlur}
                            value={{ label: formik.values.Country, value: formik.values.Country }}
                        />
                        {formik.touched.Country && formik.errors.Country ? (
                            <div className="text-red-500">{formik.errors.Country}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 w-full md:w-[400px]">
                        <label htmlFor="Name" className="text-[#12664F]">Name</label>
                        <input
                            type="text"
                            name="Name"
                            id="Name"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Name}
                        />
                        {formik.touched.Name && formik.errors.Name ? (
                            <div className="text-red-500">{formik.errors.Name}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 w-full md:w-[400px]">
                        <label htmlFor="AddressLine1" className="text-[#12664F]">Address Line 1</label>
                        <input
                            type="text"
                            name="AddressLine1"
                            id="AddressLine1"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.AddressLine1}
                        />
                        {formik.touched.AddressLine1 && formik.errors.AddressLine1 ? (
                            <div className="text-red-500">{formik.errors.AddressLine1}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 w-full md:w-[400px]">
                        <label htmlFor="AddressLine2" className="text-[#12664F]">Address Line 2 <span className='text-[#12664F] text-xs'>(Optional)</span></label>
                        <input
                            type="text"
                            name="AddressLine2"
                            id="AddressLine2"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            value={formik.values.AddressLine2}
                        />
                    </div>
                    <div className="formitem mt-3 w-full md:w-[400px]">
                        <label htmlFor="City" className="text-[#12664F]">City</label>
                        <input
                            type="text"
                            name="City"
                            id="City"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.City}
                        />
                        {formik.touched.City && formik.errors.City ? (
                            <div className="text-red-500">{formik.errors.City}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 w-full md:w-[400px]">
                        <label htmlFor="State" className="text-[#12664F]">State</label>
                        <input
                            type="text"
                            name="State"
                            id="State"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.State}
                        />
                        {formik.touched.State && formik.errors.State ? (
                            <div className="text-red-500">{formik.errors.State}</div>
                        ) : null}
                    </div>
                    <div className="formitem mt-3 w-full md:w-[400px]">
                        <label htmlFor="ZIPCode" className="text-[#12664F]">ZIP Code</label>
                        <input
                            type="text"
                            name="ZIPCode"
                            id="ZIPCode"
                            className="w-full px-3 py-2 border rounded-md bg-white"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.State}
                        />
                        {formik.touched.ZIPCode && formik.errors.ZIPCode ? (
                            <div className="text-red-500">{formik.errors.ZIPCode}</div>
                        ) : null}
                    </div>
                    <span className='w-full md:w-[350px] text-center mt-4 mb-4 text-[#12664F]'>
                        I consent to receive electronic communications regarding my activity on this portal and agree to the Terms of Use & Privacy Policy.
                    </span>
                    <button type='submit' className='bg-[#12664F] w-full md:w-[400px] h-[40px] text-md font-bold text-white'>Sign Up</button>
                    {loading && "Registering..."}
                    {err && <span>Something went wrong</span>}
                </div>
            </form>

            <div className="con1 mb-5">
                <h3 className="text-[#12664F] text-lg text-center">Membership Fee</h3>
                <div className='flex mt-5 flex-col items-center justify-center md:flex-row gap-5'>
                    <h3 className="text-[#12664F] text-lg">Monthly for 12 months only $50</h3>
                    <h3 className="text-[#12664F] text-lg w-[231px] md:w-[300px]">One time payment (lifetime) $500 Recommended $100 waived</h3>
                </div>
            </div>

            <div className="con2 mb-5">
                <h3 className="text-[#12664F] text-lg text-center">You can choose to pay now or later</h3>
                <div className='flex mt-5 flex-col md:flex-row gap-5'>
                    <button className='bg-[#12664F] w-full md:w-[250px] h-[40px] text-md font-bold text-white'>Pay Now</button>
                    <button className='bg-[#CD0000] w-full md:w-[250px] h-[40px] text-md font-bold text-white'>Pay Later</button>
                </div>
            </div>

            <div className="paras mt-2 mb-20 w-[250px] flex flex-col gap-5 md:w-[700px]">
                <span className="text-[#12664F] text-md">When you sign up, you have the option to pay now (recommended) or later. However, if you choose to pay later you must complete your membership fee payment within 3 days, which equals 72 hours. Otherwise you will be cut off from the system.</span>
                <span className="text-[#12664F] text-md">Alternatively, you can choose to pay $50 immediately. If you pay the remaining $450 within 30 days, the $100 fee will still be waived. After 30 days, the payment will be $550 for the year, which you can opt to pay in $50 monthly installments, covering the $600 lifetime membership fee.</span>
                <span className="text-[#12664F] text-md">By becoming a member, you embark on a journey toward a more sustainable future. Membership grants you access to invest and earn from our offerings, As a member, you have the potential for unlimited earnings, whether as an affiliate or by exploring even more opportunities.</span>
            </div>

        </div >
    );
};

export default SignUpPage;
