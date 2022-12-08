import './App.css';

import Notes  from './components/Notes';
import SignUp  from './components/SignUp';
import AttendancePage  from './components/AttendancePage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landingpage  from './components/Landingpage';
// import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>


function App() {
  return (
    <>
    <Router>
         <Routes>
              <Route path="/" element={<Landingpage/>}></Route>
              {/* <Route path="/" element={<HomePage/>}></Route> */}
              <Route path="/Notes" element={<Notes/>}></Route>
              <Route path="/AttendancePage" element={<AttendancePage/>}></Route>
              <Route path="/LoginPage" element={<LoginPage/>}></Route>
              <Route path="/LoginPage/SignUp" element={<SignUp/>}></Route>

        </Routes>
    </Router>
    
    </>
  );
}

export default App;
