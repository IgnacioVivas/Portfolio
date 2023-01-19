import { useState } from 'react';
import './form.scss';

function Form() {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    texto: '',
  });
  const [errors, setErrors] = useState({});

  const validate = (inputValue) => {
    let errors = {};
    if (!inputValue.name) errors.name = 'Este campo no puede estar vacío';
    if (!inputValue.email) errors.email = 'Este campo no puede estar vacío';
    if (!inputValue.texto) errors.texto = 'Este campo no puede estar vacío';
    return errors;
  };

  const resetForm = (inputValue) => {
    setInputValue({
      ...inputValue,
      name: '',
      temperament: '',
      weightImperial: '',
      weightMetric: '',
      heightImperial: '',
      heightMetric: '',
      lifeExpectancy: '',
      origin: '',
    });
  };

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValues = {
      ...inputValue,
      [e.target.name]: e.target.value,
    };
    setErrors(validate(formValues));

    if (Object.keys(validate(formValues)).length === 0) {
      resetForm();
    }
  };
  return (
    <form id='container-form' onSubmit={handleSubmit}>
      <div>
        <input
          className={errors.name && 'danger'}
          type='text'
          placeholder='Nombre completo'
          onChange={handleChange}
          name='name'
          value={inputValue.name}
        />
        {errors.name && <p className='danger'>{errors.name}</p>}
      </div>
      <div>
        <input
          className={errors.email && 'danger'}
          type='text'
          placeholder='Dirección de correo electrónico'
          onChange={handleChange}
          name='email'
          value={inputValue.email}
        />
        {errors.email && <p className='danger'>{errors.email}</p>}
      </div>
      <div>
        <textarea
          className={errors.texto && 'danger'}
          id=''
          cols='30'
          rows='10'
          placeholder='Escriba su mensaje aquí...'
          onChange={handleChange}
          name='texto'
          value={inputValue.texto}
        ></textarea>
        {errors.texto && <p className='danger'>{errors.texto}</p>}
      </div>
      <button>Enviar mensaje</button>
    </form>
  );
}

export default Form;
