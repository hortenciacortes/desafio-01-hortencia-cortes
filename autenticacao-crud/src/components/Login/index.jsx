import { Link } from 'react-router-dom'
import './styles.css'

export function Login() {
  return (
    <div className="contain-login">
      <h1>Login</h1>
      <div className="card">
        <label htmlFor="email">
          Email:
          <input type="email" id="email" placeholder="Digite seu email"  />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" id="password" placeholder="Digite sua senha"  />
        </label>
        <Link to="/products">
          <button>
            Entrar
          </button>
        </Link>
      </div>
    </div>
  )
}
