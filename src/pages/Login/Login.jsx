import React, { useState } from 'react';

import Input from '../../components/Inputs/Input';
import Button from '../../components/Button/Button';

import Logo from '../../assets/images/logo.png';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import "./Login.scss";

function Login(props) {

    const [show, setShow] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);

    }

    return (
        <div className="login">
            <form>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="email">
                    <MdEmail className='icon'/>
                    <Input
                        type='text'
                        placeholder='E-mail'
                    />
                </div>

                <div className="password">
                    <MdLock className='icon'/>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Senha'
                    />
                    {show ? (
                        <FaEyeSlash 
                            className='icon'
                            onClick={handleClick}
                        /> ) : (
                            <FaEye
                                className='icon'
                                onClick={handleClick}
                            />
                        )
                    }
                </div>

                <Button
                    type='btn-login btn-full'
                    title='Entrar'
                />

            </form>
        </div>
    )
}


export default Login;