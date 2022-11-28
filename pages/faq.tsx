import {
  Accordion,
  Link,
  Heading, 
  Stack
} from '@chakra-ui/react'
import Head from '../components/Head'
import AccordionItem from '../components/AccordionItem/AccordionItem'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
import environment from 'environment'
  
const FAQ: NextPage = () => (
  <>
    <LargeLayout>
        <Head
            title="Preguntas Frecuentes"
            description=""
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
                Preguntas Frecuentes
            </Heading>
            <Accordion>
              <AccordionItem
                question={'¿Necesito tener una cartera digital y criptomonedas?'}
                answer={'Así es por el momento. De “wallet” aceptamos Metamask, Coinbase y Wallet Connect. Próximamente podrás subir tus NFTs sin necesitar tener estos elementos, ya que generaremos una “wallet” en automático y podrás pagar y recibir pagos en tu moneda nacional.'}
              />
              <AccordionItem
                question={'¿Hay algo que tengo que pagar por subir y comprar NFTs?'}
                answer={'Debido a que empezaremos trabajando con la red de Ethereum, se debe pagar una tarifa de gas al subir y comprar tokens no fungibles, (monto por generar las transacciones). Optimizando el manejo de nuestra plataforma, muy pronto podrás subir NFTs sin necesidad de pagar esta tarifa, gracias a una técnica llamada Lazy Minting. '}
              />
              <AccordionItem
                question={'¿Qué blockchain soportan?'}
                answer={'Por el momento Ethereum y más adelante añadiremos otras como Polygon.'}
              />
              <AccordionItem
                question={'¿Puedo pagar con pesos / fiat?'}
                answer={'Por el momento solo se puede pagar con ETH o WETH, pero muy pronto podrás pagar con tu tarjeta de débito o crédito en pesos o cualquier otra moneda internacional.'}
              />
              <AccordionItem
                question={'¿Cuál es la tarifa (fee) de transacción?'}
                answer={'Estamos haciendo pruebas para poder crear un ecosistema en donde todos estemos contentos. De momento cobramos el 10% de las transacciones, pero estamos abiertos a tus sugerencias.'}
              />
              <AccordionItem
                question={'¿Puedo modificar mi NFT después de crearlo?'}
                answer={'De momento no se puede, ya que al crear tu NFT o serie de NFTs, ésta se publica en Ethereum y no es editable una vez publicada.'}
              />
              <AccordionItem
                question={'¿Cómo me contacto para soporte técnico?'}
                answer={'Estamos atentos a tu llamado en soporte@gig.io'}
              />
              <AccordionItem
                question={'¿Cómo retirar fondos?'}
                answer={'Si recibes fondos a travês de una venta, estos llegaran directo al wallet que tienes asociado a tu cuenta.'}
              />
              <AccordionItem
                question={'¿Mis NFTs pueden aparecer en otro marketplace?'}
                answer={'Sí. Cualquier Marketplace que soporte Ethereum puede listar tus NFTs. Si acuñaste / minteaste con nosotros, tus tokens no fungibles aparecerán dentro de una colección abierta de GIG.'}
              />
            </Accordion>
            <Heading as={'h4'} variant={'heading4'} textAlign={'center'}>
            Si tienes otras dudas o comentarios, contáctanos a <Link href={`mailto:${environment.REPORT_EMAIL}`}>{environment.REPORT_EMAIL}</Link> o <Link href={'/tutoriales'}>visita nuestros tutoriales</Link>
            </Heading>
        </Stack>
    </LargeLayout>
  </>
)

export default FAQ