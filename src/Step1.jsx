import React, { useState } from 'react';
import {
  Box, Center, Flex, FormControl, FormLabel, Input, HStack, Button, Select, Text,
} from '@chakra-ui/react';

function App() {
  const [step, setStep] = useState(1);
  const [nome, setNome] = useState('');
  const [site, setSite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [anoFundacao, setAnoFundacao] = useState('');
  const [cidade, setCidade] = useState('');

  const handleNextStep = () => setStep(step + 1);

  return (
    <Box height="100vh"> 
      <Center
        as="header"
        height={176}
        bg=""
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        paddingBottom="8"
        flexDirection="column"
      >
        Bem-vindo{nome && ','} {nome}, ao Investor Report
        <Text fontSize="2xl" fontWeight="normal" mt={2}>
          {step === 1 ? 'Agora você está preenchendo os dados iniciais de sua Startup' :
            step === 2 ? 'Nessa etapa você vai adicionar os dados do negócio!' :
            step === 3 ? 'Nessa etapa você vai adicionar o perfil do cliente!' :
            step === 4 ? 'Estamos quase lá!' :
            step === 5 ? 'Nessa etapa você vai adicionar as tecnologias que são utilizadas!' :
            step === 6 ? 'Agora você vai colocar os dados do mercado!' :
            step === 7 ? 'Agora são os dados financeiros da Startup!' :
            step === 8 ? 'Ao completar os campos sobre os dados financeiros da Startup você chega ao fim!' :
            step === 9 ? 'Muito obrigado por preencher o formulário!' : ''}
        </Text>
      </Center>

      <Flex align="center" justify="center" height="calc(100vh - 176px)">
        <Center
          width="100%"
          maxWidth={840}
          bg="white"
          top={120}
          position="absolute"
          borderRadius={5}
          padding="6"
          boxShadow="0 1px 2px #ccc"
        >
          {step === 1 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Dados da Startup
              </Text>

              <HStack spacing="4">
                <Box width="100%">
                  <FormLabel htmlFor="nome">Nome da Startup</FormLabel>
                  <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </Box>

                <Box width="100%">
                  <FormLabel htmlFor="site">Site da Startup</FormLabel>
                  <Input id="site" value={site} onChange={(e) => setSite(e.target.value)} />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box width="100%">
                  <FormLabel htmlFor="linkedin">LinkedIn da Startup</FormLabel>
                  <Input id="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                </Box>

                <Box width="100%">
                  <FormLabel htmlFor="ano_fundacao">Ano de Fundação</FormLabel>
                  <Input id="ano_fundacao" type="date" value={anoFundacao} onChange={(e) => setAnoFundacao(e.target.value)} />
                </Box>
              </HStack>

              <HStack>
                <Box width="100%">
                  <FormLabel>Cidade onde a startup está localizada</FormLabel>
                  <Select id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder='Selecione uma opção'>
                    <option value='AC'>AC</option>
                    <option value='AL'>AL</option>
                    <option value='AP'>AP</option>
                    <option value='AM'>AM</option>
                    <option value='BA'>BA</option>
                    <option value='CE'>CE</option>
                    <option value='DF'>DF</option>
                    <option value='ES'>ES</option>
                    <option value='GO'>GO</option>
                    <option value='MA'>MA</option>
                    <option value='MT'>MT</option>
                    <option value='MS'>MS</option>
                    <option value='MG'>MG</option>
                    <option value='PA'>PA</option>
                    <option value='PB'>PB</option>
                    <option value='PR'>PR</option>
                    <option value='PE'>PE</option>
                    <option value='PI'>PI</option>
                    <option value='RJ'>RJ</option>
                    <option value='RN'>RN</option>
                    <option value='RS'>RS</option>
                    <option value='RO'>RO</option>
                    <option value='RR'>RR</option>
                    <option value='SC'>SC</option>
                    <option value='SP'>SP</option>
                    <option value='SE'>SE</option>
                    <option value='TO'>TO</option>
                  </Select>
                </Box>
              </HStack>

              <Button
                marginTop={4}
                colorScheme=""
                onClick={handleNextStep}
                bg="blue"
                color="white"
                _hover={{ bg: "white", color: "blue", border: "2px solid blue" }}
              >
                Próximo
              </Button>
            </FormControl>
          )}
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
