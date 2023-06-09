import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { createUser } from '../../services/createUser'
import { getAllUsers } from '../../services/getAllUsers'

const Create = () => {
  const [data, setData] = useState([])
  const { formState: { errors }, handleSubmit, register, reset } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    getAllUsers().then((response) => {
      setData(response)
    })
      .catch((error) => { console.log(error); })




  }, [])


  const saveUser = (newUser) => {

    const exists = data ? data.filter(user => user.id === Number(newUser.id)) : ''

    if (exists.length) {
      Swal.fire({
        icon: 'error',
        title: 'Error al crear el usuario',
        text: 'Ya existe un usuario con ese número de documento'
      })

    } else if (newUser.id.length < 5) {
      Swal.fire({
        icon: 'info',
        text: 'El número de documento debe ser mayor a 5 dígitos'
      })
    }
    else if (newUser.name.length < 3) {
      Swal.fire({
        icon: 'info',
        text: 'Nombre demasiado corto'
      })

    }

    else {
      reset()
      createUser(newUser)
      Swal.fire({
        icon: 'success',
        text: 'Usuario agregado correctamente'
      })
      navigate('/list')


    }



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
            <input type="text" placeholder='Nombre completo' {...register("name", { required: 'El nombre es requerido' })} />
            {errors.name ? <span>{errors.name.message}</span> : <></>}
          </label>

          <label>
            Número de documento
            <input type="number" minLength={5} placeholder='Número de documento' {...register('id', {
              required: 'Documento requerido',
              pattern: {
                value: /^[0-9]+$/,
                message: 'El número de documento es inválido'
              }
            })} />
            {errors.id ? <span>{errors.id.message}</span> : <></>}
          </label>
        </section>
        <section className='create__form__sec2'>

          <label>
            Fecha de nacimiento
            <input type="date" placeholder='yyyy/mm/dd' {...register('date', {
              required: 'Fecha requerida'
            })} />
            {errors.date ? <span>{errors.date.message}</span> : <></>}
          </label>
          <label>
            Email
            <input type="text" placeholder='Email' {...register('email', {
              required: 'El correo es requerido',  pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Ingrese un correo electrónico válido'
              }
            })} />
            {errors.email ? <span>{errors.email.message}</span> : <></>}
          </label>
        </section>
        <section className='create__form__btns'>
          <small onClick={() => navigate('/list')} style={{ backgroundColor: '#f24036' }} >Cancelar</small>
          <button type='submit' style={{ backgroundColor: '#1875d2' }}>Guardar</button>
        </section>
      </form>
    </div>
  )
}

export default Create