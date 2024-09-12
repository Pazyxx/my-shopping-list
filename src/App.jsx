import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import Authentication from './routes/Authentication/authentication.component';
import './App.scss';
import ShoppinigListRoute from './routes/Shopping-List-Route/shopping-list-route.component';

const App = () => {
  const stars = Array.from({ length: 50 });

  return (
      <div className="app-container">
        
        <Routes>
          <Route path="/" element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path="sign-in" element={<Authentication/>}/>
              <Route path="shopping-list" element={<ShoppinigListRoute/>}/>
          </Route>

        </Routes>
      </div>
  )
}

export default App