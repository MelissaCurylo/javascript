import './../create_page.css';
import React, {useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"



// 1. Need a from for input.
// 2. After submit the data needs to post to database
// 3. Input on form needs useState to track changes.
// 4. Need axios in order to send data into database.


const CreatePage = () => {
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState(100000)
    const [isRemote, setIsRemote] = useState(true)
    const [notes, setNotes] = useState("")

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/jobs", {title, company, salary, isRemote, notes})
            .then(res=> navigate("/"))
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
        <div className="add_job_form">
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
                    <button type="submit" className="add-job-btn">Add Job</button> 
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

export default CreatePage