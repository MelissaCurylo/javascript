import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
    }, [])

    return (
        <div>EditPage</div>
    )
}

export default EditPage