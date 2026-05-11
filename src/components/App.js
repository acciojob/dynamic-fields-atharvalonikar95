
import './App.css';
import { useEffect, useRef, useState } from 'react';
import AddInfo from './AddInfo';

function App() {
  const [info,setInfos]=useState([{
      id: Date.now(),
      name: '',
      age: ''
    }])
  const addInfo=()=>{
    setInfos([...info,    {
      id: Date.now(),
      name: '',
      age: ''
    }])
  }
  const removeId=(id)=>{
    setInfos(info.filter(item=>item.id!==id))
  }
  const handleSubmit=()=>{
    console.log(info)
  }

  const handleChange = (id, field, value) => {

    setInfos(
      info.map(item => {

        if (item.id === id) {
          return {
            ...item,
            [field]: value
          };
        }

        return item;
      })
    );
  };

  return (
    <div>
      {
        info.map((item)=>{
          return(
            <AddInfo key={item.id} removeId={removeId} item={item} handleOnChange={handleChange} />
          )
        })
      }
      <button onClick={addInfo} >add Info</button>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
