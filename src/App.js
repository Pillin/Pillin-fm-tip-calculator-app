import React, { useState } from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";

import BillTotal from "./components/BillTotal";
import SelectTip from "./components/SelectTip";
import PeopleCount from "./components/PeopleCount";
import TotalPayment from "./components/TotalPayment";
import { theme } from "./theme";
import "./styles.css";

const Container = styled.section`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  width: 100%;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: column;
  padding: 24px;
  height: 100%;
  @media screen and (min-width: 769px) {
    flex-wrap: wrap;
    width: 720px;
    height: 350px;
  }
`;

const Body = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  font-family: "Space Mono";
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightNeutralColor};
  flex-direction: column;
  overflow: scroll;
`;

const InitialState = {
  peopleCount: 1,
  tip: 0,
  total: 0.0,
  totalPayment: 0.0
};

export default function App() {
  const [bill, setBill] = useState({
    peopleCount: 5,
    tip: 15,
    total: 142.55,
    totalPayment: 0.0
  });

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Container>
          <BillTotal bill={bill} setState={setBill} />
          <SelectTip setState={setBill} bill={bill} />
          <PeopleCount bill={bill} setState={setBill} />
          <TotalPayment
            bill={bill}
            onHandleClick={() => setBill(InitialState)}
          />
        </Container>
      </Body>
    </ThemeProvider>
  );
}
