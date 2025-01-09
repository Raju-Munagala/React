import { render,screen } from "@testing-library/react"
import Card from "../Card"
import cardData from "../mocks/cardMock.json"
import "@testing-library/jest-dom"

it("testing card loading",()=>{
    render(<Card resData={cardData}/>)

    const card = screen.getByText(cardData.info.name);

    expect(card).toBeInTheDocument()
})