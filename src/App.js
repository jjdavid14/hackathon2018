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
      isDog: false
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({isDog: false});
    this.setState({imageUrl: this.state.input});
    // clarifai.models
    //   .predict(Clarifai.GENERAL_MODEL, this.state.input, {video: true})
    //   .then(
    //   function(response) {
    //     console.log(response);
    //   },
    //   function(err) {
    //     // there was an error
    //   }
    // );
    app.models.predict(Clarifai.GENERAL_MODEL, this.state.input, {video: true, selectConcepts: [{name: 'dog'}]})
  .then(
    (response) => {
      for(let i = 0; i < response.outputs[0].data.frames.length; i++) {
        //console.log(response.outputs[0].data.frames[i].data.concepts[0].value);
        if(response.outputs[0].data.frames[i].data.concepts[0].value > 0.50) {
          this.setState({isDog: true});
        }
      }
    }
  )
  .catch(
    function(err) {
      console.log(err);
    });
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    const { isDog, imageUrl, route } = this.state;
    return (
      <div className="App">
         <Particles className='particles'
              params={particlesOptions}
          />
           <Logo />
           <Rank isDog={isDog}/>
           <ImageLinkForm 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            />
           <FaceRecognition imageUrl={imageUrl}/>
      </div>
    );
  }
}

export default App;
