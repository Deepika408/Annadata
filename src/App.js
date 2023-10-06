import {Routes, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Policy from "./Pages/Policy"
import Pagenotefound from "./Pages/Pagenotefound"
function App() {
  return (
      <>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/policy' element={<Policy/>}/>
          <Route exact path='*' element={<Pagenotefound/>}/>
          {/*   exact path= "*" represents if about routes doesn't work then, this route will execute itself */}
        </Routes>
      </>
  );
}

export default App;
