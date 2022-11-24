import './form.scss';

function Form() {
  return (
    <form id='container-form'>
      <div>
        <input type='text' placeholder='Tu nombre completo aquí' />
      </div>
      <div>
        <input type='text' placeholder='Su dirección de correo electrónico' />
      </div>
      <div>
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          placeholder='Escriba su mensaje aquí...'
        ></textarea>
      </div>
      <button>Enviar mensaje</button>
    </form>
  );
}

export default Form;
