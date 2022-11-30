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
  return (
  <>
    <Hero 
      bg={'/img/home/hero_bg.jpg'}
      ctaLine_1={'GIG'}
      ctaLine_2={'Marketplace'}
      description={'Necesitamos alguna frase interesante para poner aquí'}
      button_1={'Explorar'}
      button_1_link={'/explore'}
      button_2={'Quiénes Somos'}
      button_2_link={'/nosotros'}
      image={'/img/familia/nftlali.png'}
    />

    <LargeLayout>

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

      <Stack spacing={6} mt={20}>
          <Heading as="h2" variant="subtitle" color="brand.black">
            Artistas Destacados
          </Heading>
          <SimpleGrid spacing={6} columns={{sm: 2, md: 3, lg: 4}}>
            <Artist 
              name='Hannah James'
              handle='@hannahjames'
              description='Actriz, música, escritora y artista.'
              tags={['arte','fotografía','música']}
              image='https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            />
            <Artist 
              name='Maw'
              handle='@mawmawmaw'
              description='Desarrollador web y creative coder'
              tags={['desarrollo web','diseño']}
              image='https://maw.dev/images/fbtw.jpg'
            />
          </SimpleGrid>
      </Stack>

      <Stack spacing={12} mb={40}>
          <Heading as="h2" variant="subtitle" color="brand.black" mt={40} mb={10}>
              Lanzamientos GIG
          </Heading>
          <Drop
            title='GIG Genesis'
            date='1 de Enero 2023'
            description='Nuestra primera colección para celebrar el lanzamiento oficial de GIG.io'
            image='/img/home/drop-gig-genesis.jpg'
          />
      </Stack>

      <Stack spacing={12} mb={40}>
        <Heading as="h2" variant="subtitle" color="brand.black">
            GIG Marketplace
        </Heading>
        <Stack align={'center'}>
          <SecondaryHero 
            ctaLine_1='Empoderando almas'
            ctaLine_2='CREATIVAS'
            description=''
            button_1='Explorar'
            button_1_link='/explore'
            button_2='¿Cómo funciona?'
            button_2_link='/nosotros'
            image='./img/home/video.jpg'
          />
        </Stack>
      </Stack>

    </LargeLayout>
    
    <Banner
      cta='¿Quieres saber más?'
      description='Tenemos varios tutoriales que pueden ayudarte a tener todo mas claro'
      button1='Visita nuestros tutoriales'
      button2='Preguntas frecuentes'
      image={'./img/home/home_faq_banner_bg.png'}
    />
  </>
)}

export default HomePage
