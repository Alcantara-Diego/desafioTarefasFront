import { useEffect, useState } from 'react';
import jackLogo from '../assets/jackLogo.png';
import { useNavigate } from 'react-router-dom';


function SignUp() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');


    async function submitForm(e) {
        e.preventDefault(); // Nn deixa a pag carregar automático

        const formData = { username, email, password };

    try {

        const response = await fetch('http://localhost:3000/api/auth/register', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      });

      if (response.ok) {

        const result = await response.json();
        console.log('Cadastro realizado com sucesso:', result);

        document.getElementById("errorMsg").style.color="green";

        setMsg("Cadastro realizado com sucesso. Você será redirecionado a tela de login em 2 segundos")

        setTimeout(()=>{
            console.log("iodne")
            navigate("/");
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
      <img src={jackLogo} alt="Logo" />
      <h1>Cadastre-se</h1>

      <form onSubmit={submitForm}>
        <p>username</p>
        <input
          id="username"
          type="text"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>email</p>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>senha</p>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input id="sendBtn" type="submit" value="Enviar" />
      </form>

      <p>Já tem uma conta? <a href="/">Faça login</a></p>

      <p id='errorMsg'>{msg}</p>
    </div>
  );
}

export default SignUp;
