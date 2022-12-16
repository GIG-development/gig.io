import {
    Box,
    Button,
    Heading,
    Text,
    Img,
    Flex,
    Link,
    useBreakpointValue
  } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react'
import useTranslation from 'next-translate/useTranslation'

type Props = {
    name: string
    handle: string
    description: string
    tags: string[]
    image?: string
    link: string
}
  
const Artist: FC<PropsWithChildren<Props>> = ({
    name,
    handle,
    description,
    tags,
    image,
    link
}) => {
    const { t } = useTranslation('components')
    return (
        <Flex justify={'center'}>
            <Box
                maxW={72}
                rounded={'base'}
                my={2}
                overflow={'hidden'}
                bg="white"
                border='1px solid'
                borderColor='gray.200'
                >
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
                    <Heading color={'black'} fontSize={'xs'} noOfLines={1}>
                        {handle}
                    </Heading>
                    <Text color={'gray.500'} fontSize={'xs'} noOfLines={2} mt={2} h={'60px'}>
                        {description}
                    </Text>

                    <Flex alignContent='space-between' direction='column' mt={2}>
                        <Box mt={2} h={'72px'}>
                            {tags.map((tag)=>{
                                return (
                                    <Box
                                        key={tag}
                                        bg="white"
                                        rounded={'full'}
                                        border='1px solid #E5E7Eb'
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
                        <Link href={link}>
                            <Button w={'full'}>{t('home.featuredArtists.artistProfileButton')}</Button>
                        </Link>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}
  
export default Artist