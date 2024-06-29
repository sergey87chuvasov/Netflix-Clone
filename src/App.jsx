import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Player from './pages/Player/Player';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/player/:id' element={<Player />}></Route>
      </Routes>
    </div>
  );
}

export default App;
