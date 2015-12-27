jest.dontMock('../frontEnd/components/singin/index.jsx');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Singin = require('../frontEnd/components/singin/index.jsx');

describe("SignIn", ()=> {
    var myMock = jest.genMockFunction();
    myMock.mockReturnValue(true);
    var signin = TestUtils.renderIntoDocument(
        <Singin onAuthComplete={myMock}/>
    );


    it('will contain a Sign In button to submit', () => {
        var btn = TestUtils.findRenderedDOMComponentWithTag(signin, 'button');
        TestUtils.Simulate.click(btn);

        expect( btn.textContent).toEqual("Sign In");
        expect( btn.getAttribute('id')).toEqual("signIn");
        expect(myMock).toBeCalled();
    });

    it('will contain a Labels with right content', () => {
        var labels = TestUtils.scryRenderedDOMComponentsWithTag(signin, 'label');

        expect( labels[0].textContent).toEqual("Username");
        expect( labels[1].textContent).toEqual("Password");
    });
    it('will contain a Labels with right content', () => {
        var inputs = TestUtils.scryRenderedDOMComponentsWithTag(signin, 'input');

        expect( inputs[0].type).toEqual("text");
        expect( inputs[0].getAttribute('id')).toEqual("username");
        expect( inputs[1].type).toEqual("password");
        expect( inputs[1].getAttribute('id')).toEqual("password");
    });
});