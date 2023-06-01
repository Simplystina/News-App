import { Box, Flex, Text, SimpleGrid, Button, Img} from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'
import Link from 'next/link';
import Pagination from './PaginatedPost';

const Post = ({text, currentArticles}) => {
    const nums = [1,2,3,4,5]

    const { articles, currentPage, status, error } = useSelector((state) => state.news);

    

  return (
    <>{ 
      currentArticles && 
      <Box p ="5rem 4rem" bg="white">
        <Flex justifyContent="space-between">
        <Text fontWeight="700" letterSpacing="0.5%" fontSize="31px" color="#11142D" mb="20px">{text}</Text>
        <Button fontSize="12px" bg="#F36326">
             view all
           </Button>
        </Flex>
       
        <SimpleGrid columns={4} spacing={8}>
            {
                currentArticles.map((item,id)=>{
                    return(
                    <Link href={`/news/${id}`} key={id}>
                        <Box className='news-card'>
                            <Box pos="relative" bg='#909090' w="100%" height='500px'>
                               <Img w="100%" src={item.urlToImage}  h="100%" objectFit="cover"/>
                                <Text pos="absolute" bottom={0} fontSize="10px" bg="white" color="#11142D" p="20px">{item?.source?.name}</Text>
                            </Box>
                            
                            <Box p="10px" className='news-card-content'>
                               <Text p="10px 0" fontWeight="700" letterSpacing="0.5%" fontSize="24px" color="#11142D" fontFamily="Cormorant Upright" >{item.description}
                                </Text>
                               <Text fontFamily="Poppins"  fontWeight="700" letterSpacing="0.5%" fontSize="12px" color="#9A9AB0">{moment(item.publishedAt).subtract(1, 'days').calendar()}</Text>
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
