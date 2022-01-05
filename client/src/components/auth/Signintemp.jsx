import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required()
});

const Signin = () => {
  let location = useLocation();
  console.log(location.state, 'les props avec uselocation');
  const [success, setSuccess] = useState(null);
  // const [data, setData] = useState();

  //TODO validation matching password et message d'erreur quand pas valid
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });
  let message = {};
  const onSubmit = async (data) => {
    axios.post('http://localhost:3002/api/create-user', data)
      .then((response) => {
        console.log(response);
        message = response.data.message;
        console.log(message.username);
        if (message.username) {
          console.log("oui from test username set success msg");
          setSuccess(message);
          console.log(success, "success after setsuccess");
        }
        else if (message.email) {
          setSuccess(message);
        }
        else {
          setSuccess(null);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className='signin-comp center'>
      <div className='inner-signin form-card'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='username center'>
            <label htmlFor='username'>Nom d'utilisateur</label>
            <input className='form-control' type='texte' {...register('username', { required: true })}></input>
            {errors.username && <span className='error'>errors.username?.message</span>}
            <span className='error'>{success && success.username ? success.username : ""}</span>
          </div>
          <div className='email center'>
            <label htmlFor='email'>Email</label>
            <input className='form-control' type="texte" {...register('email', { required: true })}></input>
            <span className='error'>{errors.email?.message}</span>
            <span className='error'>{success && success.email ? success.email : ""}</span>
          </div>
          <div className='password center'>
            <label htmlFor='password'>Mot de passe</label>
            <input className='form-control' type="password" {...register('password', { required: true })}></input>
            <span className='error'>{errors.password?.message}</span>
          </div>
          <div className='confirmPassword center'>
            <label htmlFor='confirmPassword'>Confirmer Mot de passe</label>
            <input className='form-control' type="password" {...register('confirmPassword', { required: true })}></input>
            <span className='error'>{errors.confirmPassword && "Passwords should match"}</span>
          </div>
          <button className='btn btn-dark'>S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;