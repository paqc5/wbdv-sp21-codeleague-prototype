const API_URL = process.env.REACT_APP_FPL_URL
// const API_URL = "http://localhost:8080/https://fantasy.premierleague.com/api/bootstrap-static/"

export const findAllPlayers = () => {
  return (
    fetch(`${API_URL}`)
      .then(response => response.json())
  )
}

const api = {
  findAllPlayers
}
export default api