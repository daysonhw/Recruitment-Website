import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './app/Navbar';

import { Welcome } from './component/welcome/Welcome'
import { ActionCenter } from './features/user/ActionCenter'
import { Search } from './component/search/Search'
import { JobDetail } from './component/jobs/JobDetail'
import { Login } from './features/user/Login'
import Loading from './component/loadingBackdrop/LoadingBackdrop'
// import { useDispatch } from 'react-redux';
// import { NotificationCenter } from '../features/notifications/NotificationCenter'

function App() {
  // const dispatch = useDispatch()
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Login />
        <Loading />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/actioncenter" component={ActionCenter} />
            <Route path="/job/:jobId" children={<JobDetail />} />
            <Route exact path="/search/:searchKeyword" component={Search} />
            {/* <Redirect to="/" /> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
