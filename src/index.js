import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";
import './App.css';

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('updated')
    }

    renderContent () {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonsDisplay lat={this.state.lat}/>
        }
        return <Spinner/>;
    }

    render() {
        return <div className={"border red"}>{this.renderContent()}</div>
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));