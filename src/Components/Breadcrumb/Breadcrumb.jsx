import React from 'react';
import './Breadcrumb.css';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path);

  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-link">Home</Link>
      {paths.map((path, index) => {
        const fullPath = `/${paths.slice(0, index + 1).join('/')}`;
        return (
          <React.Fragment key={index}>
            <span className="breadcrumb-separator">/</span>
            <Link to={fullPath} className="breadcrumb-link">
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
