import React from "react";

import { Route, Router, Routes } from "react-router-dom";
import Home from "../Main/Home/Home";
import Menu from "./Menu/Menu";
import Repair from "../Projects/Projects/Repair/Repair";
import Projects from "../Projects/Projects/Projects";

import FirstProject from "../Projects/Projects/FirstProject/FirstProject";
import Process from "../Projects/Projects/FirstProject/PROCESS/Process";
import Fix from "../Fix/Fix";
import Design from "../Design/Design";
import DesignService from "../DesignService/DesignService";
import FixService from "../FixService/FixService";
import Contacts from "../Contacts/Contacts";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/firstproject" element={<FirstProject />} />
        <Route path="/firstproject/process" element={<Process />}></Route>
        <Route path="/projects/fix" element={<Fix />} />
        <Route path="/projects/design" element={<Design />}></Route>
        <Route
          path="/projects/design_service"
          element={<DesignService />}
        ></Route>
        <Route path="/projects/fix_service" element={<FixService />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
