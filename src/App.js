import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    state = {
        content: '',
        author: '',
    };

    fetchData = async () => {
        axios.get('https://api.quotable.io/random')
            .then((response)=>{
                const content = response.data.content;
                const author = response.data.author;
                console.log(response.data.content);
                this.setState({content,author});
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
        const {content,author} = this.state;
        return(
            <>
                <Navbar />
                <div className="card text-center my-card mx-auto mt-5 p-5">
                    <div className="card-body">
                         <h1 className="display-6">{content}</h1>
                        <p className="card-text">{author}</p>
                        <button className="btn btn-primary btn-lg" onClick={this.fetchData}>
                            <span>Generate</span>
                        </button>
                    </div>
                </div>
                <Footer />
            </>
            
        )
    };
}

export default App;