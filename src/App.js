import React, { Component } from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (event) => this.setState({searchField: event.target.value})
  

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1> Monsters Rolodex xxx</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
