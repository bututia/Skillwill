import './App.css';
import router from './router';
import { RouterProvider, createBrowserRouter } from "react-router-dom"

function App() {
  return (
    
      <RouterProvider router={createBrowserRouter(router)}/>
    
  );
}

export default App;
