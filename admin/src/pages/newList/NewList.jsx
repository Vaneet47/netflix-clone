import React, { useContext, useEffect, useState } from 'react';
import './newList.css';
import storage from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { createMovie } from '../../context/movieContext/apiCalls';
import { MoviesContext } from '../../context/movieContext/MovieContext';
import { ListContext } from '../../context/listContext/ListContext';
import { getMovies } from '../../context/movieContext/apiCalls';
import { createList } from '../../context/listContext/apiCalls';
import { useHistory } from 'react-router-dom';

function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MoviesContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let values = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push('/lists');
  };

  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New List</h1>
      <form className='addProductForm'>
        <div className='formLeft'>
          <div className='addProductItem'>
            <label>Title</label>
            <input
              type='text'
              placeholder='popular movies'
              name='title'
              onChange={handleChange}
            />
          </div>
          <div className='addProductItem'>
            <label>Genre</label>
            <input
              type='text'
              placeholder='action'
              name='genre'
              onChange={handleChange}
            />
          </div>
          <div className='addProductItem'>
            <label>Type</label>
            <select name='type' id='' onChange={handleChange}>
              <option>Type</option>
              <option value='movie'>Movie</option>
              <option value='series'>Series</option>
            </select>
          </div>
        </div>

        <div className='formRight'>
          <div className='addProductItem'>
            <label>Content</label>
            <select
              multiple
              name='content'
              id=''
              onChange={handleSelect}
              style={{ height: '300px' }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className='addProductButton' onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default NewList;
