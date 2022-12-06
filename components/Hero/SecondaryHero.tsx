import {
    Stack,
    Flex,
    Box,
    Heading,
    Link,
    Text,
    Button,
    Image,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    AspectRatio,
    useBreakpointValue
} from '@chakra-ui/react'
import LargeLayout from '../../layouts/large'
import { FC, PropsWithChildren } from 'react'

type Props = {
    ctaLine_1: string
    ctaLine_2?: string
    description: string
    button_1?: string
    button_1_link?: string
    button_2?: string
    button_2_link?: string
    image: string
}
  
const SecondaryHero: FC<PropsWithChildren<Props>> = ({
    ctaLine_1,
    ctaLine_2 = '',
    description,
    button_1 = '',
    button_1_link = '',
    button_2 = '',
    button_2_link = '',
    image
}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
    <LargeLayout>
        <Stack
        align={'center'}
        backgroundColor={'gray.400'}
        maxW={{base: 72, md: '7xl'}}
        spacing={{ base: 4, md: 6 }}
        py={{ base: 4, md: 20 }}
        direction={{ base: 'column', md: 'row' }}>
            <Stack flex={1} spacing={{ base: 4, md: 6 }}>
                <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                    <Text
                        as={'span'}
                        position={'relative'}
                        >
                        {ctaLine_1}
                    </Text>
                    {ctaLine_2!=='' && 
                        <>
                        <Text as={'span'} color={'black'}>
                            {ctaLine_2}
                        </Text>
                        </>
                    }
                </Heading>
                <Text color={'gray.500'}>
                {description}
                </Text>
                <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
                >
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
                    { (button_2!=='' && button_2_link!=='')  && 
                    <Link href={button_2_link}>
                        <Button
                        rounded={'base'}
                        size={'lg'}
                        border={'1px solid black'}
                        boxShadow={'4px 4px 0 0 black'}
                        px={6}
                        >
                        {button_2}
                        </Button>
                    </Link>
                    }
                </Stack>
            </Stack>
            <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                position={'relative'}
                w={'full'}>
                <Box
                    position={'relative'}
                    height={'300px'}
                    borderRadius={'base'}
                    border={'1px solid black'}
                    boxShadow={'4px 4px 0 0 black'}
                    width={'full'}
                    overflow={'hidden'}
                >
                    <IconButton
                        aria-label={'Play Button'}
                        variant={'icon'}
                        _hover={{ bg: 'transparent' }}
                        icon={<PlayIcon w={12} h={12} />}
                        size={'lg'}
                        color={'brand.500'}
                        backgroundColor={'white'}
                        borderRadius={'full'}
                        position={'absolute'}
                        left={'50%'}
                        top={'50%'}
                        transform={'translateX(-50%) translateY(-50%)'}
                        style={{borderRadius: '50%'}}
                        onClick={onOpen}
                        cursor={'pointer'}
                    />
                    <Image
                        alt={'Hero Image'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        src={image}
                        onClick={onOpen}
                        cursor={'pointer'}
                    />
                </Box>
            </Flex>
        </Stack>
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={true} isCentered motionPreset='scale' size={useBreakpointValue({ base: 'sm', md: 'md' })}>
            <ModalOverlay backdropFilter='blur(10px)'/>
            <ModalContent maxW={'960px'}>
                <ModalHeader></ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <AspectRatio maxW={'100%'} ratio={16/9}>
                        <video
                            src='/img/home/video.mp4' autoPlay controls={false}
                        />
                    </AspectRatio>
                </ModalBody>
                <ModalFooter>
                    <Button mr={3} onClick={onClose}>Cerrar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </LargeLayout>
    )
}
  
export default SecondaryHero