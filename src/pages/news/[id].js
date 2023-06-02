import { Avatar, Box , HStack, Text, Img, Button, Center, Spinner} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer'
import Post from '../../Components/Post'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setCountry , fetchArticles} from '../../features/News/NewsSlice'
import {GoLinkExternal} from 'react-icons/go'
import Link from 'next/link'
import {IoIosArrowBack} from "react-icons/io"

const news = () => {

    const dispatch = useDispatch();
  

    const router = useRouter();
    const { id } = router.query;

    useEffect(()=>{
        dispatch(fetchArticles({country:"us"}));
        dispatch(setCountry("us"))
        console.log(articles[parseInt(id)], "articles", id)
        
     },[dispatch])

    const { articles, currentPage, status, error , loading} = useSelector((state) => state.news)
    

    
     if(loading){

        return(
            <Box>
                <Nav/>
                <Center mt="100px" >
                    <Spinner size="lg"/>
                </Center>
                <Footer/>
            </Box>
        )
     }
  return (
    <Box>
        <Nav/>
        <Link href='/'>
            <Button ml="40px" size="sm" fontSize="10px" leftIcon={<IoIosArrowBack/>}>Back</Button>
        </Link> 
        <Box p ={["20px 10px","20px 30px","30px 60px"]}>
             <Text fontFamily="Poppins" p="20px 0">{moment(articles[parseInt(id)]?.publishedAt).startOf('day').fromNow()}</Text>
              <Text color="white" fontFamily="Cormorant Upright" fontSize={["30px","40px","52px"]} letterSpacing="0.3%" fontWeight="bold" p={["3px","10px"]}>
                 {articles[parseInt(id)]?.title}
               </Text>
            <HStack mt="30px">
                <Avatar></Avatar>
                <Text fontSize={["10px","12px"]} fontWeight="700" color="#FFFFFF">written by {articles[parseInt(id)]?.author || articles[parseInt(id)]?.source?.name}</Text>
            </HStack>
        </Box>
        <Box bg="white" p={["20px 10px","30px 30px","80px"]}>
            <Text color="#515151" textAlign="justify" fontSize={["12px","14px","16px"]} lineHeight="20px" fontWeight="400px" fontFamily="Open Sans" letterSpacing="0.5%">
               {articles[parseInt(id)]?.description}
            </Text>
            <Img w="100%" src={articles[parseInt(id)]?.urlToImage}  h="100%" objectFit="cover"/>
            <Text p="20px 0" textAlign="justify" fontFamily="Open Sans" color="#515151" fontSize={["12px","14px","16px"]}lineHeight="20px" fontWeight="400px" letterSpacing="0.5%">
               {articles[parseInt(id)]?.content}
            </Text>
           <Link href={`${articles[parseInt(id)]?.urlToImage}`}>
                <Button  rightIcon={<GoLinkExternal/>} fontSize={["12px","14px","16px"]} colorScheme="blackAlpha">News website</Button>
           </Link> 
            <HStack mt="10px">
                <Text fontFamily="Open Sans" textAlign="justify" color="#515151" fontSize={["14px","16px","20px"]} lineHeight="20px" fontWeight="400px" letterSpacing="0.5%">
                News Source:
                </Text>
                <Text fontFamily="Open Sans" textAlign="justify" color="#515151" fontSize={["12px","14px","16px"]} lineHeight={["14px","16px","20px"]} fontWeight="400px" letterSpacing="0.5%">
                {articles[parseInt(id)]?.source.name}
                </Text>
            </HStack>
           
        </Box>
           
        <Footer/>
    </Box>
  )
}

export default news
