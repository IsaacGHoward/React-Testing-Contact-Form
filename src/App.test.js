// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App'
import { fireEvent, render, screen } from '@testing-library/react';
import 'mutationobserver-shim';
test("App renders", () => {
    render(<App/>);
})
test("First name entry works", () => {
    render(<App/>);
    const firstName = screen.getByPlaceholderText("Edd");
    fireEvent.change(firstName, {target: {value : 'Test Name'}})
    expect(firstName.value).toBe('Test Name');
})
test("Last name entry works", () => {
    render(<App/>);
    const lastName = screen.getByPlaceholderText("Burke");
    fireEvent.change(lastName, {target: {value : 'Last Name'}})
    expect(lastName.value).toBe('Last Name');
})
test("Email entry works", () => {
    render(<App/>);
    const email = screen.getByPlaceholderText("bluebill1049@hotmail.com");
    fireEvent.change(email, {target: {value : 'test@test.com'}})
    expect(email.value).toBe('test@test.com');
})
