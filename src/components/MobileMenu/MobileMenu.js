/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { COLORS, WEIGHTS } from "../../constants";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <CloseWrapper>
          <UnstyledButton>
            <Icon onClick={onDismiss} id="close" strokeWidth={2} />
          </UnstyledButton>
        </CloseWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: var(--color-gray-700);
  text-decoration: none;
  font-weight: var(--font-weight-normal);
`;
const Footer = styled.footer`
  flex-direction: column;
  display: flex;
  gap: 14px;
  margin-bottom: 32px;
`;

const CloseWrapper = styled.div`
  margin: 26px 16px 0px 0px;
  justify-content: end;
  display: flex;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: white;
  width: 300px;
  height: 100%;
  padding-left: 32px;
`;

const Nav = styled.nav`
  flex-direction: column;
  display: flex;
  gap: 22px;
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

export default MobileMenu;
