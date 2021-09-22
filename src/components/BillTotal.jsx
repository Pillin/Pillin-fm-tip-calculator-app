import styled from "@emotion/styled";
import Input from "./fields/Input";
import { DollarSign } from "@emotion-icons/fa-solid";

const Container = styled.section`
  > p {
    font-size: 12px;
    margin: 0.3em 0em;
  }
`;

const BillTotal = (props) => {
  const { setState, bill } = props;
  return (
    <Container>
      <p>Bill</p>
      <Input
        onHandleChange={(val) => {
          const newVal = val.replace(/[^0-9.]/g, "");
          setState({ ...bill, total: newVal });
        }}
        inputMode="numeric"
        value={bill.total}
        icon={<DollarSign />}
      />
    </Container>
  );
};

export default BillTotal;
