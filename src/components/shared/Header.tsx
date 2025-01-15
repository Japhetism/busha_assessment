import styled from "styled-components";

const HeaderContainer = styled.header<{ height?: string }>`
  background-color: #FFF;
  color: #000;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.13);
  height: ${({ height }) => height || "auto"};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  margin: 0;
`;

const NavContainer = styled.div `
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #3E4C59;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;

const UsernameContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const UsernameSection = styled.div`
  text-decoration: none;
  color: #3E4C59;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

const UsernameInitials = styled.div`
  background-color: #9AA5B14D;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  color: #3E4C59;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

export interface HeaderProps {
  navLinks?: Array<{ label: string; href: string }>;
  height?: string;
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ navLinks = [], username, height = "56px" }) => (
  <HeaderContainer height={height}>
    <LogoContainer>
      <Logo src="/images/logo.png" alt="Busha App" />
    </LogoContainer>

    <NavContainer>
      {navLinks && (
        <Nav>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </Nav>
      )}
      <UsernameContainer>
        {username && (<UsernameInitials>{username?.[0]}</UsernameInitials> )}
        <UsernameSection>{username}</UsernameSection>
      </UsernameContainer>
    </NavContainer>
    
  </HeaderContainer>
);

export default Header;
