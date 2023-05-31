import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Home()
{
    const navigate = useNavigate();
    return(
        <Center h="100vh" bg="#191414">
            
           <Stack bg="#191414" justifyContent="space-between" p="16">
           <Heading as="h1" fontSize={['xl', '2xl', '3xl']} color="white" noOfLines={1}>Welcome to TuneHub</Heading>
            <Button bg="#1DB954" onClick={() => navigate('/login')}>Let's get started!</Button>
            </Stack> 
        </Center>
        
    )
}