import {
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { FC, PropsWithChildren, ReactElement } from 'react'

type Props = {
    bg: string
    ctaLine_1: string
    ctaLine_2?: string
    description: string
    button_1?: string
    button_1_link?: string
    button_2?: string
    button_2_link?: string
    isSpecialButton?: boolean
    specialButton?: ReactElement<any,any>
    image?: string
}
  
const Hero: FC<PropsWithChildren<Props>> = ({
    bg,
    ctaLine_1,
    ctaLine_2 = '',
    description,
    button_1 = '',
    button_1_link = '',
    button_2 = '',
    button_2_link = '',
    isSpecialButton = false,
    specialButton = '',
    image
}) => {
    return (
    <>
        <Flex
            w={'full'}
            h={useBreakpointValue({base:'100vh', md: '60vh'})}
            backgroundImage={`url(${bg})`}
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
                                {ctaLine_1}
                            </Text>
                            <br />{' '}
                            {ctaLine_2!=='' && 
                                <>
                                    <Text
                                    color={'brand.400'}
                                    as={'span'}
                                    textShadow={'1px 1px black'}
                                    >
                                        {ctaLine_2}
                                    </Text>{' '}
                                </>
                            }
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                {description}
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            { (button_1!=='' && button_1_link!=='')  && 
                                <Link href={button_1_link}>
                                    <Button
                                        rounded={'base'}
                                        size={'lg'}
                                        border={'1px solid black'}
                                        boxShadow={'4px 4px 0 0 black'}
                                        px={6}
                                        colorScheme={'brand'}
                                        bg={'brand.400'}
                                        _hover={{ bg: 'brand.500' }}>
                                            {button_1}
                                    </Button>
                                </Link>
                            }
                            { (button_2!=='' && button_2_link!=='') && 
                                <Link href={button_2_link}>
                                    <Button
                                    rounded={'base'}
                                    size={'lg'}
                                    border={'1px solid black'}
                                    boxShadow={'4px 4px 0 0 black'}
                                    px={6}>
                                        {button_2}
                                    </Button>
                                </Link>
                            }
                            {isSpecialButton && 
                            <>
                                {specialButton}
                            </>
                            }
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1} minW={'fit-content'}>
                    {image!=='' &&
                        <Image
                        alt={'Main Hero Animation'}
                        objectFit={'cover'}
                        src={image}
                        />       
                    }
                </Flex>
            </Stack>
        </Flex>
    </>
    )
}
  
export default Hero