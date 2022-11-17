import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/UserAuthContext'
import './Signup.css'
const Signup = () => {
    const { error, SignUp, currentuser } = useAuth()
    const [err, setError] = useState("")
    const [backError, setBackError] = useState("")
    const [user, setUser] = useState({
        FullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    useEffect(() => {
        console.log("i am in")
        if (error) {
            setInterval(() => {
                setBackError("")
            }, 5000)
            setBackError(error)
        }
    }, [error, currentuser])
    const UserHandler = (e) => {
        const { name, value } = e.target;
        console.log(name +"::::::::::"+value)
        setUser((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const SubmitHandler = async (e) => {
        e.preventDefault()
        const { email, password, confirmPassword, FullName } = user
        if (password == "" || confirmPassword == "" || email == "" || FullName == "") {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("please fill All the field ")
        }
        else if (password !== confirmPassword) {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("Password does not match")
        }
        else if (!password.length >= 6 || !confirmPassword.length >= 6) {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("Password Must be Greater then 6 Length")
        }
        else {

            SignUp(email, password, FullName)
            {
                currentuser && setUser({
                    FullName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
            }
        }
    }
    return (
        <div className='box'>
            {
                err ? (
                    err && <p className='error'>{err}</p>
                ) : (
                    backError && <p className='error'>{backError}</p>
                )
            }

            <form onSubmit={SubmitHandler} className="form">
                <h2>Registration Form</h2>
                <div className="inputfield">
                    <input type="text" placeholder="UserName" value={user.FullName} name='FullName' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    <input type="text" placeholder="Email" value={user.email} name='email' onChange={UserHandler} />
                </div>

                <div className="inputfield">
                    <input type="password" placeholder="Password" value={user.password} name='password' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    <input type="password" placeholder="Confirm Password" value={user.confirmPassword} name='confirmPassword' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    <input type="submit" />
                </div>
                <p className="forget">Don't have an account? <a href="">Sign up </a></p>
            </form>

        </div>
    )
}

export default Signup