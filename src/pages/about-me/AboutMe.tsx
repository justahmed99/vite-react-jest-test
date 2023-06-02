import { Link } from 'react-router-dom';
import './AboutMe.css'
export default function AboutMe() {
  return (
    <>
      <div>
        <h1>About Me</h1>
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
