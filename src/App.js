import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home-page';
import NavigationBar from './components/navigation-bar';

function App() {

  return (

    <BrowserRouter>
      <NavigationBar />
      <div className="paqc-content-container container">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
