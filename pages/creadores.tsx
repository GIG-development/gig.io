import {
    Heading, 
    Stack
  } from '@chakra-ui/react'
  import Head from '../components/Head'
  import LargeLayout from '../layouts/large'
  import { NextPage } from 'next'
    
  const Creadores: NextPage = () => (
    <>
      <LargeLayout>
          <Head
              title="Creadores"
              description=""
          />
          <Stack spacing={6} mb={20}>
              <Heading as={'h1'} variant="title">
                Creadores
              </Heading>
              <button data-tf-popup="eyQRCt11" data-tf-hide-headers data-tf-iframe-props="title=Registration Form" data-tf-medium="snippet" className="btn">¿Eres creador o artista hispano?</button>
              <script src="//embed.typeform.com/next/embed.js"></script>
          </Stack>
      </LargeLayout>
    </>
  )
  
  export default Creadores