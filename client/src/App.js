import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./pages/sign-up/Signup.jsx";
import Signin from "./pages/sign-in/Signin.jsx";
import ConnectWallet from "./pages/connect-wallet/ConnectWallet";
import Home from "./pages/home/Home";
import ResetPassword from "./pages/reset-password/ResetPassword";
import VerifyPassword from "./pages/verify-password/VerifyPassword";
import ConfirmPassword from "./pages/confirm-password/ConfirmPassword";
import User from "./layouts/user-page/User";



const path = {
  index:"/",
  user:"/user/*"
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/sign-up" element={<Signup />} />
      <Route  path="/sign-in" element={<Signin />} />
      <Route  path="/connect-wallet" element={<ConnectWallet />} />
      <Route  path="/reset-password" element={<ResetPassword />} />
      <Route  path="/verify-password" element={<VerifyPassword />} />
      <Route  path="/confirm-password" element={<ConfirmPassword />} />
      
      <Route path={path.user} element={<User />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;