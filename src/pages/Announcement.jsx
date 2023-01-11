import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: white;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
 
`;

const Announcement = () => {
  return <Container >
    <marquee> Super Deal! Free Shipping on Orders Over Rs.2800</marquee>
  </Container>;
};

export default Announcement;