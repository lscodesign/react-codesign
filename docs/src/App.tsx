import { useEffect } from "react";
import {
  Button,
  Flex,
  InputCode,
  Text,
  configStyles
} from "react-codesign";

function App() {
  useEffect(() => {
    configStyles({
      colors: {
        primary: 'red'
      }
    })
  }, []);

  return (
    <Flex gap={10} direction="column" height={"100vh"} alignItems="center" justifyContent="center">
      <Text size="h4">
        Digite o Códio recebido
      </Text>
      <InputCode />
      <Button size="lg">
        Nome
      </Button>
    </Flex>
  )
}

export default App
