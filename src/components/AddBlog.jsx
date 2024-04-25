import React from 'react'
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';
import { useForm, SubmitHandler } from "react-hook-form"
import { api } from '../api/api';
import { useNavigate } from 'react-router';


function AddBlog() {
  const navigate=useNavigate()
  const {register,handleSubmit,watch,formState: { errors },} = useForm()
  const onSubmit = async (data) => {
    data  = {id:uuidv4(),...data}
    const res = await api.post('/blogs',data)
    navigate('/')
  }

  return (
     <Form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)} >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control {...register("title",{required:true})} type="text" placeholder="Enter title..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3}  {...register("description",{required:true})} />
      </Form.Group>
      <button type='submit' className='btn btn-primary'>Add Blog</button>
    </Form>
  )
}

export default AddBlog
