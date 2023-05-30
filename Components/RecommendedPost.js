import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const RecommendedPost = () => {
    const nums = [1,2]
  return (
     <Box p ="5rem 4rem" bg="white">
        <Text fontWeight="700" letterSpacing="0.5%" fontSize="31px" color="#11142D" mb="20px">Recommended For You</Text>
        <SimpleGrid columns={2} spacing={8}>
            {
                nums.map((item)=>{
                    return(
                        <Box>
                            <Box pos="relative" bg='#909090' w="100%" height='500px'>
                                <Text pos="absolute" bottom={0} fontSize="10px" bg="white" color="#11142D" p="20px">Science</Text>
                            </Box>
                            
                            <Text p="10px 0" fontWeight="700" letterSpacing="0.5%" fontSize="24px" color="#11142D" fontFamily="Cormorant Upright" >Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
                            </Text>
                            <Text fontFamily="Poppins"  fontWeight="700" letterSpacing="0.5%" fontSize="12px" color="#9A9AB0">Floyd Miles   3 Days Ago</Text>
                       </Box>
                    )
                })
            }
  
        </SimpleGrid>
     </Box>
  )
}

export default RecommendedPost
