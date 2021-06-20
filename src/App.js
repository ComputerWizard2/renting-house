
//导入样式
import 'antd-mobile/dist/antd-mobile.css'
import './index.css'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
//导入组件
import Home from './pages/Home'
import CityList from './pages/CityList'
function App() {
  return (
    <div className="App">
     <Router>
       
       <Route path='/home' component={Home}></Route>
       <Route path='/list' component={CityList}></Route>

     </Router>
    </div>
  );
}

export default App;
