import {
  Heading, 
  Stack
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
  
const TerminosLegales: NextPage = () => (
  <div id="terminos">
    <LargeLayout>
        <Head
            title="TerminosLegales"
            description=""
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
              Términos Legales
            </Heading>

        </Stack>
    </LargeLayout>
  </div>
)

export default TerminosLegales