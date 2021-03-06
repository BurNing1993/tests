import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: #1890ff;
  color: #fafafa;
  height: 45px;
  font-size: 18px;
  padding: 0 10px;
`;

const Title = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  flex-grow: 1;
`;

const AppHeader = ({ title, leftIcon, rightIcon }: Props) => {
  return (
    <Wrapper>
      {leftIcon}
      <Title>{title}</Title>
      {rightIcon}
    </Wrapper>
  );
};

export default AppHeader;
