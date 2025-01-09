import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from '../../utils/appStore';
import Header from "../Header";
import { fireEvent, render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';


it("testing login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:"login"});
    expect(loginButton).toBeInTheDocument()
})

it("testing cart items",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const cart = screen.getByText(/cart/);
    expect(cart).toBeInTheDocument()
})

it("testing login button to logout",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:"login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"logout"});
    expect(logoutButton).toBeInTheDocument()
})