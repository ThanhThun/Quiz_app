// import logo from './logo.svg';
import '../styles/App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//Import components
import Main from './Main';
import Result from './Result';
import Quiz from './Quiz';

//React Router
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },

  {
    path : '/Quiz',
    element : <Quiz></Quiz>
  },

  {
    path : '/Result',
    element : <Result></Result>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
