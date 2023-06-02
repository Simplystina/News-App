import React, { useEffect } from 'react'
import {Box, Flex, Text, HStack, Button, Select} from "@chakra-ui/react"
import {BiSearch} from "react-icons/bi"

import Link from 'next/link';


const Nav = () => {

 
  return (
    <div>
      <Box p ={["20px 10px","20px 30px","2rem 4rem"]}>
          <Flex fontFamily="Poppins" fontSize="12px" justifyContent={["space-between"]} align="center">
              <HStack spacing={4} justify="space-between">
                  <Box className="textcontainer">
                    <Text fontSize={[16,20]} className="text">NewsPulse</Text>
                  </Box>
                  <Text display={["none", "block","block"]}>News</Text>
                  <Text display={["none", "block","block"]}>Innovation</Text>
                  <Text display={["none", "block","block"]}>Industry</Text>
              </HStack>
              <HStack spacing={4} display={["none", "none","flex"]}>
                <Text>IG</Text>
                <Text>TW</Text>
                <Text>FB</Text>
                <Text>YT</Text>
              </HStack>
              <Box display={["block","none"]}>
                <Link href="/search">
                 <HStack >
                    <Text size={["sm","md"]}  fontSize="12px" >
                search 
                   </Text>
                    <BiSearch/>
                 </HStack>
                 </Link>
              </Box>
            </Flex>
      </Box>

    </div>
  )
}

export default Nav
