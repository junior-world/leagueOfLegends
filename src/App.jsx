import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './page/Main';
import ChampInfo from './page/ChampInfo';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Main} exact></Route>
        <Route path='/championInfo' component={ChampInfo} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
