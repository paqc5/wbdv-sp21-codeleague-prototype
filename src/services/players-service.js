const API_URL = "https://fantasy.premierleague.com/api/bootstrap-static/"

export const findAllPlayers = () => {
  return (
    fetch(`${API_URL}`)
      .then(response => {
        console.log(response)
        response.json()
      })
  )
}

const api = {
  findAllPlayers
}
export default api