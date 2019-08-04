import React from 'react';

function App(props) {
  return <div class="container">
      <div class="row justify-content-md-center">
          <form>
            <div class="form-group row">
              <label for="login" class="col-sm-3 col-form-label">Логин</label>
              <div class="col-sm-9">
                <input class="form-control" type="text" id="login" name="login" value={props.login} placeholder="Логин" />
              </div>
            </div>
            <div class="form-group row">
              <label for="passw" class="col-sm-3 col-form-label">Пароль</label>
              <div class="col-sm-9">
                <input class="form-control" type="text" id="passw" name="passw" value={props.passw} placeholder="Пароль" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-6">
                <input class="btn btn-block btn-outline-secondary" type="submit" name="btn" value="Регистрация" />
              </div>
              <div class="col-sm-6">
              <input class="btn btn-block btn-outline-primary" type="submit" name="btn" value="Войти" />
              </div>
            </div>
          </form>
        </div>
    </div>;
}

export default App;