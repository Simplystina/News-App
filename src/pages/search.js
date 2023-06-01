import { Box, Button, Center, HStack, Input, Spinner, Text } from '@chakra-ui/react'
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

    useEffect(()=>{
        console.log(searchList, "searchList")
    })
    if(loading){
        return(
            <Box>
                <Nav></Nav>
                <Link onClick={clear} href='/'>
                    <Button onClick={clear}  ml="40px" size="sm" fontSize="10px" leftIcon={<IoIosArrowBack/>}>Back</Button>
                </Link> 
                <HStack w="100%" p="30px 100px">
                    <Input value={search} onChange={handleChange} w="70%"/>
                    <Button onClick={searchWord} w="20%" bg="#F36326">search</Button>
                    <Button onClick={clear} w="20%" bg="#F36326">clear</Button>
                </HStack>
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
        <HStack w="100%" p="30px 100px">
            <Input value={search} onChange={handleChange} w="70%"/>
            <Button onClick={searchWord} w="20%" bg="#F36326">search</Button>
            <Button onClick={clear} w="20%" bg="#F36326">clear</Button>
        </HStack>
       {
        searchList.length>0 ?  <SearchResult articles={searchList} />
        :
        <Text fontSize="40px" fontFamily="Cormant Upright" fontStyle="italic" textAlign="center">No results Found</Text>
       }
    </Box>
  )
}

export default search
