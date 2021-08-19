import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './page/main';
import ChampInfo from './page/champInfo';
import DetailChamp from './page/detailChamp';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Main} exact></Route>
        <Route path='/championInfo' component={ChampInfo} exact></Route>
        <Route
          path='/championInfo/:champion_id'
          component={DetailChamp}
          exact></Route>
      </Switch>
    </div>
  );
}

export default App;
