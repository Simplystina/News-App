import React, { useEffect } from 'react'
import {Box, Flex, Text, HStack, Button, Select} from "@chakra-ui/react"
import {BiSearch} from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux';
import {setCountry, fetchArticles, setCategory} from "../features/News/NewsSlice"
import { countries } from '../services';




const Nav = () => {

 
  return (
    <div>
      <Box p ="2rem 4rem">
            <Flex fontFamily="Poppins" fontSize="12px" justifyContent="space-between">
              <HStack spacing={4}>
                <div class="logo">
                    <span class="logo-text">NewsPulse</span>
                </div>
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

    </div>
  )
}

export default Nav
