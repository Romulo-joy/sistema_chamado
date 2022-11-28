import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        alert('funcionou');
    }

    return (
        <div className="container-center">    
            <div className="login">
                <div className="longin-area">
                   <img src={logo} alt="sistemas de login"/>
                </div>

                <form onSubmit={handleSubmit}>
                  <h1>Entrar</h1>
                  <input type= 'text' 
                    placeholder='Digite oseu nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
          
                  <input 
                     type="text"
                     placeholder="email@email.com" 
                     value={email}
                     onChange={(e) => setEmail (e.target.value)}
                    />
                  <input 
                     type="password" 
                     placeholder="******"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />
                  <button type="submit">cadastrar</button>
                </form>

                <Link to='/'>Possui uma conta? clique aqui!</Link>
            </div>
        </div>
    );
}

export default SignUp;