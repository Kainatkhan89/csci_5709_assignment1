import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';


const router = createBrowserRouter([
  {
   element: <Layout/>,
   children:[
     {
       path: "/",
       element: <Home />
     },
     {
       path: "/login",
       element: <Login/>
     }
   ]
  }
 
 ]);
 
 function App() {
   return (
     <ChakraProvider theme = {theme}>
       <RouterProvider router = {router} />
     </ChakraProvider>
   );
 }
 
 export default App;
