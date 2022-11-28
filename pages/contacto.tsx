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
            title="Gigcionario"
            description=""
        />
        <Stack spacing={6} mb={20} align={'center'}>
            <Heading as={'h1'} variant="title">
              Contacto
            </Heading>
            <Heading variant={'heading4'}>
              ¿Quieres establecer contacto cercano del tercer tipo con el equipo GIG?
            </Heading>
            <Text>
              Cuéntanos lo que quieras. Estamos aquí para lo que se te ofrezca, no dudes en contactarnos.<br/>
              Deja tus datos debajo y encuéntranos en redes sociales como <b>@holagig</b>
            </Text>
        </Stack>
    </LargeLayout>
  </>
)

export default Contacto