import React, { Component } from 'react';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
class Movie extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className='movie-item'>
                <img src={IMG_PATH+this.props.details['poster_path']}></img>
                <div className='movie-text'>
                    <p>{this.props.details['title']}</p>
                    <span>{this.props.details['vote_average']}</span>
                </div>
            </div>
        );
    }
}

export default Movie;