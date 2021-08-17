import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './page/Main';
import ChampInfo from './page/champInfo';
import Ranking from './page/Ranking';

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route path='/' component={Main} exact></Route>
                <Route path='/championInfo' component={ChampInfo} exact></Route>
                <Route path='/ranking/ladder' component={Ranking} exact></Route>
            </Switch>
        </div>
    );
}

export default App;
