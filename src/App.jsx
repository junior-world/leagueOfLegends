import './App.css';
import { Switch, Route } from 'react-router-dom';
import main from './page/main';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={main} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
