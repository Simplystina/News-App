import { Box, Button, Center, HStack, Input, Spinner, Text , Flex} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { fetchArticles, searchArticles, setSearchList } from '../features/News/NewsSlice'
import Post from '../Components/Post'
import SearchResult from '../Components/SearchResult'
import Link from 'next/link'
import {IoIosArrowBack} from "react-icons/io"
import { useRouter } from 'next/router'

const search = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const router = useRouter()

    const { articles, currentPage, status, error , loading, searchList} = useSelector((state) => state.news)
    

   
    const handleChange = (e)=>{
        console.log(e.target.value)
        setSearch(e.target.value)    
    }

    const searchWord = ()=>{
        if(!search){
            return
        }
        dispatch(searchArticles({word:search}));
        //dispatch(setCountry("us"))
    }

    //function to clear search result
    const clear = ()=>{
        console.log("about to clear")
        setSearch('')
        dispatch(setSearchList())
      
    }

    const goBack = ()=>{
        setSearch('')
        dispatch(setSearchList())
        router.push('/')
    }

   
    if(loading){
        return(
            <Box>
                <Nav></Nav>
                <Link onClick={clear} href='/'>
                    <Button onClick={goBack}  ml="40px" size="sm" fontSize="10px" leftIcon={<IoIosArrowBack/>}>Back</Button>
                </Link> 
                <Flex w="100%" p={["30px 10px","20px 30px","30px 100px"]} flexDir={["column","row"]} justify="space-between">
                    <Input value={search} onChange={handleChange} w={["100%","52%"]}/>
                   <Flex w={["100%","52%"]} mt={["10px",0]}>
                        <Button w="45%" onClick={searchWord}  bg="#F36326">search</ Button>
                       <Button w="50%" onClick={clear}  bg="#F36326">clear</Button>
                    </Flex>
                </Flex>
                <Center >
                    <Spinner size="lg"/>
                </Center>
            </Box>
        )
    }
  return (
    <Box>
        <Nav/>
        <Link onClick={clear} href='/'>
            <Button onClick={clear}  ml="40px" size="sm" fontSize="10px" leftIcon={<IoIosArrowBack/>}>Back</Button>
        </Link> 
        <Flex w="100%" p={["30px 10px","20px 30px","30px 100px"]} flexDir={["column","row"]} justify="space-between">
            <Input value={search} onChange={handleChange} w={["100%","52%"]}/>
            <Flex w={["100%","52%"]} mt={["10px",0]}>
                <Button w="45%" onClick={searchWord}  bg="#F36326">search</ Button>
                <Button w="50%" onClick={clear}  bg="#F36326">clear</Button>
            </Flex>
        </Flex>
       {
        searchList.length>0 ?  <SearchResult articles={searchList} />
        :
        <Text fontSize={["20px","40px"]} fontFamily="Cormant Upright" fontStyle="italic" textAlign="center">No results Found</Text>
       }
    </Box>
  )
}

export default search
