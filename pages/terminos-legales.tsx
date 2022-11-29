import {
  Heading, 
  Stack
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
  
const TerminosLegales: NextPage = () => (
  <>
    <LargeLayout>
        <Head
            title="TerminosLegales"
            description=""
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
              Terminos Legales
            </Heading>

        </Stack>
    </LargeLayout>
  </>
)

export default TerminosLegales