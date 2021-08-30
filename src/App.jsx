import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './page/main';
import ChampInfo from './page/champInfo';
import Ranking from './page/Ranking';
import SearchResult from './page/Search_result';
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Main} exact></Route>
        <Route path='/championInfo' component={ChampInfo} exact></Route>
        <Route path='/ranking/ladder' component={Ranking} exact></Route>
        <Route
          exact
          path='/summoners/:summonersName'
          component={SearchResult}></Route>
      </Switch>
    </div>
  );
}

export default App;
