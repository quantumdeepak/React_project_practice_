import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    let data = useLoaderData()
    // let [data, setData] = useState([])
    // // api call
    // //  we can use use effect to make api call wnenever the component is mounted or page is loaded
    // useEffect(( )=> {
    // fetch("https://api.github.com/users/quantumdeepak")
    // .then( response => response.json()) // we will recive the response in the string format will convert it into json format
    // .then( data => {
    //     // console.log(data);
    //     setData(data);
    // })
    // } , [])
    //  Dependancy array is empty
    return (
        <>
        <div className= "text-center m-4 bg-gray-600 text-white p-4 text-3xl"> Github Repositories : {data.public_repos}
        <img  src={data.avatar_url} alt="Git Picture" width={300} />
        </ div>
        </>
    )
}

export default Github;


export let github_info = async( ) => {
    let response = await fetch("https://api.github.com/users/quantumdeepak")
    return response.json()
}