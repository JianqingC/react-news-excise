import React, {Component} from 'react';


class App extends Component{//classes are interfaces of objects
    state =  {stories:[]};

    constructor(){
        super();//obj need defined
    }

    componentDidMount(){
        fetch('http://localhost:3000/topstories')
        .then(response => response.json())
        .then(json => this.setState({stories: json}))
        .catch(error => console.log(error.message))
    }

    render(){
        return (
            <div>
                <h1> NEWS Client </h1>
                {
                    this.state.stories.map(story => {
                        const {id, by, title, score, url, time} = story; 
                        return(
                            <div key={id}>
                                <a href={url}><h4>{title}</h4></a>
                                <i>{by} - {new Date(time).toLocaleString()}</i>
                                <p> Upvotes: {score} </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default App;//share this file to others