import proptypes, { InferProps } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import NavBar from "./NavBar";
import { Segment, Sidebar } from "semantic-ui-react";



const ContentWrapper = styled.div``;

export default function Layout({
  children
}: InferProps<typeof Layout.propTypes>) {
  const [isNavBarVisible, toggleNavBar] = useState(false);
  return (
    <Sidebar.Pushable as={Segment}>
      <NavBar visible={isNavBarVisible} onHide={() => toggleNavBar(false)} />
      <Sidebar.Pusher dimmed={isNavBarVisible} style={{minHeight: '100vh'}}>
        <Header onOpenMenu={() => toggleNavBar(!isNavBarVisible)} />
        <Segment basic>
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
