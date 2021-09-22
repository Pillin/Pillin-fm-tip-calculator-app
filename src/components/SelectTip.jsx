import styled from "@emotion/styled";
import Tip from "./Tip";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 350px;
  width: 100%;
  padding: 12px 0px;
  > p {
    width: 100%;
    font-size: 12px;
    margin: 0.3em 0em;
  }
`;

const SelectType = (props) => {
  const { bill, setState } = props;
  return (
    <Container>
      <p>Select Tip %</p>
      {[5, 10, 15, 25, 50].map((elem, index) => (
        <Tip
          key={`tip-${index}`}
          onHandleClick={(val) => setState({ ...bill, tip: val })}
          value={elem}
          isSelected={bill.tip === elem}
        />
      ))}

      <Tip
        isCustom
        value={bill.tip}
        onHandleClick={(val) => setState({ ...bill, tip: val })}
      />
    </Container>
  );
};

export default SelectType;
