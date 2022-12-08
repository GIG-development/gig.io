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
      ctaLine_1={'Empodera tu'}
      ctaLine_2={'CREATIVIDAD'}
      description={'Explora, compra, crea, subasta y vende NFTs de forma fácil, rápida y segura.'}
      button_1={'Explorar'}
      button_1_link={'/explore'}
      image={'/img/home/main_hero_img.png'}
    />

    <LargeLayout>

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
              GIG Labs
          </Heading>
          <Drop
            title='GIG Genesis'
            date='1 de Enero 2023'
            description='GIG Génesis es una colección de personajes de GIGverso que trae una misión: Empoderar almas creativas empezando por LATAM a través de la conexión con líderes de la industria, eventos especiales, drops, experiencias inmersivas y más.'
            image='/img/home/drop-gig-genesis.jpg'
          />
      </Stack>
    </LargeLayout>

    <Stack spacing={12} mb={10} backgroundColor={'gray.100'} w={'full'} id='home__section-video'>
      <LargeLayout>
        <Heading as="h2" variant="subtitle" color="black">
            GIG Marketplace
        </Heading>
        <SecondaryHero 
          ctaLine_1='Empoderando almas'
          ctaLine_2='Creativas'
          description='No necesitas ser experto, estamos contigo desde la conceptualización hasta la promoción de tus NFTs. Solo trae tus ganas de entrar al espacio cripto en una comunidad de creativos geniales.'
          button_1='Explorar'
          button_1_link='/explore'
          button_2='¿Cómo funciona?'
          button_2_link='/nosotros'
          image='./img/home/video.jpg'
        />
      </LargeLayout>
    </Stack>
    
    <Banner
      cta='¿Quieres saber más?'
      description='Tenemos varios tutoriales que pueden ayudarte a tener todo mas claro'
      button1='Visita nuestros tutoriales'
      button2='Preguntas frecuentes'
    />
  </div>
)}

export default HomePage
