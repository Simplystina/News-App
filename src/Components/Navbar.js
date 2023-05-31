import React from 'react'
import {Box, Flex, Text, HStack, Button} from "@chakra-ui/react"
import {BiSearch} from "react-icons/bi"


const Navbar = () => {
  return (
    <div>
      <Box p ="2rem 4rem">
            <Flex fontFamily="Poppins" fontSize="12px" justifyContent="space-between">
              <HStack spacing={4}>
                <Text>News</Text>
                <Text>Innovation</Text>
                <Text>Science</Text>
                <Text>Industry</Text>
                <Text>More</Text>
              </HStack>
              <HStack spacing={4}>
                <Text>IG</Text>
                <Text>TW</Text>
                <Text>FB</Text>
                <Text>YT</Text>
              </HStack>
            </Flex>

      </Box>
    <Box h="1px" w="100%" border= "1px solid rgba(255, 255, 255, 1)"></Box>
    <Box p ="5px 4rem">
      <Flex fontFamily="Open Sans" justifyContent="space-between">
        <HStack  w="60%" justifyContent="space-between" spacing={4}>
            <Text fontSize="12px">Home</Text>
            <Text fontSize="12px">Feature</Text>
            <Text fontSize="12px">Shop</Text>
            <Text fontSize="12px">Gallery</Text>
            <Text fontSize="12px">Blog</Text>
            <Text fontSize="12px">About</Text>
            <Text fontSize="12px">Contact</Text>
        </HStack>
        <HStack>
           <BiSearch/>
           <Button fontSize="12px" bg="#F36326">
             subscribe
           </Button>
        </HStack>
      </Flex>
    </Box>
    <Box h="1px" w="100%" border= "1px solid rgba(255, 255, 255, 1)"></Box>
    </div>
  )
}

export default Navbar
