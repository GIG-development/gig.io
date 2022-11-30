import {
  Heading, 
  Stack,
  Text
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
  
const Tutoriales: NextPage = () => (
  <>
    <LargeLayout>
        <Head
            title="Tutoriales"
            description=""
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
              Tutoriales
            </Heading>
            <Text>
              Estamos trabajando en nuestros primeros tutoriales, mantente al pendiente.
            </Text>
        </Stack>
    </LargeLayout>
  </>
)

export default Tutoriales