import React from 'react';
import {Box,Image,Container,Heading,HStack,Text,Flex,Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
const Projectcard = ({image,git,net,head}) => {
    return (
        <div>
           
<Box pt={"3rem"}  width={"60%"} m={"auto"}>
    <Heading mb={"2rem"}>{head}</Heading>
   <Image width={"600px"} margin={"auto"} blur={"md"}  src ={image}/>
<Flex justifyContent={"center"} mt={"1rem"} ml={"1rem"}>
    <Button bg={"dodgerblue"} color={"white"}> <a href={git}>
    <Text >Github</Text>
    </a></Button>
   <Button  bg={"dodgerblue"} color={"white"} ml={"1rem"}>
   <a href={net}>
    <Text>👁</Text>
    </a>
   </Button>
    
   
</Flex>
</Box> 
        </div>
    );
}

export default Projectcard;
