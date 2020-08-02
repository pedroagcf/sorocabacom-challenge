import React from 'react';
import { useForm } from 'react-hook-form';

import './Form.scss';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log('oi');

    console.log(data);
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className='form__title'>formulário</h1>
      <p className='form-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className='form__container'>
        <input
          className='form__username-input'
          name='nome'
          placeholder='Nome'
          ref={register({ required: true, minLength: 2 })}
        />
        {errors.nome && errors.nome.type === 'required' && (
          <p>Preencha o campo</p>
        )}
        {errors.nome && errors.nome.type === 'minLength' && (
          <p>Escreva pelo menos 2 caracteres</p>
        )}

        <input
          className='form__email-input'
          name='email'
          placeholder='Email'
          ref={register({
            required: 'Preencha o campo',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Endereço de email invalido',
            },
          })}
        />
        {errors.email && errors.email.message && (
          <p className='error'>{errors.email.message}</p>
        )}
        <textarea
          className='form__message-field'
          placeholder='Mensagem'
          name='message'
          ref={register({ required: true, minLength: 15, maxLength: 60 })}
        />
        {errors.message && errors.message.type === 'minLength' && (
          <p>Escreva pelo menos 15 caracteres</p>
        )}
        {errors.message && errors.message.type === 'maxLength' && (
          <p>Maximo de 60 caracteres</p>
        )}
        <button className='form__send-button' type='submit'>
          enviar
        </button>
      </div>
    </form>
  );
};

export default Form;