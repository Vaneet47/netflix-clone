import React, { useState } from 'react';
import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { productListRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function ProductList() {
  const [data, setData] = useState(productListRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Product',
      width: 160,
      renderCell: (params) => {
        return (
          <div className='productListProduct'>
            <img className='productListImg' src={params.row.img} alt='' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 180 },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='productListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='productList'>
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

export default ProductList;
