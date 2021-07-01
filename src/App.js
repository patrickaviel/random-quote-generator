import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = {
        advice: ''
    };

    fetchData = async () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response)=>{
                const { advice } = response.data.slip;
                console.log(advice);
                this.setState({advice});
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    componentDidMount() {
        this.fetchData();
        console.log("Hello");
    }

    render() {
        const {advice} = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchData}>
                        <span>Generate</span>
                    </button>
                </div>
            </div>
        )
    };
}

export default App;