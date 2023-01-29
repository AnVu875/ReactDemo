import React from 'react';
import '../css/Player.css';

export default function PlayersPresentation ( { players } ) {
    return (
        <div className='container'>
            {players.map( ( player ) => (
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





