import './App.css';
import { GlobalProvider } from './Context';
import EventListing from './Components/EventListing';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedEvents from './Components/SelectedEvents';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';


function App() {
  return (
    <Router>
      <GlobalProvider>
      <Header />
        <div className='main'>
          <Routes>
            <Route path="/" element={<EventListing />} />
            <Route path="/myEvents" element={<SelectedEvents />} />
          </Routes>
          <ToastContainer
              position="bottom-left"
              hideProgressBar={true}
              autoClose={5000} />
        </div>
    </GlobalProvider>
    </Router>
    

  );
}

export default App;
