import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      userData: {},
      followers: []
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/jonnhann')
    .then(res=> {
      this.setState({userData: res.data})
    })
    .catch(err=>{
      console.log('error', err)
    })

    axios.get('https://api.github.com/users/jonnhann/followers')
    .then(res=> {
      this.setState({
        followers: res.data,
      })
    })
  }



  render(){
    return (
      <div className="App">
        <UserCard data={this.state.userData} followers={this.state.followers} /> 
      </div>
    );
  }
  
}

export default App;
