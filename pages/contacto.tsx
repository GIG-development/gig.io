import {
  Heading, 
  Stack,
  Text
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
  
const Contacto: NextPage = () => (
  <>
    <LargeLayout>
        <Head
            title="Contacto"
            description=""
        />
        <Stack spacing={6} mb={20} align={'center'}>
            <Heading as={'h1'} variant="title">
              Contacto
            </Heading>
            <Heading variant={'heading3'}>
              ¿Quieres establecer contacto cercano del tercer tipo con el equipo GIG?
            </Heading>
            <Text textAlign={'center'}>
              Cuéntanos lo que quieras. Estamos aquí para lo que se te ofrezca, no dudes en contactarnos.<br/>
              Deja tus datos debajo y encuéntranos en redes sociales como <b>@holagig</b>
            </Text>
            <button data-tf-slider="VNmlDfKG" data-tf-hide-headers data-tf-position="right" data-tf-button-color="#BE94FF" data-tf-iframe-props="title=Contact Form" data-tf-chat className='btn'>
              Escríbenos aquí
            </button>
            <script src="//embed.typeform.com/next/embed.js"></script>
        </Stack>
    </LargeLayout>
  </>
)

export default Contacto