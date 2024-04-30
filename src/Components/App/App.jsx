import React from "react";

import styles from "../../styles/App.module.css";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div className={styles.app}>
      <AppRoutes />
    </div>
  );
};

export default App;
