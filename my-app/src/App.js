import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="form-group container">
      <div class="row justify-content-md-center">
          <form class="form-group">
            <label for="login">Логин</label>
            <input class="form-control" type="text" id="login" name="login" value=""></input>
            <label for="passw">Пароль</label>
            <input class="form-control" type="text" id="passw" name="passw" value=""></input>
            <input class="btn btn-primary" type="submit" value="Войти"></input>
          </form>
        </div>
    </div>
  );
}

export default App;
