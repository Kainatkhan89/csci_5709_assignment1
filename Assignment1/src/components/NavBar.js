import React from "react";
import {Stack,Container, Heading} from '@chakra-ui/react';
import { NavLink } from "react-router-dom";


export default function NavBar()
{
    return(
        <Container >
          {/*   <Stack direction={'row'} spacing = {10} >
                <NavLink to = '/'> Home </NavLink> 
                <NavLink to = '/login'> Login </NavLink> 
            </Stack> */}
        </Container>
    );
}