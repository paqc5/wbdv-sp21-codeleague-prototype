import React, { useState } from 'react';
import SearchForm from './search-form';
import SelectForm from './select-form';
import playersActions from '../actions/players-action'
import { connect } from 'react-redux';


const SearchScreen = ({

  players = [],
  findAllPlayers,
  findPlayerByName

}) => {

  const [advancedSearch, setAdvancedSearch] = useState(false)

  const getSearchInfo = (searchInfo) => {
    if (searchInfo.length > 0) {
      let infoArray = searchInfo.trim().toLowerCase().split(" ")
      if (infoArray.length === 1) {
        findPlayerByName(infoArray[0], "")
      } else if (infoArray.length > 1) {
        findPlayerByName(infoArray[0], infoArray[1])
      }
    } else {
      findAllPlayers()
    }
  }

  return (
    <div className="col col-12 mb-4">
      <SearchForm placeholder="Search for a player" onClick={getSearchInfo} />
      {/* {!advancedSearch &&
        <div className="row">
          <button
            onClick={() => setAdvancedSearch(true)}
            className="btn btn-sm btn-link mx-auto">
            Advanced Search <i className="fas fa-search"></i>
          </button>
        </div>
      }
      {advancedSearch &&
        <>
          <div className="row mt-2">
            <div className="col mr-2">
              <SelectForm formTitle="All players" />
            </div>
            <div className="col mr-2">
              <SelectForm formTitle="Total points" />
            </div>
            <div className="col">
              <SelectForm formTitle="Max cost" />
            </div>
          </div>
          <button
            onClick={() => setAdvancedSearch(false)}
            className="btn btn-sm btn-link">
            Hide Advanced Search
          </button>
        </>
      } */}
    </div>
  )
}
const stateToPropertyMapper = (state) => {
  return {
    players: state.playersReducer.players
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    findAllPlayers: () =>
      playersActions.findAllPlayers(dispatch),
    findPlayerByName: (infoNameOne, infoNameTwo) =>
      playersActions.findPlayerByName(dispatch, infoNameOne, infoNameTwo)
  }
}
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SearchScreen)