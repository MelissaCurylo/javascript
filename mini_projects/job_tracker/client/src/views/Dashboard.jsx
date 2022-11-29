import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';



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
            <Link to="jobs/new">Add Job</Link>
            <table id="jobs_listed">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>Remote?</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((eachJob, i) => {
                            return(
                                <tr key={i}>
                                    <td> <Link to={`/jobs/${eachJob._id}`}> {eachJob.title} </Link></td>
                                    <td>{eachJob.company}</td>
                                    <td>${eachJob.salary}</td>
                                    <td>{eachJob.isRemote?"Yes":"No"}</td>
                                    <td>{eachJob.notes}</td>
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