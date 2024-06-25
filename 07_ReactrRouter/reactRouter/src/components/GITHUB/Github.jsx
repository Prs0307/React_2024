/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

 
 

function Github() {

    const data= useLoaderData()

    // const [data,setData] =useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/prs0307')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[]);
  return (
    
    <div className='flex justify-center text-centre p-4 m-4 bg-slate-600 max-w-fit text-1xl text-left text-yellow-50 '>
        {/* need to call api */}
       <div className="flex flex-row gap-3">
       <div>
                <img src={data.avatar_url} alt="null" className='' width={80} />
        </div>
       <div>
       <ul>
            
            <li>
            Github User  : {data.name}
            </li>
            <li>
            Github Followers : {data.followers}
            </li>
        </ul>
       </div>
       </div>


      
    </div>
  )
}

export default Github

export const githubInfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/prs0307')
    return response.json();
}