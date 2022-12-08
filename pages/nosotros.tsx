import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    useBreakpointValue
} from '@chakra-ui/react';
import Head from '../components/Head'
import { NextPage } from 'next'
import LargeLayout from '../layouts/large'
  
const Nosotros: NextPage = () => (
    <div id="nosotros">
        <LargeLayout>
        <Head
            title="Sobre Nosotros"
            description="Te ayudamos a materializar tu imaginación y monetizar tus proyectos. Estamos contigo desde la ideación, producción, promoción y venta de tus NFTs."
        />
            <Stack spacing={6} mb={20}>
                <Heading as={'h1'} variant="title">
                    Nosotros
                </Heading>
                <Container maxW={'full'} py={12}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignContent='center'>
                        <Flex justifyContent='center' align-items='center'>
                            <Image
                                rounded={'md'}
                                alt={'Quienes somos'}
                                src={'/img/home/main_hero_img.png'}
                                maxW={"340px"}
                                objectFit={'cover'}
                            />
                        </Flex>
                        <Stack spacing={4}>
                            <Heading as={'h2'} variant={'subtitle'}>Quiénes Somos</Heading>
                            <Text color={'gray.500'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                            Más que una plataforma, somos un ecosistema enfocado en la creación de NFTs en Latinoamérica conformado por mentes creativas, coleccionistas, inversionistas y entusiastas con un objetivo común: <b>Hacer sinergia para empoderarse creando una comunidad Web3 sostenible y autónoma.</b>
                            <br/><br/>
                            Somos un marketplace en donde hay música, arte visual, diseño, videojuegos, avatares, podcast, experiencias sensoriales, artículos de moda y mucho más. Un mundo en donde la creatividad está de fiesta.
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </Container>
                <Container maxW={'full'} pb={12}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignContent='center'>
                        <Stack spacing={4}>
                            <Heading as={'h2'} variant={'subtitle'}>Manifiesto GIG</Heading>
                            <Text color={'gray.500'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                                    Conocemos el arduo camino que recorren los creativos para posicionarse en el mercado. Muchas veces darse a conocer y crecer en la industria es como toparse con pared. 
                            </Text>
                            <Text color={'gray.500'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                                    Hay que tener los contactos adecuados, las comisiones suelen ser demasiado altas, a veces el trabajo no se valora de manera justa y encontrar buenos clientes se convierte en una tarea titánica. A esto súmale los típicos comentarios como el clásico “¿Cómo vas a vivir de eso?”
                            </Text>
                            <Text color={'gray.500'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                                Por eso, queremos que este mensaje llegue a todos los creativos (quienes expresamos nuestra esencia con ocurrencia):
                                <br/>
                                <b>Vivir de lo que nos apasiona es posible y no solo eso, también es redituable.</b> 
                            </Text>
                        </Stack>
                        <Flex justifyContent='center' align-items='center'>
                            <Image
                                rounded={'md'}
                                alt={'Manifiesto'}
                                src={'/img/nosotros/manifiesto.png'}
                                maxW={"340px"}
                                objectFit={'cover'}
                            />
                        </Flex>
                    </SimpleGrid>
                </Container>
                
                <Container maxW={'full'} pb={12}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignContent='center'>
                        <Flex justifyContent='center' align-items='center'>
                            <Image
                                rounded={'md'}
                                alt={'Como funciona'}
                                src={'/img/nosotros/como_funciona.png'}
                                maxW={"340px"}
                                objectFit={'cover'}
                            />
                        </Flex>
                        <Stack spacing={4}>
                        <Heading as={'h2'} variant={'subtitle'}>Cómo Funciona</Heading>
                        <Text color={'gray.500'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                        Te apoyamos durante todo el recorrido de generación de tus proyectos criptográficos, desde la conceptualización hasta su lanzamiento y promoción. Puedes confiar en la calidad de los activos en nuestra plataforma, ya que verificamos a cada creador para asegurarnos de que tengan una trayectoría sólida y piezas auténticas.
                        </Text>
                        <Text color={'gray.500'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                        Trabajamos en simplificar los procesos para que puedas enfocarte en desarrollar tus proyectos y crecer tus colecciones. 
                        </Text>
                        </Stack>
                    </SimpleGrid>
                </Container>
                
                <Container maxW={'full'}>
                    <Text textAlign={'center'} fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                         Aprovecha las oportunidades de ser visto por cientos de millones de personas gracias a la colaboración con medios masivos y participa en eventos de la industria de la tecnología y espectáculos.
                    </Text>
                    <Text textAlign={'center'} fontSize={useBreakpointValue({ base: 'md', md: 'lg' })} pt={4}>
                        <b>Crea lo que imaginas en tus propios términos. ¿Preparado?</b>
                    </Text>
                </Container>
                
            </Stack>
        </LargeLayout>
    </div>
)

export default Nosotros
  