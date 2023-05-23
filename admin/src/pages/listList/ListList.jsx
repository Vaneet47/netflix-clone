import React, { useContext, useEffect, useState } from 'react';
import './listList.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ListContext } from '../../context/listContext/ListContext';
import { deleteList, getLists } from '../../context/listContext/apiCalls';
// import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'title', headerName: 'Title', width: 250 },
    { field: 'genre', headerName: 'Genre', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
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
        rows={lists}
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

export default ListList;
