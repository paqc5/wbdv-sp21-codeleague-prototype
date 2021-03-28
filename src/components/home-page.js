import React from 'react';
import PlayersList from './players-list';
import SearchScreen from './search-screen';
import { Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import playersReducer from '../reducers/players-reducer'



const Home = () => {

  const reducer = combineReducers({
    playersReducer: playersReducer
  })

  const store = createStore(reducer)

  return (
    <Provider store={store}>
      <div className="row">
        <div className="col col-12">
          <h1 className="mb-4">Home</h1>
        </div>
        <Route path={["/search", "search/:something"]} exact={true}></Route>
        <SearchScreen />
        <div className="paqc-flex col">
          {/* <div className="paqc-col red">Display</div> */}
          <div className="paqc-players-list-container col">
            <PlayersList />
          </div>
        </div>
      </div>
    </Provider>
  )
}
export default Home