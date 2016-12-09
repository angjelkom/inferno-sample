import Inferno from 'inferno';

import Component from 'inferno-component';

import 'whatwg-fetch';

export default class Login extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  login(){
    console.log('Test');

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
