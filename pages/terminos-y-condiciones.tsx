import {
  Box,
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
            title="Términos y Condiciones"
            description="No olvides revisar los términos y condiciones para evitarte cualquier inconveniente."
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
              Términos Legales y Condiciones de Uso
            </Heading>
            <Box minH={'100vh'}>
              <iframe src="/GIG_terminos-y-condiciones.pdf" frameborder="0"></iframe>
            </Box>

        </Stack>
    </LargeLayout>
  </div>
)

export default TerminosLegales