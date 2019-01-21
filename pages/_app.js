import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { withApolloClient } from '@api';

class ACApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Container>
          <Head>
            <title>AC React, next.js, GraphQL Boilerplate</title>
          </Head>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(ACApp);
