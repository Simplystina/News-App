import React, { useEffect } from 'react'
import {Box, Flex, Text, HStack, Button, Select} from "@chakra-ui/react"
import {BiSearch} from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux';
import {setCountry, fetchArticles, setCategory} from "../features/News/NewsSlice"
import { countries } from '../services';
import Link from 'next/link';




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
      <Box p ="2rem 4rem">
            <Flex fontFamily="Poppins" fontSize="12px" justifyContent="space-between">
              <HStack spacing={4}>
              <div class="logo">
                    <span class="logo-text">NewsPulse</span>
                </div>
                <Text>News</Text>
                <Text>Innovation</Text>
                <Text>Industry</Text>
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
        
           <HStack>
             <Link href="/search">
              <Box fontSize={30} ><BiSearch/></Box>
              </Link>
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
