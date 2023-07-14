import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export default function FrontEndLyout() {
  return (
    <div className='app'>
        <Navbar />
        {/* <h1>Hello</h1> */}
        <Outlet />
    </div>
  );
}
