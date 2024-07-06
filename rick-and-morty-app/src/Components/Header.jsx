// UI KIT
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Switch,
} from "@nextui-org/react";
// REDUX
import { switchTheme } from "../redux/slices/themeSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// icons
import { MdDarkMode, MdSunny } from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(switchTheme());
  };

  return (
    <div>
      <Navbar position="static">
        <NavbarBrand>
          <p className="font-bold text-inherit">NAKRES Rick And Morty</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "border-b-3"}
            >
              Home
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Switch
              onChange={toggleDarkMode}
              defaultSelected={localStorage.getItem("theme") == "dark"}
              size="lg"
              color="default"
              startContent={<MdSunny />}
              endContent={<MdDarkMode />}
            ></Switch>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Header;
