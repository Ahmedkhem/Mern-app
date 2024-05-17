import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Review = () => {
    // const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [rating, setRating] = useState()
    const [review, setReview] = useState('')
    const [errors, setErrors] = useState([])
    const [oneMovie, setOneMovie] = useState({})
    const nav = useNavigate()

    const {id} = useParams()
    

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const objToBeSent = {
            name:name,
            rating: rating,
            review: review
        }
        axios.put(`http://localhost:5000/api/movie/${id}`, objToBeSent)
        .then(res => {
            nav(`/movies/${id}`)
        })
        .catch(err => {
            console.log(err)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // // Set Errors
            setErrors(errorArr);
        })
        }
    return (
        <div className='box'>
            <h3>Add a review for {oneMovie.title}</h3>
            <p style={{ color: "red" }}>{errors.map((err, index) => <p key={index}>{err}</p>)}</p>
            <form onSubmit={onSubmitHandler}>
                Your Name <input type="text" name='name'  onChange={(e)=>setName(e.target.value)}/> <br/>
                Rating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" name='rating' onChange={(e)=>setRating(e.target.value)}/> <br/>
                Your Review <textarea name='review' onChange={(e)=>setReview(e.target.value)}/>
                <div>
                    <button>Submit</button>
                    <button onClick={()=>nav(`/movies/${id}`)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Review