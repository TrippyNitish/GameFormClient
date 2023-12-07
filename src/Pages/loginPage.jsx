import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Cookies from 'js-cookie';
import './loginPage.css'
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { baseUrl } from '../services/api';

const Login = () => {

    const navigate = useNavigate();

    const [details, setDetails] = useState({})
     
    const handleSubmit = async (e) => {
        e.preventDefault()

        const url = `${baseUrl}/loginAdmin`

        const response = await axios.post(url, details)

        if (response.status == 201) {
            alert(`You are not registered, Please contact your owner`)
        }
    
        else if (response.status == 200) {
            // const token = response.data.token
            // Cookies.set('userToken', token);
            navigate(`/admin`)
        }

    }
    const handleChangeFormDetails = (formdata) => {
        setDetails({ ...details, ...formdata })
    }

    // const checkTokenExist = async () => {
    //     // const cookie = Cookies.get('userToken');
    //     const url = `${baseUrl}/login`

    //     const response = await axios.post(url, { cookie })

    //     if (response.status == 200) {
    //         // const token = response.data.token
    //         // Cookies.set('userToken', token);
    //         navigate(`/dashboard/user`)
    //     }
    //     else return
    // }


    useEffect(() => {
        // checkTokenExist()
      
    }, [])

    return (
        <>
            <div className='loginPage'>
                <form className='loginForm' onSubmit={(e) => handleSubmit(e)}>
                    <PersonIcon style={{ fontSize: "150px", color: "white" }} />

                    <div className='userLoginFields'>
                        <PersonIcon />
                        <input required autoComplete='off' className="loginInput" type='text' placeholder='User Name' onChange={(e) => handleChangeFormDetails({ userName: e.target.value.trim() })} />
                    </div>
                    <div className='userLoginFields'>
                        <KeyIcon />
                        <input required  autoComplete='off' type='password' className="loginInput" placeholder='Password' onChange={(e) => handleChangeFormDetails({ password: e.target.value.trim() })} />
                    </div>
        
                    <br />
                    <button className='loginButton' type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}
export default Login