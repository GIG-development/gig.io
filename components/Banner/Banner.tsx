import {
    Stack,
    Flex,
    Button,
    Heading,
    Link,
    Text,
    VStack,
    useBreakpointValue
  } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react'

type Props = {
    cta: string
    description: string
    button1: string
    button2: string
    image?: string
}
  
const Banner: FC<PropsWithChildren<Props>> = ({
    cta,
    description,
    button1,
    button2,
    image
}) => { 
    return (
        <>
        <Stack spacing={6} mt={12}>
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    `url(${image})`
                }
                backgroundSize={useBreakpointValue({ base: '100%', md: '70%' })}
                backgroundPosition={'center center'}
                backgroundRepeat={'no-repeat'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 'sm', md: 8 })}
                    >
                    <Stack maxW={'2xl'} align={'center'} spacing={6}>
                        <Heading as="h2" size={useBreakpointValue({ base: 'xl', md: '3xl' })}>
                            {cta}
                        </Heading>
                        <Text
                            color={'brand.black'}
                            fontWeight={400}
                            lineHeight={1}
                            align={'center'}
                            fontSize={useBreakpointValue({ base: 'md', md: 'xl' })}>
                            {description}
                        </Text>
                        <Stack spacing={6} direction={useBreakpointValue({ base: 'column', md: 'row' })}>
                            <Link href={'/tutoriales'}>
                                <Button
                                bg={'brand.500'}
                                rounded={'base'}
                                color={'white'}
                                border={'1px solid black'}
                                boxShadow={'4px 4px 0 0 black'}
                                _hover={{ bg: 'brand.600' }}>
                                {button1}
                                </Button>
                            </Link>
                            <Link href={'/faq'}>
                                <Button
                                bg={'brand.400'}
                                rounded={'base'}
                                color={'white'}
                                border={'1px solid black'}
                                boxShadow={'4px 4px 0 0 black'}
                                _hover={{ bg: 'brand.600' }}>
                                {button2}
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </VStack>
            </Flex>
        </Stack>
    </>
    )
}
  
export default Banner