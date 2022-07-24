import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Navbar.element";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaFemale,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import CartWidget from "../CartWidget/CartWidget";

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <p>Tu tienda de ropa online</p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <MenuItem>
              <Link to="/" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <MenuItemLink>
                  <div>
                    <FaHome />
                    Inicio
                  </div>
                </MenuItemLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/category/hombre"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <MenuItemLink>
                  <div>
                    <FaUserAlt />
                    Hombre
                  </div>
                </MenuItemLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/category/mujer"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <MenuItemLink>
                  <div>
                    <FaFemale />
                    Mujer
                  </div>
                </MenuItemLink>
              </Link>
            </MenuItem>
            <CartWidget />
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navigation;
