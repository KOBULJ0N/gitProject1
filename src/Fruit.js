import react from 'react';
import './fruit.css';
import apple from './img/apple.jpg';

function Fruit(props) {
  return (
    <div className='main'>
      <div className='rasm'>
        <img src={'data'} alt='' />
      </div>
      <div className='details'>
        <div className='top'>
          <h1>{props.data.title}</h1>
          <button className='button'>Add</button>
        </div>
        <div className='bottom'>
          <div className='data'>
            <p className='title'>Pack Size</p>
            <p className='value'>{props.data.uom}</p>
          </div>
          <div className='data'>
            <p className='title'>Text-size</p>
            <p className='value'>{props.data.size}</p>
          </div>
          <div className='data'>
            <p className='title'>Per Unit</p>
            <p className='value'>{props.data.unit}</p>
          </div>
          <div className='data'>
            <p className='title'>Total</p>
            <p className='value'>{props.data.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Fruit;
