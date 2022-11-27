import React, {useState, useEffect} from 'react'
import axios from "axios"


// 1. Show all the jobs from database when component loaded.
    // 1a. Need axios to access database.
    // 1b. Function needed when component is loaded: useEffect.
    // 1c. Changing variables needs: useState.

const Dashboard = () => {
    const [jobs, setJobs] = useState([]) // variable creation // empty array for ease of mapping later.

    useEffect(() => {
        axios.get("http://localhost:8000/api/jobs")
            // .then(res => console.log(res.data)) // used to test if data being returned is an array
            .then(res => setJobs(res.data))
            .catch( err=>setJobs([]))
    }, [])

    return (
        <div>
            <table id="jobs_listed">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>Remote?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((eachJob, i) => {
                            return(
                                <tr key={i}>
                                    <td>{eachJob.title}</td>
                                    <td>{eachJob.company}</td>
                                    <td>${eachJob.salary}</td>
                                    <td>{eachJob.isRemote?"Yes":"No"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default Dashboard