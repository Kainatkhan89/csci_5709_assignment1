import {
  Box,
  Button,
  Center,
  Checkbox,
  CircularProgress,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  chakra
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import ErrorMessage from '../components/ErrorMessage';
import { userLogin } from '../utils/mockAPI.js';


export default function Login()
{   
    const CFaUserAlt = chakra(FaUserAlt);
    const CFaLock = chakra(FaLock);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    // --handle submit
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async event => {
      event.preventDefault();
      setIsLoading(true);
      try {
        await userLogin({ email, password });
        setIsLoading(false);
        setShowPassword(false);
      } catch (error) {
        setError('Invalid username or password');
        setIsLoading(false);
        setEmail('');
        setPassword('');
        setShowPassword(false);
      }
    };
    // handle success
   
 

    return(
        <Center h="100vh" bg="#191414">         
           <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
          >
         <image src="" mx="auto"></image>
        <Heading as="h1"  color="#1DB954">Login</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}> 
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              {error && <ErrorMessage message={error} />}
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="black" />}
                  />
                  <Input 
                    type="email" 
                    placeholder="email address" 
                    onChange={event => setEmail(event.currentTarget.value)}
                     />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="black" />}
                  />
                  <Input
                    type= {showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={event => setPassword(event.currentTarget.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm"  onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                <Button variant="link">Forgot password?</Button>
                </FormHelperText>
              </FormControl>
              <FormControl>
                <Checkbox borderColor="black">Remember Me</Checkbox>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                rounded="md"
                bg="#1DB954"
                width="full"
                >
               {isLoading? (
                <CircularProgress isIndeterminate size="24px" color="black" />
                ) : (
                  'Sign In'
                )}
              </Button>
            </Stack>
          </form>
        </Box>
        <Text as="div" textAlign="center" textColor="white">
                    <span fontColour="white">Don't have an account? </span>
                    <Button variant="link">Sign up</Button>
        </Text>
      </Stack>
        </Center>
    )
}
