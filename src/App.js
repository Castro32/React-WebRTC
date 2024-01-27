
import { Box, Heading, Container } from '@chakra-ui/react';
import Notifications from './Notifications';
import Options from './Options';
import VideoPlayer from './VideoPlayer';
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data');
      const data = await response.json();
      console.log(data.message); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
    return (
        <Box>
          <Container maxW="1200px" mt="8">
            <Heading as="h4" size="2xl"> Video Chat App </Heading>
            <VideoPlayer/>
            <Options/>
            <Notifications/>
          </Container>
        </Box>
    );
}
export default App;
