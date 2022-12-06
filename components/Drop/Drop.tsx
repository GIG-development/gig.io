import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react'

type Props = {
    title: string
    date: string
    description: string
    image: string
}
  
const Drop: FC<PropsWithChildren<Props>> = ({
    title, date, description, image
}) => {
    return (
    <Stack direction={{ base: 'column', md: 'row' }} mb={12} align={'center'}>
        <Image
            alt={'Drop Image'}
            objectFit={'cover'}
            maxW={{base: 72, md: 'sm'}}
            borderRadius={'base'}
            border={'1px solid black'}
            boxShadow={'4px 4px 0 0 black'}
            src={image}
        />
        <Flex p={8} flex={{base: '0 0 100%', md: '0 0 60%'}} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text
                as={'span'}
                position={'relative'}
                >
                {title}
                </Text>
                <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                {description}
            </Text>
            <Box
                bg="white"
                rounded={'base'}
                border='1px solid'
                borderColor={'brand.black'}
                display={'inline-block'}
                w={'fit-content'}
                px={2}
                py={1}
                color="brand.black"
                mr={2}
                mb={2}>
                <Text fontSize={'sm'} fontWeight="700">
                    Lanzamiento: {date}
                </Text>
            </Box>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                rounded={'base'}
                bg={'brand.400'}
                color={'white'}
                _hover={{
                    bg: 'brand.500',
                }}>
                Ver colección
                </Button>
            </Stack>
            </Stack>
        </Flex>
    </Stack>
)}
  
export default Drop