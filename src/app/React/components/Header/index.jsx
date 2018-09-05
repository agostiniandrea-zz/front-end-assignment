import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import './Header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="page-header">
                <header id="top">
                    <div className="row">
                        <div className="col-md-4 left-from-header-text"></div>
                        <div className="col-md-4">
                            <span className="mark-script mark-script-h4 mark-script-white">Here is the Medium</span>
                        </div>
                        <div className="col-md-4 right-from-header-text"></div>
                    </div>
                </header>
            </header>
        );
    }
}

/* Header.propTypes = {

}; */