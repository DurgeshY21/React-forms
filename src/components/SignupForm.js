import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useState} from "react";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const[formData, setFormData]  = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler (event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value

            }
        ) )
    }

    function submitHandler (event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
         setIsLoggedIn(true);
         toast.success("Account Created");
         const accountData = {
            ...formData
         };

         const finalData = {
            ...accountData,
            accountType
         }
         console.log("printing account data");
         console.log(accountData);

         navigate("/dashboard");

    }

    return (
        <div>
           {/* student-instructor- btns */}
           <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max ">
            <button
            className={`${accountType === "student" ? 
            " bg-richblack-900 text-richblack-5":
            " bg-transparent text-richblack-200" 
            } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("student")}
            >
                Student
            </button>
            <button
             className={`${accountType === "instructor" ? 
             " bg-richblack-900 text-richblack-5":
             " bg-transparent text-richblack-200" 
             } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}
            >
                Instructor
            </button>
           </div>

        <form onSubmit={submitHandler}>

            {/* first name and last name */}
            <div className=" w-full flex gap-x-4 mt-[10px]">
             <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    First Name<sup className="text-pink-200">*</sup></p>
                <input
                required
                type="text"
                name="firstName"
                onChange={changeHandler}
                placeholder="Enter first Name"
                value={formData.firstName}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 px-2 w-full py-[12px]"
                
                
                />
             </label>

             <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Last Name<sup className="text-pink-200">*</sup></p>
                <input
                required
                type="text"
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter last Name"
                value={formData.lastName}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 px-2 w-full py-[12px]"
                
                
                />
             </label>
        </div>
   
   {/* email */}
            <label className="w-full mt-[10]">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-200">*</sup></p>
                <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter email address"
                value={formData.email}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 px-2 w-full py-[12px]"
                
                />
             </label>

    {/* createPassword and confirmPassword */}
        <div className="w-full flex gap-x-4 mt-[10]">
            <label className=" w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Create Password<sup className="text-pink-200">*</sup></p>
                <input
                required
                type={showPassword ? ("text") : ("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter password"
                value={formData.password}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 px-2 w-full py-[12px]"
                
                />
                 <span 
                 className="absolute right-3 top-[38px] cursor-pointer"
                 onClick = {() => setShowPassword((prev) => !prev)}>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>

            <label className=" w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Confirm Password<sup className="text-pink-200">*</sup></p>
                <input
                required
                type={showConfirmPassword ? ("text") : ("password")}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 px-2 w-full py-[12px]"
                
                />
                 <span 
                 className="absolute right-3 top-[38px] cursor-pointer"
                 onClick = {() => setShowConfirmPassword((prev) => !prev)}>
                    {showConfirmPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
        </div>

        {/* button */}
        <button className="bg-purple-700 w-full mt-6 rounded-[8px] font-medium text-white px-[12px] py-[8px]">

            Create Account
        </button>
        </form>

        </div>
    )
}

export default SignupForm