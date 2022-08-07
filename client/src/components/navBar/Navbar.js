import React from "react";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./../../styles/navBar/style.css";
import LogoutButton from "../login/LogoutButton";

export default function Navbar() {
  return (
    <div className="sidebar fade-in">
      <CDBSidebar textColor="#fff" backgroundColor="#013220">
        <img src="https://i.imgur.com/r21Xyaj.png" />
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          Menu
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" className="isActive">
              <CDBSidebarMenuItem icon="tree">Garden</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/plans" className="isActive">
              <CDBSidebarMenuItem icon="table">Plans</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/calendar" className="isActive">
              <CDBSidebarMenuItem icon="calendar-alt">
                Calendar
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/share" className="isActive">
              <CDBSidebarMenuItem icon="th-large">Share</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <LogoutButton />
      </CDBSidebar>
    </div>
  );
}
