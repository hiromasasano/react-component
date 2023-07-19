import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom-v5-compat";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useNavigate();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history("/users");
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
