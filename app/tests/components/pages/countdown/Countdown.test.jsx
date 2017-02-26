/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T16:41:43+01:00
* @Email:  me@andreeray.se
* @Filename: Countdown.test.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T23:00:48+01:00
*/


var expect = require('expect'), React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), $ = require('jQuery'), Countdown = require('Countdown')

describe('Countdown', () =>
{
    it('Should exist', () =>
    {
        expect(Countdown).toExist()
    })
    describe('handleSetCountdown', () =>
    {
        it('Should set state to started and it to start the countdown', (done) =>
        {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(10)
            expect(countdown.state.count).toBe(10)
            expect(countdown.state.countdownStatus).toBe('started')
            setTimeout(() => {
                expect(countdown.state.count).toBe(9)
                done()
            }, 1001)
        })
        it('Count should be 0', (done) =>
        {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(1)
            setTimeout(() => {
                expect(countdown.state.count).toBe(0)
                done()
            }, 3000)
        })
        it('Should pause countdown on paused status', (done) =>
        {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(3)
            countdown.handleStatusChange('paused')
            setTimeout( () => {
                expect(countdown.state.count).toBe(3)
                expect(countdown.state.countdownStatus).toBe('paused')
                done()
            }, 1001)
        })
        it('Should stop countdown on stopped status', (done) =>
        {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(3)
            countdown.handleStatusChange('stopped')
            setTimeout( () => {
                expect(countdown.state.count).toBe(0)
                expect(countdown.state.countdownStatus).toBe('stopped')
                done()
            }, 1001)
        })
    })
})
