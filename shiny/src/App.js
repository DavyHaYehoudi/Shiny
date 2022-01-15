import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelances from './pages/Freelances';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/survey/:questionNumber' element={<Survey />} />
      <Route path='/results' element={<Results />} />
      <Route path='/freelances' element={<Freelances />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
