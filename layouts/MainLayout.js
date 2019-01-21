import React from 'react';
import Link from 'next/link';
import { LayoutContainer, Content } from '@styles';
import { Title, LogoWrapper } from './MainLayout.styles';

const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default MainLayout;
