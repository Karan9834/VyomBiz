import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/company/About'));
const Media = lazy(() => import('../pages/company/Media'));
const Partner = lazy(() => import('../pages/company/Partner'));
const Carrers = lazy(() => import('../pages/Carrers'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Contact = lazy(() => import('../pages/company/Contact'));
const WorkAtVyomBiz = lazy(() => import('../components/Contact/WorkAtVyombiz'));

const Learning = lazy(() => import('../pages/resources/Learning'));
const Newsletter = lazy(() => import('../pages/resources/Newsletter'));
const Publications = lazy(() => import('../pages/resources/Publications'));

const Regulatory = lazy(() => import('../pages/regulatory/Regulatory'));
const Environmental = lazy(() => import('../pages/environmental/Environmental'));
const NotFound = lazy(() => import('../pages/error/NotFound'));
const BusinessRegistration = lazy(() => import('../pages/footer/BusinessRegistration'));

const MainRoutes = [
    <Route key="home" path="/" element={<Home />} />,
    <Route key="business-registration" path="/business-registration" element={<BusinessRegistration />} />,
    <Route key="about" path="/about" element={<About />} />,
    <Route key="career" path="/career" element={<Carrers />} />,
    <Route key="contact" path="/contact" element={<Contact />} />,
    <Route key="media" path="/media" element={<Media />} />,
    <Route key="work" path="/work-at-vyombiz" element={<WorkAtVyomBiz />} />,
    <Route key="reviews" path="/reviews" element={<Reviews />} />,
    <Route key="partner" path="/partner" element={<Partner />} />,

    <Route key="learning" path="/learning" element={<Learning />} />,
    <Route key="newsletter" path="/newsletter" element={<Newsletter />} />,
    <Route key="publications" path="/publications" element={<Publications />} />,

    <Route key="regu" path="/regulatory" element={<Regulatory />} />,
    <Route key="env" path="/environmental" element={<Environmental />} />,

    <Route key="not-found" path="*" element={<NotFound />} />,
];

export default MainRoutes;
