import './App.css';
import Fruit from './Fruit';
import { data } from './data'



function App() {
  return <div className='Container'>
    {
      data.map((value, index) => {
        return (
          <div>
            <Fruit data={value}/>
       </div>   
        )
      })
    }
  </div>;
}

export default App;
