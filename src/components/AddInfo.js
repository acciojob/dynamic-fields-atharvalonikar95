import React from 'react'

const AddInfo = ({item,removeId,handleOnChange}) => {
  return (
    <div>
        <input name='name' placeholder='name' value={item.name} onChange={(e)=>handleOnChange(item.id,'name',e.target.value)}  ></input>
        <input name='age' placeholder='age' value={item.age} onChange={(e)=>handleOnChange(item.id,'age',e.target.value)} ></input>
        <button onClick={()=>removeId(item.id)}>remove</button>
    </div>
  )
}

export default AddInfo
