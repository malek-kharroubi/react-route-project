import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <h2>Liste des articles</h2>
      <div className="containeur">
        <div className="article">
          <h3>Article 1</h3>
          <Link to="/blog/1">Lire l'article</Link>
        </div>
      </div>
    </div>
  );
}
