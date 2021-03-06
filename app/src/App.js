import './App.css';
import './Custom.css';
import LoginForm from './Component/LoginForm';
import SignupForm from './Component/SignupForm';
import ForgotPassword from './Component/ForgotPassword';
import Dashboard from './Component/Dashboard';
import Form from './Component/Form';

// importing favicons
import '@fortawesome/fontawesome-free/css/all.min.css';
// router setup
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter> 
      <Routes>
          <Route path="/" element={<LoginForm/>}></Route>
          <Route path="/signup" element={<SignupForm/>}></Route>
          <Route path="/forgot" element={<ForgotPassword/>}></Route>           
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
