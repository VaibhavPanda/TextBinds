import React from 'react';
import {Navigate,Route,Routes} from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contacts from './contact/Contacts';
import {Toaster} from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider.jsx";


function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>

      {/* <Home />
      <Course/> */}
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>}/>
        {/* <Route path="/course" element={<Courses />}/> */}
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contacts/>}/>
      </Routes>
      <Toaster/>
      </div>
    </>
  );
}

export default App;
