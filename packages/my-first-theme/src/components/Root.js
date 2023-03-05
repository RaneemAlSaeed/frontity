// File: /packages/my-first-theme/src/components/index.js

import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./List";
import Post from "./post";
import "./App.css";
import Page from "./page";
import Loading from "./loading";
import Error from "./error";
import Header from "./Header";
import MainComp from "./MainComp";
import AboutComp from "./AboutComp";
import FooterComp from "./FooterComp";
import { BrowserRouter as Router } from "react-router-dom";
import externalCss from "./App.css";
import ContactPage from "./ContactPage";
const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <title>School WordPress Theme</title>
        <meta name="description" content="School WordPress Theme" />
      </Head>

      {/* <Header isPostType={data.isPostType} isPage={data.isPage}>
        <HeaderContent>
          <h1>Frontity Workshop</h1>
          {state.theme.isUrlVisible ? (
            <>
              Current URL: {state.router.link}{" "}
              <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
            </>
          ) : (
            <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
          )}
          <Menu>
            <Link link="/">Home</Link>
            <Link link="/contact/">contact</Link>
            <Link link="/about/">About Us</Link>
          </Menu>
        </HeaderContent>
      </Header> */}
      <Header />

      <div>
        <Switch>
          <Loading when={data.isFetching} />
          {/* <List when={data.isArchive} /> */}
          {/* <Page when={data.isPage} /> */}
          {/* <Post when={data.isPost} /> */}
          {/* <Page when={data.isDestinations} /> */}
          <Error when={data.isError} />
          <MainComp when={data.isHome} />
          <AboutComp when={data.route == "/about/"} />
          <ContactPage when={data.route == "/contact/"} />
        </Switch>
      </div>
      <FooterComp />
      <Global styles={css(externalCss)} />
    </>
  );
};
export default connect(Root);
