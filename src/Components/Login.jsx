import { useState } from 'react';
import jackLogo from '../assets/jackLogo.png'
import { useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');




    async function submitForm(e) {
        e.preventDefault(); // Nn deixa a pag carregar automático

        const formData = { email, password };

    try {

        const response = await fetch('http://localhost:3000/api/auth/login', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      });

      if (response.ok) {

        const result = await response.json();
        console.log('Cadastro realizado com sucesso:', result.accessToken);

        // Salva o token para requisições futuras
        localStorage.setItem("token", result.accessToken);


        document.getElementById("errorMsg").style.color="green";
       

        setMsg("Login realizado com sucesso. Você será redirecionado a todoList em 2 segundos");

        setTimeout(()=>{
            window.location.href ="https://alcantara-diego.github.io/todolist/";
        }, 3000);

      } else {

        const msg = await response.json();
        console.log(msg.message)

        document.getElementById("errorMsg").style.color="red";

        setMsg(msg.message);

        
      
      }
    } catch (error) {

        setMsg(msg.message)
        console.error('Erro ao enviar dados para o backend:', error);
    }
  }


    return (
        <div className="formDiv">
            <img src={jackLogo} alt="" />

            <h1>Login</h1>
           

            <form onSubmit={submitForm}>
                <p>email</p>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                <p>senha</p>
                <input type="password" 
                onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Enviar"/>
            </form>

            <p id="errorMsg">{msg}</p>
            <p>Ainda não tem uma conta? <a href="/signup">Cadastre-se</a></p>
        </div>
    )
}


export default Login;