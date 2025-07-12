import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail'; // Importing the Detail component

function App() {
  // setting up the router
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/REACT-DEMO" element={<Home />} />
        <Route path="/REACT-DEMO/movie/:id" element={<Detail />} /> {/* Adding the Detail route */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
