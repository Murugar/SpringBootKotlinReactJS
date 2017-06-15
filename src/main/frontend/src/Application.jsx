"use strict";

import React from 'react';
import $ from 'jquery';


import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial',
            counter: -1,
            when: ''
        };
    }
    fetchState() {
        $.ajax('/api/hello').done((data) => this.setState(data));
    }
    render() {
        return (
            <div className="container-fluid"> 
            
            <nav className="navbar navbar-inverse"> 
            
            <div className="container-fluid">
            <div className="navbar-header">
               <a className="navbar-brand" href="#">Spring Boot Kotlin ReactJS</a>
            </div>
            
            <ul className="navbar-nav nav">
             <li className="nav-item nav-link">
                <a className="active" href="#">Home</a>
             </li>
            </ul>
            
            </div>
         </nav>    
            
            <div className="container">    
            <br/>
            <br/>            <div className="panel panel-primary">  
            <div className="panel-heading"><h1>Spring Boot Kotlin React</h1></div>
            <div className="panel-body">
            <div className="text-success">
                <h2 className="text-danger">Greetings : {this.state.name} </h2>
                <h2 className="text-warning">Counter : #{this.state.counter} </h2>
                <h2 className="text-info">Time : {this.state.timestamp} </h2>
                <h2 className="text-success">Service : {this.state.service} </h2>
            </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
    componentDidMount() {
        this.interval = window.setInterval(this.fetchState.bind(this), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}
