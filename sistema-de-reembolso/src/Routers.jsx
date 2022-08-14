import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useEffect } from "react";
import { connect } from "react-redux";
import { isAuth } from "./store/actions/authActions";

const Routers = ({auth, dispatch}) => {

  useEffect(() => {
    isAuth(dispatch)
    console.log(auth)
  }, [])


  if(auth.isLoading && auth.isLogged) {
    return(
      <div>Loading</div>
    )
  }
  
  
  return (
    <BrowserRouter>
      <Routes>
        {auth.isLogged ?
          (
            <>
              <Route path="/principal" element={<Main />} />
            </>
          )
          :
          (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
            </>
          )

        }
        
      </Routes>
    </BrowserRouter>
  );
};


const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Routers)
