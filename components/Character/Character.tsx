import {
    Box,
    Flex,
    Grid,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Lottie from 'react-lottie-player'

type Props = {
    name: string
    animation: any
    description: string
    description2?: string
    powers: string[]
    weaknesses: string[]
}
  
const Character: FC<PropsWithChildren<Props>> = ({
    name = '',
    animation = '',
    description = '',
    description2 = '',
    powers = [],
    weaknesses = []
}) => {
    const { t } = useTranslation('components')
    return (
        <Flex
            grow={0}
            shrink={0}
            basis={'100%'}
            p="0 40px"
        >
            <Grid p={{base: 0, md: 4}} gap={8}
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: '1fr 3fr',
                }}
            >
                <Lottie
                    loop={true}
                    animationData={animation}
                    play
                    style={{ width: 280, height: 280 }}
                />
                <Stack direction={'column'} >
                    <Box>
                        <Heading as={'h4'} variant={'heading1'} mb={4}>
                            <b>{name}</b>
                        </Heading>
                        <Text fontSize='xs'>
                            {description}
                        </Text>
                        {description2 != '' && (
                            <Text fontSize='xs'>
                                {description2}
                            </Text>
                        )}
                    </Box>
                    <Stack direction={'row'} spacing={12} pt={4}>
                        <Box>
                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.powers')}</Heading>
                            {powers.map(p=>{
                                return (
                                    <Text key={p} fontSize='xs'>{p}</Text>
                                )
                            })}
                        </Box>
                        <Box>
                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.weaknesses')}</Heading>
                            {weaknesses.map(w=>{
                                return (
                                    <Text key={w} fontSize='xs'>{w}</Text>
                                )
                            })}
                        </Box>
                    </Stack>
                </Stack>
            </Grid>
        </Flex>
    )
}
  
export default Character