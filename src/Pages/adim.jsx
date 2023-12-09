import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../services/api'
import './admin.css'
import { saveToxls } from '../services/savetoxl'


const Admin = () => {

    const [data, setData] = useState([]);


    const dataApi = async () => {
        const response = await axios.post(`${baseUrl}/fetchList`, {})
        if (response.status == 200) {
            setData(response.data)
        } else if (response.status == 201) {
            alert(response.data.error)
        }
    }

    const downloadtosheet=()=>{
        saveToxls(data)
    }

    useEffect(() => {
        dataApi()
    }, [])

    return (
        <div className='resetPaswordContainer'>
            <div className='doenloadtosheet' onClick={()=>downloadtosheet()}> Download to Sheet</div>
            <table className="companyTable">
                <tr className="companyTableCell">
                    <th className="companyTableCellHeader">Game</th>
                    <th className="companyTableCellHeader">User Name</th>
                    <th className="companyTableCellHeader">NickName</th>
                    <th className="companyTableCellHeader">PhoneNo</th>
                </tr>

                {data.map((items, index) => (
                    <tr className="companyTableCell">
                        <td className="companyTableCellDataUserName">
                            {items?.game}
                        </td>
                        <td className="companyTableCellData">
                            {items?.nickName}
                        </td>
                        <td className="companyTableCellData">
                            {items?.userName}
                        </td>
                        <td className="companyTableCellData">
                            {items?.phoneno}
                        </td>
                    </tr>
                ))}
            </table>

        </div>
    )
}

export default Admin