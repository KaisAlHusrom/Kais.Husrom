import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

//pages
import { ErrorPage, LandPage, LandPageRoot, NotFoundPage, Root } from '@/pages';

import config from '../../../config.json';
const REPO_NAME = config.DEPO_NAME;

//Router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
            <Route path='' element={<LandPageRoot />}>
                <Route path='' element={<LandPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Route>,
    ),
    {
        basename: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}` : '/',
    },
);

const CustomRouterProvider = () => {
    return <RouterProvider router={router} />;
};

export default CustomRouterProvider;
