import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css'

function Forms() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='main'>
      <form onSubmit={handleSubmit(onSubmit)} className='registration-form'>
        <h2>Registration form</h2>
        
        <input
          {...register('firstname', {
            required: 'This field is required',
            minLength: { value: 4, message: 'Minimum 4 characters are required' },
            maxLength: { value: 20, message: 'Maximum length is 20 characters' },
          })}
          placeholder='Firstname'
        />
        <br />
        {errors.firstname && <span className='error-message'>{errors.firstname.message}</span>}

        <input
          {...register('lastname', {
            required: 'This field is required',
            minLength: { value: 4, message: 'Minimum 4 characters are required' },
            maxLength: { value: 20, message: 'Maximum length is 20 characters' },
          })}
          placeholder='Lastname'
        />
        <br />
        {errors.lastname && <span className='error-message'>{errors.lastname.message}</span>}

        <input
          {...register('email', {
            required: 'This field is required',
            minLength: { value: 4, message: 'Minimum 4 characters are required' },
            maxLength: { value: 20, message: 'Maximum length is 20 characters' },
          })}
          placeholder='Email'
        />
        <br />
        {errors.email && <span className='error-message'>{errors.email.message}</span>}

        <input
          {...register('password', {
            required: 'This field is required',
            minLength: { value: 4, message: 'Minimum 4 characters are required' },
            maxLength: { value: 20, message: 'Maximum length is 20 characters' },
          })}
          placeholder='Password'
        />
        <br />
        {errors.password && <span className='error-message'>{errors.password.message}</span>}

        <input type='submit' value="Registration" className='submit-button' />
      </form>
    </div>
  );
}

export default Forms;
