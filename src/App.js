import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Board from './partials/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="container">
        <Header />
        <Board />
        <Footer />
      </section>
    );
  }
}

export default App;
