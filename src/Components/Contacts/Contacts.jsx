import React from "react";

import Header from "../Header/Header";

import styles from "../../styles/Contacts/Contacts.module.css";
import Neck from "./Neck/Neck";
import Collarbones from "./Collarbones/Collarbones";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <Header />
      <Neck />
      <Collarbones />
    </div>
  );
};

export default Contacts;
