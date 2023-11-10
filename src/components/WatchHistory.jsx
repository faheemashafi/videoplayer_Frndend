import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getALLHistory } from '../services/allAPI'
import Button from 'react-bootstrap/Button';


function Watchhistory() {

  const [history, setHistory] = useState([])
  const watchAllHistory = async()=>{
  
   const {data} = await getALLHistory()
   /* console.log(data); */
   setHistory(data)

  }
console.log(history);

//function to remove a particular history
const removeHistory=async(id)=>{
  await deleteHistory(id)
  watchAllHistory()
}

  useEffect(()=>{
    watchAllHistory()
  },[])

  return (
    <>
    <div className='container mt-5-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontsize:'20px'}}><i class="fa-solid fa-arrow-left fa-beat"></i>Back To Home</Link>
    </div>
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {history.length>0?
        history.map((item, index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
          <td>{item.timestamp}</td>
          <td>  <Button onClick={()=>removeHistory(item?.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button></td>
        </tr>))
        :
        <p>Nothing to Display</p>
           }
      </tbody>
    </table>
    </>
  )
}

export default Watchhistory