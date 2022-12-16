import {
  Heading,
  SimpleGrid,
  Stack
} from '@chakra-ui/react';
import { Home } from '@nft/templates'
import Artist from 'components/Artist/Artist';
import Drop from '../components/Drop/Drop'
import Hero from '../components/Hero/Hero'
import SecondaryHero from '../components/Hero/SecondaryHero'
import Banner from '../components/Banner/Banner'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import environment from '../environment'
import LargeLayout from '../layouts/large'

export const getServerSideProps = Home.server(
  environment.GRAPHQL_URL,
  environment.FEATURED_TOKEN,
  environment.PAGINATION_LIMIT,
  environment.HOME_TOKENS,
)

const HomePage: NextPage<Home.Props> = ({
  now,
  featuredTokens,
  tokens,
  limit,
  currentAccount,
}) => {
  const { t } = useTranslation('components')
  return (
  <div id="home">
    <Hero 
      bg={'/img/home/main_hero_bg.jpg'}
      ctaLine_1={t('home.mainHero.ctaLine1')}
      ctaLine_2={t('home.mainHero.ctaLine2')}
      description={t('home.mainHero.description')}
      button_1={t('home.mainHero.button')}
      button_1_link={'/explore'}
      image={'/img/home/main_hero_img.png'}
    />
    <LargeLayout>
      <Stack spacing={6} mt={20} mb={40}>
          <Heading as="h2" variant="subtitle" color="brand.black">
            {t('home.featuredArtists.title')}
          </Heading>
          <SimpleGrid spacing={6} columns={{sm: 2, md: 3, lg: 4}}>
            <Artist 
              name='Ocote'
              handle='@el_ocote'
              description='🌵🗿📡Artesanía digital👇🏼'
              tags={['arte digital','gráfica','street art']}
              image='https://static.wixstatic.com/media/c3f0a4_a145f2389cc94bb6abe7606468d67129~mv2.jpg/v1/crop/x_74,y_67,w_2213,h_2203/fill/w_565,h_565,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/19_Territorio.jpg'
              link={'https://testnet.gig.io/users/0x6458a79eb4ef3f6982ff4fe270f43fd6ec9f30c1'}
            />
            <Artist 
              name='ilithya'
              handle='@ilithya_rocks'
              description='Music inspired art + tech 🤘🏽
              💫 Creations with programming + algorithms
              🖤 Mexican based in Hamburg'
              tags={['música','multimedia','creative coding']}
              image='https://gig-io.vercel.app/_next/image?url=https%3A%2F%2Fgig.mypinata.cloud%2Fipfs%2FQmQCSR8mayBTYsR4aWQV8pExSWQVGiqFXGWr63kyepR9GH%2Fnft.png&w=640&q=75'
              link={'https://testnet.gig.io/users/0x6458a79eb4ef3f6982ff4fe270f43fd6ec9f30c1'}
            />
            <Artist 
              name='p1xelfool'
              handle='@p1xelfool'
              description='Internet artist since 3001 */ father of multidimentional entities'
              tags={['arte digital','animation']}
              image='https://p1xelfool.com/images/soul.gif'
              link={'https://testnet.gig.io/users/0x6458a79eb4ef3f6982ff4fe270f43fd6ec9f30c1'}
            />
            <Artist 
              name='Maw'
              handle='@mawmawmaw'
              description='Desarrollador web y creative coder'
              tags={['desarrollo web','diseño']}
              image='https://maw.dev/images/fbtw.jpg'
              link={'https://testnet.gig.io/users/0x6458a79eb4ef3f6982ff4fe270f43fd6ec9f30c1'}
            />
          </SimpleGrid>
      </Stack>

      <Home.Template
        currentAccount={currentAccount}
        featuredTokens={featuredTokens}
        limit={limit}
        now={now}
        tokens={tokens}
        explorer={{
          name: environment.BLOCKCHAIN_EXPLORER_NAME,
          url: environment.BLOCKCHAIN_EXPLORER_URL,
        }}
      />

      <Stack spacing={12} mb={40}>
          <Heading as="h2" variant="subtitle" color="brand.black" mt={40} mb={10}>
            {t('home.gigDrops.title')}
          </Heading>
          <Drop
            title='GIG Series - Génesis'
            date='1 de Enero 2023'
            description='GIG Génesis es la primera colección de la familia GIG que trae una misión: Empoderar almas creativas empezando por LATAM a través de la conexión con líderes de la industria creativa y Web3.'
            image='/img/drops/drop-gig-genesis.jpg'
            link='https://gig.io'
          />
          <Drop
            title='Maxas Génesis'
            date='10 de Febrero 2023'
            description=''
            image='/img/drops/drop-maxas-genesis.jpg'
            link='https://maxas.xyz'
          />
      </Stack>
    </LargeLayout>

    <Stack spacing={12} mb={10} backgroundColor={'gray.100'} w={'full'} id='home__section-video'>
      <LargeLayout>
        <Heading as="h2" variant="subtitle" color="black">
            {t('home.secondaryHero.title')}
        </Heading>
        <SecondaryHero 
          ctaLine_1={t('home.secondaryHero.ctaLine1')}
          ctaLine_2={t('home.secondaryHero.ctaLine2')}
          description={t('home.secondaryHero.description')}
          button_1={t('home.secondaryHero.button')}
          button_1_link='/nosotros'
          image='./img/home/video.jpg'
        />
      </LargeLayout>
    </Stack>
    
    <Banner
      cta={t('home.banner.title')}
      description={t('home.banner.text')}
      button1={t('home.banner.button1')}
      button2={t('home.banner.button2')}
    />
  </div>
)}

export default HomePage
