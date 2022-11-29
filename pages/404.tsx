import {
    Heading,
    Image, 
    Stack
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'

const Custom404: NextPage = () => (
<>
    <LargeLayout>
        <Head
            title="FamiliaGIG"
            description=""
        />
        <Stack spacing={6} mb={20} align={'center'}>
            <Image src={'/img/404/404.png'} w={960} h={614} />
            <Heading variant={'subtitle'}>
                Lo sentimos, no encontramos lo que estás buscando.
            </Heading>
        </Stack>
    </LargeLayout>
</>
)

export default Custom404