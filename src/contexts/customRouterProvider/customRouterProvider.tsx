import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

//pages
import { ErrorPage, LandPage, LandPageRoot, NotFoundPage, Root } from '@/pages';

const REPO_NAME = 'Kais.Husrom';

//Router
const router = createBrowserRouter(
    createRoutesFromElements(
        //All App Routes
        <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
            <Route path='' element={<LandPageRoot />}>
                <Route path='' element={<LandPage />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
        </Route>,
    ),
    {
        basename:
            process.env.NODE_ENV === 'production'
                ? `/${REPO_NAME}` // In production, use the repository name
                : '/', // In development, use root path
    },
);

const CustomRouterProvider = () => {
    return <RouterProvider router={router} />;
};

export default CustomRouterProvider;
