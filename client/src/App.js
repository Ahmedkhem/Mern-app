import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import NewMovie from './components/NewMovie';
import Review from './components/Review';
import ShowReviews from './components/ShowReviews';


function App() {
  
  return (
    <div className='App'>
      <header>
            <h1>FilmFeel</h1>
        </header>
      <Routes>
        <Route path='/' element={<MovieList/>}/>
        <Route path='/movies/new' element={<NewMovie/>}/>
        <Route path='/movies/:id/review' element={<Review/>}/>
        <Route path='/movies/:id' element={<ShowReviews/>}/>

      </Routes>
    </div>
  );
}

export default App;
