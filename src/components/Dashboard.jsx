import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import data from './database';
let Dashboard = () => {
    const [toggle, setToggle] = useState(false);
    const data1 = [
        { name: 'Group B', value: 55 },
        { name: 'Group C', value: 31 },
        { name: 'Group D', value: 14 },
    ];
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']


    return (
        <div className="w-full  flex  flex-wrap justify-between relative bg-gray-200 lg:w-full ">
            {toggle &&
                <div className="sidebar z-20 w-1/2 h-[100vh] bg-black text-white fixed   p-3 rounded-md lg:hidden ">
                    <h1 className="my-5 text-4xl">Board.</h1>

                    <ul>
                        <li className="my-6"><i class="fa-solid mx-2 fa-gauge"></i>DashBoard</li>
                        <li className="my-6"><i class="fa-solid mx-2 fa-ticket-simple"></i>Transactions</li>
                        <li className="my-6"><i class="fa-solid mx-2 fa-calendar-days"></i>Schedules</li>
                        <li className="my-6"><i class="fa-solid mx-2 fa-user"></i>Users</li>
                        <li className="my-6"><i class="fa-solid mx-2 fa-gear"></i>Settings</li>
                    </ul>

                    <div className="absolute p-2 bottom-8 cursor-pointer">
                        <h2>Help</h2>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            }

            {/* sidebar */}
            <div className="sidebar  w-1/2 h-[100vh] bg-black text-white  p-3 rounded-md lg:w-1/5 lg:fixed lg:top-0 lg:left-0 hidden lg:block">
                    <h1 className="my-5 text-4xl">Board.</h1>

                    <ul>
                        <li className="my-6"><i class="fa-solid mx-2 fa-gauge"></i>DashBoard</li>
                        <li className="my-6"><i class="fa-solid mx-2 fa-ticket-simple"></i>Transactions</li>
                        <li className="my-6"><i class="fa-solid mx-2 fa-calendar-days"></i>Schedules</li>
                        <li className="my-6"><i class="fa-solid mx-2 fa-user"></i>Users</li>
                        
                        <li className="my-6" onClick={()=>redirect("/sign")}><i class="fa-solid mx-2 fa-gear"></i>Settings</li>
                        
                    </ul>

                    <div className="absolute p-2 bottom-8 cursor-pointer">
                        <h2>Help</h2>
                        <h2>Contact Us</h2>
                    </div>
                </div>


            <div className="area w-full  lg:w-[80%] lg:p-5 lg:ml-[20%]">
                <nav className="w-full flex justify-between flex-wrap">
                    <h1 className="w-[20%] p-2  font-bold">DashBoard</h1>
                    
                    <div className='w-[70%]  flex justify-around  lg:w-2/5'>
                        <input type="text" placeholder='Search' className='rounded-md p-2'/>
                        <i class="fa-solid fa-bell text-xl mx-2 mt-2"></i>
                        <img src="src/profile.jpg" alt="profile" className="w-7 h-7 rounded-full mt-2" />
                        <i class="fa-solid fa-bars-staggered mt-2 lg:hidden text-lg" onClick={() => setToggle(!toggle)}></i>

                    </div>
                    

                </nav>

                <div className="card my-6 w-full flex flex-wrap justify-between p-2">
                    <div className="revenue w-[45%] my-3 rounded-lg bg-green-100 p-2 lg:w-[23%]">
                        <i class="fa-solid fa-camera text-right w-full text-xl"></i>
                        
                        <h2 className='font-semibold'>Total Revenue</h2>
                        
                        <h3 className='font-bold'>$ 2,129,430</h3>
                    </div>

                    <div className="transaction w-[45%] my-3 rounded-lg bg-yellow-100 p-2 lg:w-[23%]">
                        <i class="fa-solid fa-ticket text-right w-full text-xl"></i>
                        <h2 className='font-semibold'>Total Transactions</h2>
                        <h3 className='font-bold'>1520</h3>
                    </div>

                    <div className="likes w-[45%] my-3 rounded-lg bg-red-100 p-2 lg:w-[23%]">
                        <i class="fa-solid fa-thumbs-up text-right w-full text-xl"></i>
                        <h2 className='font-semibold'>Total Likes</h2>
                        <h3 className='font-bold'>9750</h3>
                    </div>

                    <div className="revenue w-[45%] my-3 rounded-lg bg-purple-100 p-2 lg:w-[23%]">
                        <i class="fa-solid fa-user text-right w-full text-xl"></i>
                        <h2 className='font-semibold'>Total User</h2>
                        <h3 className='font-bold'>892</h3>
                    </div>
                </div>
                {/* area chart */}
                <div className='w-[95%] m-auto p-2 bg-white rounded-lg'>
                    <h1 className='my-4 text-2xl'>Activies</h1>
                    <ResponsiveContainer width="100%" aspect={1|3}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}

                        >
                            <CartesianGrid strokeDasharray="" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="guest" stroke="#FF0000" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="user" stroke="#00FF00" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* pie chart  */}
            <div className='w-full lg:flex lg:justify-between'>


            <div className='bg-white rounded-lg p-3 w-[95%] m-auto my-6 relative  lg:w-[47%] '>
                    
                    <h1 className='inline text-xl font-bold'>Top Products</h1><span className='absolute right-3 text-gray-400'>May-June 2021</span>
                <ResponsiveContainer aspect={1|2} >
                <PieChart width={300} height={200}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={data1}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#0d6efd"
                        label
                    >
                     {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}   
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            
                </div>
                {/* schedule? */}
                <div className="bg-white rounded-lg p-3 w-[95%] m-auto my-5 relative lg:w-[47%]">

                    <h1 className='font-bold text-xl my-3 inline'>Today Schedule</h1>
                    <span className='absolute right-4 text-gray-300'>See All <i classname="fa-solid fa-chevron-right"></i></span>
                    <div className="w-full border-l-8 border-green-400 my-3 ">
                        <h1 className='mx-6'>Meeting with Supplier with kuta bali</h1>
                        <h3 className='mx-6 text-gray-300'>14:00-15:00</h3>
                        <h5 className='mx-6 text-gray-300'>at Sunset Road,Kuta,Bali</h5>
                    </div>

                    <div className='border-l-8 border-purple-600'>
                        <h1 className='mx-6'>Check Operation with Giga Factory 1</h1>
                        <h3 className='mx-6 text-gray-300'>18:00-20:00</h3>
                        <h5 className='mx-6 text-gray-300'>at Central Jakrata</h5>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};
export default Dashboard;