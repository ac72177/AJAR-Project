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
import AuthNav from '../auth/AuthNav';
import {useAuth0} from "@auth0/auth0-react";

export default function Navbar(props) {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated && (
        <div className="sidebar">
            <CDBSidebar textColor="#fff" backgroundColor="#013220">

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                            <a
                                href="/home"
                                className="sidebar-header"
                            >
                                My Garden
                            </a>
                        </CDBSidebarHeader>
                        <NavLink to="/calendar" className="isActive">
                            <CDBSidebarMenuItem icon="table">Calendar</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/test" className="isActive">
                            <CDBSidebarMenuItem icon="th-large">Test</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/overview" className="isActive">
                            <CDBSidebarMenuItem icon="th-large">Plans</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/profile" className="isActive">
                            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>


                <CDBSidebarFooter>
                    <AuthNav />
                </CDBSidebarFooter>
            </CDBSidebar>

        </div>
    );
}