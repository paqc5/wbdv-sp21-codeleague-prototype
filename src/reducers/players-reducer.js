const initialState = {
  players: [],
  playerDetailsInfo: []
}

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_ALL_PLAYERS':
      return {
        ...state,
        players: action.allPlayers.elements
      }
    case 'FIND_PLAYERS_BY_NAME':
      return {
        players: action.playersByName
      }
    case 'FIND_PLAYERS_BY_POINTS':
    case 'FIND_PLAYERS_BY_POSITION':
    case 'FIND_PLAYERS_BY_COST':
    default:
      return state
  }
}

export default playersReducer