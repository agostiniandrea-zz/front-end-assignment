import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from 'Containers/PageWrapper';

import './HomePage.scss';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value0: '',
            value1: '',
            value2: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, i) {
        this.setState({ ['value' + i]: event.target.value });
    }

    handleSubmit(event, i) {
        //alert('A name was submitted: ' + this.state.value);
        this.props.setAnswer(this.props.text, i, this.state['value' + i]);
        event.preventDefault();
    }

    render() {
        if (this.props.loading) {
            return null;
        }
        return (
            <PageWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-center m-b-lg">
                            <img src="amanda/images/amanda-profile-large.png" alt="" className="fadeout" />
                            <br />
                            <img src="amanda/images/amanda-signature.png" alt="" className="fadeout" />

                            <div id="chat-side-text">
                                <span className="mark-script mark-script-white" style={{ 'fontSize': '1.3em' }}>
                                    {this.props.fullName} is groot in helderziendheid. <br /> Zij heetft duidelijke inzichten en weet wat 2018 gaat brengen
                            </span>
                            </div>
                        </div>
                        <div className="col-md-6 p-b-lg center-block clearfix">
                            <div className="col-sm-12 col-md-12 col-lg-12 clearfix jsm-force-redraw">
                                <div className="application-container" style={{ 'fontSize': '16px' }}>
                                    <div className="chat-header">
                                        <div className="header-on-off">
                                            <span className="menu-button">
                                                <i id="header-power-light" className="fas fa-circle light-on"></i>
                                            </span>
                                        </div>
                                        <div id="title" className="header-title mark-script mark-script-h4 mark-script-white">{this.props.fullName}</div>
                                        <div className="header-menu-buttons">
                                            <span className="menu-button">
                                                <i id="header-user" className="fas fa-user-friends icon-on"></i>
                                            </span>
                                            <span className="menu-button">
                                                <i id="header-video" className="fas fa-video icon-off"></i>
                                            </span>
                                            <span className="menu-button">
                                                <i id="header-phone" className="fas fa-phone icon-off"></i>
                                            </span>
                                            <span className="menu-button">
                                                <i id="header-setting" className="fas fa-cog icon-on"></i>
                                            </span>
                                            <span className="menu-button">
                                                <i id="header-exit" className="fas fa-times icon-on"></i>
                                            </span>
                                        </div>
                                    </div>
                                    {this.props.research && this.props.research[0] && <div className="chat-body">
                                        <ul className="messages">
                                            <li className="medium">
                                                <div className="msg">{this.props.research[0].question}</div>
                                            </li>
                                        </ul>
                                    </div>}
                                    {this.props.research && this.props.research[0] && <div className="chat-footer-form-input">
                                        <div className="form-action-pane">
                                            <div className="form-input">
                                                <form id="registration-data-form" onSubmit={(e) => this.handleSubmit(e, 0)}>
                                                    <input
                                                        type="text"
                                                        value={this.state.value0}
                                                        onChange={(e) => this.handleChange(e, 0)}
                                                    />
                                                    <input type="submit" value="Submit" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="custom-action-pane hidden"></div>
                                    </div>}
                                    {this.props.research && this.props.research[1] && <div className="chat-body">
                                        <ul className="messages">
                                            <li className="medium">
                                                <div className="msg">{this.props.research[1].question}</div>
                                            </li>
                                        </ul>
                                    </div>}
                                    {this.props.research && this.props.research[1] && <div className="chat-footer-form-input">
                                        <div className="form-action-pane">
                                            <div className="form-input">
                                                <form id="registration-data-form" onSubmit={(e) => this.handleSubmit(e, 1)}>
                                                    <input
                                                        type="text"
                                                        value={this.state.value1}
                                                        onChange={(e) => this.handleChange(e, 1)}
                                                    />
                                                    <input type="submit" value="Submit" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="custom-action-pane hidden"></div>
                                    </div>}
                                    {this.props.research && this.props.research[2] && <div className="chat-body">
                                        <ul className="messages">
                                            <li className="medium">
                                                <div className="msg">{this.props.research[2].question}</div>
                                            </li>
                                        </ul>
                                    </div>}
                                    {this.props.research && this.props.research[2] && <div className="chat-footer-form-input">
                                        <div className="form-action-pane">
                                            <div className="form-input">
                                                <form id="registration-data-form" onSubmit={(e) => this.handleSubmit(e, 2)}>
                                                    <input
                                                        type="email"
                                                        value={this.state.value2}
                                                        onChange={(e) => this.handleChange(e, 2)}
                                                    />
                                                    <input type="submit" value="Submit" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="custom-action-pane hidden"></div>
                                    </div>}
                                    {this.props.research && this.props.research.length === this.props.text.length &&
                                        this.props.research[0].answer && this.props.research[1].answer && this.props.research[2].answer &&
                                        <button onClick={() => this.props.sendAnswers(this.props.research)}>SEND ALL ANSWERS</button>}
                                    <div className="chat-footer">
                                        <div className="footer-menu-buttons-left">
                                            <span className="menu-button">
                                                <i id="footer-camera" className="fas fa-camera icon-off"></i>
                                            </span>
                                            <span className="menu-button">
                                                <i id="footer-emoji" className="fas fa-smile icon-off"></i>
                                            </span>
                                            <span className="menu-button">
                                                <i id="footer-paperclip" className="fas fa-paperclip icon-off"></i>
                                            </span>
                                        </div>
                                        <div className="footer-menu-buttons-right">
                                            <span className="menu-button">
                                                <i id="footer-thumb" className="fas fa-thumbs-up icon-off"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-center center-block p-b-lg clearfix">
                            <div className="col-sm-12 col-md-12 col-lg-12 clearfix">
                                <div className="text-center">
                                    <div className="timer center-block">
                                        <div className="timer-header text-center">
                                            <div id="timer-header" className="timer-header text-center mark-script-h3"></div>
                                        </div>
                                        <div className="timer-body">
                                            <span id="timer-text">
                                                {/* <span id="minutes">
                                                    <span id="chat-timer">14:56</span>
                                                </span> */}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    }
}

HomePage.propTypes = {
    text: PropTypes.array,
    fullName: PropTypes.string,
    loading: PropTypes.bool,
    research: PropTypes.array,
    setAnswer: PropTypes.func
};