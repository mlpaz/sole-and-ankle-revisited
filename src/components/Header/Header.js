import React from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  overflow: auto;
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid var(--color-gray-900);
    align-items: center;
    padding: 18px 32px;
  }
  @media ${QUERIES.mobileAndDown} {
    border-top: 4px solid var(--color-gray-900);
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(0.5rem, 4.7vw - 1.75rem, 3rem);
  margin: 0px 48px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  gap: clamp(1rem, 4vw - 0.25rem, 2.5rem);
  margin-left: auto;
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
  }
`;

const Side = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndDown} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
