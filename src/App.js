import { AddBooks } from './components/AddBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App container">
      <h1 className='display-3 text-center mb-5'>Book Store</h1>
      <AddBooks />
      <BookList />
    </div>
  );
}

export default App;
