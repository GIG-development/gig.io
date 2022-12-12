import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { FC, PropsWithChildren, ReactElement } from 'react'
import Lottie from 'react-lottie-player';

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
    animation?: any
}
  
const AnimatedHero: FC<PropsWithChildren<Props>> = ({
    bg = '',
    ctaLine_1 = '',
    ctaLine_2 = '',
    description = '',
    button_1 = '',
    button_1_link = '',
    button_2 = '',
    button_2_link = '',
    isSpecialButton = false,
    specialButton = '',
    animation = ''
}) => {
    return (
    <div id="main-hero">
        <Flex
            w={'full'}
            h={useBreakpointValue({base:'calc(100vh - 64px)', md: '64vh'})}
            backgroundImage={`url(${bg})`}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
            <Stack minH={'64vh'} maxW={'7xl'} direction={{ base: 'column', md: 'row' }} margin={'0 auto'}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}>
                            <Text
                            as={'span'}
                            position={'relative'}
                            color={'white'}
                            fontWeight={'300'}
                            >
                                {ctaLine_1}
                            </Text>
                            {' '}
                            {ctaLine_2!=='' && 
                            <>
                                <Text
                                color={'white'}
                                as={'span'}
                                >
                                    {ctaLine_2}
                                </Text>{' '}
                            </>
                            }
                        </Heading>
                        <Text fontSize={{ base: 'lg', lg: 'lg' }} color={'white'}>
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
                    {animation!=='' &&
                       <Lottie
                            loop={true}
                            animationData={animation}
                            play
                            style={{ width: 480, height: 480 }}
                        />
                    }
                </Flex>
            </Stack>
        </Flex>
    </div>
    )
}
  
export default AnimatedHero