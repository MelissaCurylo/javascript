import React, {useState} from 'react'
import axios from "axios"
import './../create_page.css';


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

    const handleSubmit =(e) =>{

    }

    return (
        <div className="add_job_form">
            <form onSubmit={handleSubmit}  >
                <div>
                    <label className="col-20">Company: </label>
                    <div className="col-80">
                        <input type="text" id="company" name="company" placeholder="Company" value={company}  onChange={(e)=>setCompany(e.target.value)}></input>
                    </div>
                </div>

                <div>
                    <label className="col-20">Position Title: </label>
                    <div className="col-80">
                        <input type="text" id="title" name="title" placeholder="Enter Title"  value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                    </div>
                </div>

                <div>
                    <label className="col-20">Salary: </label>
                    <div className="col-80">
                        <input type="number" id="salary" name="salary" placeholder="Salary" value={salary}  onchange={(e)=>setSalary(e.target.value)}></input>               
                    </div>
                </div> 

                <div>
                    <div className="col-80">
                        <input type="checkbox" id="isRemote" name="isRemote" checked={isRemote} onChange={(e)=>setIsRemote(e.target.checked)}></input>
                    </div>
                    <label className="col-20">Remote?</label>
                </div>

                <div>
                    <label htmlFor="col-20">Additional Notes: </label>
                    <div className="col-80">
                        <input type="textarea" id="textarea" name="textarea" placeholder="Any additional notes?" value={notes} ></input>
                    </div>
                </div>
                <div>
                    <button type="submit" id="create_button">Add Job</button> 
                </div>



                

                
            </form>


        </div>
    )
}

export default CreatePage