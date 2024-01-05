import {render,screen} from "@testing-library/react";
import Footer from "../Footer";

test("check for content in Footer page",()=>{
    render(<Footer/>)
    const content=screen.getByText(/About Us/i)
    expect(content).toBeInTheDocument();
})