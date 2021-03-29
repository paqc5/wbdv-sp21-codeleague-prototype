const API_URL = "https://codeleague-cors-proxy.herokuapp.com/"

export const findAllPlayers = () => {
  return (
    fetch(`${API_URL}`, 
    {
      method: 'GET',
      headers: { 'target-url': 'https://fantasy.premierleague.com/api/bootstrap-static/' }
    })
      .then(response => response.json())
  )
}

const api = {
  findAllPlayers
}
export default api