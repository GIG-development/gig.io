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
  <div id="home">
    <Hero 
      bg={'/img/home/main_hero_bg.jpg'}
      ctaLine_1={'GIG'}
      ctaLine_2={'Marketplace'}
      description={'Necesitamos alguna frase interesante para poner aquí'}
      button_1={'Explorar'}
      button_1_link={'/explore'}
      button_2={'Quiénes Somos'}
      button_2_link={'/nosotros'}
      image={'/img/home/main_hero_img.png'}
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
              name='Ocote'
              handle='@el_ocote'
              description='🌵🗿📡Artesanía digital👇🏼'
              tags={['arte digital','gráfica','street art']}
              image='https://static.wixstatic.com/media/c3f0a4_a145f2389cc94bb6abe7606468d67129~mv2.jpg/v1/crop/x_74,y_67,w_2213,h_2203/fill/w_565,h_565,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/19_Territorio.jpg'
            />
            <Artist 
              name='ilithya'
              handle='@ilithya_rocks'
              description='Music inspired art + tech 🤘🏽
              💫 Creations with programming + algorithms
              🖤 Mexican based in Hamburg'
              tags={['música','multimedia','creative coding']}
              image='https://gig-io.vercel.app/_next/image?url=https%3A%2F%2Fgig.mypinata.cloud%2Fipfs%2FQmQCSR8mayBTYsR4aWQV8pExSWQVGiqFXGWr63kyepR9GH%2Fnft.png&w=640&q=75'
            />
            <Artist 
              name='p1xelfool'
              handle='@p1xelfool'
              description='Internet artist since 3001 */ father of multidimentional entities'
              tags={['arte digital','animation']}
              image='https://p1xelfool.com/images/soul.gif'
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
  </div>
)}

export default HomePage
