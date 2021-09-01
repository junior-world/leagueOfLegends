import styled from 'styled-components';

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px #e9eff4;
`;

const TipDiv = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

function TipsContents(props) {
  return (
    <ContentSection>
      {props.tips.map((tip) => {
        return <TipDiv key={tip}>{tip}</TipDiv>;
      })}
    </ContentSection>
  );
}

export default TipsContents;
