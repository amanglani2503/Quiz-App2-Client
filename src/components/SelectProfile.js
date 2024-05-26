import React, {useEffect} from 'react'
import {loginSuccess} from '../Redux/loginReducer'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import '../styles/SelectProfile.css'
import { Link } from 'react-router-dom'

export default function SelectProfile () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     try {
    //         const storedUser = localStorage.getItem('username');
    //         const storedAuthToken = localStorage.getItem('authtokenfinal');
    //         const tokenPayload = JSON.parse(atob(storedAuthToken.split('.')[1]));
    //         const expirationTime = tokenPayload.exp * 1000;
    //         const currentTime = Date.now();

    //         if (!(currentTime > expirationTime)) {
    //             console.log("Dispatched loginSuccess")
    //             dispatch(loginSuccess({ user: storedUser, token: storedAuthToken }));
    //             navigate("/startquiz")
    //         }
    //         else {
    //             navigate("/student/login");
    //         }
    //     } catch (error) {
    //         navigate("/student/login");
    //         throw new Error("Token Expired !! Login Please")
    //     }
    // },[dispatch, navigate])

    return (
        <div className='screen'>
            {/* <section> */}
                <div className='container'>
                <div className="row mb-3">
                        <div className="card col-md-4 col-lg-3">
                            <div className="cover item-a">
                                <h1 className='card-heading'>Admin</h1>
                                <div className="card-back">                                   
                                    <Link to='/admin/signup'>SignUp</Link>
                                    <Link to='/admin/login'>Login</Link>                                    
                                </div>
                            </div>
                    </div>
                  
                        <div className="card col-md-4 col-lg-3">
                            <div className="cover item-b">
                                <h1 className='card-heading'>Student</h1>
                                <div className="card-back">                                   
                                    <Link to='/student/signup'>SignUp</Link>
                                    <Link to='/student/login'>Login</Link>                                    
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            {/* </section> */}
        </div>
    )
}