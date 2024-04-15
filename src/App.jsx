

// import React from "react";
// import {Routes, Route} from 'react-router-dom'
// import "./App.css"
// import LandingPage from "./stores/pages/LandingPage";
// import KitchenPage from "./stores/pages/KitchenPage";
// import MobilePage from "./stores/pages/MobilePage";
// import ComputersPage from "./stores/pages/ComputersPage";
//  import BooksPage from "./stores/pages/BooksPage";
// import FridgePage from "./stores/pages/FridgePage";
// import MenPage from "./stores/pages/MenPage";
// import WatchesPage from "./stores/pages/WatchesPage";
// import WomanPage from "./stores/pages/WomanPage";
// import FurniturePage from "./stores/pages/FurniturePage";
// import SpeakersPage from "./stores/pages/SpeakersPage";
// import AcPage from "./stores/pages/AcPage";
// import TvPage from "./stores/pages/TvPage";
// import MobileSingle from "./singles/MobilSingle";
// import ComputersSingle from "./singles/ComputersSingle";
// import WomanSingle from './singles/WomanSingle'
// import UseCart from "./stores/Usercart";
// import Register from "./Register";
// import RegistrationForm from "./RegisterForm";
// import PatientRegistration from "./PatientRegistration";

// const App = () => {
//   return(
//     <div>
//       <Routes>
//         <Route path='/' element = { <LandingPage/> } />
//         <Route path='/Kitchen' element = {   <KitchenPage /> } />
//         <Route path='/Computers' element={ <ComputersPage/> } />
//         <Route path='/Books' element={ <BooksPage/> } />
//         <Route path='/ac' element={ <AcPage/> } />
//          <Route path='/Fridge' element={ <FridgePage/> } /> 
//         <Route path='/Men' element={ <MenPage/> } />
//         <Route path='/mobiles' element={ <MobilePage/> } />
//         <Route path='/Watches' element={ <WatchesPage/> } />
//         <Route path='/woman' element={ <WomanPage/> } />
//         <Route path='/furniture' element={ <FurniturePage/> } />
//         <Route path='/speakers' element={ <SpeakersPage/> } />
//         <Route path='/tv' element={ <TvPage/> } />
//         <Route path="/mobiles/:id" element={ <MobileSingle />} />
//         <Route path="/cart" element={ <UseCart  />} />
//         <Route path='/computers/:id' element={ <ComputersSingle />} />
//         <Route path='/woman/:id' element={ <WomanSingle />} />
//         <Route path='/form' element={ <Register />} />
//         <Route path='/register' element={ <RegistrationForm />} />
//         <Route path='/patientform' element={ <PatientRegistration/>}/>
//       </Routes>
      
//     </div>
//   )
// }
// export default App


import React from 'react'
import PatientRegistration from './PatientRegistration'
import { Routes, Route } from 'react-router-dom'
import RegistrationEditForm from './RegistrationEditForm'
import LoginForm from './Login'

function App(){
  return(
    <Routes>
      <Route path='/patientform' element={ <PatientRegistration />} />
      <Route path='/edit/:id' element={<RegistrationEditForm/>}/>
      <Route path='/form' element={<LoginForm/>}/>
    </Routes>
  )
}
export default App