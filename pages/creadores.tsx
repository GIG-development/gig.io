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
import Hero from '../components/Hero/Hero'
import AccordionItem from '../components/AccordionItem/AccordionItem'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'

const tfButton = <><button data-tf-popup="eyQRCt11" data-tf-hide-headers data-tf-iframe-props="title=Registration Form" data-tf-medium="snippet" className="btn">Inicia el viaje aquí</button><script src="//embed.typeform.com/next/embed.js"></script></>
    
const Creadores: NextPage = () => (
  <div id="creadores">
    <Hero 
      bg={'/img/home/main_hero_bg.jpg'}
      ctaLine_1={'GIG'}
      ctaLine_2={'Creators Lab'}
      description={'Revela tu creatividad y únete a la primera comunidad de talento latino basado en NFTs. Sé parte de esta era creativa y genera impacto mientras creas un mejor futuro.'}
      isSpecialButton={true}
      specialButton={tfButton}
      image={'/img/creadores/hero.png'}
    />
    <LargeLayout>
        <Head
            title="Creadores"
            description="Gana más por tu talento y pertenece a una gran comunidad de líderes, coleccionistas, inversionistas y creadores de la web3."
        />
        <Stack spacing={6} my={20}>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                  <Heading as={'h2'} variant={'subtitle'}>Decodificamos juntos tus ideas</Heading>
                  <Text color={'gray.500'} fontSize={'md'}>
                  No necesitas ser experto, estamos contigo desde la conceptualización hasta la promoción de tus NFTs. Solo trae tus ganas de entrar al espacio cripto en una comunidad de creativos geniales.
                  </Text>
              </Stack>
              <Flex textAlign={'center'} justifyContent={'center'}>
                  <Image
                      rounded={'md'}
                      alt={'Creadores'}
                      src={'/img/nosotros/como_funciona.png'}
                      objectFit={'cover'}
                      maxW={"300px"}
                  />
              </Flex>
          </SimpleGrid>

            <Heading as={'h2'} variant="heading1" py={20} textAlign={'center'}>
            Codéate con artistas prestigiosos, coleccionistas, curadores reconocidos y otras mentes creativas como tú
            </Heading>

            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
              <Box textAlign={'center'}>
                <Heading as={'h2'} variant="heading2">
                Promoción en medios masivos
                </Heading>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                Pon a tus obras maestras a recorrer los mundos y sé parte de esta evolución tecnológica.
                </Text>
              </Box>
              <Box textAlign={'center'}>
                <Heading as={'h2'} variant="heading2">
                Simplificamos lo complejo 
                </Heading>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                Para que te dediques a lo tuyo. Subir NFTs será más fácil que hacer enchiladas.
                </Text>
              </Box>
              <Box textAlign={'center'}>
                <Heading as={'h2'} variant="heading2">
                Ser parte de la comunidad te da Beneficios:
                </Heading>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                  Experiencias inmersivas<br/>
                  Accesos preferenciales<br/>
                  Descuentos a exposiciones<br/>
                  Promo en medios masivos y más<br/>
                </Text>
              </Box>
            </Grid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt={20}>
              <Flex textAlign={'center'} justifyContent={'center'}>
                <Image
                    rounded={'md'}
                    alt={'Como funciona'}
                    src={'/img/nosotros/como_funciona.png'}
                    objectFit={'cover'}
                    maxW={'340px'}
                />
              </Flex>
              <Stack spacing={4}>
                  <Heading as={'h2'} variant={'subtitle'}>¿Cómo funciona?</Heading>
                  <Text color={'gray.500'} fontSize={'md'}>
                  Aquí todos juegan. Ya sea que tengas NFTs, proyectos, activos o incluso si estás en la fase de las ideas y te quieres digitalizar. La única regla es verificarte como creativo pues estarás entrando a una comunidad segura y sostenible.
                  Después podrás crear, comprar y vender NFT estableciendo tus precios y regalías.  
                  Así de fácil. 
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
                question={'¿Tengo que ser Latinx para unirme?'}
                answer={'Sabemos que en Latinoamérica hay un mundo de creatividad sin descubrir, por eso iniciamos en México y Latam, pero no somos excluyentes. Si tienes un gran proyecto y quieres ser parte de esta evolución, más que bienvenidx.'}
              />
            </Accordion>

        </Stack>
    </LargeLayout>
  </div>
)

export default Creadores