import React, { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const PageInterceptor = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    let isAuthorized = sessionStorage.getItem("isAuthorized");
    if (!isAuthorized) {
      navigate("/login", { state: pathname });
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  )
};

export default PageInterceptor;