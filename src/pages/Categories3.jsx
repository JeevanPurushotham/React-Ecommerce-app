import styled from "styled-components";
import { popularProducts } from "../data";
import Categories2 from "./Categories2";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Categories3 = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Categories2 item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Categories3;