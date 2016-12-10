import Inferno from 'inferno';

import Component from 'inferno-component';

import 'whatwg-fetch';

export default class Login extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  async login(){
    console.log('Test');

    try {
      let response = await fetch('/login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new FormData(document.querySelector('form'))
});
      let responseJson = await response.json();
      console.log(responseJson);
    } catch(error) {
      console.error(error);
    }

  }
    render(){
      return (
        <form>
          <input type='email' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='Password' />
          <input type='button' value='Sign In' onClick={this.login(this)} />
        </form>
      );
    }
}
