import { Routes, Route } from 'react-router-dom';
import  { FrontEndLyout }  from '@src/layout/clients/FrontEndLayout';
import  { Home }  from '@src/pages/Home';
import  { Services }  from '@src/pages/Services';
import  { Portfolio }  from '@src/pages/Portfolio';
import  { About }  from '@src/pages/About';
import  { Contact }  from '@src/pages/Contact';
import  { Testimonials }  from '@src/pages/Testimonials';
import  { Careers }  from '@src/pages/Careers';
export const Routers = () => {
    return(
        <Routes>
        <Route
          path='/'
          element={<FrontEndLyout />}
        >
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='testimonials' element={<Testimonials />} />
          <Route path='careers' element={<Careers />} />
        </Route>
      </Routes>
    )
}