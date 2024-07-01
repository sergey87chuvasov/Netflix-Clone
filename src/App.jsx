import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('log in');
      } else {
        console.log('log out');
      }
    });
  }, []);
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
