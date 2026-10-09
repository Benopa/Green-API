import { Button, Flex, Typography } from 'antd';

function App() {
  return (
    <Flex vertical align="center" justify="center" gap="middle" style={{ minHeight: '100vh' }}>
      <Typography.Title>GreenAPI</Typography.Title>
      <Button type="primary">Ant Design работает</Button>
    </Flex>
  );
}

export default App;
