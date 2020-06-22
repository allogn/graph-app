import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignInForm from '../SignInForm';
import { createMemoryHistory } from "history";
import { Router } from "react-router";

jest.mock("react-i18next")
jest.mock("../../auth")

beforeEach(() => {
    jest.useFakeTimers();
});

test('All fields in a sign-in form exist', () => {
    const { getByText } = render(
        <SignInForm></SignInForm>
    );
    let requred_text_fields = ['email', 'password', "remember me", "sign-in"];
    requred_text_fields.forEach(f => expect(getByText(f)).toBeInTheDocument());
});

describe("Submit button works properly", () => {
    test("A successful resolve method redirects the user", async () => {
        const history = createMemoryHistory();
        history.push('/login')
        const { getByText, getByTestId } = render(
            <Router history={history}>
                <SignInForm></SignInForm>
            </Router>
        );
        await act(async() => {
            fireEvent.change(getByTestId('email'), {
                target: { value: 'correct@email.com' }
              })
            fireEvent.change(getByTestId('password'), {
                target: { value: 'correct_password' }
            })
        });
        await act(async() => {
            fireEvent.click(getByText('sign-in'));
        });
        await act(async() => {
            jest.runAllTimers(); // timer run must be separate and must be await/async (otherwise history update does not work)
        })
        expect(history.location.pathname).toBe("/successful_redirect");
        expect(getByText('sign-in')).toBeDisabled(); 
    })

    test("While submitting, the submit button is disabled", async () => {
        const history = createMemoryHistory();
        const { getByText, getByTestId } = render(
            <Router history={history}>
                <SignInForm></SignInForm>
            </Router>
        );
        await act(async() => {
            fireEvent.change(getByTestId('email'), {
                target: { value: 'correct@email.com' }
              })
            fireEvent.change(getByTestId('password'), {
                target: { value: 'correct_password' }
            })
        });
        await act(async() => {
            fireEvent.click(getByText('sign-in'));
        });
        expect(getByText('sign-in')).toBeDisabled();
    })
});

// check that errors are shown if not filled
// check remember me
// test error outputs from server
// check timeout
// check that button is active if errors 