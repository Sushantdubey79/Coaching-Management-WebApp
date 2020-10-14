import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Academics from './pages/coaching_portal_pages/Academics/Academics';
import Dashboard from './pages/coaching_portal_pages/Dashboard';
import Student_Info from './pages/coaching_portal_pages/Student-info/Student_Info';
import AddStudent from './pages/coaching_portal_pages/Student-info/AddStudent';
import ViewAllStudent from './pages/coaching_portal_pages/Student-info/ViewAllStudent';
import UpdateStudent from './pages/coaching_portal_pages/Student-info/UpdateStudent';
import StudentProfile from './pages/coaching_portal_pages/Student-info/StudentProfile';


function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/academics' component={Academics} />
          <Route path='/student_Info' exact component={Student_Info} />
          <Route path='/student_Info/addStudent' exact component={AddStudent} />
          <Route path='/student_Info/viewAllStudent' exact component={ViewAllStudent} />
          <Route path='/student_Info/updateStudent' exact component={UpdateStudent} />
          <Route path='/student_Info/studentprofile/:id' exact component={StudentProfile} />
          
        </Switch>
      </Router>
  );
}

export default App;