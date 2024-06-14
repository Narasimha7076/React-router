import React,{useEffect, useState} from "react";
import { useLoaderData} from "react-router-dom";



function Github(){
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/Narasimha7076')
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    // },[])
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data?.followers}
            <img  src={data?.avatar_url} alt="Github profile pic" width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async ({ params }) => {
    const username = params.username || "Narasimha7076";
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json();
};
