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

const tfButton = <><button data-tf-popup="eyQRCt11" data-tf-hide-headers data-tf-iframe-props="title=Registration Form" data-tf-medium="snippet" className="btn">Aquí inicia el viaje</button><script src="//embed.typeform.com/next/embed.js"></script></>
    
const Creadores: NextPage = () => (
  <div id="creadores">
    <Hero 
      bg={'/img/home/main_hero_bg.jpg'}
      ctaLine_1={'GIG'}
      ctaLine_2={'Creators Lab'}
      description={'Revela tu creatividad y únete a la primera comunidad de talento latino basado en NFTs. Sé parte de esta era creativa y genera impacto mientras creas un mejor futuro.'}
      isSpecialButton={true}
      specialButton={tfButton}
      image={'/img/familia/mamadori.png'}
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
              <Flex maxW={"300px"}>
                  <Image
                      rounded={'md'}
                      alt={'Creadores'}
                      src={'/img/nosotros/como_funciona.png'}
                      objectFit={'cover'}
                  />
              </Flex>
          </SimpleGrid>

            <Heading as={'h2'} variant="heading1" py={20} textAlign={'center'}>
            Codéate con artistas prestigiosos, coleccionistas y curadores reconocidos, así como otras mentes creativas como tú
            </Heading>

            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
              <Box textAlign={'center'}>
                <Heading as={'h2'} variant="heading1">
                Promoción en medios masivos
                </Heading>
                <Text>
                Pon a tus obras maestras a recorrer los mundos y sé parte de esta evolución tecnológica.
                </Text>
              </Box>
              <Box textAlign={'center'}>
                <Heading as={'h2'} variant="heading1">
                Simplificamos lo complejo 
                </Heading>
                <Text>
                Para que te dediques a lo tuyo.
                Subir NFTs es más fácil que hacer enchiladas.
                </Text>
              </Box>
              <Box textAlign={'center'}>
                <Heading as={'h2'} variant="heading1">
                Ser parte de la comunidad te da Beneficios:
                </Heading>
                <Text>
                  <ul>
                    <li>Experiencias inmersivas</li>
                    <li>Accesos preferenciales</li>
                    <li>Descuentos a exposiciones</li>
                    <li>Promo en medios masivos y más</li>
                  </ul>
                </Text>
              </Box>
            </Grid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt={20}>
              <Flex>
              <Image
                  rounded={'md'}
                  alt={'Como funciona'}
                  src={'/img/nosotros/como_funciona.png'}
                  objectFit={'cover'}
              />
              </Flex>
              <Stack spacing={4}>
                  <Heading as={'h2'} variant={'subtitle'}>¿Cómo funciona?</Heading>
                  <Text color={'gray.500'} fontSize={'md'}>
                  Tanto si tienes NFTs, si solo tienes proyectos o activos, hasta si tienes una idea ganadora y la quieres digitalizar, aquí todos juegan. 
                  La única regla es verificarte como creativo pues estarás entrando a una comunidad segura y sostenible.
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