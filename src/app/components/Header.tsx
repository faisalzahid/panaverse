"use client"
import {Box, Container, SimpleGrid, Flex, Button,IconButton,Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/Logo.png'

export default function Header() {
  return (
  <Box boxShadow={'lg'}>
    <Container maxW={1400}> 
      <SimpleGrid templateColumns='repeat(3, 1fr)'>
        <Box>  
          <Image src={logo} alt='Panaverse-logo' width={150} height={100} />
        </Box>
        <Flex display={{lg:'flex', base:'none'}} placeItems={'center'} color = "black" fontSize={18} fontWeight='semibold' gap={10}>
          <Link href='/'> Home </Link>
          <Link href='/syllabus'> Syllabus </Link>
          <Link href='/explore'> Explore </Link>
          <Link href='/about'> About </Link>
          <Link href='/contact'> Contact </Link>
        </Flex>
        <Box>
          <Button display={{lg:'initial', base:'none'}} textAlign='center' mt={"20px"} size={'lg'} colorScheme='teal' float={'right'}> Apply </Button>
        </Box>
        <Box pt='20px' display={{ lg: 'none', base: 'initial' }}>
              <Menu  >
                <MenuButton float='right'
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                  />
                   <MenuList>
                      <MenuItem>
                        <Link href={'/'}> Home </Link> 
                        </MenuItem>
                      <MenuItem>
                        <Link href={'/syllabus'}> Syllabus </Link>
                          </MenuItem>
                      <MenuItem>
                        <Link href={'/explore'}> Explore </Link>
                          </MenuItem>
                      <MenuItem>
                        <Link href={'/about'}> About </Link>
                          </MenuItem>
                      <MenuItem>
                        <Link href={'/contact'}>Contact </Link>
                           </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
      </SimpleGrid>
    </Container>
    
  </Box>
  )
}