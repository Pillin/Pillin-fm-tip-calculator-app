import TotalPaymentLine from "./TotalPaymentLine";
import styled from "@emotion/styled";

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.darkNeutralColor};
  padding: 24px;
  border-radius: 12px;
  height: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px 0px;

  @media screen and (min-width: 769px) {
    width: 320px;
    margin: 0px;
  }
`;

const ResetButton = styled.button`
  width: 100%;
  font-weight: 700;
  text-transform: uppercase;
  padding: 8px 0px;
  border: 0px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.darkNeutralColor};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightNeutralColor};
    color: ${({ theme }) => theme.colors.darkNeutralColor};
  }
`;

const TotalPayment = (props) => {
  const { bill, onHandleClick } = props;
  return (
    <Container>
      <section>
        <TotalPaymentLine
          title="Tip Amount"
          subtitle="/ person"
          value={
            (bill.tip * bill.total) /
            (100 * (bill.peopleCount <= 0 ? 1 : bill.peopleCount))
          }
        />
        <TotalPaymentLine
          title="Total"
          subtitle="/ person"
          value={(bill.tip * bill.total) / 100}
        />
      </section>

      <ResetButton onClick={() => onHandleClick()}>Reset</ResetButton>
    </Container>
  );
};

export default TotalPayment;
