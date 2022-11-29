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
            
            <div className='add_job_container'>
                <form onSubmit={handleSubmit}>

                    <div className='row'>
                        <div className='col-15'>
                            <label className="col-15">Company: </label>
                        </div>
                        <div className='col-85'>
                            <input type="text" id="company" name="company" placeholder="Company" value={company}  onChange={(e)=>setCompany(e.target.value)}></input>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-15'>
                            <label className="col-20">Position Title: </label>
                        </div>
                        <div className='col-85'>
                            <input type="text" id="title" name="title" placeholder="Enter Title"  value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-15'>
                            <label className="col-20">Salary: </label>
                        </div>
                        <div className='col-85'>
                            <input type="number" id="salary" name="salary" placeholder="Salary" value={salary}  onchange={(e)=>setSalary(e.target.value)}></input>               
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-15'>
                            <label className="col-20">Remote?</label> 
                        </div>
                        <div className='col-85'>
                            <input type="checkbox" id="isRemote" name="isRemote" checked={isRemote} onChange={(e)=>setIsRemote(e.target.checked)}></input>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-15'>
                            <label className="col-80">Additional Notes: </label>                            
                        </div>
                        <div className='col-85'>
                            <input type="textarea" className="textarea" name="textarea" placeholder="Any additional notes?" value={notes}  onChange={(e)=>setNotes(e.target.value)}></input>
                        </div>
                    </div>

                    <div className='row'>
                        <input type="submit" value="Add Job"></input>
                    </div>

                    
                    


                </form>
            </div>
    )
}

export default CreatePage