import React, { Component } from 'react';
import '../css/Player.css';

export default class Player extends Component {
    render () {
        return (
            <div className='container'>
                <div className='column'>
                    <div className='card'>
                        <figure>
                            <img src='./assets/images/cr.jpg'></img>
                        </figure>
                        <h3>Cristiano Ronaldo</h3>
                        <p className='title'>Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <figure>
                            <img src='assets/images/kante.jpg'></img>
                        </figure>
                        <h3>Kante</h3>
                        <p className='title'>Chelsea</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <figure>
                            <img src='assets/images/messi.jpg'></img>
                        </figure>
                        <h3>Messi</h3>
                        <p className='title'>PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <figure>
                            <img src='assets/images/neymar.jpg'></img>
                        </figure>
                        <h3>Neymar</h3>
                        <p className='title'>PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <figure>
                            <img src='assets/images/kane.jpg'></img>
                        </figure>
                        <h3>Kane</h3>
                        <p className='title'>Tottemham</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <figure>
                            <img src='assets/images/haaland.jpg'></img>
                        </figure>
                        <h3>Haaland</h3>
                        <p className='title'>Manchester City</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            </div>
        );
    }
}