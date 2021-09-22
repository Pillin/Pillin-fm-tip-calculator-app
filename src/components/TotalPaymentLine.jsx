import styled from "@emotion/styled";

const PaymentLine = styled.section`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 200px;
  justify-content: flex-start;

  > p {
    font-size: 12px;
    padding-top: 12px;
    font-weight: 700;
    margin: 0.3em 0em;
    min-width: 90px;
    color: ${({ theme }) => theme.colors.lightNeutralColor1};
  }

  > span {
    font-size: 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkNeutralColor2};
  }

  > div {
    justify-content: center;
    align-self: flex-end;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 42px;
    height: 50px;
  }
`;

const TotalPaymentLine = (props) => {
  const { title, subtitle, value } = props;
  return (
    <PaymentLine>
      <p>{title}</p>
      <span>{subtitle}</span>
      <div>${value.toFixed(2)}</div>
    </PaymentLine>
  );
};

export default TotalPaymentLine;
