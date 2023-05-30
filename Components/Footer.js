import { Box , Flex, HStack, Text, Input, Button, VStack} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
   <Box bg="white" p="4rem">
      <Box p="30px" bg="#109BE9">
        <Flex justify="space-between" align="center">
            <Text fontSize="70px" color="#ffffff" fontWeight="bold" fontFamily="Cormorant Upright">Sign up for Our Newsletters</Text>
            <Text fontSize="16px" letterSpacing="0.5%" color="#ffffff" fontFamily="Poppins">The best newletters you'll come across the whole globe is right at your doorstep. Take the opportunity now!</Text>
        </Flex>
        <HStack pt="20px 0">
            <Input fontSize="16px" color="#9A9AB0" bg="white" _placeholder="input your email address here"/>
            <Button fontSize="12px" bg="#F36326">
             subscribe
           </Button>
        </HStack>
      </Box>
      <HStack mt="70px" align="flex-start" justifyContent="space-between">
        <Text color="#11142D"  fontSize="24px" fontFamily="Cormorant Upright" maxW="400px">
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Text>
        <VStack color="#515151" fontSize="16px">
            <Text 
           color="#11142D" fontSize="16px" fontWeight="bold" letterSpacing="0.5%">Categories</Text>
            <Text>International</Text>
            <Text>Regional</Text>
            <Text>Politics</Text>
            <Text>Business</Text>
            <Text>Sports</Text>
            <Text>Health</Text>
        </VStack>
        <VStack color="#515151" fontSize="16px">
            <Text fontFamily="#11142D" fontSize="16px" fontWeight="bold" letterSpacing="0.5%">Company</Text>
            <Text>About Us</Text>
            <Text>Careers</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms of Services</Text>
            <Text>Contact Us</Text>
        </VStack>
        <VStack color="#515151" fontSize="16px">
            <Text fontFamily="#11142D" fontSize="16px" fontWeight="bold" letterSpacing="0.5%">Social Media</Text>
            <Text>Youtube</Text>
            <Text>Instagram</Text>
            <Text>Facebook</Text>
            <Text>Twitter</Text>
        </VStack>
      </HStack>
      <Text fontSize="16px" fontWeight="700" color="#666666" fontFamily="Poppins">Copyright Tanah Air Studio</Text>
   </Box>
  )
}

export default Footer
