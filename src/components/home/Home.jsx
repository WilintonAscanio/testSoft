import React from 'react'
import './home.scss'
import { Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <article className='list'>
            <Outlet />


        </article>
    )
}

export default Home