import {
  Heading, 
  Stack
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
  
const FamiliaGIG: NextPage = () => (
  <>
    <LargeLayout>
        <Head
            title="FamiliaGIG"
            description=""
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
              Familia GIG
            </Heading>

        </Stack>
    </LargeLayout>
  </>
)

export default FamiliaGIG