import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../api'
import { addToken } from '../../store/token';
import './styles.css'

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const token = await getToken(email, password);
    dispatch(addToken(token));

    if(token === 401) {
      alert('usuário invalido');
    } else if(token !== '') {
      navigate('/products');
    }
  }

  return (
    <div className="contain-login">
      <h1>Login</h1>
      <div className="card">
        <label htmlFor="email">
          Email:
          <input 
            type="email" id="email" 
            placeholder="Digite seu email" 
            value={email} onChange={e => setEmail(e.target.value)}
            />
        </label>
        <label htmlFor="password">
          Senha:
          <input 
            type="password" id="password" 
            placeholder="Digite sua senha"
            value={password} onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  )
}
