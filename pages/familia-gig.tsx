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
  <div id="familia">
    <LargeLayout>
        <Head
            title="Familia GIG"
            description=""
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
              Familia GIG
            </Heading>
            <Text fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                Estás entrando por la puerta dimensional al ecosistema GIG en donde vas a encontrar seres extraordinarios, mentes creativas conviviendo en una comunidad enfocada en la creación de activos digitales que une a nuevos talentos, artistas, coleccionistas e inversores en Latinoamérica.
            </Text>
            <Text fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                Te presentamos a cada uno de los miembros de nuestra familia para que los conozcas mejor.
            </Text>
            <Stack>
                <Grid py={20}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '1fr 2fr 1fr 1fr',
                    }}
                    gap={8}
                >
                    <Image alt="NFTLALI" src='/img/familia/nftlali.png' w={200} h={200} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                    <Box>
                        <Heading as={'h4'} variant={'heading3'} mb={4}><b>NFTLALI</b></Heading>
                        <Text fontSize='xs'>
                        Vivía sola en GIGTOPIA desde el comienzo de los tiempos. Un ser omnipresente que elige mostrarse con forma humana. Habla todos los idiomas de todos los universos (lo hace al mismo tiempo) y suena algo como: BURUDS IJK DSBU, por eso creó a un acompañante muy especial, URI, que con forma de robot es en realidad una extensión de su consciencia, le ayuda a decodificar mensajes y le comunica el punto de vista de otros mundos en desarrollo.
                        </Text>
                    </Box>
                    <Box>
                        <Heading as={'h5'} variant={'heading4'} mb={4}>Poderes</Heading>
                        <Text fontSize='xs'>
                            Inspiración<br/>
                            Intención<br/>
                            Creatividad
                        </Text>
                    </Box>
                    <Box>
                        <Heading as={'h5'} variant={'heading4'} mb={4}>Debilidades</Heading>
                        <Text fontSize='xs'>
                            Adivina... ninguna
                        </Text>
                    </Box>
                </Grid>
                <Box textAlign={'center'}>
                    <Image alt="Mamá Doris" src='/img/familia/mamadori.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                    <Heading as={'h4'} variant={'heading4'} mb={4}>Mamá Doris</Heading>
                    <Text fontSize='xs'>
                    No es una deidad, pero como si lo fuera en el mundo del arte y la creatividad. Curadora culta, intelectual, en tendencia. Se regodea con los ponentes número 1 del sector, toda una mujer de mundo. Dedicada en cuerpo y alma a identificar las mejores piezas y a ofrecerlas al mejor postor y por si fuera poco, es madre y los tiene bien alimentados (bebiendo jugos cold press y galletas cero gluten).
                    </Text>
                </Box>
                <Box textAlign={'center'}>
                    <Image alt="Creadori Jiménez" src='/img/familia/creadori.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                    <Heading as={'h4'} variant={'heading4'} mb={4}>Creadori Jiménez</Heading>
                    <Text fontSize='xs'>
                    Tiene el don de materializar la imaginación. Apasionado por la libertad de expresión, se transforma en cada uno de los seres creativos del universo, de esta manera absorbe todas las capacidades que le llegan del espacio. Al entrar en estado de trance creativo, se expresa a través de sus herramientas maestras.
                    </Text>
                </Box>
                <Box textAlign={'center'}>
                    <Image alt="Flipper" src='/img/familia/flipper.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                    <Heading as={'h4'} variant={'heading4'} mb={4}>Flipper</Heading>
                    <Text fontSize='xs'>
                    Érase un hombre que se convirtió en pez y vive más contento y ambicioso. Se dedica a comprar barato y vender caro. Un martes cualquiera, le cayó el Chahuistle y se empezó a convertir en un bonito delfín. Le gusta ajuarearse y disfruta la vida de lujos y despilfarro. A la fecha nadie sabe si un castigo lo llevó a convertirse en lo que ahora es o si se clavó tanto que su mente superó la matrix. 
                    <br/><b>Próxima ambición: Convertirse en ballena.</b>
                    </Text>
                </Box>
                <Box textAlign={'center'}>
                    <Image alt="Eskeri Popi" src='/img/familia/eskeri.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                    <Heading as={'h4'} variant={'heading4'} mb={4}>Eskeri Popi</Heading>
                    <Text fontSize='xs'>
                    Vive literalmente con el sudor en la frente y en otros lugares (varios). Tiene miedo de lo desconocido, tiene miedo de lo que conoce. Tiene miedo de que le roben lo suyo, tiene miedo de no triunfar, miedo a las lagartijas y a su sombra misma, sobre todo tiene miedo a los NFTs porque son muy nuevos. Cree que puede fallar si migra a la tecnología descentralizada. 
                    </Text>
                </Box>
                <Box textAlign={'center'}>
                    <Image alt="Jeiter Popi" src='/img/familia/jeiter.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                    <Heading as={'h4'} variant={'heading4'} mb={4}>Jeiter Popi</Heading>
                    <Text fontSize='xs'>
                    Clavado en la matrix. Este querido “hater” se hace siempre presente en las comunidades, demostrando su rechazo y repulsión por lo que desconoce y va en contra de sus ideas. Por cada diez palabras, mínimo tres son de odio. 
                    Haciéndonos amigos, nos dimos cuenta que debajo de esa gruesa capa de ira, se esconde un pequeño niño inseguro, envidioso y con falta de amor.
                    </Text>
                </Box>
                <Box textAlign={'center'}>
                    <Image alt="URI" src='/img/familia/uri.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                    <Heading as={'h4'} variant={'heading4'} mb={4}>URI</Heading>
                    <Text fontSize='xs'>
                    Pequeñín en tamaño, majestuoso de pensamiento. Sus procesos son calculados, tan es así que tiene un margen de error prácticamente nulo, digamos que es como un Google transuniversal. Casi siempre lo podrás encontrar cerca de TLALI (su creadora). Se susurran al oído cual enamorados, pero más allá de eso, URI es consciencia-mensajero-acompañante de la gran deidad.
                    </Text>
                </Box>
                <Box textAlign={'center'}>
                    <Image alt="Papá Che" src='/img/familia/mapache.png' w={150} h={150} margin={'0 auto'} borderRadius={'full'} border={'1px solid black'} boxShadow={'4px 4px 0 0 black'} mb={2}/>
                    <Heading as={'h4'} variant={'heading4'} mb={4}>Papá Che</Heading>
                    <Text fontSize='xs'>
                    Si quieres encontrar el tesoro es a Papá Che a quién debes llamar. Lo suyo es hallar lo mejor de lo mejor, la crema y nata de los proyectos, que no solamente guarda en los recovecos de su habitación, sino que los muestra sin tapujos a su comunidad. Obsesionado por encontrar y compartir genialidades creativas fuera de lo común.  
                    </Text>
                </Box>
            </Stack>
        </Stack>
    </LargeLayout>
  </div>
)

export default FamiliaGIG