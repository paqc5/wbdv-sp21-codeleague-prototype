import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const PlayersList = ({

  players = []

}) => {

  const [cachedPlayer, setCachedPlayer] = useState({})


  return (
    <div className={`paqc-players-list ${players.length === 0 ? 'border-0' : ''}`}>
      {players.length !== 0 &&
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4 className="mb-3">Search Results</h4>
          </li>
          {
            players.map((player) =>
              <li key={player.code} className="list-group-item">
                <button
                  className="paqc-player-button"
                  onClick={() => setCachedPlayer(player)}>
                  {player.first_name} {player.second_name}
                </button>
                {cachedPlayer.code === player.code &&
                  <div className="paqc-player-info">
                    <button
                      className="float-right"
                      onClick={() => setCachedPlayer({})}>
                      <i className="fas fa-times"></i>
                    </button>
                    Player Cost: {player.now_cost}<br />
                    Player Rank: {player.influence_rank}<br />
                    Player Yellow Cards: {player.yellow_cards}
                  </div>
                }
              </li>)
          }
        </ul>}
    </div>
  )
}

const stateToPropertyMapper = (state) => {
  return {
    players: state.playersReducer.players
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {}
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(PlayersList)