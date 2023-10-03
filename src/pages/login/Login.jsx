import './login.css'
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { NavLink } from 'react-router-dom';
export default function Login() {

     
 const schema = yup.object().shape({
    name : yup.string().min(7).max(12).required(),
    password : yup.string().min().max(12).required(),
    confirmpassword : yup.string().oneOf( [yup.ref("password")]).required()
   })
  

 const {register,handleSubmit,formState:{errors}}=useForm({resolver : yupResolver(schema)})


 const onFormSubmit=(data)=>{
    console.log("halaaaa")
   console.log(data);
  }

  return (
<div className="container w-100 form-container m-3 d-flex justify-content-center align-items-center">
<Form className='w-50 border p-5 shadow'  onSubmit={handleSubmit(onFormSubmit)}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>UserName</Form.Label>
      <Form.Control type="text" placeholder="" {...register("name")} />
      <p className='text-danger'>{errors.name?.message}</p>
       
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="between 8-12 character"  {...register("password")}/>
      <p className='text-danger'>{errors.password?.message}</p>
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="between 8-12 character"  {...register("confirmpassword")}/>
      <p className='text-danger'>{errors.confirmpassword?.message}</p>

      <NavLink  className='text-decoration-none m-3 text-info'>remember password?</NavLink>
      <div className='text-center mt-3'><Form.Control type='submit' className='btn btn-danger w-25 ' placeholder="name@example.com"  /></div>
    </Form.Group>
    </Form>
</div>
  )
}
