import {
  Grid,
  Box,
  Text,
  Heading, 
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Lottie from 'react-lottie-player'
import Slider from 'react-slidy'
import { FiChevronLeft } from "@react-icons/all-files/fi/FiChevronLeft";
import { FiChevronRight } from "@react-icons/all-files/fi/FiChevronRight";
import NFTLali from '../public/img/animaciones/NFTLALI.json'
import MAMADORIS from '../public/img/animaciones/MAMADORIS.json'
import FLIPPER from '../public/img/animaciones/FLIPPER.json'
import CREADORI from '../public/img/animaciones/CREADORI.json'
import PAPACHE from '../public/img/animaciones/PAPACHE.json'
import URI from '../public/img/animaciones/URI.json'
import JEITER from '../public/img/animaciones/JEITER.json'
import ESKERI from '../public/img/animaciones/ESKERI.json'

function CustomArrow(emoji) {
    return (
      <button style={{
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        fontSize: 72,
        height: '30%',
        margin: 'auto 10px',
        padding: 15
      }}>
        <span role="img" aria-label="Arrow">
          {emoji}
        </span>
      </button>
    )
}
  
function CustomArrowLeft() {
    return <CustomArrow emoji={FiChevronLeft} />
}
  
function CustomArrowRight() {
    return <CustomArrow emoji={FiChevronRight} />
}

const FamiliaGIG: NextPage = () => {
    const { t } = useTranslation('components')
    return (
        <div id="familia">
            <LargeLayout>
                <Head
                    title="Familia GIG"
                    description="Únete a la comunidad de creativos marketplace no. 1 de Latinoamérica en donde puedes crear NFTs seguro y fácil."
                />
                <Stack spacing={6} mb={20}>
                    <Heading as={'h1'} variant="title">
                        {t('family.title')}
                    </Heading>
                    <Text fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                        {t('family.line1')}
                    </Text>
                    <Text fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                        {t('family.line2')}
                    </Text>
                    <Stack alignItems={'center'}>
                        <Slider ArrowLeft={CustomArrowLeft} ArrowRight={CustomArrowRight}>
                            <Grid p={4} alignContent={'center'} mb={10}
                                templateColumns={{
                                    base: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: '1fr 3fr',
                                }}
                                gap={8}
                                maxW={'720px'}
                            >
                                <Lottie
                                    loop={true}
                                    animationData={NFTLali}
                                    play
                                    style={{ width: 280, height: 280 }}
                                />
                                <Stack direction={'column'} >
                                    <Box>
                                        <Heading as={'h4'} variant={'heading1'} mb={4}><b>NFTLali</b></Heading>
                                        <Text fontSize='xs'>
                                            {t('family.characters.nftlali.description')}
                                        </Text>
                                    </Box>
                                    <Stack direction={'row'} spacing={12} pt={4}>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.powers')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.nftlali.power.power1')}<br/>
                                                {t('family.characters.nftlali.power.power2')}<br/>
                                                {t('family.characters.nftlali.power.power3')}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.weaknesses')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.nftlali.weakness.weakness1')}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid p={4} alignContent={'center'} mb={10}
                                templateColumns={{
                                    base: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: '1fr 3fr',
                                }}
                                gap={8}
                                maxW={'720px'}
                            >
                                <Lottie
                                    loop={true}
                                    animationData={MAMADORIS}
                                    play
                                    style={{ width: 280, height: 280 }}
                                />
                                <Stack direction={'column'} >
                                    <Box>
                                        <Heading as={'h4'} variant={'heading1'} mb={4}><b>Mamá Doris</b></Heading>
                                        <Text fontSize='xs'>
                                        {t('family.characters.mamadoris.description')}
                                        </Text>
                                    </Box>
                                    <Stack direction={'row'} spacing={12} pt={4}>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.powers')}</Heading>
                                            <Text fontSize='xs'>
                                            {t('family.characters.mamadoris.power.power1')}<br/>
                                            {t('family.characters.mamadoris.power.power2')}<br/>
                                            {t('family.characters.mamadoris.power.power3')}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.weaknesses')}</Heading>
                                            <Text fontSize='xs'>
                                            {t('family.characters.mamadoris.weakness.weakness1')}<br/>
                                            {t('family.characters.mamadoris.weakness.weakness2')}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid p={4} alignContent={'center'} mb={10}
                                templateColumns={{
                                    base: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: '1fr 3fr',
                                }}
                                gap={8}
                                maxW={'720px'}
                            >
                                <Lottie
                                    loop={true}
                                    animationData={CREADORI}
                                    play
                                    style={{ width: 280, height: 280 }}
                                />
                                <Stack direction={'column'} >
                                    <Box>
                                        <Heading as={'h4'} variant={'heading1'} mb={4}><b>Creadori Jiménez</b></Heading>
                                        <Text fontSize='xs'>
                                        {t('family.characters.creadori.description')}
                                        </Text>
                                    </Box>
                                    <Stack direction={'row'} spacing={12} pt={4}>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.powers')}</Heading>
                                            <Text fontSize='xs'>
                                            {t('family.characters.creadori.power.power1')}<br/>
                                            {t('family.characters.creadori.power.power2')}<br/>
                                            {t('family.characters.creadori.power.power3')}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.weaknesses')}</Heading>
                                            <Text fontSize='xs'>
                                            {t('family.characters.creadori.weakness.weakness1')}<br/>
                                            {t('family.characters.creadori.weakness.weakness2')}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid p={4} alignContent={'center'} mb={10}
                                templateColumns={{
                                    base: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: '1fr 3fr',
                                }}
                                gap={8}
                                maxW={'720px'}
                            >
                                <Lottie
                                    loop={true}
                                    animationData={FLIPPER}
                                    play
                                    style={{ width: 280, height: 280 }}
                                />
                                <Stack direction={'column'} >
                                    <Box>
                                        <Heading as={'h4'} variant={'heading1'} mb={4}><b>Flipper</b></Heading>
                                        <Text fontSize='xs'>
                                        {t('family.characters.flipper.description')}
                                        <br/><b>{t('family.characters.flipper.description2')}</b>
                                        </Text>
                                    </Box>
                                    <Stack direction={'row'} spacing={12} pt={4}>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.powers')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.flipper.power.power1')}<br/>
                                                {t('family.characters.flipper.power.power2')}<br/>
                                                {t('family.characters.flipper.power.power3')}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.weaknesses')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.flipper.weakness.weakness1')}<br/>
                                                {t('family.characters.flipper.weakness.weakness2')}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid p={4} alignContent={'center'} mb={10}
                                templateColumns={{
                                    base: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: '1fr 3fr',
                                }}
                                gap={8}
                                maxW={'720px'}
                            >
                                <Lottie
                                    loop={true}
                                    animationData={ESKERI}
                                    play
                                    style={{ width: 280, height: 280 }}
                                />
                                <Stack direction={'column'} >
                                    <Box>
                                        <Heading as={'h4'} variant={'heading1'} mb={4}><b>Eskeri Popi</b></Heading>
                                        <Text fontSize='xs'>
                                        {t('family.characters.eskeri.description')}
                                        </Text>
                                    </Box>
                                    <Stack direction={'row'} spacing={12} pt={4}>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.powers')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.eskeri.power.power1')}<br/>
                                                {t('family.characters.eskeri.power.power2')}<br/>
                                                {t('family.characters.eskeri.power.power3')}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.weaknesses')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.eskeri.weakness.weakness1')}<br/>
                                                {t('family.characters.eskeri.weakness.weakness2')}<br/>
                                                {t('family.characters.eskeri.weakness.weakness3')}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid p={4} alignContent={'center'} mb={10}
                                templateColumns={{
                                    base: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: '1fr 3fr',
                                }}
                                gap={8}
                                maxW={'720px'}
                            >
                                <Lottie
                                    loop={true}
                                    animationData={JEITER}
                                    play
                                    style={{ width: 280, height: 280 }}
                                />
                                <Stack direction={'column'} >
                                    <Box>
                                        <Heading as={'h4'} variant={'heading1'} mb={4}><b>Jeiter Popi</b></Heading>
                                        <Text fontSize='xs'>
                                        {t('family.characters.jeiter.description')}
                                        </Text>
                                    </Box>
                                    <Stack direction={'row'} spacing={12} pt={4}>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.powers')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.jeiter.power.power1')}<br/>
                                                {t('family.characters.jeiter.power.power2')}<br/>
                                                {t('family.characters.jeiter.power.power3')}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.weaknesses')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.jeiter.weakness.weakness1')}<br/>
                                                {t('family.characters.jeiter.weakness.weakness2')}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid p={4} alignContent={'center'} mb={10}
                                templateColumns={{
                                    base: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: '1fr 3fr',
                                }}
                                gap={8}
                                maxW={'720px'}
                            >
                                <Lottie
                                    loop={true}
                                    animationData={URI}
                                    play
                                    style={{ width: 280, height: 280 }}
                                />
                                <Stack direction={'column'} >
                                    <Box>
                                        <Heading as={'h4'} variant={'heading1'} mb={4}><b>URI</b></Heading>
                                        <Text fontSize='xs'>
                                            {t('family.characters.uri.description')}
                                        </Text>
                                    </Box>
                                    <Stack direction={'row'} spacing={12} pt={4}>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.powers')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.uri.power.power1')}<br/>
                                                {t('family.characters.uri.power.power2')}<br/>
                                                {t('family.characters.uri.power.power3')}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.weaknesses')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.uri.weakness.weakness1')}<br/>
                                                {t('family.characters.uri.weakness.weakness2')}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid p={4} alignContent={'center'} mb={10}
                                templateColumns={{
                                    base: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: '1fr 3fr',
                                }}
                                gap={8}
                                maxW={'720px'}
                            >
                                <Lottie
                                    loop={true}
                                    animationData={PAPACHE}
                                    play
                                    style={{ width: 280, height: 280 }}
                                />
                                <Stack direction={'column'} >
                                    <Box>
                                        <Heading as={'h4'} variant={'heading1'} mb={4}><b>Papá Che</b></Heading>
                                        <Text fontSize='xs'>
                                            {t('family.characters.papache.description')}
                                        </Text>
                                    </Box>
                                    <Stack direction={'row'} spacing={12} pt={4}>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.powers')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.papache.power.power1')}<br/>
                                                {t('family.characters.papache.power.power2')}<br/>
                                                {t('family.characters.papache.power.power3')}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading as={'h5'} variant={'heading4'}>{t('family.characters.weaknesses')}</Heading>
                                            <Text fontSize='xs'>
                                                {t('family.characters.papache.weakness.weakness1')}<br/>
                                                {t('family.characters.papache.weakness.weakness2')}<br/>
                                                {t('family.characters.papache.weakness.weakness3')}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>

                        </Slider>

                    </Stack>
                </Stack>
            </LargeLayout>
        </div>
    )
}

export default FamiliaGIG