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
    <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex>
            <Image
                alt={'Drop Image'}
                objectFit={'cover'}
                borderRadius={'base'}
                border={'1px solid black'}
                boxShadow={'4px 4px 0 0 black'}
                src={image}
            />
        </Flex>
        <Flex p={8} flex={'0 0 60%'} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text
                as={'span'}
                position={'relative'}
                _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'brand.400',
                    zIndex: -1,
                }}>
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