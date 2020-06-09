import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignInForm from '../SignInForm';
import { createMemoryHistory } from "history";
import { Router } from "react-router";

jest.mock("react-i18next")
jest.mock("../../auth")

test('All fields in a sign-in form exist', () => {
    const { getByText } = render(
        <SignInForm></SignInForm>
    );
    let requred_text_fields = ['email', 'password', "remember-me", "sign-in"];
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
            fireEvent.change(getByTestId('email-input'), {
                target: {
                  value: 'correct@email.com'
                }
              })
            fireEvent.change(getByTestId('password-input'), {
                target: {
                value: 'correct_password'
                }
            })
            fireEvent.click(getByText('sign-in'));
        })
        expect(history.location.pathname).toBe("/successful_redirect");
    })

    // it("A loading state is maintained and the progress indicator is visible while loading", () => {
    //     const testPromise = new Promise((resolve, reject) => {
    //         resolve();
    //     })
    //     await act(async() => {
    //         fireEvent.click(getByText('sign-in'));
    //     })
    //     email = getByText('email');
    //     expect(email).toBeInTheDocument();
    // })
});

// check that errors are shown