import React from 'react';

function Login() {
  return (
    <div className="loginbox">
      <div className="infobox">
        <h1>Login to access the full dashboard</h1>
        <form>
          <div className='emailbox'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className='passwordbox'>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">OK</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
