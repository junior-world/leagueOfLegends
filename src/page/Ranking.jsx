import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/main/NavBar';
import LadderPage from '../components/rank/LadderPage';
import ChampionPage from '../components/rank/ChampionPage';
import LevelPage from '../components/rank/LevelPage';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Switch>
                <Route
                    path='/ranking/ladder'
                    component={LadderPage}
                    exact></Route>
                <Route
                    path='/ranking/champion'
                    component={ChampionPage}
                    exact></Route>
                <Route
                    path='/ranking/level'
                    component={LevelPage}
                    exact></Route>
            </Switch>
        </div>
    );
};
export default Main;
