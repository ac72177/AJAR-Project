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

export default function Navbar(props) {
  return (
    <div className="sidebar">
      <CDBSidebar textColor="#fff" backgroundColor="#013220">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          plan+
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" className="isActive">
              <CDBSidebarMenuItem icon="table">Garden</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/plans" className="isActive">
              <CDBSidebarMenuItem icon="table">Plans</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/calendar" className="isActive">
              <CDBSidebarMenuItem icon="th-large">Calendar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/share" className="isActive">
              <CDBSidebarMenuItem icon="th-large">Share</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
            <LogoutButton />
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}
