import { Box , Flex, HStack, Text, Input, Button, VStack} from '@chakra-ui/react'
import React from 'react'
import {GiSelfLove} from "react-icons/gi"

const Footer = () => {
  return (
   <Box bg="white" p={["2rem 10px","2rem 30px","4rem"]}>
      <Box p={["10px","20px","30px"]} bg="#109BE9">
        <Flex justify="space-between" align="center" flexDir={["column","column","row"]}>
            <Text fontSize={["30px","50px","70px"]} color="#ffffff" fontWeight="bold" fontFamily="Cormorant Upright">Sign up for Our Newsletters</Text>
            <Text fontSize={["10px","14px","16px"]} letterSpacing="0.5%" color="#ffffff" fontFamily="Poppins" pb="5px">The best newletters you will come across the whole globe is right at your doorstep. Take the opportunity now!</Text>
        </Flex>
        <HStack pt="20px 0">
            <Input fontSize="16px" color="#9A9AB0" bg="white" _placeholder="input your email address here"/>
            <Button fontSize="12px" bg="#F36326">
             subscribe
           </Button>
        </HStack>
      </Box>
      <HStack mt="70px" align="flex-start" justifyContent="space-between" flexDir={["column","column","row",]}>
        <Text color="#11142D"  fontSize={["16px","18px","24px"]} fontFamily="Cormorant Upright" maxW={["100%","100%","400px"]}>   
          Where News meets Inspiration: Broaden Your Perspective, Expand Your Horizons
          Unveiling Stories, Igniting Conversations: Engage with News That Resonates
        </Text>
       <Flex justifyContent="space-between" pt="30px" w="100%">
       <VStack color="#515151" fontSize={["12px","14px","16px"]}>
            <Text 
           color="#11142D" fontSize={["12px","14px","16px"]} fontWeight="bold" letterSpacing="0.5%">Categories</Text>
            <Text>International</Text>
            <Text>Regional</Text>
            <Text>Politics</Text>
            <Text>Business</Text>
            <Text>Sports</Text>
            <Text>Health</Text>
        </VStack>
        <VStack color="#515151" fontSize={["12px","14px","16px"]}>
            <Text fontFamily="#11142D" fontSize={["12px","14px","16px"]} fontWeight="bold" letterSpacing="0.5%">Company</Text>
            <Text>About Us</Text>
            <Text>Careers</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms of Services</Text>
            <Text>Contact Us</Text>
        </VStack>
        <VStack color="#515151" fontSize={["12px","14px","16px"]}>
            <Text fontFamily="#11142D" fontSize={["12px","14px","16px"]} fontWeight="bold" letterSpacing="0.5%">Social Media</Text>
            <Text>Youtube</Text>
            <Text>Instagram</Text>
            <Text>Facebook</Text>
            <Text>Twitter</Text>
        </VStack>
       </Flex>
      </HStack>
      <Box mt="20px">
          <Text fontSize={["12px","14px","16px"]} fontWeight="700" color="#666666" fontFamily="Poppins">Developed with </Text>
          <Text color="red" fontSize={20}><GiSelfLove/></Text>
          <Text fontSize={["12px","14px","16px"]} fontWeight="700" color="#666666" fontFamily="Poppins">by Dinma-Your newest Frontend Engineer </Text>
      </Box>
      
   </Box>
  )
}

export default Footer
