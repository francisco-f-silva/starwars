import React from 'react';
import './App.css';
import CardComparator from './components/CardComparator';
import { planet_pictures } from './planet_pictures';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      pics: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/planets/?page=1')
      .then(response => response.json())
      .then(infoPlanets => this.setState({planets: infoPlanets.results}))
    ;
    this.setState({pics: planet_pictures.map((url, i) => {
      return (
        <img src={url} alt="Planet" height="200" width="200" /> 
      );
    }) });
  }

  render() {
    const { planets, pics } = this.state;
    return (
      <div className="tc">
        <header className="App-header">
          <h1 className="f1">Star Wars</h1>
          <h2 className="f3">Planet Comparator</h2>
          <CardComparator planets={planets} pics={pics} />
        </header>
      </div>
    );
  }

}

export default App;
