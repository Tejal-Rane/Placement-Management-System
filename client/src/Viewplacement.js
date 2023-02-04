import React from 'react';
import {useState,useEffect} from 'react';

const Viewplacement=()=>{
    const [post,setPost]=useState();
    useEffect(()=>{
        axios.get(`/get-placement/${id}`).then((response) => {
            setPost(response.data);
            console.log(post);
          }                          ).catch(()=>{
              alert("error!");
          });
        },[id]); 
        return(
            <>
                <h1>COMPANY NAME:{post.companyName}</h1>
                <p>
                DRIVE DATE:{post.driveDate}
                DESCRIPTION:{post.description}
                </p>
            </>
        )
}
export default Viewplacement;