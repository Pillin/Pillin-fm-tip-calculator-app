import React from "react";
import styled from "@emotion/styled";
import { User } from "@emotion-icons/fa-solid";
import Input from "./fields/Input";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 350px;
  position: relative;
  > p {
    font-size: 12px;
    margin: 0.3em 0em;
  }
  > span {
    font-size: 12px;
    color: red;
    left: calc(100% - 120px);
    position: absolute;
  }
  > section {
    width: 100%;
  }
`;

const PeopleCount = (props) => {
  const { bill, setState = () => {} } = props;
  const [showMessage, setShowMessage] = React.useState("");

  return (
    <Container>
      <p>Number of People</p>
      <span>{showMessage}</span>
      <Input
        icon={<User />}
        inputMode="numeric"
        value={bill.peopleCount}
        error={showMessage}
        onHandleChange={(val) => {
          const newValue = val.replace(/[^0-9]/g, "");
          if (newValue === "0") {
            setShowMessage("Cant be zero");
          }
          setState({ ...bill, peopleCount: newValue });
        }}
      />
    </Container>
  );
};

export default PeopleCount;
