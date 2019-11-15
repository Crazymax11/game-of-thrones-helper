import proptypes, { InferProps } from "prop-types";
import React, { useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import { Segment, Sidebar } from "semantic-ui-react";
import Head from 'next/head'



export default function Layout({
  children
}: InferProps<typeof Layout.propTypes>) {
  const [isNavBarVisible, toggleNavBar] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Sidebar.Pushable as={Segment}>
        <NavBar visible={isNavBarVisible} onHide={() => toggleNavBar(false)} />
        <Sidebar.Pusher dimmed={isNavBarVisible} style={{ minHeight: "100vh" }}>
          <Header onOpenMenu={() => toggleNavBar(!isNavBarVisible)} />
          <Segment basic>
            <div>
              {children}
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: proptypes.node
};

Layout.defaultPropTypes = {
  children: null
};
