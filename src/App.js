import './App.css';
import {Route,Switch} from 'react-router-dom'
import Bar from './Components/Layout/Bar'
import FAQS from './Components/FAQS'
import Help from './Components/Help'
import Program from './Components/Programs'
function App() {
  return (
    <div className="App">
      <Bar>
        <Switch>
          <Route path='/Help' exact>
            <Help/>
          </Route>
          <Route path='/Program'>
            <Program/>
          </Route>
          <Route path='/FAQS'>
            <FAQS/>
          </Route>
        </Switch>
      </Bar>
    </div>
  );
}

export default App;





