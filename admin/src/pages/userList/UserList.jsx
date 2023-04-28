import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userListRows } from '../../dummyData';
import { Link } from 'react-router-dom';

function UserList() {
  const [data, setData] = useState(userListRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 160,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 180 },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
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
      />
    </div>
  );
}

export default UserList;
