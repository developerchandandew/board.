import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

let SignIn=()=>{
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState();
    const navigate = useNavigate()
   
    const submitHandle=(e)=>{
        e.preventDefault();
        if(email == 'abc@gmail.com' && password == 12345){
            navigate('/dashboard')
        }else if(!email && !password){
            alert('Invalid Email and Password Please Fill correct Email and Password')
        }else{
            alert('Invalid Email and Password Please Fill correct Email and Password')

        }

    }

    return(
        <div className="w-full h-[100vh] flex flex-col lg:flex-row">
            <div className="logo w-full h-[80vh] bg-black text-white flex justify-center items-center lg:h-[100vh] lg:w-1/2">
                <h1 className="text-5xl">Board.</h1>
            </div>
            <div className="signin w-full h-[100vh] flex justify-center items-center">
                <div className="w-full mt-5 heads lg:w-1/2 ">
                <h1 className="text-center text-3xl lg:text-left lg:ml-5">Sign In</h1>
                <h3 className="text-center lg:text-left lg:ml-5">Sign in to your account</h3>
                <form className="w-[90%] p-3 my-6 h-full m-auto rounded-lg  bg-gray-100 ">
                    <label className="block">Email address</label>
                    <input className="p-2 rounded-md w-full" type="email" placeholder="email" name='email'  onChange={(e)=>setEmail(e.target.value)}/>
                    <label className="block">Password</label>
                    <input className="p-2 rounded-md w-full" type="password" placeholder="Password" name="password"  onChange={(e)=>setPassword(e.target.value)}/>
                    <span>{Error}</span>

                    <h3 className='my-3 text-blue-600 cursor-pointer'>Forgot PassWord?</h3>
                    <Link to='/dashboard'>
                    <button type="submit" className="bg-black text-white w-full m-auto p-2 rounded-md text-center" onClick={submitHandle} >Sign In</button>
                    </Link>
                 </form>
                    <h3 className="text-center">Don't have an account?<a href="#" className="text-blue-600">Register here</a></h3>
                </div>
                
            </div>
        </div>
    )
}
export default SignIn