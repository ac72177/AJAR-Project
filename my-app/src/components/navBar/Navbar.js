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
import Button from './Button';
import Plan from './Plan';

export default function Navbar(props) {

    return (
        <div
        style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
                href="/"
                className="text-decoration-none"
                style={{ color: 'inherit' }}
            >
                Welcome
            </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <NavLink to="/home" className="isActive">
                    <CDBSidebarMenuItem icon="columns">My Garden</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/calendar" className="isActive">
                    <CDBSidebarMenuItem icon="table">Calendar</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/test" className="isActive">
                    <CDBSidebarMenuItem icon="th-large">Test</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/overview" className="isActive">
                    <CDBSidebarMenuItem icon="th-large">Plans</CDBSidebarMenuItem>
                </NavLink>

                <CDBSidebarMenuItem icon="plus">
                    Create Plan
                </CDBSidebarMenuItem>
                
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