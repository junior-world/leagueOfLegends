import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/main/NavBar';
import MainPage from '../components/main/MainPage';

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route path='/' component={MainPage} exact></Route>
      </Switch>
    </div>
  );
};
export default Main;
