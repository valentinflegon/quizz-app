import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
});
const Login = () => {
  let navigate = useNavigate();
  const [connexionData, setConnexionData] = useState(null);
  const [isLogged, setisLogged] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (formData) => {
    axios.post('http://localhost:3002/api/login', formData)
      .then((response) => {
        const { data } = response;
        setConnexionData(data);
        console.log(data, 'from retour api');
        if (data.success) {
          console.log(data, "on navigate lol");
          navigate("/play", { replace: true, state: { username: formData.username } });
          setisLogged(true);
        }
        setisLogged(false);
      });
  }
  console.log(errors);
  return (
    <div className='login-comp center'>
      <div className='inner-login form-card'>
        {connexionData && !connexionData.success ? <span className='error'>{connexionData.message}</span> : ""}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='username center'>
            {<label htmlFor='username'>Username</label>}
            <input type="texte" {...register('username', { required: true })} placeholder='Enter username'></input>
            <span>{errors.username?.message}</span>
          </div>
          <div className='password center'>
            {<label htmlFor='password'>Password</label>}
            <input type="password" {...register('password', { required: true })} placeholder='Enter password'></input>
            <span>{errors.password?.message}</span>
          </div>
          <button type="submit" className='btn btn-success'>Connection</button>
        </form>
      </div>
    </div>
  );
};

export default Login;