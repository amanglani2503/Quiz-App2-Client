import React, { useEffect, useState } from 'react'
import '../styles/Result.css'

export default function ResultTable() {

    const [data, setData] = useState([])

    // useEffect(() => {
    //     getServerData('http://localhost:5000/api/result', (res) => {
    //         setData(res)
    //     })
    // })

  return (
    <div className='table'>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || 'Nothing'}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || "Empty"}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}