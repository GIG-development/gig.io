import {
    Accordion,
    Box,
    Heading, 
    Stack,
    Grid,
    SimpleGrid,
    Image,
    Flex,
    Text
} from '@chakra-ui/react'
import Head from '../components/Head'
import AnimatedHero from '../components/Hero/AnimatedHero'
import AccordionItem from '../components/AccordionItem/AccordionItem'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
import Lottie from 'react-lottie-player';
import NFTLaliAnimation from '../public/img/animaciones/creadores_hero.json'
import CreadoriComoFunciona from '../public/img/animaciones/creadori_como-funciona.json'
import JeiterPromocion from '../public/img/animaciones/jeiter_promocion.json'
import PapacheLentes from '../public/img/animaciones/papache_lentes.json'

const tfButton = <><button data-tf-popup="eyQRCt11" data-tf-hide-headers data-tf-iframe-props="title=Registration Form" data-tf-medium="snippet" className="btn">Inicia el viaje aquí</button><script src="//embed.typeform.com/next/embed.js"></script></>
    
const Creadores: NextPage = () => (
    <div id="creadores">
      <AnimatedHero 
        bg={'/img/home/main_hero_bg.jpg'}
        ctaLine_1={'GIG'}
        ctaLine_2={'Labs'}
        description={'Revela tu creatividad y únete a la primera comunidad de talento latino basado en NFTs. Sé parte de esta era creativa y genera impacto mientras creas un mejor futuro.'}
        isSpecialButton={true}
        specialButton={tfButton}
        animation={NFTLaliAnimation}
      />
      <LargeLayout>
        <Head
            title="Creadores"
            description="Gana más por tu talento y pertenece a una gran comunidad de líderes, coleccionistas, inversionistas y creadores de la web3."
        />
        <Stack spacing={6} my={20}>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'}>
              <Stack spacing={4}>
                  <Heading as={'h2'} variant={'subtitle'}>Decodificamos juntos tus ideas</Heading>
                  <Text color={'gray.500'} fontSize={{base: 'sm', md: 'md'}}>
                  No necesitas ser experto, estamos contigo desde la conceptualización hasta la promoción de tus NFTs. Solo trae tus ganas de entrar al espacio cripto en una comunidad de creativos geniales.
                  </Text>
                  <Text color={'gray.800'} fontWeight={700} fontSize={{base: 'sm', md: 'md'}}>
                  Codéate con artistas prestigiosos, coleccionistas, curadores reconocidos y otras mentes creativas como tú
                  </Text>
              </Stack>
              <Flex textAlign={'center'} justifyContent={'center'}>
                  <Image
                      alt={'Creadores'}
                      src={'/img/creadores/decodificamos_ideas.png'}
                      objectFit={'cover'}
                      maxW={"220px"}
                  />
              </Flex>
          </SimpleGrid>

          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt={12} alignItems={'center'}>
            <Flex textAlign={'center'} justifyContent={'center'}>
              <Lottie
                  loop={true}
                  animationData={CreadoriComoFunciona}
                  play
                  style={{ width: '380px', height: '100%' }}
              />
            </Flex>
            <Stack spacing={4}>
                <Heading as={'h2'} variant={'subtitle'}>¿Cómo funciona?</Heading>
                <Text color={'gray.500'} fontSize={{base: 'sm', md: 'md'}}>
                Aquí todos juegan. Ya sea que tengas NFTs, proyectos, activos o incluso si estás en la fase de las ideas y te quieres digitalizar. La única regla es verificarte como creativo pues estarás entrando a una comunidad segura y sostenible.
                Después podrás crear, comprar y vender NFT estableciendo tus precios y regalías.  
                Así de fácil. 
                </Text>
                
            </Stack>
          </SimpleGrid>

        </Stack>
          
      </LargeLayout>

      <Stack spacing={12} mb={10} backgroundColor={'gray.100'} w={'full'} id='home__section-video'>
        <LargeLayout>

            <Heading as={'h2'} variant={'subtitle'} mt={20}>Ser parte de la comunidad te da Beneficios</Heading>
            <Grid templateColumns={{base: '1fr', md: 'repeat(4, 1fr)'}} gap={4} mb={20}>
              <Box textAlign={'center'}>
                <Flex textAlign={'center'} justifyContent={'center'}>
                    <Image
                        alt={'Beneficios'}
                        src={'/img/familia/uri.png'}
                        objectFit={'cover'}
                        maxW={"180px"}
                    />
                </Flex>
                <Heading as={'h2'} variant="heading2">
                Experiencias inmersivas
                </Heading>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                </Text>
              </Box>
              <Box textAlign={'center'}>
                <Flex textAlign={'center'} justifyContent={'center'}>
                    <Image
                        alt={'Beneficios'}
                        src={'/img/familia/uri.png'}
                        objectFit={'cover'}
                        maxW={"180px"}
                    />
                </Flex>
                <Heading as={'h2'} variant="heading2">
                Accesos preferenciales 
                </Heading>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                </Text>
              </Box>
              <Box textAlign={'center'}>
                <Flex textAlign={'center'} justifyContent={'center'}>
                  <Image
                      alt={'Beneficios'}
                      src={'/img/familia/uri.png'}
                      objectFit={'cover'}
                      maxW={"180px"}
                  />
                </Flex>
                <Heading as={'h2'} variant="heading2">
                Descuentos a exposiciones
                </Heading>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                </Text>
              </Box>
              <Box textAlign={'center'}>
                <Flex textAlign={'center'} justifyContent={'center'}>
                  <Image
                      alt={'Beneficios'}
                      src={'/img/familia/uri.png'}
                      objectFit={'cover'}
                      maxW={"180px"}
                  />
                </Flex>
                <Heading as={'h2'} variant="heading2">
                Promo en medios masivos y más
                </Heading>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                </Text>
              </Box>
            </Grid>
        </LargeLayout>
      </Stack>

      <LargeLayout>
        <Stack spacing={6} my={20}>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'}>
              <Stack spacing={4}>
                  <Heading as={'h2'} variant={'subtitle'}>Promoción en medios masivos</Heading>
                  <Text color={'gray.500'} fontSize={{base: 'sm', md: 'md'}}>
                  Pon a tus obras maestras a recorrer los mundos y sé parte de esta evolución tecnológica.
                  </Text>
              </Stack>
              <Flex textAlign={'center'} justifyContent={'center'}>
                <Lottie
                    loop={true}
                    animationData={JeiterPromocion}
                    play
                    style={{ width: '280px', height: '100%' }}
                />
              </Flex>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt={12} alignItems={'center'}>
            <Flex textAlign={'center'} justifyContent={'center'}>
              <Lottie
                  loop={true}
                  animationData={PapacheLentes}
                  play
                  style={{ width: '280px', height: '100%' }}
              />
            </Flex>
            <Stack spacing={4}>
                <Heading as={'h2'} variant={'subtitle'}>Simplificamos lo complejo</Heading>
                <Text color={'gray.500'} fontSize={{base: 'sm', md: 'md'}}>
                Para que te dediques a lo tuyo. Subir NFTs será más fácil que nunca.
                </Text>
                
            </Stack>
          </SimpleGrid>

          <Heading as={'h2'} variant="heading1" pt={20}>
          Preguntas frecuentes
          </Heading>
          <Accordion>
            <AccordionItem
              question={'¿Necesito saber de cripto antes de empezar?'}
              answer={'Para nada en lo absoluto. Nosotros te ayudamos a conceptualizar tus ideas.'}
            />
            <AccordionItem
              question={'¿Para quién es?'}
              answer={'Para nuevos talentos, artistas, coleccionistas, inversores en Latinoamérica y todas las almas creativas que buscan un futuro mejor.'}
            />
            <AccordionItem
              question={'¿Tengo que ser Latin@ para unirme?'}
              answer={'Sabemos que en Latinoamérica hay un mundo de creatividad sin descubrir, por eso iniciamos en México y Latam, pero no somos excluyentes. Si tienes un gran proyecto y quieres ser parte de esta evolución, más que bienvenidx.'}
            />
            <AccordionItem
              question={'¿Mi proyecto vivirá solamente en GIG?'}
              answer={'Si subiste tu proyecto a través de GIG, éste aparecerá bajo contrato de GIG, sin embargo cualquier Marketplace que soporte Ethereum puede listar tus NFTs.'}
            />
            <AccordionItem
              question={'¿Qué tipo de proyectos puedo subir?'}
              answer={'Prácticamente todos los formatos son bienvenidos: Arte digital, música, esculturas, videos, libros, videos. Coleccionables digitales como objetos, tarjetas, skins, avatares. Videojuegos y lo relativo a ellos. Certificados y títulos. Objetos físicos. Tickets o entradas a eventos. (Nos reservamos el derecho de admitir proyectos que pudieran ir en perjuicio de alguna persona o institución.)'}
            />
          </Accordion>

        </Stack>
      </LargeLayout>
    </div>
)

export default Creadores