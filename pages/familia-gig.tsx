import {
  Grid,
  Box,
  Text,
  Heading, 
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
import Lottie from 'react-lottie-player';
import NFTLali from '../public/img/animaciones/NFTLALI.json'
import MAMADORIS from '../public/img/animaciones/MAMADORIS.json'
import FLIPPER from '../public/img/animaciones/FLIPPER.json'
import CREADORI from '../public/img/animaciones/CREADORI.json'
import PAPACHE from '../public/img/animaciones/PAPACHE.json'
import URI from '../public/img/animaciones/URI.json'
import JEITER from '../public/img/animaciones/JEITER.json'
import ESKERI from '../public/img/animaciones/ESKERI.json'
  
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
            <Stack alignItems={'center'}>
                <Grid py={4}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '1fr 3fr',
                    }}
                    gap={8}
                    maxW={'720px'}
                >
                    <Lottie
                        loop={true}
                        animationData={NFTLali}
                        play
                        style={{ width: 280, height: 280 }}
                    />
                    <Stack direction={'column'} pt={10}>
                        <Box>
                            <Heading as={'h4'} variant={'heading1'} mb={4}><b>NFTLali</b></Heading>
                            <Text fontSize='xs'>
                            Vivía sola en GIGTOPIA desde el comienzo de los tiempos. Un ser omnipresente que elige mostrarse con forma humana. Habla todos los idiomas de todos los universos (lo hace al mismo tiempo) y suena algo como: BURUDS IJK DSBU, por eso creó a un acompañante muy especial, URI, que con forma de robot es en realidad una extensión de su consciencia, le ayuda a decodificar mensajes y le comunica el punto de vista de otros mundos en desarrollo.
                            </Text>
                        </Box>
                        <Stack direction={'row'} spacing={12} pt={4}>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Poderes</Heading>
                                <Text fontSize='xs'>
                                    Inspiración<br/>
                                    Intención<br/>
                                    Creatividad
                                </Text>
                            </Box>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Debilidades</Heading>
                                <Text fontSize='xs'>
                                    Adivina... ninguna
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid py={4}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '1fr 3fr',
                    }}
                    gap={8}
                    maxW={'720px'}
                >
                    <Lottie
                        loop={true}
                        animationData={MAMADORIS}
                        play
                        style={{ width: 280, height: 280 }}
                    />
                    <Stack direction={'column'} pt={10}>
                        <Box>
                            <Heading as={'h4'} variant={'heading1'} mb={4}><b>Mamá Doris</b></Heading>
                            <Text fontSize='xs'>
                            No es una deidad, pero como si lo fuera en el mundo del arte y la creatividad. Curadora culta, intelectual, en tendencia. Se regodea con los ponentes número 1 del sector, toda una mujer de mundo. Dedicada en cuerpo y alma a identificar las mejores piezas y a ofrecerlas al mejor postor y por si fuera poco, es madre y los tiene bien alimentados (bebiendo jugos cold press y galletas cero gluten).
                            </Text>
                        </Box>
                        <Stack direction={'row'} spacing={12} pt={4}>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Poderes</Heading>
                                <Text fontSize='xs'>
                                Vista de águila<br/>
                                Zipper de opiniones<br/>
                                Pase VIP
                                </Text>
                            </Box>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Debilidades</Heading>
                                <Text fontSize='xs'>
                                Torbellino de anulación<br/>
                                Egoitis - Inflamación del ego
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid py={4}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '1fr 3fr',
                    }}
                    gap={8}
                    maxW={'720px'}
                >
                    <Lottie
                        loop={true}
                        animationData={CREADORI}
                        play
                        style={{ width: 280, height: 280 }}
                    />
                    <Stack direction={'column'} pt={10}>
                        <Box>
                            <Heading as={'h4'} variant={'heading1'} mb={4}><b>Creadori Jiménez</b></Heading>
                            <Text fontSize='xs'>
                            Tiene el don de materializar la imaginación. Apasionado por la libertad de expresión, se transforma en cada uno de los seres creativos del universo, de esta manera absorbe todas las capacidades que le llegan del espacio. Al entrar en estado de trance creativo, se expresa a través de sus herramientas maestras.
                            </Text>
                        </Box>
                        <Stack direction={'row'} spacing={12} pt={4}>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Poderes</Heading>
                                <Text fontSize='xs'>
                                Art Attack<br/>
                                Creación mágica<br/>
                                Onda innovadora
                                </Text>
                            </Box>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Debilidades</Heading>
                                <Text fontSize='xs'>
                                Puño de duda<br/>
                                Golpe de locura
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid py={4}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '1fr 3fr',
                    }}
                    gap={8}
                    maxW={'720px'}
                >
                    <Lottie
                        loop={true}
                        animationData={FLIPPER}
                        play
                        style={{ width: 280, height: 280 }}
                    />
                    <Stack direction={'column'} pt={10}>
                        <Box>
                            <Heading as={'h4'} variant={'heading1'} mb={4}><b>Flipper</b></Heading>
                            <Text fontSize='xs'>
                            Érase un hombre que se convirtió en pez y vive más contento y ambicioso. Se dedica a comprar barato y vender caro. Un martes cualquiera, le cayó el Chahuistle y se empezó a convertir en un bonito delfín. Le gusta ajuarearse y disfruta la vida de lujos y despilfarro. A la fecha nadie sabe si un castigo lo llevó a convertirse en lo que ahora es o si se clavó tanto que su mente superó la matrix. 
                            <br/><b>Próxima ambición: Convertirse en ballena.</b>
                            </Text>
                        </Box>
                        <Stack direction={'row'} spacing={12} pt={4}>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Poderes</Heading>
                                <Text fontSize='xs'>
                                Cartera jugosa<br/>
                                Olfato de perro<br/>
                                Colmillo de oro
                                </Text>
                            </Box>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Debilidades</Heading>
                                <Text fontSize='xs'>
                                Impulsividad<br/>
                                Orejas de burro 
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid py={4}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '1fr 3fr',
                    }}
                    gap={8}
                    maxW={'720px'}
                >
                    <Lottie
                        loop={true}
                        animationData={ESKERI}
                        play
                        style={{ width: 280, height: 280 }}
                    />
                    <Stack direction={'column'} pt={10}>
                        <Box>
                            <Heading as={'h4'} variant={'heading1'} mb={4}><b>Eskeri Popi</b></Heading>
                            <Text fontSize='xs'>
                            Vive literalmente con el sudor en la frente y en otros lugares (varios). Tiene miedo de lo desconocido, tiene miedo de lo que conoce. Tiene miedo de que le roben lo suyo, tiene miedo de no triunfar, miedo a las lagartijas y a su sombra misma, sobre todo tiene miedo a los NFTs porque son muy nuevos. Cree que puede fallar si migra a la tecnología descentralizada. 
                            </Text>
                        </Box>
                        <Stack direction={'row'} spacing={12} pt={4}>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Poderes</Heading>
                                <Text fontSize='xs'>
                                Incertidumbre<br/>
                                Lluvia de lágrimas<br/>
                                Soledad
                                </Text>
                            </Box>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Debilidades</Heading>
                                <Text fontSize='xs'>
                                Golpe de fé<br/>
                                Onda innovadora<br/>
                                Golpe descapitalizador   
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid py={4}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '1fr 3fr',
                    }}
                    gap={8}
                    maxW={'720px'}
                >
                    <Lottie
                        loop={true}
                        animationData={JEITER}
                        play
                        style={{ width: 280, height: 280 }}
                    />
                    <Stack direction={'column'} pt={10}>
                        <Box>
                            <Heading as={'h4'} variant={'heading1'} mb={4}><b>Jeiter Popi</b></Heading>
                            <Text fontSize='xs'>
                            Clavado en la matrix. Este querido “hater” se hace siempre presente en las comunidades, demostrando su rechazo y repulsión por lo que desconoce y va en contra de sus ideas. Por cada diez palabras, mínimo tres son de odio. 
                            Haciéndonos amigos, nos dimos cuenta que debajo de esa gruesa capa de ira, se esconde un pequeño niño inseguro, envidioso y con falta de amor.
                            </Text>
                        </Box>
                        <Stack direction={'row'} spacing={12} pt={4}>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Poderes</Heading>
                                <Text fontSize='xs'>
                                Odio extremo<br/>
                                Meteorito de comments<br/>
                                Puño negativo
                                </Text>
                            </Box>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Debilidades</Heading>
                                <Text fontSize='xs'>
                                Ceguera<br/>
                                Golpe de razonamiento
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid py={4}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '1fr 3fr',
                    }}
                    gap={8}
                    maxW={'720px'}
                >
                    <Lottie
                        loop={true}
                        animationData={URI}
                        play
                        style={{ width: 280, height: 280 }}
                    />
                    <Stack direction={'column'} pt={10}>
                        <Box>
                            <Heading as={'h4'} variant={'heading1'} mb={4}><b>URI</b></Heading>
                            <Text fontSize='xs'>
                            Pequeñín en tamaño, majestuoso de pensamiento. Sus procesos son calculados, tan es así que tiene un margen de error prácticamente nulo, digamos que es como un Google transuniversal. Casi siempre lo podrás encontrar cerca de TLALI (su creadora). Se susurran al oído cual enamorados, pero más allá de eso, URI es consciencia-mensajero-acompañante de la gran deidad.
                            </Text>
                        </Box>
                        <Stack direction={'row'} spacing={12} pt={4}>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Poderes</Heading>
                                <Text fontSize='xs'>
                                Antimateria<br/>
                                Teletransportación<br/>
                                Pepe grillo
                                </Text>
                            </Box>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Debilidades</Heading>
                                <Text fontSize='xs'>
                                Pisotón<br/>
                                Sobrecarga 
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid py={4}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '1fr 3fr',
                    }}
                    gap={8}
                    maxW={'720px'}
                >
                    <Lottie
                        loop={true}
                        animationData={PAPACHE}
                        play
                        style={{ width: 280, height: 280 }}
                    />
                    <Stack direction={'column'} pt={10}>
                        <Box>
                            <Heading as={'h4'} variant={'heading1'} mb={4}><b>Papá Che</b></Heading>
                            <Text fontSize='xs'>
                            Si quieres encontrar el tesoro es a Papá Che a quién debes llamar. Lo suyo es hallar lo mejor de lo mejor, la crema y nata de los proyectos, que no solamente guarda en los recovecos de su habitación, sino que los muestra sin tapujos a su comunidad. Obsesionado por encontrar y compartir genialidades creativas fuera de lo común.
                            </Text>
                        </Box>
                        <Stack direction={'row'} spacing={12} pt={4}>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Poderes</Heading>
                                <Text fontSize='xs'>
                                Exhibicionista de colecciones<br/>
                                Empoderador<br/>
                                Dopamina suprema
                                </Text>
                            </Box>
                            <Box>
                                <Heading as={'h5'} variant={'heading4'}>Debilidades</Heading>
                                <Text fontSize='xs'>
                                Explosiones súbitas<br/>
                                Pérdida de criterio<br/>
                                Acumulador
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
            </Stack>
        </Stack>
    </LargeLayout>
  </div>
)

export default FamiliaGIG