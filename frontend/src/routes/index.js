import { createBrowserRouter } from 'react-router-dom';
import Home from '../MainContainer/User/Pages/Home/Home';
import Contact from '../MainContainer/User/Pages/Contact/Contact';
import AboutUs from '../MainContainer/User/Pages/AboutUs/AboutUs';
import User from '../MainContainer/User/User';

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<User>
      <Home />
    </User>)
  },
  {
    path: "/contact",
    element: (<User>
      <Contact />
    </User>)
  },
  {
    path: "/aboutUs",
    element: (<User>
      <AboutUs />
    </User>)
  }
]);