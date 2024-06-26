import {
  Flex, 
  Box, 
  Center, 
  FormControl, 
  Input,
  NumberInput, 
  FormLabel, 
  HStack, 
  RadioGroup,
  Radio, 
  Button,
} from "@chakra-ui/react"

function App() {
  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="gray.500"
        color="white"
        fontWeight="bold"
        fontSize="4x1"
        pb="8"
        >
          Formulário
        </Center>
        <Flex
          align="center"
          justify="center"
          bg='blackAlpha.200'
          h='calc(100vh - 150ppx)'
        >
          <Center
            
            w="100%"
            maxWidth={840}
            bg="#ccc"
            top={100}
            position="absolute"
            borderRadius={5}
            p="6"
            boxShadow="0 1px 2 px #ccc"
          >

            <FormControl display="flex" flexDir="column" gap="4">
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                  <Input id="nome" border="2px solid black"/>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email"  border="2px solid black"/>
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                  <Input id="nasc" type="date" border="2px solid black"/>
                </Box>
                <Box w="100%">
                 <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                 <Input id="natural" border="2px solid black"/>
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="cel">Celular</FormLabel>
                  <Input id="cel"  border="2px solid black"/>            
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="tel">Telefone Fixo</FormLabel>
                    <Input id="tel"  border="2px solid black"/> 
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="end">Endereço</FormLabel>
                  <Input id="end" border="2px solid black"/>
                </Box>
                <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" border="2px solid black"/>
                </Box>
              </HStack>
              <HStack spacing="4">
              <Box w="100%">
                <FormLabel>
                  Sexo
                </FormLabel>
                <RadioGroup>
                  <HStack spacing="24px">
                    <Radio value="Masculino" border="1px solid black">Masculino</Radio>
                  </HStack>
                </RadioGroup>

              </Box>
              </HStack>

              <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="red.500"
                  color="white"
                  fontWeight="bold"
                  fontSize="30"
                  mt="5"
                  _hover={{bg: "green.500"}}
                >
                  Enviar
                </Button>

              </HStack>


            </FormControl>
            </Center>
        </Flex>
    </Box>
  );
}

export default App;
