import * as React from 'react';

const image = require('../assets/images/langkilde.jpg');

class Title extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <a href="https://www.daniel.langkilde.se">
          <img className="header-portrait mobile-only " src={image}/>
          <img className="header-portrait tablet-only" src={image}/>
        </a>
        <h1>Daniel Langkilde</h1>
        <p>Passionate about creating value using machine learning.</p>
        <hr/>
      </div>
    );
  }
}

export default Title;
