import styled from "styled-components";
import { useNavigate } from "react-router-dom-v5-compat";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useNavigate();
  const onClickAdmin = () => {
    history({ pathname: "/users", state: { isAdmin: true } });
  };
  const onClickGeneral = () => {
    history({ pathname: "/users", state: { isAdmin: false } });
  };
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
