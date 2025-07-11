import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AdminRoutes from './components/Routes/AdminRoutes';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminAddSlider from './Pages/Admin/AdminAddSlider';
import AdminSliders from './Pages/Admin/AdminSliders';
import AdminEditSlider from './Pages/Admin/AdminEditSlider';
import AdminAboutUs from './Pages/Admin/AdminAboutUs';
import AdminAddAboutUs from './Pages/Admin/AdminAddAboutUs';
import AdminEditAboutUs from './Pages/Admin/AdminEditAboutUs';
import AdminServices from './Pages/Admin/AdminServices';
import AdminEditSercice from './Pages/Admin/AdminEditSercice';
import AdminAddSercice from './Pages/Admin/AdminAddSercice';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ServiceDetailsPage from './Pages/ServiceDetailsPage';
import AdminProjects from './Pages/Admin/AdminProjects';
import AdminAddProject from './Pages/Admin/AdminAddProject';
import ProjectePage from './Pages/ProjectePage';
import ProjectDetailsPage from './Pages/ProjectDetailsPage';
import ContactPage from './Pages/ContactPage';
import AdminClients from './Pages/Admin/AdminClients';
import AdminAddClient from './Pages/Admin/AdminAddClient';
import AdminEditProject from './Pages/Admin/AdminEditProject';
import AdminEditClient from './Pages/Admin/AdminEditClient';
import AdminAddGallery from './Pages/Admin/AdminAddGallery';
import AdminGallery from './Pages/Admin/AdminGallery';
import AdminAppointment from './Pages/Admin/AdminAppointment';
import AdminContact from './Pages/Admin/AdminContact';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/about' element={<AboutPage />} />
      <Route exact path='/services' element={<ServicePage />} />
      <Route exact path='/service/:id' element={<ServiceDetailsPage />} />
      <Route exact path='/projects' element={<ProjectePage />} />
      <Route exact path='/project/:id' element={<ProjectDetailsPage />} />
      <Route exact path='/contact' element={<ContactPage />} />
      <Route exact path='/login' element={<AdminLogin />} />
      <Route exact path='/admin' element={<AdminRoutes />}>
        <Route exact path='dashboard' element={<AdminDashboard />} />
        <Route exact path='add_slider' element={<AdminAddSlider />} />
        <Route exact path='edit_slider/:id' element={<AdminEditSlider />} />
        <Route exact path='sliders' element={<AdminSliders />} />
        <Route exact path='about' element={<AdminAboutUs />} />
        <Route exact path='add_about' element={<AdminAddAboutUs />} />
        <Route exact path='edit_about/:id' element={<AdminEditAboutUs />} />
        <Route exact path='services' element={<AdminServices />} />
        <Route exact path='edit_service/:id' element={<AdminEditSercice />} />
        <Route exact path='add_services' element={<AdminAddSercice />} />
        <Route exact path='projects' element={<AdminProjects />} />
        <Route exact path='add_project' element={<AdminAddProject />} />
        <Route exact path='edit_project/:id' element={<AdminEditProject />} />
        <Route exact path='clients' element={<AdminClients />} />
        <Route exact path='add_client' element={<AdminAddClient />} />
        <Route exact path='edit_client/:id' element={<AdminEditClient />} />
        <Route exact path='add_gallery/:id' element={<AdminAddGallery />} />
        <Route exact path='gallery/:id' element={<AdminGallery />} />
        <Route exact path='appointment' element={<AdminAppointment />} />
        <Route exact path='contact' element={<AdminContact />} />
      </Route>
      <Route exact path='/*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
