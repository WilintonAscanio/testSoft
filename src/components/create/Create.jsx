import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Create = () => {
  const { formState: { errors }, handleSubmit, register, reset } = useForm()
  const navigate = useNavigate()

  const saveUser = (data) => {
    console.log(data);
    Swal.fire({
      icon : 'success',
      text : 'Usuario agregado correctamente'
    })
    reset()

  }
  return (
    <div className='create'>
      <header>
        <h1>Nuevo cliente</h1>
      </header>
      <form onSubmit={handleSubmit(saveUser)} className='create__form'>
        <section className='create__form__sec1'>

          <label>
            Nombre completo
            <input type="text" placeholder='Nombre completo' {...register("name", {required : 'El nombre es requerido'})} />
            {errors.name ? <span>{errors.name.message}</span> : <></>}
          </label>

          <label>
            Número de documento
            <input type="text" placeholder='Número de documento' {...register('id', {required : 'Documento requerido'})} />
            {errors.id ? <span>{errors.id.message}</span> : <></>}
          </label>
        </section>
        <section className='create__form__sec2'>

          <label>
            Fecha de nacimiento
            <input type="text" placeholder='yyyy/mm/dd' {...register('date', {
              required : 'Fecha requerida'
            })} />
            {errors.date ? <span>{errors.date.message}</span> : <></>}
          </label>
          <label>
            Email
            <input type="text" placeholder='Email' {...register('email', {
              required : 'El correo es requerido'
            })} />
            {errors.email ? <span>{errors.email.message}</span> : <></>}
          </label>
        </section>
        <section className='create__form__btns'>
          <button onClick={() => navigate('/list')} style={{ backgroundColor: '#f24036' }} >Cancelar</button>
          <button type='submit' style={{ backgroundColor: '#1875d2' }}>Guardar</button>
        </section>
      </form>
    </div>
  )
}

export default Create