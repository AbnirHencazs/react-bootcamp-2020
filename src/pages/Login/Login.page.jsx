import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useGlobals } from '../../state/GlobalProvider'
import loginApi from '../../utils/login.api'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { updateUser } = useGlobals()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userInfo = await loginApi(email, password)
        updateUser(userInfo)
        history.push('/')
    }
    return(
        <>
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <h1 className="text-xl font-bold leading-thight">Ingresa a tu cuenta</h1>
            </div>
            <div className="rounded flex p-2">
                <img src="https://avatars.githubusercontent.com/u/30054827?s=200&v=4" className="block h-32  w-auto"/>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <form aria-label="form" onSubmit={handleSubmit}>
                    <div>
                        <label className="block font-medium text-sm text-gray-700">Email</label>
                        <input
                            className="block mt-1 w-full bg-gray-200 focus:outline-none py-2 px-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-md shadow-sm"
                            type="text" name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}/>
                    </div>
                    <div className="mt-4">
                        <label className="block font-medium text-sm text-gray-700">Contraseña</label>
                        <input 
                            type="password"
                            className="block mt-1 w-full bg-gray-200 focus:outline-none py-2 px-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-md shadow-sm"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}/>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <button
                            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150" 
                            onClick={handleSubmit}>
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginPage