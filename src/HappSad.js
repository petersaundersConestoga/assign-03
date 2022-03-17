import React from 'react';
import { ReactDOM  } from "react-dom";
import peter from "./img/peter.jpg"
import happy from "./img/happy.png"
import sad from "./img/sad.png"

export class HappySad extends React.Component {
    constructor() {
        super();
        this.state = {
            img: peter,
        }
    }

    buttonClick = (name) => {
        if (name === 'btn-happy') {
            this.setState({
                img: happy
            });
        } else {
            this.setState({
                img: sad
            });
        }
    }
    render() {
        return (
        <>
            <h1>Are you Happy or Sad?</h1>
            <div className='button'>
                <button className='happy' type='button' onClick={() => this.buttonClick('btn-happy')}>Happy?</button>
                <button className='sad' type='button' onClick={() => this.buttonClick('btn-sad')}>Sad?</button>
            </div>
            <img src={this.state.img} width='200' alt='happy or sad result'/>
        </>);
    }
}