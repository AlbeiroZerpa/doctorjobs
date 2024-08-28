//importaciones de app
import { Route, Routes, useLocation } from "react-router-dom";

//importaciones de las landing
import Index from '../pages/system/index'
import Nosotros from '../pages/system/nosotros.jsx'
import Alquileres from "../pages/system/alquileres.jsx";
import Planes from '../pages/system/planes.jsx'
import Contactanos from "../pages/system/contactanos.jsx";
import Configuracion from '../pages/system/configuracion.jsx'
import Login from '../pages/auth/login'
import Signup from '../pages/auth/signup'
import SignupSuccess from '../pages/auth/signup-success'
import ForgotPassword from '../pages/auth/forgot-password'
import LockScreen from '../pages/auth/lock-screen'

//Componentes del sistema
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

export const AppRouter = () => {

    //logica para ocultar el footer en siertas landing
    const location = useLocation();
    const isAuthPage = [
        "/login",
        "/signup",
    ].includes(location.pathname);
    const isChangeUp = [
        "/contactanos",
        "/configuracion",
    ].includes(location.pathname);

    
    return (
        <>
        {
            !isChangeUp ?             
            (<Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light"/>)
            :
            (<Navbar navclass="defaultscroll is-sticky" navlight={false} manuclass="justify-end"/>)
        }

            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/alquileres" element={<Alquileres />} />
                <Route path="/planes" element={<Planes />} />
                <Route path="/contactanos" element={<Contactanos />} />
                <Route path="/configuracion" element={<Configuracion />} />


                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup-success" element={<SignupSuccess />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/lock-screen" element={<LockScreen />} />
            </Routes>
            {!isAuthPage && <Footer />}
        </>
    )
}