import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PageNotFound.module.scss";

interface PageNotFoundProps {}

// nice detail to include a 404 error page
const PageNotFound: FC<PageNotFoundProps> = () => {
  let location = useLocation();

  return (
    <div className={styles.ErrorPage}>
      <h1>Resourse not found at {location.pathname}</h1>
    </div>
  );
};

export default PageNotFound;
