import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Body from "../Body"
import "@testing-library/jest-dom"
import axios from "axios"
import MOCK_DATA from "../mocks/resCards.json"
import { BrowserRouter } from "react-router-dom"

jest.mock("axios");

it("testing search feature",async ()=>{
    axios.get.mockResolvedValue({ data: MOCK_DATA });
    await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>))
    const initLength = MOCK_DATA?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.length

    const finalLength = MOCK_DATA?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(res=>res?.info?.name?.toLowerCase()?.includes("pizza")).length;

    const initialCards = screen.getAllByTestId("resCard");

    expect(initialCards.length).toBe(initLength);

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value:"Pizza"}});

    const searchButton = screen.getByRole("button",{name:"search"});

    fireEvent.click(searchButton);

    const finalCards = screen.getAllByTestId("resCard");

    expect(finalCards.length).toBe(finalLength);

    expect(searchInput).toBeInTheDocument();
})