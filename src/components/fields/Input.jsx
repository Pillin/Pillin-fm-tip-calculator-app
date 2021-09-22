import styled from "@emotion/styled";

const Container = styled.section`
  position: relative;
  max-width: ${({ maxw }) => (maxw ? `${maxw}` : `100%`)};
  @media (min-width: 769px) {
    max-width: ${({ maxw }) => (maxw ? `${maxw}` : `100%`)};
  }
`;

const InputElement = styled.input`
  padding: 8px 8px 8px 24px;
  border-color: ${({ theme, error }) => (error ? "red" : theme.colors.primary)};
  border-radius: 4px;
  text-align: end;
  width: 100%;
  font-weight: 700;
  color: ${({ theme }) => theme.darkNeutralColor1};
  border-style: solid;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme }) => theme.colors.lightNeutralColor1};
  ::before {
    content: attr(data-icon);
  }

  :invalid {
    border-color: red;
  }
`;
const IconElement = styled.div`
  width: 8px;
  height: 8px;
  position: absolute;
  z-index: 2;
  left: 16px;
  top: 6px;
  color: ${({ theme }) => theme.colors.darkNeutralColor2};
`;
const Input = (props) => {
  const {
    value,
    icon,
    pattern,
    onHandleChange,
    type = "text",
    inputMode,
    maxw = "320px",
    error = ""
  } = props;

  return (
    <Container maxw={maxw}>
      {icon && <IconElement>{icon}</IconElement>}
      <InputElement
        data-icon={icon}
        onChange={(e) => onHandleChange(e.target.value)}
        value={value}
        type={type}
        error={error}
        maxw={maxw}
        pattern={pattern}
        inputmode={inputMode}
      />
    </Container>
  );
};

export default Input;
