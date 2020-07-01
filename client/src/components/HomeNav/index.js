import React, { useContext } from 'react';
import DevDataContext from "../../contexts/DevDataContext";
import { Menu } from 'semantic-ui-react';
import "./style.css";

const HomeNav = () => {
  const { devData } = useContext(DevDataContext);
  let content = (
    <div>
      <Menu inverted stackable fixed="top" className="menu">
        <Menu.Item header className="logo">{devData.fname} {devData.lname}</Menu.Item>
        <Menu.Menu position="left">
          <Menu.Item as="a" href="/" name="home">
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item as="a" href="/about" name="about">
          </Menu.Item>

          <Menu.Item as="a" href="/contact" name="contact">
          </Menu.Item>

          {/* <Menu.Item href="/login" name="login">
          </Menu.Item> */}

          <Menu.Item as="a" href="/developer" name="developer">
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    </div >
  )
  return content
}

export default HomeNav;