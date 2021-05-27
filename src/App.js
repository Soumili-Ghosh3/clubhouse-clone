import './App.css';
import PlanLayout from './pages/layout/PlanLayout';
import Welcome from './pages/Welcome'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Welcome />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
