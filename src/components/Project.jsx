import { SimpleGrid,Container,Box,Heading} from '@chakra-ui/react';
import Projectcard from './projectcard';
const Project = () => {
    return (
        <Container maxWidth={"200ch"}>
        <Heading color={"teal"} fontSize={"3rem"} mt={"3rem"}>Projects</Heading>
            <SimpleGrid mt={"-2rem"}>
                <Box>
                <Projectcard image="https://i.imgur.com/Bo5RTXz.png" git='https://github.com/Vedprakas987/Shopee_cw24' net="https://beamish-rolypoly-ac83a4.netlify.app/" head="Geekbuying(E-commerce website) clone "/>
                </Box>
                <Box>
                <Projectcard image='https://www.resizepixel.com/Image/yog5pklloa/Preview/Screenshot%20(79).jpg?v=c7babb0c-ade3-4339-9f8c-5fb7bbcde099' head="Monday.com clone " git='https://github.com/Vedprakas987/Rising-monday24/tree/main/risingmonday' net='https://funny-snickerdoodle-8622cd.netlify.app/'/>
                </Box>
                <Box>
                <Projectcard image='https://i.imgur.com/2FzmhBq.jpg' head="Food Recipe Finder" net='https://sweet-monstera-0695bd.netlify.app/search.html'/>
                </Box>
            </SimpleGrid>
          
           
        </Container>
    );
}

export default Project;
