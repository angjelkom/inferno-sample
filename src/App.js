import Inferno from 'inferno';

import Component from 'inferno-component';

export default class App extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
    render(){
      return (
          <div>
              <h1>Inferno Boilerplate</h1>
              { this.props.children }
          </div>
      );
    }
}
