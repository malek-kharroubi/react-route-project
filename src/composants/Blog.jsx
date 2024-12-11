import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <h2>Liste des articles</h2>
      <Link to="/blog/200">Article 11</Link>
    </div>
  );
}
