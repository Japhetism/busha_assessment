import styled from "styled-components";
import { IMenu } from "../../interface";

const SidebarContainer = styled.div`
  top: 0;
  left: 0;
  width: 240px;
  height: 100%;
  background-color: #fff;
  padding-top: 20px;
  z-index: 9999;
`;

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const MenuItem = styled.a<{ isActive: boolean }>`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? "#000" : "#3E4C59")};
  background-color: ${({ isActive }) => (isActive ? "#F5F7FA" : "transparent")};
  padding: 12px 20px;
  font-size: 16px;
  line-height: 16px;
  font-weight: ${({ isActive }) => (isActive ? 500 : 400)};
  border-radius: 4px;
  margin-bottom: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #F5F7FA;
    color: #000;
  }
`;

export interface SidemenuProps {
  links: IMenu[];
  activeLink?: string;
  onLinkClick: (link: string) => void;
}

const Sidemenu: React.FC<SidemenuProps> = ({
  links,
  activeLink,
  onLinkClick,
}) => {
  return (
    <SidebarContainer>
      <MenuContainer>
        {links.map((item: IMenu, index: number) => (
          <MenuItem
            key={index}
            isActive={activeLink === item.link}
            onClick={() => onLinkClick(item.link)}
            href={item.link}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuContainer>
    </SidebarContainer>
  );
};

export default Sidemenu;