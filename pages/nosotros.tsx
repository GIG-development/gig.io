import {
    Box,
    Button,
    Container,
    SimpleGrid,
    Image,
    Flex,
    Link,
    Grid,
    Heading,
    Text,
    Stack,
    VStack,
    useBreakpointValue
} from '@chakra-ui/react';
import Head from '../components/Head'
import { NextPage } from 'next'
import LargeLayout from '../layouts/large'
import { ReactElement } from 'react'

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
const Nosotros: NextPage = () => (
    <div id="nosotros">
        <LargeLayout>
        <Head
            title="Sobre Nosotros"
            description="Te ayudamos a materializar tu imaginación y monetizar tus proyectos. Estamos contigo desde la ideación, producción, promoción y venta de tus NFTs."
        />
        <Stack spacing={6} mb={20}>
                <Heading as={'h1'} variant="title">
                    Sobre Nosotros
                </Heading>
                <Container maxW={'full'} py={12}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignContent='center' justifyContent='center' align-items='center'>
                        <Stack spacing={4}>
                            <Heading as={'h2'} variant={'subtitle'}>Quiénes Somos</Heading>
                            <Text color={'gray.500'} fontSize={'md'}>
                            Más que una plataforma, somos un ecosistema enfocado en la creación de NFTs en Latinoamérica conformado por mentes creativas, coleccionistas, inversionistas y entusiastas con un objetivo común: <b>Hacer sinergia para empoderarse creando una comunidad Web3 sostenible y autónoma.</b>
                            </Text>
                        </Stack>
                        <Flex>
                            <Image
                                rounded={'md'}
                                alt={'Quienes somos'}
                                src={'/img/home/main_hero_img.png'}
                                maxW={"300px"}
                                objectFit={'cover'}
                            />
                        </Flex>
                    </SimpleGrid>
                </Container>
                <Container maxW={'full'} py={12}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <Flex>
                            <Image
                                rounded={'md'}
                                alt={'Como funciona'}
                                src={'/img/nosotros/como_funciona.png'}
                                maxW={"300px"}
                                objectFit={'cover'}
                            />
                        </Flex>
                        <Stack spacing={4}>
                        <Heading as={'h2'} variant={'subtitle'}>Cómo Funciona</Heading>
                        <Text color={'gray.500'} fontSize={'md'}>
                        Te apoyamos durante todo el recorrido de generación de tus proyectos criptográficos, desde la conceptualización hasta su lanzamiento y promoción. Puedes confiar en la calidad de los activos en nuestra plataforma, ya que verificamos a cada creador para asegurarnos de que tengan una trayectoría sólida y piezas auténticas.
                        </Text>
                        <Text color={'gray.500'} fontSize={'md'}>
                        Trabajamos en simplificar los procesos para que puedas enfocarte en desarrollar tus proyectos y crecer tus colecciones. 
                        </Text>
                        </Stack>
                    </SimpleGrid>
                </Container>
                
                <Flex
                    w={'full'}
                    h={'100vh'}
                    backgroundImage={
                        `url(/img/home/home_faq_banner_bg.png)`
                    }
                    backgroundSize={'70%'}
                    backgroundPosition={'center center'}
                    backgroundRepeat={'no-repeat'}>
                    <VStack
                        w={'full'}
                        justify={'center'}
                        px={useBreakpointValue({ base: 4, md: 8 })}
                        >
                        <Stack maxW={'2xl'} align={'center'} spacing={6} mt={'-80px'}>
                            <Heading as="h2" size='2xl'>
                                Manifiesto GIG
                            </Heading>
                            <Text
                                color={'brand.black'}
                                textAlign={'center'}
                                fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                                    Conocemos el arduo camino que recorren los creativos para posicionarse en el mercado. Muchas veces darse a conocer y crecer en la industria es como toparse con pared. 
                            </Text>
                            <Text
                                color={'brand.black'}
                                textAlign={'center'}
                                fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                                    Hay que tener los contactos adecuados, las comisiones suelen ser demasiado altas, a veces el trabajo no se valora de manera justa y encontrar buenos clientes se convierte en una tarea titánica. A esto súmale los típicos comentarios como el clásico “¿Cómo vas a vivir de eso?”
                            </Text>
                            <Text
                                color={'brand.black'}
                                textAlign={'center'}
                                fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                                Por eso, queremos que este mensaje llegue a todos los creativos (quienes expresamos nuestra esencia con ocurrencia):
                                <br/><b>Vivir de lo que nos apasiona es posible y no solo eso, también es redituable.</b> 
                            </Text>
                        </Stack>
                    </VStack>
                </Flex>
                <Stack spacing={4} direction={'column'} align={'center'}>
                    <Heading as="h2" variant={'title'}>
                        Familia GIG
                    </Heading>
                    <Text textAlign={'center'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                        Estás entrando por la puerta dimensional al ecosistema GIG en donde vas a encontrar seres extraordinarios, mentes creativas conviviendo en una comunidad enfocada en la creación de activos digitales que une a nuevos talentos, artistas, coleccionistas e inversores en Latinoamérica.
                    </Text>
                    <Text textAlign={'center'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                        Un marketplace en donde hay música, arte visual, diseño, videojuegos, avatares, podcast, experiencias sensoriales, artículos de moda y mucho más. Un mundo en donde la creatividad está de fiesta. 
                    </Text>
                    <Text textAlign={'center'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                        Aprovecha las oportunidades de ser visto por cientos de millones de personas gracias a la colaboración con medios masivos y participa en eventos de la industria de la tecnología y espectáculos.
                    </Text>
                    <Text textAlign={'center'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                        Crea lo que imaginas en tus propios términos. ¿Preparado?
                    </Text>
                    <Grid
                        py={20}
                        templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                        }}
                        gap={{ base: '8', sm: '12', md: '16' }}>
                        <Box textAlign={'center'}>
                            <Image alt="NFTLALI" src='/img/familia/nftlali.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                            <Heading as={'h4'} variant={'heading4'} mb={4}>NFTLALI</Heading>
                            <Text fontSize='xs'>
                            Deidad GIGLANDIA. <br/>
                            Tiene una misión interplanetaria que aún no puede revelar.
                            Poco a poco irá insertando mensajes escondidos.
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Image alt="Mamá Doris" src='/img/familia/mamadori.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                            <Heading as={'h4'} variant={'heading4'} mb={4}>Mamá Doris</Heading>
                            <Text fontSize='xs'>
                            Mujer de mundo; curadora, intelectual, en tendencia. Dedicada en cuerpo y alma a identificar las mejores piezas y ofrecerlas al mejor postor.
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Image alt="Creadori Jiménez" src='/img/familia/creadori.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                            <Heading as={'h4'} variant={'heading4'} mb={4}>Creadori Jiménez</Heading>
                            <Text fontSize='xs'>
                            Creador de creadores. <br/>
                            Su glitch lo lleva a mutar como camaleón creativo y logra todas las artes, creatividades y ocurrencias.
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Image alt="Flipper" src='/img/familia/flipper.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                            <Heading as={'h4'} variant={'heading4'} mb={4}>Flipper</Heading>
                            <Text fontSize='xs'>
                            Un hombre que por ambicioso se convirtió en delfín.
                            Flipeaba y flipeaba cuánto podía, o sea que compra barato y vende caro. 
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Image alt="Eskeri Popi" src='/img/familia/eskeri.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                            <Heading as={'h4'} variant={'heading4'} mb={4}>Eskeri Popi</Heading>
                            <Text fontSize='xs'>
                            Arquetipo del miedo paralizante a lo desconocido. 
                            La tecnología descentralizada viene a remover sus nervios.
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Image alt="Jeiter Popi" src='/img/familia/jeiter.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                            <Heading as={'h4'} variant={'heading4'} mb={4}>Jeiter Popi</Heading>
                            <Text fontSize='xs'>
                            Clavado en la matrix. Está bien siguiendo órdenes.
                            Todos tenemos un “hater” favorito, ese es Jeitre Popi.
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Image alt="URI" src='/img/familia/uri.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                            <Heading as={'h4'} variant={'heading4'} mb={4}>URI</Heading>
                            <Text fontSize='xs'>
                            Consciencia-mensajero-acompañante de la gran deidad.
                            Es el intermediario entre los mundos en desarrollo y NFTLALI.
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Image alt="Papá Che" src='/img/familia/mapache.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                            <Heading as={'h4'} variant={'heading4'} mb={4}>Papá Che</Heading>
                            <Text fontSize='xs'>
                            Coleccionista nato. Vive con una obsesión desmesurada por hallar lo mejor de lo mejor y compartir genialidades creativas fuera de este mundo. 
                            </Text>
                        </Box>
                    </Grid>
                    <Link href='/familia-gig'>
                        <Button colorScheme="brand" size="lg" w={'fit-content'}>
                            Conoce más sobre la Familia GIG
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </LargeLayout>
    </div>
)

export default Nosotros
  