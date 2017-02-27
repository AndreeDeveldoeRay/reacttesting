/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-27T01:18:45+01:00
* @Email:  me@andreeray.se
* @Filename: timer.test.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-27T01:25:54+01:00
*/



var expect = require('expect'), React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), $ = require('jQuery'), Timer = require('Timer')

describe('Timer', () =>
{
    it('Should Exist', () =>
    {
        expect(Timer).toExist()
    })
    it('Shoud start timer on started status', (done) =>
    {
        var timer = TestUtils.renderIntoDocument(<Timer/>)
        timer.handleStatusChange('started')
        expect(timer.state.count).toBe(0)
        setTimeout(() =>
        {
            expect(timer.state.timerStatus).toBe('started')
            expect(timer.state.count).toBe(1)
            done()
        },1001)
    })
    it('Shoud pause timer on paused status', (done) =>
    {
        var timer = TestUtils.renderIntoDocument(<Timer/>)
        timer.setState({count:10})
        timer.handleStatusChange('started')
        timer.handleStatusChange('paused')

        setTimeout(() =>
        {
            expect(timer.state.timerStatus).toBe('paused')
            expect(timer.state.count).toBe(10)
            done()
        },1001)
    })
    it('Shoud clear count on stopped status', (done) =>
    {
        var timer = TestUtils.renderIntoDocument(<Timer/>)
        timer.setState({count:10})
        timer.handleStatusChange('started')
        timer.handleStatusChange('stopped')

        setTimeout(() =>
        {
            expect(timer.state.timerStatus).toBe('stopped')
            expect(timer.state.count).toBe(0)
            done()
        },1001)
    })
})
