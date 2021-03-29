import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const PlayersList = ({

  players = [],
  searchStatus = 0

}) => {

  const [cachedPlayer, setCachedPlayer] = useState({})


  return (
    <div className={`paqc-players-list ${searchStatus === 0 ? 'border-0' : ''}`}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {searchStatus === -1 && <p className="mb-0">Player Not Found</p>}
          {searchStatus === 1 && <h4 className="mb-4">Search Results</h4>}
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
      </ul>
    </div>
  )
}

const stateToPropertyMapper = (state) => {
  return {
    players: state.playersReducer.players,
    searchStatus: state.playersReducer.searchStatus
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {}
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(PlayersList)