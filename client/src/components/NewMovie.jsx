import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewMovie = () => {
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [rating, setRating] = useState()
  const [review, setReview] = useState('')
  const [errors, setErrors] = useState([])

  const nav = useNavigate()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const objToBeSent = {
      title,
      name,
      rating,
      review
  }
  axios.post("http://localhost:5000/api/movie", objToBeSent)
    .then(res => {
      nav('/movies')
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
        <h3>Submit a Movie and a Review</h3>
        <p style={{ color: "red" }}>{errors.map((err, index) => <p key={index}>{err}</p>)}</p>
        <form onSubmit={onSubmitHandler}>
            Movie Title: &nbsp;&nbsp;<input type="text" onChange={(e)=>setTitle(e.target.value)}/> <br/><br/>
            Your Name: &nbsp;&nbsp;<input type="text" onChange={(e)=>setName(e.target.value)}/> <br/><br/>
            Rating: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="number" onChange={(e)=>setRating(e.target.value)}/> <br/><br/>
            Your Review: <textarea onChange={(e)=>setReview(e.target.value)}/>
            <div>
              <button>Submit</button>
              <button onClick={()=>nav('/movies')}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default NewMovie