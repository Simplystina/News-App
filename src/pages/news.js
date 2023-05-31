import { Avatar, Box , HStack, Text} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Post from '../Components/Post'

const news = () => {
  return (
    <Box>
        <Navbar/>

        <Box p="100px 60px">
           <Text fontFamily="Poppins" p="20px 0">Innovation   2 hours ago</Text>
              <Text color="white" fontFamily="Cormorant Upright" fontSize="52px" letterSpacing="0.3%" fontWeight="bold" p="10px">
                 Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
               </Text>
            <HStack mt="30px">
                <Avatar></Avatar>
                <Text fontSize="12px" fontWeight="700" color="#FFFFFF">Cameron Williamson</Text>
            </HStack>
        </Box>
        <Box bg="white" p="80px">
            <Text color="#515151" textAlign="justify" fontSize="16px" lineHeight="20px" fontWeight="400px" fontFamily="Open Sans" letterSpacing="0.5%">
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                 Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                 Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic innovation via workplace diversity and empowerment.





            </Text>
            <Text p="20px 0" textAlign="justify" fontFamily="Open Sans" color="#515151" fontSize="16px" lineHeight="20px" fontWeight="400px" letterSpacing="0.5%">
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. content in real-time will have multiple touchpoints for offshoring.

            </Text>
            <Text fontFamily="Open Sans" textAlign="justify" color="#515151" fontSize="16px" lineHeight="20px" fontWeight="400px" letterSpacing="0.5%">

                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</Text>
        </Box>
        <Post text="Related Post"></Post>
           
        <Footer/>
    </Box>
  )
}

export default news
