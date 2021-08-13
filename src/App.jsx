import './App.css';
import { Switch, Route } from 'react-router-dom';
import main from './page/main';
import champInfo from './page/champInfo';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={main} exact></Route>
        <Route path='/championInfo' component={champInfo} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
