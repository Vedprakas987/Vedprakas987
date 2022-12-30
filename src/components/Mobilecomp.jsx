import React from 'react';
import {FaBars} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'
  
const Mobilecomp = () => {
    return (
        <div width="100%">
            <Menu>
  <MenuButton _hover={{bg:"transparent"}}  as={Button} rightIcon={<FaBars m={"auto"} />}>
  </MenuButton>
  <MenuList  w={"100%"}>
    <MenuItem>
    <NavLink to="/About">About</NavLink>
    </MenuItem>
    <MenuItem>
    <NavLink to="/Skills">Skills</NavLink>
    </MenuItem> <MenuItem>
    <NavLink to="/Project">Project</NavLink>
    </MenuItem>
    <MenuItem>
    <NavLink to="/Resume">Resume</NavLink>
    </MenuItem>
     <MenuItem>
    <NavLink to="/Contact">Contacts</NavLink>
    </MenuItem>

  </MenuList>
</Menu>
        </div>
    );
}

export default Mobilecomp;
