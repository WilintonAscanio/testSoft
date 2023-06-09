import React from 'react'
import './home.scss'
import { Button, Space } from 'antd'
import { IoMdAdd } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import { MdModeEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import man from '../../assets/hombre.png'

const Home = () => {
    const navigate = useNavigate()
    return (
        <article className='list'>
            <header>
                <h1>Listado clientes</h1>
                <Space wrap>
                    <Button type="primary" onClick={ () => navigate('create')}><IoMdAdd />Nuevo cliente</Button>

                </Space>
            </header>
            <div className='list__clients'>
                <section className='list__clients__search'>
                    <BsSearch />
                    <input type="text" placeholder='Buscar...' />
                </section>
                <section className='list__clients__details'>
                <figure>
                        <img src={man} alt="profile" />
                        <figcaption>
                            <section>
                                <strong>
                                    Nombre de la persona
                                </strong>
                                <span>Correo de la persona</span>

                            </section>
                            <section>
                                <span>Fecha de nacimiento | Fecha de creación</span>
                                <div>
                                    <button style={{backgroundColor : '#1875d2'}}><MdModeEdit /></button>
                                    <button style={{backgroundColor : '#f24036'}}><MdDelete /></button>
                                </div>

                            </section>
                        </figcaption>

                    </figure>
                    <figure>
                        <img src={man} alt="profile" />
                        <figcaption>
                            <section>
                                <strong>
                                    Nombre de la persona
                                </strong>
                                <span>Correo de la persona</span>

                            </section>
                            <section>
                                <span>Fecha de nacimiento | Fecha de creación</span>
                                <div>
                                    <button style={{backgroundColor : '#1875d2'}}><MdModeEdit /></button>
                                    <button style={{backgroundColor : '#f24036'}}><MdDelete /></button>
                                </div>

                            </section>
                        </figcaption>

                    </figure>
                </section>
            </div>
        </article>
    )
}

export default Home