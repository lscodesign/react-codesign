import { Button, Flex, InputCode } from "react-codesign";

function App() {
  return (
    <Flex gap={10} direction="column" height={"100vh"} alignItems="center" justifyContent="center">
      <InputCode />
      <Button scheme="primary">
        Nome
      </Button>
    </Flex>
  )
}

export default App
