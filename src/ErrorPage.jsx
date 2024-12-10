import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h2>Il y a une erreur</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
