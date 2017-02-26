/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T02:56:44+01:00
* @Email:  me@andreeray.se
* @Filename: parent.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T16:40:45+01:00
*/



var React = require('react'), Clock = require('Clock'), CountdownInput = require('CountdownInput')

var Countdown = React.createClass({
    getInitialState: function ()
    {
        return {
            count : 0,
            countdownStatus: 'stopped'
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus)
        {
            switch (this.state.countdownStatus)
            {
                case 'started' :
                    this.startTimer()
                    break
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(()=>{
            var newCount = this.state.count - 1
            this.setState({
                count: newCount >= 0 ? newCount : 0
            })
            console.log("interval")
        }, 1000)
    },
    handleSetCountdown: function (seconds)
    {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        })
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
