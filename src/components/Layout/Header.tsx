import React from "react";
import proptypes, { InferProps } from "prop-types";
import {Icon} from 'semantic-ui-react';
import styled from "styled-components";


const Panel = styled.div`
  box-shadow: 0px 0px 3px 0px gray;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 40px;
`;

const HeaderText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-grow: 10;
`;

export default function Header({
  onOpenMenu
}: InferProps<typeof Header.propTypes>) {
  return (
    <Panel>
      <Icon name="bars" size="large" onClick={() => onOpenMenu()} />
      <HeaderText> Game of Thrones </HeaderText>
    </Panel>
  );
}

Header.propTypes = {
  onOpenMenu: proptypes.func.isRequired
};
