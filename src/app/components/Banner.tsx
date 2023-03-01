import { Box, Container, Flex, Heading,Text,Button } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logo2 from "../../../public/logo2.webp"
import banner from "../../../public/banner2.webp"
import { RevealWrapper } from 'next-reveal'

export default function Banner() {
  return (
    <>
    <Box backgroundImage={"url('/bg.jpg')"}
    backgroundSize="cover"
    backgroundPosition="center">
        <RevealWrapper origin='left' delay={200} duration={3000} distance='500px' reset={true}>
            <Container maxW={1400}>
             <Flex pt={{ lg: '150px', base: '30px' }} pb={{ lg: '100px', base: '0' }} px={{ lg: '40px', base: '5px' }} display={{ lg: 'flex', base: 'grid' }}>
                            <Box flexBasis={{ lg: '50%', base: '%' }} px={{ lg: '40px', base: '0' }}>
                                <Heading color='black' size='2xl'>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                                <Text pt='10px'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                                <Button mt='10px' size='lg' colorScheme='teal'>More Info</Button>
                            </Box>
                            <Box mt={{ lg: '-80px', base: '0' }} flexBasis='50%'>
                                <Image src={logo2} alt="Panaverse" width={{ lg: '700', base: '400' }} height={{ lg: '400', base: '300px' }} />
                            </Box>
                        </Flex>
                    </Container>
                </RevealWrapper>
    </Box>

    <Box>
                <Container maxW={1400}>
                    <Flex pt={{ lg: '80px', base: '10px' }} gap={{ lg: '100px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis='50%'>
                            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                            <Image src={banner} alt='Panaverse Banner' width={{ lg: '700', base: '400' }} height={{ lg: '400', base: '300px' }} />
                            </RevealWrapper>
                        </Box>
                        <Box flexBasis='50%' pt={{ lg: '80px', base: '10px' }} px={{ lg: '0', base: '5px' }}>
                            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
                                <Heading size='2xl'>Program Of Studies</Heading>
                                <Text pr={{ lg: '50px', base: "25px" }} pt='10px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                                <Button mt='10px' size='lg' colorScheme='teal'>Read More</Button>
                            </RevealWrapper>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Box>
                <Container maxW={1400}>
                    <Flex gap={{ lg: '100px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis='50%' pl={{ lg: '60px', base: '5px' }} pt={{ lg: '80px', base: '30px' }}>
                            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                                <Heading size='2xl'>Program Of Studies</Heading>
                                <Text pr={{ lg: '50px', base: "25px" }} pt='10px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                                <Button mt='10px' size='lg' colorScheme='teal'>Read More</Button>
                            </RevealWrapper>
                        </Box>
                        <Box flexBasis='50%'>
                            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
                            <Image src={logo2} alt="Panaverse" width={{ lg: '700', base: '400' }} height={{ lg: '400', base: '300px' }} />
                            </RevealWrapper>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}


















//     <Box>
//         <Container maxW={1400}>
//             <Flex gap= "100px" pt={{lg:'50px', base:"20px"}} pb={{lg:'50px', base:"20px"}} display = {{lg: "flex" , base:"grid"}}>
//             <Box flexBasis={{lg:"50%", base: "100%"}}> 
//             <Image src={banner} alt='Panaverse Banner' width={500} height={500} />
//                 </Box>
//             <Box flexBasis={"50%"}> 
//                 <Heading pt={{lg:'10px', base:"5px"}}> Program Of Studies</Heading>
//                 <Text pt={{lg:'10px', base:"5px"}} pb={"20px"}> This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. </Text>
//                 <Button mt={"10px"} size="lg" colorScheme={"teal"}> Read More </Button>
//                 </Box>
//             </Flex>

//         </Container>
//     </Box>
//     </>
//     )
// }
