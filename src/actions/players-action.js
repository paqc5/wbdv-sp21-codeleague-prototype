import playersService from '../services/players-service'

export const findAllPlayers = (dispatch) =>
  playersService.findAllPlayers()
    .then(response =>
      dispatch({ type: 'FIND_ALL_PLAYERS', allPlayers: response }))

export const findPlayerByName = (dispatch, infoNameOne, infoNameTwo) =>
  playersService.findAllPlayers()
    .then(response => {
      let rs = response.elements.filter(player => {
        let firstName = player.first_name !== undefined ? player.first_name.toLowerCase() : ""
        let lastName = player.second_name !== undefined ? player.second_name.toLowerCase() : ""
        if ((firstName === infoNameOne) || (firstName === infoNameTwo) || (lastName === infoNameOne) || (lastName === infoNameTwo)) {
          return true
        }
        return false
      })

      dispatch({ type: 'FIND_PLAYERS_BY_NAME', playersByName: rs })
    })

const playersActions = {
  findAllPlayers,
  findPlayerByName
}

export default playersActions