import React, { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router'
import { api } from '../api/api';
import Card from 'react-bootstrap/Card';
import { initialState, reducer } from '../reducer';
import { ActionTypes } from '../reducer/ActionTypes';


function Detail() {
     const {blogid}=useParams();
     const naviagate=useNavigate();
     const [state, dispatch] = useReducer(reducer,initialState)
     const selectedblog = async()=>{
        const res =await api.get(`/blogs/${blogid}`)
        dispatch({type : ActionTypes.SelectedBlog,payload : res.data})
     }
     useEffect(() => {
        selectedblog()
     }, [blogid])
     
  return (
    <div className='d-flex justify-content-center align-content-center align-items-center' style={{height:"80vh"}}>
      <Card style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Title>{state.blog.title}</Card.Title>
                <Card.Text>
                   {state.blog.description}
                </Card.Text>
                <button className='btn btn-primary' onClick={()=>naviagate('/')}  variant="primary">Back</button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Detail
