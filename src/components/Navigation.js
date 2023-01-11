import React, { Component } from 'react';
import '../css/Navigation.css';

export default class Navigation extends Component {
    render () {
        return (
            <div id='navigation'>
                <input type={'checkbox'}></input>
                <div>
                    <div></div>
                </div>
                <nav>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>New</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
