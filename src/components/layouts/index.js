import Footer from './footer';
import Header from './header';

import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';


export default function Layout(){
    return (
        <>
            <Helmet>
                <title>Pcc-Bellsville</title>
            </Helmet>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
