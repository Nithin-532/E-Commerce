import User from './MainContainer/User/User';
import "./App.css";
import { router } from './routes';
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <User /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

