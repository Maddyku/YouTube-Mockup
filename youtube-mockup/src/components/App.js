import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

/* When application first loads, we will show default 
videos [] of buildings */
    componentDidMount() {
        this.onTermSubmit('buildings')
    }

    //Asynchronous API Request -> Use Async Await syntax
    onTermSubmit = async term => {  //mark callback as asynchronous
        const response = await youtube.get('/search', {  
    /* await keyword before API GET Request 
    Response from network request stored in const response
    Called later when we pass this.onTermSubmit as value to onForm Submit
    in SearchBar import component down in the render method below */
            params: {
                q: term
            }
        })
        
        this.setState({ 
        /* We assign videos prop on state to response.data.items
        in setState to render/rerender videos array*/
            videos: response.data.items,
        /*when user does a video search, select first video of
    array and display it on screen*/
            selectedVideo: response.data.items[0]
        });
    }
        onVideoSelect = video => {
            this.setState({selectedVideo: video})
        }

    render() {
        return ( 
            /* We pass onFormSubmit callback from SearchBar (child) component
            import to App (parent) component as prop on SearchBar import
            wired to onTermSubmit Event Handler */
            <div className = "ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} /> 
                <div className="ui grid">
                    <div className="ui row">
                        <div className ="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className = "five wide column">
                            <VideoList 
                                onVideoSelect = {this.onVideoSelect} 
                                videos = {this.state.videos} />
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;