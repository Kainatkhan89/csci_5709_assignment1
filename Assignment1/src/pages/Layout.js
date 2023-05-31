import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';
import Home from '../pages/Home';


export default function()
{
    return(
        <>
        <header>
            <NavBar/>
        </header>
        <Outlet />
        </>
    );
}