import {
    Box,
    Button,
    Heading,
    Text,
    Img,
    Flex,
    useColorModeValue,
    useBreakpointValue
  } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react'

type Props = {
    name: string
    handle: string
    description: string
    tags: string[]
    image?: string
}
  
const Artist: FC<PropsWithChildren<Props>> = ({
    name,
    handle,
    description,
    tags,
    image
}) => {
    return (
        <Flex justify={'center'}>
            <Box
                w="xs"
                rounded={'base'}
                my={2}
                overflow={'hidden'}
                bg="white"
                border={'1px'}
                borderColor="black"
                boxShadow={useColorModeValue('4px 4px 0 black', '4px 4px 0 black')}>
                <Box h={useBreakpointValue({base: '280px', md: '280px'})} borderBottom={'1px'} borderColor="black">
                    <Img
                        src={image}
                        roundedTop={'sm'}
                        objectFit="cover"
                        h="full"
                        w="full"
                        alt={'Artist Image'}
                    />
                </Box>
                <Box p={6}>
                    <Heading color={'black'} fontSize={'lg'} noOfLines={1}>
                        {name}
                    </Heading>
                    <Heading color={'black'} fontSize={'sm'} noOfLines={1}>
                        {handle}
                    </Heading>
                    <Text color={'gray.500'} fontSize={'sm'} noOfLines={2} mt={2} h={'52px'}>
                        {description}
                    </Text>
                    <Box mt={2}>
                        {tags.map((tag)=>{
                            return (
                                <Box
                                    key={tag}
                                    bg="white"
                                    rounded={'base'}
                                    border='1px solid black'
                                    display={'inline-block'}
                                    px={2}
                                    py={1}
                                    color="brand.black"
                                    mr={2}
                                    mb={2}>
                                    <Text fontSize={'xs'} fontWeight="medium">
                                        {tag}
                                    </Text>
                                </Box>
                            )
                        })}
                    </Box>
                    <Flex  mt={2}>
                        <Button w={'full'}>Ver Perfil</Button>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}
  
export default Artist