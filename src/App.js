// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
// import BookWall from './pages/BookWall';
import BookShopPage from './pages/BookShop';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/shop' element={<BookShopPage />} />
      {/* <Route path='/club' element={<BookShop getBooks={getBooks}/>} /> */}
    </Routes>
  );
}

export default App;
