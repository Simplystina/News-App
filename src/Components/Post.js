import { Box, Flex, Text, SimpleGrid, Button, Img} from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'
import Link from 'next/link';
import Pagination from './PaginatedPost';

const Post = ({text, currentArticles}) => {
  
    

  return (
    <>{ 
      currentArticles && 
      <Box p ={["30px 10px","30px 20px","5rem 4rem"]} bg="white">
        <Flex justifyContent="space-between">
           <Text fontWeight="700" letterSpacing="0.5%" fontSize={["20px","25px","31px"]} color="#11142D" mb="20px">{text}</Text>
           <Link href="/search">
               <Button fontSize="12px" _hover={{color:"#F36326", border:"1px solid #F36326", bg:"white"}} bg="#F36326">
                search
              </Button>
           </Link>
           
        </Flex>
       
        <SimpleGrid columns={[1,2,3,4]} spacing={[4,8]}>
            {
                currentArticles.map((item,id)=>{
                    return(
                    <Link href={`/news/${id}`} key={id}>
                        <Box className='news-card'>
                            <Box pos="relative" bg='#909090' w="100%" height='500px'>
                               <Img w="100%" src={item.urlToImage}  h="100%" objectFit="cover"/>
                                <Text pos="absolute" bottom={0} fontSize={["8px","10px"]} bg="white" color="#11142D" p="20px">{item?.source?.name}</Text>
                            </Box>
                            
                            <Box p="10px" className='news-card-content'>
                               <Text p="10px 0" fontWeight="700" letterSpacing="0.5%" fontSize={["16px","20px","24px"]} color="#11142D" fontFamily="Cormorant Upright" >{item.description}
                                </Text>
                               <Text fontFamily="Poppins"  fontWeight="700" letterSpacing="0.5%" fontSize={["10px","12px"]} color="#9A9AB0">{moment(item.publishedAt).subtract(1, 'days').calendar()}</Text>
                            </Box>
                       </Box>
                    </Link>
                    )
                })
            }
  
        </SimpleGrid>
     </Box>}
     </>
  )
}

export default Post
