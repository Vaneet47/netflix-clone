import React, { useContext, useEffect, useState } from 'react';
import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { productListRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { MoviesContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

function ProductList() {
  const { movies, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 160,
      renderCell: (params) => {
        return (
          <div className='productListProduct'>
            <img className='productListImg' src={params.row.img} alt='' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'genre', headerName: 'Genre', width: 150 },
    { field: 'year', headerName: 'Year', width: 150 },
    { field: 'limit', headerName: 'Limit', width: 150 },
    { field: 'isSeries', headerName: 'IsSeries', width: 150 },
    // { field: 'genre', headerName: 'Genre', width: 180 },
    // {
    //   field: 'status',
    //   headerName: 'Status',
    //   width: 160,
    // },
    // {
    //   field: 'price',
    //   headerName: 'Price',
    //   width: 180,
    // },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: '/product/' + params.row._id, movie: params.row }}
            >
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='productListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='productList'>
      <DataGrid
        rows={movies}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
}

export default ProductList;
