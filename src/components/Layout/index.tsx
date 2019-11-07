import proptypes, { InferProps } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import NavBar from "./NavBar";
import { Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

const NavBarWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  position: absolute;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: gray;
  opacity: 0.5;
`;

const LayoutWrapper = styled.div`
  position: relative;
`;
const ContentWrapper = styled.div`

`;
export default function Layout({
  children
}: InferProps<typeof Layout.propTypes>) {
  const [isNavBarVisible, toggleNavBar] = useState(false);
  return (
    <Sidebar.Pushable as={Segment}>
      <NavBar visible={isNavBarVisible} onHide={() => toggleNavBar(false)} />

      <Sidebar.Pusher dimmed={isNavBarVisible}>
        <Segment basic>
          <Header onOpenMenu={() => toggleNavBar(!isNavBarVisible)} />
          <div>
            <ContentWrapper>{children}</ContentWrapper>
          </div>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

Layout.propTypes = {
  children: proptypes.node
};

Layout.defaultPropTypes = {
  children: null
};
