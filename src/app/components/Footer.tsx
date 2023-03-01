'use client'

//rfc
import React from 'react'
import {Box, Container, SimpleGrid, Heading, Text, Link, Grid} from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../../../public/Logo.png'

export default function Footer() {
  return (
    <Box bg={'black'}>
        <Container maxW={1200}> 
        <SimpleGrid spacing="30px" py={"60px"} templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4,1fr)'}}>
                <Box  >
                    <Heading textAlign={{lg:'start' ,base:'center'}} pb={"20px"} color={'white'}> About Us </Heading>
                    <Image src= {Logo} alt= "Panaverse-Footer-Logo"  width={150} height={100} />
                    <Text pt= "15px" pr={"40px"} color={'gray'}> The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. </Text>
                </Box>
                <Box   >
                    <Heading textAlign={{lg:'start' ,base:'center'}} color={'white'}> Useful Links </Heading>
                    <Grid pt = "40px" color={'gray'}>
                    <Link href='/'> Home </Link>
                    <Link href='/'> Syllabus </Link>

                    <Link href='/'> Explore </Link>
                    <Link href= '/'> About </Link>
                    <Link href='/'> Contact </Link>
                    </Grid>
                </Box>
                <Box  >
                <Heading textAlign={{lg:'start' ,base:'center'}} color={'white'}> Follow Us </Heading>
                    <Grid pt = "40px" color={'gray'}>
                    <Link href='/'> Facebook </Link>
                    <Link href='/'> Youtube </Link>
                    <Link href='/'> Twitter </Link>
                    <Link href= '/'> LinkedIn </Link>
                    <Link href='/'> GitHub </Link>
                    </Grid>
                </Box>
                <Box  >
                    <Heading textAlign={{lg:'start' ,base:'center'}} color={"white"}> Contact Us </Heading>
                    <Grid pt = "40px" color={'gray'}>
                    <Link href='/'> 92 333 4179243 </Link>
                    <Link href='/'> faisalzahidgcu@gmail.com </Link>
                    <Link href='/'> UMT Lahore </Link>
                    </Grid>
                </Box>
            </SimpleGrid>
        </Container>

    </Box>
  )
}
