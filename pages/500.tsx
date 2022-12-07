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

const Custom500: NextPage = () => (
<div id="server-error">
    <LargeLayout>
        <Head
            title="Error 500"
            description=""
        />
        <Stack spacing={6} mb={20} align={'center'}>
            <Heading variant={'subtitle'} textAlign={'center'}>
                Lo sentimos, hemos tenido un error. Si el error persiste, por favor repórtalo a <Link href='mailto:soporte@gig.io'>soporte@gig.io</Link> o en nuestra <Link href='/contacto'>página de contacto</Link>
            </Heading>
            <Link href='/'>
                <Button>Volver al inicio</Button>
            </Link>
        </Stack>
    </LargeLayout>
</div>
)

export default Custom500