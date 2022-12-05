import {
    Button,
    Heading,
    Image, 
    Link,
    Stack
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'

const Custom404: NextPage = () => (
<div id="notFound">
    <LargeLayout>
        <Head
            title="FamiliaGIG"
            description=""
        />
        <Stack spacing={6} mb={20} align={'center'}>
            <Image src={'/img/404/404.png'} w={'60%'} alt="404"/>
            <Heading variant={'subtitle'} textAlign={'center'}>
                Lo sentimos, no encontramos lo que estás buscando.
            </Heading>
            <Link href='/'>
                <Button>Volver al inicio</Button>
            </Link>
        </Stack>
    </LargeLayout>
</div>
)

export default Custom404