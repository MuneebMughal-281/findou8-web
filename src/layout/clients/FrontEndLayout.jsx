import { Outlet } from 'react-router-dom';
import { Navbar } from '@src/layout/clients/Navbar';
// import { WebFooter } from '@src/layout/clients/WebFooter';
// import { TopBar } from '@src/layout/clients/components/TopBar';

export const FrontEndLyout = () => {
  return (
    <div className='app'>
      {/* <TopBar/> */}
      <Navbar />
      <Outlet />
      {/* <WebFooter/> */}
    </div>
  );
};
