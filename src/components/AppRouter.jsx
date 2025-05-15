import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from "../routes";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {publicRoutes.map(({ path, Component, children }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}  // Родительский компонент
                    >
                        {children?.map((child) => (
                            <Route
                                key={child.path}
                                path={child.path}
                                element={<child.Component />}
                            />
                        ))}
                    </Route>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;