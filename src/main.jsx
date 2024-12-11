import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Article from "./composants/Article.jsx";
import ErrorPage from "./composants/ErrorPage.jsx";
import Contact from "./composants/Contact.jsx";
import Emploi from "./composants/Emploi.jsx";
import Blog from "./composants/Blog.jsx";
import Erreur404 from "./composants/Erreur404.jsx";
import Protege from "./composants/Protege.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "apropos",
    element: (
      <Protege estConnecte={false}>
        <>
          <h1>A propos</h1>
          <p>Je suis un paragraphe</p>
          <Link to="/">Home</Link>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link to="/apropos/contact">Contact</Link>
            <Link to="/apropos/emploi">Emploi</Link>
          </div>
          <div>
            <Outlet />
          </div>
        </>
      </Protege>
    ),
    children: [
      {
        path: "/apropos/contact",
        element: <Contact />,
      },
      {
        path: "/apropos/emploi",
        element: <Emploi />,
      },
    ],
  },
  {
    path: "/blog",
    element: (
      <Protege estConnecte={false}>
        <Blog />
      </Protege>
    ),
  },
  {
    path: "/blog/:id",
    element: <Article />,
  },
  {
    path: "*",
    element: <Erreur404 />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
