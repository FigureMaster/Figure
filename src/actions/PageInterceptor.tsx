import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { PUBLIC_PATHS } from "../common/commonConstants";


const PageInterceptor = () => {
  const { pathname } = useLocation();

  const isAuthorized = sessionStorage.getItem("isAuthorized");
  const isPublicPath = PUBLIC_PATHS.includes(pathname);
  let redirect = '';

  if (!isAuthorized && !isPublicPath) {
    redirect = '/login';
  } else if (isAuthorized && isPublicPath) {
    redirect = '/';
  }


  return !!redirect ? <Navigate to={redirect} /> : <Outlet />;

};

export default PageInterceptor;