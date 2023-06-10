import React, { useEffect, useState } from 'react'
import { Button, Space } from 'antd'
import { IoMdAdd } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import man from '../../assets/hombre.png'
import { getAllUsers } from '../../services/getAllUsers'
import ModalUser from '../modal/ModalUser'
import Swal from 'sweetalert2'
import { deleteUser } from '../../services/deleteUser'


const ListClients = () => {
    const [data, setData] = useState([])
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const filterClients = data ? data.filter(user => user.name.toLowerCase().includes(input.toLowerCase()) || user.created_at.toLowerCase().includes(input.toLowerCase())) : ''

    const deleteUserData = (user) => {
        Swal.fire({
            icon: 'info',
            text: `Se borrará el siguiente usuario : ${user.name}`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        }).then((response) => {
            if (response.isConfirmed) {
                const userDeleted = { ...user, is_active: false }
                deleteUser(user.id, userDeleted)

                Swal.fire({
                    icon: 'success',
                    text: 'Usuario borrado exitosamente',

                })

            }
        }).catch((error) => { console.log(error); })

    }
    useEffect(() => {
        getAllUsers().then((response) => {
            setData(response)
        })
            .catch((error) => { console.log(error); })




    }, [deleteUserData])






    return (
        <div className='list__clients'>
            <header>
                <h1>Listado clientes</h1>
                <Space wrap>
                    <Button type="primary" onClick={() => navigate('/create')} className='addClient'><IoMdAdd />Nuevo cliente</Button>

                </Space>
            </header>
            <article>
                <section className='list__clients__search'>
                    <BsSearch />
                    <input type="text" placeholder='Buscar...' onChange={(e) => setInput(e.target.value)} />
                </section>
                <section className='list__clients__details'>
                    {filterClients.length ? filterClients.filter(user => user.is_active).map((user, index) =>
                        <figure key={index}>
                            <img src={man} alt="profile" />
                            <figcaption>
                                <section>
                                    <strong>
                                        {user.name}
                                    </strong>
                                    <span>{user.email}</span>

                                </section>
                                <section>
                                    <span>{user.date}|{user.created_at}</span>
                                    <div>
                                        <ModalUser user={user} />
                                        <button style={{ backgroundColor: '#f24036' }} onClick={() => deleteUserData(user)}><MdDelete /></button>
                                    </div>

                                </section>
                            </figcaption>

                        </figure>) : ''}
                    {input && !filterClients.length || !filterClients.length ? <h1>Ningún usuario registrado</h1> : ''}


                </section>

            </article>
        </div>
    )
}

export default ListClients