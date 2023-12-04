import axios from 'axios'
import React, { useState } from 'react'
import './formSubmit.css'
import { baseUrl } from '../services/api'

const FormSubmit = () => {

    const [sendOtpFormVisibility, setSendOtpFormVisibility] = useState(true)
    const [verifyFormVisibility, setVerifyFormVisibility] = useState(false)
    const [resetPasswordFromVisibility, setResetPasswordFromVisibility] = useState(false)
    const [phoneno, setPhoneno] = useState("")
    const [otp, setOtp] = useState("")
    const[formData, setFormData]=useState({
        userName:"",
        nickName:"",
        game:"",
    })

    const handleSendOtp = async (e) => {
        console.log("phoneno",phoneno)
        e.preventDefault()
        const response = await axios.post(`${baseUrl}/sendOtp`, { phoneno })
        console.log(response.status)
        if (response.status == 200) {
            setSendOtpFormVisibility(false)
            setVerifyFormVisibility(true)
            setResetPasswordFromVisibility(false)
        } else if (response.status == 201) {
            alert(response.data.error)
        }
    }

    const handleVerifyOtp = async () => {
        const response = await axios.post(`${baseUrl}/veryfyOtp`, { phoneno, otp })

        if (response.status == 200) {
            alert(response.data.message)
            setSendOtpFormVisibility(false)
            setVerifyFormVisibility(false)
            setResetPasswordFromVisibility(true)
        } else if (response.status == 201) {
            alert(response.data.error)
        }
    }

    const handleResetPassword = async () => {
        const response = await axios.post(`${baseUrl}/formSubmit`, { formData,phoneno })
        if (response.status == 200) {
            alert("Form Successfully submitted")
            navigate("/")
        }
    }

    const resetFormDetails = () => {
        setSendOtpFormVisibility(true)
        setVerifyFormVisibility(false)
        setResetPasswordFromVisibility(false)
    }

    return (
        <div className='resetPaswordContainer'>
            <div className='resetPaswordContainerSubClass'>
                {sendOtpFormVisibility && <div display={{ display: "none" }}>
                    <form onSubmit={(e) => handleSendOtp(e)}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label className="label">
                                phoneno : {` `}
                                <input placeholder='Enter you vlid phoneno...' className="inputField" type='text' onChange={(e) => setPhoneno(e.target.value.trim())} />
                            </label>
                            <br />
                            <button onClick={()=>handleSendOtp()} className="button" >Verify</button>
                        </div>
                    </form>
                </div>}
                <br />

                {verifyFormVisibility && <div>
                    <div>Otp has been send to your registered phoneno addres.</div>
                    <br/>
                    <label className="label">
                        Enter Otp : {` `}
                        <input placeholder='Enter OTP' className="inputField" type='text' onChange={(e) => setOtp(e.target.value)} />
                    </label>
                    <br/>
                    <br/>
                    <button className="button" onClick={() => handleVerifyOtp()}> Verify</button>
                </div>}
                <br />
                {resetPasswordFromVisibility && <div>
                    <div>
                        <label className="label">
                            UserName :{` `}
                            <input placeholder='Enter New Password' className="inputField" type="text" onChange={(e) => setFormData({userName:e.target.value})} />
                        </label>
                    </div>
                    <br/>
                    <div>
                        <label className="label">
                            NickName :{` `}
                            <input placeholder='Enter New Password' className="inputField" type="text" onChange={(e) => setFormData({nickName:e.target.value})} />
                        </label>
                    </div>
                    <br/>
                    <div>
                        <label className="label">
                             Game :{` `}
                            <input placeholder='Enter New Password' className="inputField" type="text" onChange={(e) => setFormData({game:e.target.value})} />
                        </label>
                    </div>
                    <br/>
                    <div>
                        <button className="button" onClick={() => handleResetPassword()}>Submit Form</button>
                    </div>
                </div>}
                <br/>
                <div>
                    <button className="button" onClick={() => resetFormDetails()}>Re - Enter phoneno</button>
                </div>
            </div>

        </div>
    )
}

export default FormSubmit