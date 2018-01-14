import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'cecce88a991644d6938ce5470d7f5153'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      route: 'signin',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(Clarifai.GENERAL_MODEL, this.state.input, {video: true})
      .then(
      function(response) {
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false});
    } else if(route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route } = this.state;
    return (
      <div className="App">
         <Particles className='particles'
              params={particlesOptions}
          />
       <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
       { route === 'home'
         ? <div>
           <Logo />
           <Rank />
           <ImageLinkForm 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            />
           <FaceRecognition imageUrl={imageUrl}/>
         </div>
         : (
            route === 'signin'
            ? <Signin onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
