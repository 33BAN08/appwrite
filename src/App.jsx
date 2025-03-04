
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import LoginRegister from './Pages/LoginRegister';
import Notes from './Pages/Notes';
function App() {
 

  return (
    <div id='app'>
      <div id='container'>
          <BrowserRouter>
              <Routes>
                  <Route path="/login" element={<LoginRegister />} />
                  <Route path="/" element={<Notes />} />
                </Routes> 
              </BrowserRouter>
      </div>
    </div>
   
  )
}

export default App
