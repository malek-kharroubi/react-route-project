import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Article from "./Article.jsx";
import ErrorPage from "./ErrorPage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "apropos",
    element: (
      <>
        <h1>A propos</h1>
        <p>Je suis un paragraphe</p>
        <Link to="/">Home</Link>
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <h2>Liste des articles</h2>
        <Link to="/blog/200">Article 11</Link>
      </>
    ),
  },
  {
    path: "/blog/:id",
    element: <Article />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
