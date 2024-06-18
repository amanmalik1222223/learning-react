import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData();
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/amanmalik1709')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data);
    //     })
    // })
    return (
        <>
        <div className='flex flex-col text-center m-4 bg-gray-600 text-white p-4 text-3xl gap-8'>
        <div className='flex justify-center '><img src={data.avatar_url} alt="Git picture"  /></div>
            <div>Github Followers: {data.followers}</div>
            
        </div>
        
        </>
    );
}

export default Github;

export const githubInfoLoader = async () =>{
    const response=await fetch('https://api.github.com/users/amanmalik1709');
    return response.json();
}