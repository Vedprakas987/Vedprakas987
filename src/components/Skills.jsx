import React from 'react';
import {Box,SimpleGrid,HStack,Grid,Image,Flex, Container,Center,Heading} from "@chakra-ui/react"
const Skills = () => {
    return (
        <Container  maxWidth={"100ch"}>
            <Heading color={"teal"} fontSize={"3rem"}>Technical Skills</Heading>
            <SimpleGrid p={"2rem"} m={"auto"} justifyContent={"center"}   alignItems={"center"} columns={{base:2,sm:2,md:3,lg:5}}  rowGap={"4rem"} spacing={8}>
      
  <Box _hover={{w:"120%"}} className='skills'>
            <Image    w="60%"  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html"/>
            </Box>
       <Box  _hover={{w:"120%"}}  className='skills'>
       <Image  w="60%" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' alt='css'/>
       </Box>
       <Box  _hover={{w:"120%"}} className='skills'>
       <Image w="60%"  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'/> 
       </Box>
       <Box _hover={{w:"120%"}} className='skills'>
       <Image  w="60%" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'/> 
       </Box>
       <Box  _hover={{w:"120%"}}  className='skills'>
       <Image w="60%" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'/>
       </Box>
       
      <Box _hover={{w:"120%"}}  className='skills'>
      <Image w="60%" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'/>
      </Box>
      <Box  className='skills'>
        <Image _hover={{w:"120%"}} w="60%" src='https://camo.githubusercontent.com/3aa42ee93eafa8f736bac662e8ca536350dad790ba36f2f0cb1783aa2be42f6d/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6e6578746a732d322e737667'/>
      </Box>
      <Box _hover={{w:"120%"}} className='skills'>
      <Image  w="60%" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'/>
      </Box>  
      <Box  _hover={{w:"120%"}} className='skills'>
       <Image w="60%" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'/>
       </Box>
</SimpleGrid>
        <SimpleGrid column={3}>
          
        </SimpleGrid>
        </Container>
    );
}

export default Skills;
