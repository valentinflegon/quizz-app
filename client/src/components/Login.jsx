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

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (formData) => {
    axios.post('http://localhost:3001/api/login', formData)
      .then((response) => {
        const { data } = response;
        setConnexionData(data);
        console.log(data, 'from retour api');
        if(data.success){
          console.log(data, "on navigate lol");
          navigate("/play", {replace: true, state: {username: formData.username}});
        }
      })
  }
  console.log(errors);
  return (
    <div className='log-in-comp'>
      <span>{connexionData && !connexionData.success ? connexionData.message : ""}</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type="texte" {...register('username', { required: true })}></input>
          <span>{errors.username?.message}</span>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="password" {...register('password', { required: true })}></input>
          <span>{errors.password?.message}</span>
        </div>
        <button>Connection</button>
      </form>
    </div>
  );
};

export default Login;