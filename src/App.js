import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import BookWall from './pages/BookWall';
import BookShop from './pages/BookShop';

function App() {
  
  useEffect(() => {
    getBooks();
  }, [])

  if(!books) {
    return <h3>Loading</h3>
  }

  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/:index' element={<BookShop />} />
      {/* <Route path='/club' element={<BookShop getBooks={getBooks}/>} /> */}
    </Routes>
  );
}

export default App;
