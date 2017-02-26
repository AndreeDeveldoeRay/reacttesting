/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T03:16:41+01:00
*/

var React                                       = require('react'),
    ReactDOM                                    = require('react-dom'),
    Main                                        = require('Main'),
    TopBar                                      = require('TopBar'),
    Timer                                       = require('Timer'),
    CountDown                                   = require('CountDown'),
    {
        Route,
        Router,
        IndexRoute,
        hashHistory
    }                                           = require('react-router')

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation()

//app css
require('style!css!sass!styles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Timer}/>
            <Route path="/countdown" component={CountDown}/>
        </Route>
    </Router>,
    document.getElementById('app')
)
