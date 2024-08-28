//importaciones de app
import { Route, Routes, useLocation } from "react-router-dom";

//importaciones de las landing
import Index from '../pages/system/index'
import Nosotros from '../pages/system/nosotros.jsx'
import Alquileres from "../pages/system/alquileres.jsx";
import Planes from '../pages/system/planes.jsx'
import Contactanos from "../pages/system/contactanos.jsx";
import Configuracion from '../pages/system/configuracion.jsx'



import GridRightSidebar from '../pages/listing/tour-grid/grid-right-sidebar'
import List from '../pages/listing/tour-list/list'
import ListLeftSidebar from '../pages/listing/tour-list/list-left-sidebar'
import ListRightSidebar from '../pages/listing/tour-list/list-right-sidebar'
import TourDetailOne from '../pages/listing/tour-detail/tour-detail-one'
import TourDetailTwo from '../pages/listing/tour-detail/tour-detail-two'
import UserProfile from '../pages/account/user-profile'
import UserPayment from '../pages/account/user-payment'
import UserInvoice from '../pages/account/user-invoice'
import UserContratados from '../pages/account/user-contratados.jsx'
import UserSocial from '../pages/account/user-social'
import UserNotification from '../pages/account/user-notification'
import Helpcenter from '../pages/helpcenter/helpcenter'
import HelpcenterFaq from '../pages/helpcenter/helpcenter-faqs'
import HelpcenterGuides from '../pages/helpcenter/helpcenter-guides'
import HelpcenterSupport from '../pages/helpcenter/helpcenter-support'
import Login from '../pages/auth/login'
import Signup from '../pages/auth/signup'
import SignupSuccess from '../pages/auth/signup-success'
import ForgotPassword from '../pages/auth/forgot-password'
import LockScreen from '../pages/auth/lock-screen'
import Terms from '../pages/utility/terms'
import Privacy from '../pages/utility/privacy'
import Comingsoon from '../pages/special/comingsoon'
import Maintenance from '../pages/special/maintenance'
import Error from '../pages/special/404'

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
                <Route path="/contactanos" element={<Contactanos />} />
                <Route path="/configuracion" element={<Configuracion />} />


                <Route path="/grid-right-sidebar" element={<GridRightSidebar />} />
                <Route path="/list" element={<List />} />
                <Route path="/list-left-sidebar" element={<ListLeftSidebar />} />
                <Route path="/list-right-sidebar" element={<ListRightSidebar />} />
                <Route path="/tour-detail-one" element={<TourDetailOne />} />
                <Route path="/tour-detail-one/:id" element={<TourDetailOne />} />
                <Route path="/tour-detail-two" element={<TourDetailTwo />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/user-payment" element={<UserPayment />} />
                <Route path="/user-invoice" element={<UserInvoice />} />
                <Route path="/user-contratados" element={<UserContratados />} />
                <Route path="/user-social" element={<UserSocial />} />
                <Route path="/user-notification" element={<UserNotification />} />
                <Route path="/helpcenter" element={<Helpcenter />} />
                <Route path="/helpcenter-faqs" element={<HelpcenterFaq />} />
                <Route path="/helpcenter-guides" element={<HelpcenterGuides />} />
                <Route path="/helpcenter-support" element={<HelpcenterSupport />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup-success" element={<SignupSuccess />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/lock-screen" element={<LockScreen />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/comingsoon" element={<Comingsoon />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/404" element={<Error />} />
                <Route path="/planes" element={<Planes />} />
            </Routes>
            {!isAuthPage && <Footer />}
        </>
    )
}