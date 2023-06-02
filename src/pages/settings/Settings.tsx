import { Link } from 'react-router-dom'
import './Settings.css'

export default function Settings() {
  return (
    <>
      <div>
        <h1>Settings</h1>
      </div>
      <div className="card">
        <Link to="/">
          <button>
            Back to Home
          </button>
        </Link>
      </div>
    </>
  )
}
