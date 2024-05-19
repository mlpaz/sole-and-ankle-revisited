/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <CloseWrapper>
          <CloseButton>
            <Icon onClick={onDismiss} id="close" strokeWidth={2} />
          </CloseButton>
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
  justify-content: end;
  flex: 1;
  font-size: 14px;
  flex-direction: column;
  display: flex;
  gap: 14px;
  margin-bottom: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  padding: 16px;
`;

const CloseWrapper = styled.div`
  align-items: flex-start;
  flex: 1;
  margin: 10px 0px 0px 0px;
  justify-content: end;
  display: flex;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  background: white;
  width: 300px;
  height: 100%;
  padding-left: 32px;
`;

const Nav = styled.nav`
  flex-direction: column;
  display: flex;
  gap: 16px;
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
