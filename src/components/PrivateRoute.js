import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={(props)=> {
            if (window.localStorage.getItem('token')) {
                return <Component {...props} />
            }
            else {
                return <Redirect to="/" />
            }
        }} 
            
        
        />
    )
}








//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in