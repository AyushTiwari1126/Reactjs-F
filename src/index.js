import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import DashBoardLayout from './Pages/DashBoardLayout'
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import PendingApplications from './Pages/PendingApplications';
import BlankPage from './Pages/BlankPage';
import NewApplication from './Pages/NewApplication';
import UpdateProcessApplication from './Pages/UpdateProcessApplication';
import AuthorizeApplication from './Pages/AuthorizeApplication';
import BatchProcess from './Pages/BatchProcess';
function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard'  element={<DashBoardLayout/>}>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/dashboard/contact' element={<Contact/>}></Route>
          <Route path='/dashboard/pending-applications' element={<PendingApplications/>}></Route>
          <Route path='/dashboard/blankPage' element={<BlankPage/>}></Route>
          <Route path='/dashboard/newapplication' element={<NewApplication/>}></Route>
          <Route path='/dashboard/update-process-application' element={<UpdateProcessApplication/>}></Route>
          <Route path='/dashboard/authorize-application' element={<AuthorizeApplication/>}></Route>
          <Route path='/dashboard/batch-process' element={<BatchProcess/>}></Route>
        </Route>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
    
    </BrowserRouter>
  </>)

}
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
