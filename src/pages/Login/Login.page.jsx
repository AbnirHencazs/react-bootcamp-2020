import React from 'react'

const LoginPage = () => {
    return(
        <>
            <h1>Ingresa a tu cuenta</h1>
            <form aria-label="form">
                <label >Email</label>
                <input type="text" name="email"/>
                <label>Contraseña</label>
                <input type="password"/>
                <button>Ingresar</button>
            </form>
        </>
    )
}

export default LoginPage