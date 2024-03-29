import Router from "./routes";
import GlobalStyle from "./Style/globalStyle";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
        <GlobalStyle/>
      <Router/>
    </>
  );
}

export default App;
