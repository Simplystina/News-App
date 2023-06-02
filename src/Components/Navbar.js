import React, { useEffect } from 'react'
import {Box, Flex, Text, HStack, Button, Select, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,} from "@chakra-ui/react"
import {BiSearch} from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux';
import {setCountry, fetchArticles, setCategory} from "../features/News/NewsSlice"
import { countries } from '../services';
import Link from 'next/link';
import {AiOutlineDown} from 'react-icons/ai'

const Navbar = () => {

  const dispatch = useDispatch();
  const { articles, currentPage, status, error, country, category } = useSelector((state) => state.news);
  
  const theCountry = countries.filter((item) => item.shortcode===country);
 
  //function to change source of country when drop down is clicked
  const handleSourceChange = (selectedCountry)=>{
   
    dispatch(setCountry(selectedCountry))
    
    console.log(country, "country")
    dispatch(fetchArticles({country:selectedCountry})); //update the articles to the current country selected
  }

  //function to change category
  const handleCategoryChange =(cate)=>{
    dispatch(setCategory(cate))
    dispatch(fetchArticles({category:cate})); //update the articles to display category
  }
  
  const categories = [
       {cate: "general"},
       {cate: "health"},
       {cate: "science"},
       {cate: "sports"},
       {cate: "entertainment"},
       {cate: "business"},
       {cate:"technology"}

]
  return (
    <div>
      <Box p ={["20px 10px","20px 30px","30px 4rem"]}>
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
    <Box h="1px" w="100%" border= "1px solid rgba(255, 255, 255, 1)"></Box>
    <Box p={["5px 10px","5px 30px","5px 4rem"]}>
    
      <Flex fontFamily="Open Sans" justifyContent="space-between" w="100%">
        <Box display={["block","block","none"]}>
          <Menu >
            <MenuButton fontSize="10px" size="sm" as={Button} rightIcon={<AiOutlineDown/>}>
                  {category === "general"? 'category' : category}
            </MenuButton>
            <MenuList>
            {
              categories.map((cate)=>{
                return(
                  <>
                  
                     <MenuItem onClick={()=>handleCategoryChange(cate.cate)}>{cate.cate}</MenuItem>
                  </>
                )
              })
            }

         
   
             </MenuList>
          </Menu>
        </Box>
        <HStack justifyContent="space-between" spacing={[2,4]}>
          <HStack spacing={3} justifyContent="space-between" display={["none","none","block"]}>
            {
              categories.map((cate)=>{
                return(
                  <>
                    {category === cate.cate?
                    <Button bg="#F36326" onClick={()=>handleCategoryChange(cate.cate)} fontSize="12px">{cate.cate}</Button>
                    :
                    <Button onClick={()=>handleCategoryChange(cate.cate)} fontSize="12px">{cate.cate}</Button>}
                  </>
                )
              })
            }
          </HStack>
            <div class="dropdown">
              <Text fontSize="12px" className="dropbtn">{theCountry[0].source}
              </Text>
              <div className="dropdown-content">
                    
                    {
                 countries.map((item)=>{
                    return(
                      <Text onClick={()=>handleSourceChange(item.shortcode)} cursor="pointer" fontFamily="Poppins" fontSize="12px"
                      p="10px" className='dropdwn-link' color="black">{item.source}</Text>
                    )
                  })
                }
              </div>
            </div>
        </HStack>
        <Link href="/search">
            <Button size={["sm","md"]} rightIcon={<BiSearch/>} display={["none","block"]} fontSize="12px" bg="#F36326">
                search
            </Button>
        </Link>
      </Flex>
    </Box>
    <Box h="1px" w="100%" border= "1px solid rgba(255, 255, 255, 1)"></Box>
    </div>
  )
}

export default Navbar
