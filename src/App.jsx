import './App.css';
import { Switch, Route } from 'react-router-dom';
import main from './page/main';
import champInfo from './page/champInfo';
import SearchResult from './page/Search_result';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={main} exact></Route>
        <Route path='/championInfo' component={champInfo} exact></Route>
        <Route exact path='/summoners/:summonersName' component = {SearchResult}></Route>
      </Switch>
    </div>
  );
}

export default App;
