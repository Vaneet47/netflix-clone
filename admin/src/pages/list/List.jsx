import React from 'react';
import './list.css';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';

function List() {
  const location = useLocation();
  const list = location.list;
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>List</h1>
        <Link to='/newList'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        {/* <div className='productTopLeft'>
          <Chart title='Sales Performance' data={productData} dataKey='Sales' />
        </div> */}
        <div className='productTopRight'>
          <div className='productInfoTop'>
            {/* <img src={list.img} alt='' className='productInfoImg' /> */}
            <span className='productName'>{list.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>{list._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>genre:</span>
              <span className='productInfoValue'>{list.genre}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>type:</span>
              <span className='productInfoValue'>{list.type}</span>
            </div>
            {/* <div className='productInfoItem'>
              <span className='productInfoKey'>limit:</span>
              <span className='productInfoValue'>{list.limit}</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>List Title</label>
            <input type='text' placeholder={list.title} />
            {/* <label>Year</label>
            <input type='text' placeholder={list.year} /> */}
            <label>Genre</label>
            <input type='text' placeholder={list.genre} />
            <label>Type</label>
            <input type='text' placeholder={list.type} />
            {/* <label>Trailer</label>
            <input type='file' placeholder={list.trailer} />
            <label>Video</label>
            <input type='file' placeholder={list.video} /> */}
            {/* <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select> */}
          </div>
          <div className='productFormRight'>
            {/* <div className='productUpload'>
              <img src={list.img} alt='' className='productUploadImg' />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div> */}
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default List;
