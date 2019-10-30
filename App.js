import React, {Component} from 'react';
import Myfunc from './components/somefunc';


export default class App extends Component {

  data = { message: "asdaewaq" };

  componentDidMount () {
    console.log('........my component did mount')
  }


	render(){
		return (
      <Myfunc message={this.data.message}/>
	  )
  } 
}
