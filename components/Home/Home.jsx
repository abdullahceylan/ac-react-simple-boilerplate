import React from 'react';
import PropTypes from 'prop-types';
import {
  HomeWrapper, Content
} from './Home.styles';

const Home = props => {
  return (
    <HomeWrapper>
      <Content>
        AC React, next.js, styled-components and GraphQL boilerplate
      </Content>
    </HomeWrapper>
  );
};

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
