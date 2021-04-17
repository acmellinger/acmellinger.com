import styled from "styled-components";

const Name = styled.h1`
  font-size: 50px;
  display: block;
  line-height: 1;
  color: #fff;
  margin: 0;
  @media only screen and (min-width: 768px) {
    margin: 0;
    font-size: 76px;
  }
`;
const Title = styled.h1`
  font-size: 20px;
  display: block;
  line-height: 1;
  color: #fff;
  margin-top: 10px;
  @media only screen and (min-width: 768px) {
    font-size: 34px;
  }
`;

const InfoDiv = styled.div``;

const Info = () => {
  return (
    <InfoDiv>
      <Name>{process.env.REACT_APP_NAME}</Name>
      <Title>{process.env.REACT_APP_TITLE}</Title>
    </InfoDiv>
  );
};

export default Info;
