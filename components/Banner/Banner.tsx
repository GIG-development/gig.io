import {
    Stack,
    Flex,
    Button,
    Heading,
    Link,
    Text,
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
        <Flex
            w={'full'}
            h={{base: '50vh', md: '80vh'}}
            backgroundImage={
                `url(${image})`
            }
            backgroundSize={useBreakpointValue({ base: '100%', md: '70%' })}
            backgroundPosition={'center center'}
            backgroundRepeat={'no-repeat'}
        >
            <Stack
                w={'7xl'}
                justify={'center'}
                align={'center'}
                spacing={6}
            >
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
                <Stack spacing={6} direction={useBreakpointValue({ base: 'column', md: 'row' })} align={'center'}>
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
        </Flex>
        </>
    )
}
  
export default Banner