import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 35px;
  background-color: white;
  border-bottom: solid 1px #e9eff4;
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  font-weight: bold;
  font-style: italic;
  margin: 0px;
  margin-left: 20px;
`;

function DefaultHeader(props) {
  return (
    <Header>
      <Title>{props.headerTitle}</Title>
    </Header>
  );
}

export default DefaultHeader;
