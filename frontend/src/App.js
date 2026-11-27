
import './App.css';
import {Route,BrowserRouter,Routes} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Authentication from './pages/Authentication';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/auth" element={<Authentication />} />
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
