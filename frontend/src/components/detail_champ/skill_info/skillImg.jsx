import styled from 'styled-components';

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin-right: 10px;
  border-right: 1px solid #e9eff4;
`;

const ImgStyle = styled.img`
  width: 50px;
  height: 50px;
`;

function SkillImg(props) {
  return (
    <ImgDiv>
      <ImgStyle src={props.skillImg} alt=''></ImgStyle>
    </ImgDiv>
  );
}

export default SkillImg;
