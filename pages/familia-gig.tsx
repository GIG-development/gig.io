import {
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FamiliaGIG: NextPage = () => {
    const { t } = useTranslation('components')
    const SliderSettings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
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
                </Stack>
                <Box maxW={'720px'} margin={'0 auto 40px'}>
                    <Slider {...SliderSettings}>
                        <div>
                            <h1>NFTLali</h1>
                            <p>{p('family.characters.nftlali.description')}</p>
                        </div>
                        <div>
                            <h1>URI</h1>
                            <p>{p('family.characters.nftlali.description')}</p>
                        </div>
                        <div>
                            <h1>Flipper</h1>
                            <p>{p('family.characters.nftlali.description')}</p>
                        </div>
                    </Slider>
                </Box>
            </LargeLayout>
        </div>
    )
}

export default FamiliaGIG