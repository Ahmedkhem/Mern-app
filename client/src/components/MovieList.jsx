import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
const MovieList = () => {
    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/movie")
            .then(res => {
                console.log(res.data)
                setAllMovies(res.data.allMovies)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


  return (
    <div className='box'>
        <div className='top'>
            <h3>Movie List</h3>
            <Link to={'/movies/new'}><button className='btn btn-primary'>Add a New Movie</button></Link>
        </div>
        <table style={{border:"solid black 2px"}} className="table table-striped">
            <thead style={{backgroundColor:"#CDCCCD"}}>
              <tr>
                <th scope="col">Movie Title</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allMovies.map((movie) => {
                return (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>
                      <Link to={`/movies/${movie._id}`}>
                        <button style={{color:"black",border:"2px black solid", borderRadius:"8px"}} className="btn btn-success">Read Reviews</button>
                      </Link>
                      &nbsp;
                      <Link to={`/movies/${movie._id}/review`}>
                        <button style={{border:"2px black solid",borderRadius:"8px"}} className="btn btn-success">Write a Review</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
    </div>
  )
}

export default MovieList