/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T03:29:55+01:00
* @Email:  me@andreeray.se
* @Filename: Clock.test.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T04:07:18+01:00
*/



var React       = require('react'),
    ReactDOM    = require('react-dom'),
    expect      = require('expect'),
    $           = require('jQuery'),
    TestUtil    = require('react-addons-test-utils')

var Clock = require('Clock')

describe('Clock', () =>
{
    it('Should Exist', () =>
    {
        expect(Clock).toExist()
    })
    describe('formatSeconds', () =>
    {
        it('Should format seconds', () =>
        {
            var clock = TestUtil.renderIntoDocument(<Clock/>),
                seconds = 615,
                expected = '10:15',
                actual = clock.formatSeconds(seconds)

            expect(actual).toBe(expected)
        })
        it('Should format seconds when min/sec are less than 10', () =>
        {
            var clock = TestUtil.renderIntoDocument(<Clock/>),
                seconds = 61,
                expected = '01:01',
                actual = clock.formatSeconds(seconds)

            expect(actual).toBe(expected)
        })
    })
    describe('render', () =>
    {
        it('should render clock to output', () =>
        {
            var clock       = TestUtil.renderIntoDocument(<Clock totalSeconds={62}/>),
                $el         = $(ReactDOM.findDOMNode(clock)),
                actualText  = $el.find('.clock-text').text()

            expect(actualText).toBe('01:02')
        })
    })
})
