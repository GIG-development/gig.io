import {
  Grid,
  Box,
  Image,
  Text,
  Heading, 
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
  
const FamiliaGIG: NextPage = () => (
  <>
    <LargeLayout>
        <Head
            title="Familia GIG"
            description=""
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
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
        </Stack>
    </LargeLayout>
  </>
)

export default FamiliaGIG