import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './../../styles/navBar/style.css'

export default function Navbar(props) {

    return (
        <div className="sidebar">
            <CDBSidebar textColor="#fff" backgroundColor="#013220">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <a
                    href="/home"
                    className="sidebar-header"
                >
                    My Garden
                </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/calendar" className="isActive">
                            <CDBSidebarMenuItem icon="table">Calendar</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/test" className="isActive">
                            <CDBSidebarMenuItem icon="th-large">Test</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/overview" className="isActive">
                            <CDBSidebarMenuItem icon="th-large">Plans</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter>
                <NavLink to="/profile" className="isActive">
                    <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                    </NavLink>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
}