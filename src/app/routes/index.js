import React, { Component } from 'react';
import HomePage from 'PagesContainers/HomePage';
import handler from '../handler';
import Store from 'Store';

//## Routes
/**
* These are the routes of the app and the Parent component is the parent of all the routes
* The route params are:
* * path: is the path of the route
* * getComponent: assures that principal component of the page gets split into another chunk and than imported only when the relative route is active
* * routeParams: are the params send to the Parent. These are the params that can change from a route to another
*/
class Parent extends Component {
    render() {
        if (Store.getState().loading) {
            return null;
        } else {
            return <HomePage />;
        }
    }
}

export default {
    getComponent: (nextState, cb) => {
        if (nextState.location.pathname == '/') {
            cb(null, null);
            return;
        }
        handler(nextState)
            .then(() => {
                cb(null, Parent);
            })
            .catch((error) => {
                if (error) {
                    console.log(error);
                }
            });
    },
    indexRoute: {
        onEnter: (/* nextState, replace */) => {
            console.log('indexRoute');
        }
    },
    childRoutes: getChilds()
};

export const paramNames = ['id'];

function getChilds() {
    let children = [
        {
            path: '/',
            section: null,
            indexRoute: {
                onEnter: (nextState, replace) => {
                    replace('/id/MUS1/');
                }
            }
        },
        {
            path: '/id/:id',
            section: 'homepage',
            indexRoute: {
                onEnter: () => {
                    //to do
                }
            }
        }
    ];
    return children;
}