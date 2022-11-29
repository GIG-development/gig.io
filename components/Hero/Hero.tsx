import {
    Button,
    createIcon,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { FC } from 'react'
  
const Hero: FC = () => {
    return (
    <>
        <Flex
            w={'full'}
            h={useBreakpointValue({base:'100vh', md: '60vh'})}
            backgroundImage={
                'url(/img/home/hero_bg.jpg)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
            <Stack minH={'60vh'} maxW={'7xl'} direction={{ base: 'column', md: 'row' }} margin={'0 auto'}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text
                            as={'span'}
                            position={'relative'}
                            color={'white'}
                            textShadow={'1px 1px black'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'white',
                                zIndex: -1,
                            }}>
                                GIG
                            </Text>
                            <br />{' '}
                            <Text
                            color={'brand.400'}
                            as={'span'}
                            textShadow={'1px 1px black'}
                            >
                                Marketplace
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                            The project board is an exclusive resource for contract work. It&apos;s
                            perfect for freelancers, agencies, and moonlighters.
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Link href={'/explore'}>
                        <Button
                            rounded={'base'}
                            size={'lg'}
                            border={'1px solid black'}
                            boxShadow={'4px 4px 0 0 black'}
                            px={6}
                            colorScheme={'brand'}
                            bg={'brand.400'}
                            _hover={{ bg: 'brand.500' }}>
                                Explorar
                        </Button>
                    </Link>
                    <Link href={'/nosotros'}>
                        <Button
                        rounded={'base'}
                        size={'lg'}
                        border={'1px solid black'}
                        boxShadow={'4px 4px 0 0 black'}
                        px={6}
                        leftIcon={<PlayIcon h={4} w={4} color={'white'} />}>
                            ¿Cómo funciona?
                        </Button>
                    </Link>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                    alt={'Main Hero Animation'}
                    objectFit={'cover'}
                    src={
                        '/img/familia/nftlali.png'
                    }
                    />
                </Flex>
            </Stack>
        </Flex>
    </>
    )
}
  
export default Hero

const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
        'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});