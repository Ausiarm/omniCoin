import '../App.css';
import Auth from './Auth';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth/>
      </BrowserRouter>
    </div>
  );
}

export default App;
