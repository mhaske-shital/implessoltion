
import Sidebar from './component/Sidebar';
import Login from './pages/Login';
import { useSelector } from "react-redux"
function App() {
  const token = useSelector((auth) => auth.auth.token)
  const isTolken = token ? true : false;
  return (
    <>
      {isTolken ? <Sidebar /> : <Login />}

    </>
  );
}

export default App;
