import React,{useState} from 'react'
import { Box, Flex, Text, SimpleGrid, Button, Img} from '@chakra-ui/react'
import moment from 'moment'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate';

const SearchResult = ({articles}) => {

    const dispatch = useDispatch()
    //function to clear search result
    const clear = ()=>{
        setSearch('')
        dispatch(setSearchList())

    }
   
    const itemsPerPage = 10
  // Here we use item offsets; we could also use page offsets
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items 
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentArticles = articles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <Box p ="5rem 4rem" bg="white">
  
     <Flex justifyContent="space-between">
        <Text fontWeight="700" letterSpacing="0.5%" fontSize="31px" color="#11142D" mb="20px">Search Result</Text>
        <ReactPaginate
           breakLabel="..."
           nextLabel="next >"
           onPageChange={handlePageClick}
           pageRangeDisplayed={5}
           pageCount={pageCount}
           containerClassName="pagination justify-content-center"
           previousLabel="< prev"
           renderOnZeroPageCount={null}
           pageClassName="pageItem"
           pageLinkClassName="pageLink"
           previousClassName="previous"
           previousLinkClassName="previous"
           nextClassName="next"
           nextLinkClassName="next"
           activeClassName="active"
        />
     </Flex>
   
    <SimpleGrid columns={4} spacing={8}>
        {
            currentArticles.map((item,id)=>{
                return(
                <Link href={`/news/${id}`} key={id}>
                    <Box onClick={clear} className='news-card'>
                        <Box pos="relative" bg='#909090' w="100%" height='500px'>
                           <Img w="100%" src={item.urlToImage}  h="100%" objectFit="cover"/>
                            <Text pos="absolute" bottom={0} fontSize="10px" bg="white" color="#11142D" p="20px">{item?.source?.name}</Text>
                        </Box>
                        
                        <Box p="10px" className='news-card-content'>
                           <Text p="10px 0" fontWeight="700" letterSpacing="0.5%" fontSize="24px" color="#11142D" fontFamily="Cormorant Upright" >{item.title}
                            </Text>
                           <Text fontFamily="Poppins"  fontWeight="700" letterSpacing="0.5%" fontSize="12px" color="#9A9AB0">{moment(item.publishedAt).subtract(1, 'days').calendar()}</Text>
                        </Box>
                   </Box>
                </Link>
                )
            })
        }

    </SimpleGrid>
 </Box>
  )
}

export default SearchResult
