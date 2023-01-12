import React from 'react';
import '../css/Player.css';
import { Players } from '../ListOfPlayers';

export default function Player () {
    return (
        <div className='container'>
            {Players.map( ( player ) => (
                <div className='column' key={player.id}>
                    <div className='card'>
                        <figure>
                            <img src={player.img}></img>
                        </figure>
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            ) )}
        </div>
    );
};




