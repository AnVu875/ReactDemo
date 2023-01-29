import React, { Component } from 'react';
import Navigation from './Navigation';
import { Players } from '../share/ListOfPlayers';
import PlayersPresentation from './PlayersPresentation';
import Footer from './Footer';


export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: Players
        };
    }

    render () {
        return (
            <main>
                <Navigation />
                <PlayersPresentation players={this.state.players} />
                <Footer />
            </main>
        );
    }
}


