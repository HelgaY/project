import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      login: "",
      password: ""
    }
  }

  render() {
    return <div class="jumbotron">
      <div class="row justify-content-center">
        <form>
          <div class="form-group row">
            <label for="login" class="col-3 col-form-label">Логин</label>
            <div class="col-9">
              <input class="form-control" type="text" id="login" name="login" value={this.props.login} placeholder="Логин" />
            </div>
          </div>
          <div class="form-group row">
            <label for="passw" class="col-3 col-form-label">Пароль</label>
            <div class="col-9">
              <input class="form-control" type="password" id="passw" name="passw" value={this.props.password} placeholder="Пароль" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-6">
              <input class="btn btn-block btn-secondary" type="submit" name="btn" value="Регистрация" onClick={this.Registration}/>
            </div>
            <div class="col-6">
            <input class="btn btn-block btn-primary" type="submit" name="btn" value="Войти" />
            </div>
          </div>
        </form>
      </div>
    </div>;
  }
}

class Registration extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      middlename: "",
      birthday: "",
      region: "",
      tfon: "",
      login: "",
      password: "",
      email: ""
    }
  }

  render() {
    return <div class="jumbotron">
      <div class="row justify-content-center">
        <form>
          <div class="form-group row">
            <label for="login" class="col-3 col-form-label">Логин</label>
            <div class="col-9">
              <input class="form-control" type="text" id="login" name="login" value={this.props.login} placeholder="Логин" />
            </div>
          </div>
          <div class="form-group row">
            <label for="passw" class="col-3 col-form-label">Пароль</label>
            <div class="col-9">
              <input class="form-control" type="password" id="passw" name="passw" value={this.props.password} placeholder="Пароль" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-6">
              <input class="btn btn-block btn-secondary" type="submit" name="btn" value="Регистрация" onClick={this.Registration}/>
            </div>
            <div class="col-6">
            <input class="btn btn-block btn-primary" type="submit" name="btn" value="Войти" />
            </div>
          </div>
        </form>
      </div>
    </div>;
  }
}

export {Login, Registration};