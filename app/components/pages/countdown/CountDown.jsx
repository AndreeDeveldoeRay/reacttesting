/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T02:56:44+01:00
* @Email:  me@andreeray.se
* @Filename: parent.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T21:33:51+01:00
*/



var React = require('react'), Clock = require('Clock'), CountdownInput = require('CountdownInput'), Controls = require('Controls')

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
                case 'stoped' :
                    this.setState({count:0})
                case 'paused' :
                    clearInterval(this.timer)
                    this.timer = undefined
                    break;
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(()=>{
            var newCount = this.state.count - 1
            this.setState({
                count: newCount >= 0 ? newCount : 0
            })
        }, 1000)
    },
    handleSetCountdown: function (seconds)
    {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        })
    },
    handleStatusChange: function (newStatus)
    {
        this.setState({countdownStatus:newStatus})
    },
    render: function ()
    {
        var {count,countdownStatus} = this.state
        var renderControlArea = () =>
        {
            if (countdownStatus !== 'stopped')
            {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            }
            else
            {
                return <CountdownInput onSetCountdown={this.handleSetCountdown}/>
            }
        }
        return (<div>
            <Clock totalSeconds={count}/>
            {renderControlArea()}
        </div>)
    }
})

module.exports = Countdown
