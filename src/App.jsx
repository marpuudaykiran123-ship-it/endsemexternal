
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registered, setRegistered] = useState(null);
  const [message, setMessage] = useState("");

  function register(e) {
    e.preventDefault();

    setRegistered({ name, email, password });
  }

  function login(e) {
    e.preventDefault();

    if (
      registered &&
      loginEmail === registered.email &&
      loginPassword === registered.password
    ) {
      setMessage("Login Successful");
    } else {
      setMessage("Invalid Email or Password");
    }
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={register}>
        <input placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} />

        <input placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Register</button>
      </form>

      {registered && (
        <div>
          <h3>Registered Details</h3>
          <p>Name: {registered.name}</p>
          <p>Email: {registered.email}</p>
          <p>Password: {registered.password}</p>
        </div>
      )}

      <h2>Login Form</h2>

      <form onSubmit={login}>
        <input placeholder="Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)} />

        <input type="password" placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default App;
