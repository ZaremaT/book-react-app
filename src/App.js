import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import BookWall from './pages/BookWall';   
import BookShop from './pages/BookShop';

function App() {
  return (
    <Routes>
      <Route path='/' element={<BookWall />} />
      <Route path='/:id' element={<BookShop /> } />
      </Routes>
  );
}

export default App;
