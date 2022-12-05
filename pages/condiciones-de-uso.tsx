import {
  Heading, 
  Stack
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
  
const Condiciones: NextPage = () => (
  <div id="condiciones">
    <LargeLayout>
        <Head
            title="Condiciones"
            description=""
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
              Condiciones de Uso
            </Heading>

        </Stack>
    </LargeLayout>
  </div>
)

export default Condiciones