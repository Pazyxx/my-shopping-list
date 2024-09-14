import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import './App.scss';
import ShoppinigListRoute from './routes/Shopping-List-Route/shopping-list-route.component';

const App = () => {
  

  return (
      <div className="app-container">
        
        <Routes>
          <Route path="/" element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path="shopping-list" element={<ShoppinigListRoute/>}/>
          </Route>

        </Routes>
      </div>
  )
}

export default App