import {
  Heading, 
  Stack
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
  
const Privacidad: NextPage = () => (
  <>
    <LargeLayout>
        <Head
            title="Privacidad"
            description=""
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
              Políticas de Privacidad
            </Heading>

        </Stack>
    </LargeLayout>
  </>
)

export default Privacidad