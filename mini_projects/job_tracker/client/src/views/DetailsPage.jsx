import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

// 1. Show one job from database when component loaded by getting id from params.
    // 1a. Need axios to access database.
    // 1b. Function needed when component is loaded: useEffect.
    // 1c. Changing variables needs: useState.
    // 1d. Get id from params needs: useParams.


const DetailsPage = () => {
    const [job, setJob] = useState()

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(res=>setJob(res.data))
            .catch(err=>console.log(err))
    }, [id])


    // 1. Delete from database
    // 2. Redirect
    const handleDelete = () =>{
        axios.delete(`http://localhost:8000/api/jobs/${id}`)
            .then(res=> navigate("/"))
            .catch(err=>console.log(err))

    }


    return (
        <div>
            <Link to="/">Home</Link>
            {
                job?
                    <div>
                        <h5> { job.title } </h5>
                        <h5> { job.company } </h5>
                        <h5> { job.salary } </h5>
                        <h5> { job.isRemote && "Remote Job" } </h5>
                        <h5> { job.notes } </h5>
                        <button className="delete_btn" onClick={handleDelete }>Delete</button>
                    </div>:
                <h5> Wrong id </h5>
            }


            
        </div>
    )
}

export default DetailsPage