// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Following code mocks window.console.error
// to ignore the "Not implemented: HTMLFormElement.prototype.submit".
//
// Problem: We use "form.onsubmit" event listener in some tests,
// but HTMLFormElement.prototype.submit is not implemented in JSDOM,
// although the tests are passing and handler fires.
//
// More:
// https://github.com/jsdom/jsdom/issues/1937
// https://github.com/facebook/jest/issues/5223#issuecomment-489422244

let origErrorConsole: (args?: any[]) => void;

beforeEach(() => {
    origErrorConsole = window.console.error;

    window.console.error = (...args: any[]) => {
        const firstArg = args.length > 0 && args[0];

        const shouldBeIgnored =
            firstArg &&
            typeof firstArg === 'string' &&
            firstArg.includes('Not implemented: HTMLFormElement.prototype.submit');

        if (!shouldBeIgnored) {
            origErrorConsole(...args);
        }
    };
});

afterEach(() => {
    window.console.error = origErrorConsole;
});
