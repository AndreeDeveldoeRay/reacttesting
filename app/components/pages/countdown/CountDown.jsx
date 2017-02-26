/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T02:56:44+01:00
* @Email:  me@andreeray.se
* @Filename: parent.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T15:14:33+01:00
*/



var React = require('react'), Clock = require('Clock'), CountdownInput = require('CountdownInput')

var Countdown = React.createClass({
    getInitialState: function ()
    {
        return { count : 0 }
    },
    handleSetCountdown: function (seconds)
    {
        this.setState({ count: seconds })
    },
    render: function ()
    {
        var {count} = this.state
        return (<div>
            <Clock totalSeconds={count}/>
            <CountdownInput onSetCountdown={this.handleSetCountdown}/>
        </div>)
    }
})

module.exports = Countdown
