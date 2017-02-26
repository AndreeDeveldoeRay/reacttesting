/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-20T13:59:59+01:00
* @Email:  me@andreeray.se
* @Filename: TopBar.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T03:09:44+01:00
*/
var React = require('react'), {IndexLink, Link} = require('react-router')

var TopBar = (props) => {
    return (<div className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">Time App</li>
                <li> <IndexLink to="/" activeClassName="active-link">Timer</IndexLink> </li>
                <li> <Link to="/countdown">Countdown</Link></li>
            </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
                <li className="menu-text">Created by <a href="mailto:me@andreeray.se">Andree "DevelDoe" Ray</a></li>
            </ul>
        </div>
    </div>)
}

module.exports = TopBar
