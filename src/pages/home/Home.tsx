import { Link } from 'react-router-dom';
import reactLogo from './../../assets/react.svg'
import './Home.css'

export default function Home() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Link to="/about-me">
          <button>
            About Me
          </button>
        </Link>

        <Link to="/settings">
          <button>
            Settings
          </button>
        </Link>

        <Link to="/user-input">
          <button>
            User Input
          </button>
        </Link>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
