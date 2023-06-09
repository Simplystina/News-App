import { Box, Flex, Text, SimpleGrid , Img} from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

const RecommendedPost = () => {

    const { articles, currentPage, status, error } = useSelector((state) => state.news);
    // Filter articles with authors to display at the front of the page
  const filteredArticles = articles.filter((article) => article.author);

  
  return (
     <Box p={["30px 10px","30px 20px","5rem 4rem"]} bg="white">
        <Text fontWeight="700" letterSpacing="0.5%" fontSize={["20px","25px","31px"]} color="#11142D" mb="20px">Recommended For You</Text>
        <SimpleGrid columns={[1,2]} spacing={8}>
            {
                filteredArticles.slice(-2).map((item, id)=>{
                    return(
                        <Box key={id}>
                            <Box pos="relative" bg='#909090' w="100%" height='500px'>
                               <Img w="100%" src={item.urlToImage}  h="100%" objectFit="cover"/>
                                <Text pos="absolute" bottom={0} fontSize="10px" bg="white" color="#11142D" p="20px">{item.author}</Text>
                            </Box>
                            
                            <Text p="10px 0" fontWeight="700" letterSpacing="0.5%" fontSize={["16px","20px","24px"]} color="#11142D" fontFamily="Cormorant Upright" >{item.description}
                            </Text>
                            <Text fontFamily="Poppins"  fontWeight="700" letterSpacing="0.5%" fontSize={["10px","12px"]} color="#9A9AB0">{moment(item.publishedAt).subtract(1, 'days').calendar()}</Text>
                       </Box>
                    )
                })
            }
  
        </SimpleGrid>
     </Box>
  )
}

export default RecommendedPost
