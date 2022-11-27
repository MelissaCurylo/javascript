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

    const handleSubmit =(e) =>{

    }

    return (
        <div>
            <form onSubmit={handleSubmit}  className="add_job_form">
                <div>
                    <label htmlFor="title"> Position Title </label>
                    <input type="text" id="title" name="title" placeholder="Enter Title"  value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>

                
                
            </form>


        </div>
    )
}

export default CreatePage