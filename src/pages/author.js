import { Box , Text, flex , Avatar,HStack} from '@chakra-ui/react'
import React from 'react'
import Footer from '../../Components/Footer'
import Post from '../../Components/Post'
import Navbar from '../../Components/Navbar'

const author = () => {
  return (
    <Box>
        <Box>
        <Navbar/>
        <Box bg="white" p="100px 60px">
            <Avatar size="60px"></Avatar>
            <Text ml="30px" fontSize="18px" fontWeight="700" color="#1A242D">Guy Hawkings</Text>
              <Text color="#1A242D" fontFamily="Cormorant Upright" fontSize="52px" letterSpacing="0.3%" fontWeight="bold" p="10px">
              Daily international newspaper based in London
               </Text>
           
        </Box>
        
        <Post text="Recent Post"></Post>
        <Post text="Related Post"></Post>
           
        <Footer/>
    </Box>
    </Box>
  )
}

export default author
