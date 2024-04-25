import React, { useEffect, useReducer } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Blog from './Blog';
import { api } from '../api/api';
import { reducer,initialState } from '../reducer';
import { ActionTypes } from '../reducer/ActionTypes';

function List() {
    const [state,dispatch] = useReducer(reducer,initialState)

    const fetchapi = async () => {
        const res =await api.get('/blogs')
        dispatch({type : ActionTypes.FetchBlogs,payload : res.data})
    }
    useEffect(() => {
        fetchapi()
    }, [])
    
  return (
    <Container style={{marginTop:50}} fluid>
        <Row>
           {
            state.blogs.map((blog)=>(
                <Col key={blog.id} className='d-flex my-3 justify-content-center' md="6" xs="12" lg="3">
                    <Blog blog={blog} ></Blog> 
                </Col>
            ))
           }
        </Row>
    </Container>
  )
}

export default List
