import './edit_page.css'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


// 1. Show one job from database when component loaded by getting id from params.
    // 1a. Need axios to access database.
    // 1b. Function needed when component is loaded: useEffect.
    // 1c. Changing variables needs: useState.
    // 1d. Get id from params needs: useParams.

// 2. Need a from for input.
    // 2a. After submit the data needs to post to database
    // 2b. Input on form needs useState to track changes.
    // 2c. Need axios in order to send data into database.

const EditPage = () => {

    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState(40000)
    const [isRemote, setIsRemote] = useState(true)
    const [notes, setNotes] = useState("")

    const [errors, setErrors] = useState([])

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(res=>{
                const job = res.data
                setTitle(job.title)
                setCompany(job.company)
                setSalary(job.salary)
                setIsRemote(job.isRemote)
                setNotes(job.notes)
            })
            .catch(err=>console.log(err))
    }, [id])



    const handleSubmit=(e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/jobs/${id}`, {title, company, salary, isRemote, notes})
            .then(res=>navigate(`/jobs/${id}`))
            .catch(err=> {
                const errResponse = err.response.data.errors
                const tempErrArr = []
                for(const eachKey in errResponse){
                    tempErrArr.push(errResponse[eachKey].message)
                } 
                setErrors(tempErrArr)
                // console.log(tempErrArr)
                // console.log(errResponse)
                // console.log(err.response.data)
            })

    }

    return (
        <div className="update_job_form">
        <form onSubmit={handleSubmit}  >
            
            <div>
                <label className="col-20">Position Title: </label>
                <div className="col-80">
                    <input type="text" id="title" name="title" placeholder="Enter Title"  value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
            </div>

            <div>
                <label className="col-20">Company: </label>
                <div className="col-80">
                    <input type="text" id="company" name="company" placeholder="Company" value={company}  onChange={(e)=>setCompany(e.target.value)}></input>
                </div>
            </div>

            <div>
                <label className="col-20">Salary: </label>
                <div className="col-80">
                    <input type="number" id="salary" name="salary" placeholder="Salary" value={salary}  onChange={(e)=>setSalary(e.target.value)}></input>               
                </div>
            </div> 

            <div>
                <label className="col-20">Remote?</label> 
                <div className="col-80">
                    <input type="checkbox" id="isRemote" name="isRemote" checked={isRemote}  onChange={(e)=>setIsRemote(e.target.checked)}></input>
                </div>  
            </div>

            <div>
                <label className="col-80" >Additional Notes: </label>
                <div className="col-80">
                    <input type="textarea" id="textarea" name="textarea" placeholder="Any additional notes?" value={notes}  onChange={(e)=>setNotes(e.target.value)}></input>
                </div>
            </div>

            <div className="col-20" id="add_job_button">
                <button type="submit" className="add-job-btn">Update Job</button> 
            </div>

            <div className="col-20" id="cancel_btn_placement">
                <button type="button" className="cancel_btn" onClick={()=>navigate("/")} >Cancel</button> 
            </div>
        </form>
        {
            errors.map((err, i) => {
                return(
                    <p style={{color: "red"}}> {err} </p>
                )
            })
        }


    </div>
    )
}

export default EditPage