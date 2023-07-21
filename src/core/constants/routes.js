import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../../pages/login/login";
import Admin from "../../pages/admin/admin";
import ManageProduct from "../../pages/admin/features/manage-product/manage-product";
import TodoList from "../../pages/admin/features/Todo/todo-list";
export const ROUTES = createBrowserRouter([
    {
        path: 'login',
        element: <Login />
    },
    {
        path: '/',
        element: <Admin />,
        children: [
            {
                path: 'manage-product',
                element: < ManageProduct />
            },
            {
                path: 'todo',
                element: <TodoList />
            }
        ]
    },

])