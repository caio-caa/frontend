import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  VStack,
  Text,
  Link,
  Container,
  InputGroup,
  Heading,
} from '@chakra-ui/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Senha:', senha);
  };

  return (
    <Box bg="blue.600" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="400px">
        <Box
          bg="whiteAlpha.200"
          p={8}
          borderRadius="xl"
          boxShadow="lg"
        >
          <VStack spacing={6}>
            <Heading color="white" fontSize="2xl" mb={2}>
              Acesse o sistema
            </Heading>

            <InputGroup>
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="whiteAlpha.100"
                color="white"
                _placeholder={{ color: 'whiteAlpha.700' }}
                height="50px"
                borderRadius="full"
                border="none"
                _focus={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  bg: "whiteAlpha.200"
                }}
              />
            </InputGroup>

            <InputGroup>
              <Input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                bg="whiteAlpha.100"
                color="white"
                _placeholder={{ color: 'whiteAlpha.700' }}
                height="50px"
                borderRadius="full"
                border="none"
                _focus={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  bg: "whiteAlpha.200"
                }}
              />
            </InputGroup>

            <Button
              w="100%"
              bg="white"
              color="blue.600"
              _hover={{ bg: 'whiteAlpha.900' }}
              onClick={handleSubmit}
              height="50px"
              borderRadius="full"
              fontSize="md"
              fontWeight="bold"
            >
              Login
            </Button>

            <Text color="white" fontSize="sm">
              Não tem uma conta?{' '}
              <Link color="white" textDecoration="underline">
                Cadastre-se
              </Link>
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
