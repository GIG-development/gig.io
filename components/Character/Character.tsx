import {
    Box,
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
    powers: string[]
    weaknesses: string[]
}
  
const Character: FC<PropsWithChildren<Props>> = ({
    name = '',
    animation = '',
    description = '',
    powers = [],
    weaknesses = []
}) => {
    const { t } = useTranslation('components')
    return (
        <div className='gig-character'>
            <Stack minW={'340px'}>
                <Grid p={4} m={{base: '0', md: '0 40px 0 0'}}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '1fr 3fr',
                    }}
                    gap={8}
                >
                    <Lottie
                        loop={true}
                        animationData={animation}
                        play
                        style={{ width: 280, height: 280 }}
                    />
                    <Stack direction={'column'} >
                        <Box>
                            <Heading as={'h4'} variant={'heading1'} mb={4}><b>{name}</b></Heading>
                            <Text fontSize='xs'>
                                {description}
                            </Text>
                        </Box>
                        <Stack direction={'row'} spacing={12} pt={4}>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>{t('family.characters.powers')}</Heading>
                                {powers.map(p=>{
                                    return (
                                        <Text fontSize='xs'>{p}</Text>
                                    )
                                })}
                            </Box>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>{t('family.characters.weaknesses')}</Heading>
                                {weaknesses.map(w=>{
                                    return (
                                        <Text fontSize='xs'>{w}</Text>
                                    )
                                })}
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
            </Stack>
        </div>
    )
}
  
export default Character