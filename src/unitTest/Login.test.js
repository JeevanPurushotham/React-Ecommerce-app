import { render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Navbar from "../pages/NavBar";

test("userName input should be rendered", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
   
})