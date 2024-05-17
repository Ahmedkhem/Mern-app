import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowReviews = () => {
    const [oneMovie, setOneMovie] = useState({})
    const {id} = useParams()

    const nav = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/movie/${id}`)
            .then((res)=> {
                console.log(res.data)
                setOneMovie(res.data.oneMovie)
            })
            .catch(err => console.log(err))
    },[id])
    console.log(oneMovie.reviews)

    const justDelete = (id) => {
        axios.delete(`http://localhost:5000/api/movie/${id}`)
        .then(res => nav('/movies'))
        .catch(err => console.log(err))
    }
    return (
        <div className='box'>
            <table style={{border:"solid black 2px"}} className="table table-striped">
            <thead style={{backgroundColor:"#CDCCCD"}}>
              <tr>
                <th scope="col">Reviewer</th>
                <th scope="col">Rating</th>
                <th scope="col">Review</th>
              </tr>
            </thead>
            <tbody>
            {oneMovie.reviews && oneMovie.reviews.map((rev)=>{
                return(
                    <tr key={rev._id}>
                    <td>{rev.name}</td>
                    <td>{rev.rating}</td>
                    <td>{rev.review}</td>
                  </tr>
                )
            })}
                
            </tbody>
          </table>
          <button onClick={()=>justDelete(oneMovie._id)}>Delete</button>
        </div>
    )
}

export default ShowReviews