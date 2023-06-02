import { Link } from 'react-router-dom'
import { useState, ChangeEvent } from 'react';
import './UserInput.css'

export default function UserInput() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  return (
    <>
      <div>
        <h1>User Input</h1>
      </div>
      <div>
        <h2>Let’s check you in</h2>
        <label>
          First name:{' '}
          <input
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last name:{' '}
          <input
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <p>
          Your ticket will be issued to: <b>{fullName}</b>
        </p>
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