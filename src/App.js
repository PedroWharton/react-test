import './App.css';
import { Home } from './components/Home'
import { Contact } from './components/Contact';
import { About } from './components/About';
import { NotFound } from './components/NotFound';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { AuthProvider } from './utilities/auth';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { RequireAuth } from './utilities/RequireAuth';
import { UserLoggedAuth } from './utilities/UserLoggedAuth';


function App() {
  return (
    <AuthProvider>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<UserLoggedAuth><Login/></UserLoggedAuth>}/>
          <Route path='/profile' element={<RequireAuth><Profile/></RequireAuth>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>    
    </div>
    </AuthProvider>
  );
}

export default App;
