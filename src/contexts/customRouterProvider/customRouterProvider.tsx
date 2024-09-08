import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom'

//pages
import { ErrorPage, LandPage, LandPageRoot, NotFoundPage, Root } from '@/pages';

//Router
const router = createBrowserRouter(
    createRoutesFromElements(
        //All App Routes
        <Route path='/' element={<Root />} errorElement={<ErrorPage />} >


            <Route path='' element={<LandPageRoot />}>
                <Route path='' element={<LandPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
)


const CustomRouterProvider = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default CustomRouterProvider;