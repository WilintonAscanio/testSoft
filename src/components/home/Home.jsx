import React, { useEffect } from 'react'
import './home.scss'
import { Outlet, useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {

        navigate('/list')
      

     
    }, [])
    
    return (
        <article className='list'>
            <Outlet />


        </article>
    )
}

export default Home