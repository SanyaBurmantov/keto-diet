import Main from "./pages/Main";
import Menus from "./pages/Menus";
import Dinner from "./pages/Dinner";
import Lunch from "./pages/Lunch";
import Breakfests from "./pages/Breakfests";
import Recomends from "./pages/Recomends";

export const publicRoutes = [
    {
        path: '/',
        Component: Main
    },
    {
        path: '/menus',
        Component: Menus,
        children: [
            {
                path: 'dinners',
                Component: Dinner
            },
            {
                path: 'lunch',
                Component: Lunch
            },
            {
                path: 'breakfast',
                Component: Breakfests
            },
            {
                path: 'recomends',
                Component: Recomends
            },
        ]
    },

];