import { useState } from "react";
import validation from "./validation";
import './Form.css'


const Form = ({ Login }) => {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const [errors,setErrors] = useState({
        username: "",
        password: "",
    });

    

    const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({...userData, [property]: value});
    validation({...userData, [property]: value}, errors, setErrors);
};

const submitHandler = (event) => {
    event.preventDefault();
    Login(userData);
};


    return (
        <form onSubmit={submitHandler} className="container">
            <div>
            <img src="https://vish213-rick-and-morty.netlify.app/static/media/logo.eab63707.png" className="img23" />
            </div>
            <div>
                <h1 className="proyec">Bienvenidos a mi proyecto</h1>
            </div>
            <div>
                <h1 className="sub-titulo">Diseñado y desarrollado por Francisco Jesus Sanabria | death.the.system@gmail.com</h1>
            </div>
            <div>
                <label htmlFor="username" className="user">Email:</label>
                <input className="input1"
                type="text" 
                name="username"
                value={userData.username} 
                onChange={handleInputChange}
                />
                <p>{errors.username}</p>
            </div>
            <div>
            <label htmlFor="password" className="pass">Password:</label>
            <input className="input"
            type="text" 
            name="password" 
            value={userData.password} 
            onChange={handleInputChange}
            />
            </div>
            <button className="login">Login</button>
        </form>

);

};


export default Form;