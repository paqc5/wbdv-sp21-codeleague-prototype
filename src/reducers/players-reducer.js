const initialState = {
  players: [],
  searchStatus: 0
}

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_ALL_PLAYERS':
      return {
        ...state,
        players: action.allPlayers.elements,
        searchStatus: 1
      }
    case 'FIND_PLAYERS_BY_NAME':
      return {
        players: action.playersByName,
        searchStatus: 1
      }
    case 'PLAYER_NOT_FOUND':
      return {
        players: [],
        searchStatus: -1
      }
    case 'FIND_PLAYERS_BY_POINTS':
    case 'FIND_PLAYERS_BY_POSITION':
    case 'FIND_PLAYERS_BY_COST':
    default:
      return state
  }
}

export default playersReducer