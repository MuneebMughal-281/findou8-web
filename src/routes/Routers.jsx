import { Routes, Route } from 'react-router-dom';
import  FrontendLayout  from '../layout/clients/FrontEndLayout';
import  Home  from '../pages/Home';
import  Services  from '../pages/Services';
import  Protfolio  from '../pages/Portfolio';
import  Company  from '../pages/Company';
import  Contact  from '../pages/Contact';
export const Routers = () => {
    return(
        <Routes>
        <Route path='/' element={<FrontendLayout />} />
        <Route
          path='/'
          element={<FrontendLayout />}
        >
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='portfolio' element={<Protfolio />} />
          <Route path='company' element={<Company />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    )
}