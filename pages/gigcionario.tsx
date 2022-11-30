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
  
const Gigcionario: NextPage = () => (
  <>
    <LargeLayout>
        <Head
            title="GIGcionario"
            description=""
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
              GIGcionario
            </Heading>
            <Accordion>
              <AccordionItem
                question={'NFT (Token No Fungible)'}
                answer={'Los tokens son elementos que representan información de un activo ya sea físico o digital. Esta representación vive en cadena de bloque a través de piezas de código. Los tokens no fungibles, no se pueden dividir ni cambiar entre sí, ya que no hay dos con el mismo valor. No es posible fraccionarse o intercambiarse. Los NFTs pueden representar cualquier cosa, literal, desde una pieza de arte hasta entradas a eventos exclusivos.'}
              />
              <AccordionItem
                question={'Blockchain'}
                answer={'¿Tuviste alguna clase de Contabilidad en donde había libros de ingresos y egresos? Quizás nunca lo has visto, la cadena de bloques es básicamente eso, un libro mayor alojado en una red pública en donde se registran todas las transacciones de activos digitales. No se puede modificar por organismos centralizados, ni se puede borrar o modificar su información. Es transparente y eficaz.'}
              />
              <AccordionItem
                question={'Contrato inteligente '}
                answer={'Programas que se ejecutan en la “blockchain” o red de bloques a través de reglas de código, se ejecutan de manera automática cuando se cumplen condiciones predeterminadas, es decir al pasar A, como consecuencia sucede B, de esta manera se evita la participación de intermediarios.   '}
              />
              <AccordionItem
                question={'Drop'}
                answer={'El lanzamiento de una colección de NFTs. Se anuncia la fecha y hora, tan emocionante como la cuenta regresiva en Año Nuevo, solo que aquí, los inversionistas pueden cumplir de inmediato su propósito de adquirir dicho token. Se asocia a una edición limitada de coleccionables.'}
              />
              <AccordionItem
                question={'Criptomoneda'}
                answer={'Son activos digitales que están cifrados, o sea no es algo físico, son registros de transacciones que se realizan en una cadena de bloques. Con las criptomonedas también se pueden hacer pagos pero solamente electrónicos.'}
              />
              <AccordionItem
                question={'Wallet'}
                answer={'Algo así como la cartera que traes en el bolsillo más una especie de paypal, solo que para criptomonedas. Lo que se almacena en este software y/o hardware es la clave pública y privada de dichas criptomonedas. La “wallet” permite enviar o recibir pagos.'}
              />
              <AccordionItem
                question={'Rareza'}
                answer={'La rareza es un atributo que se le da a un token no fungible, según lo especial y único sea determinados rasgos, se analizan sus combinaciones y cuántas veces se repiten dichos rasgos en la colección. El nivel de rareza determina en parte su valor, así que entre más raro, mejor.'}
              />
              <AccordionItem
                question={'Web 3.0 (Web3)'}
                answer={'Se refiere a la evolución del internet, en donde la participación del usuario es completa. Antes solo había recepción de los mensajes y actividad dentro de plataformas centralizadas, la diferencia radica en la descentralización del internet sucediendo en cadenas de bloque. Los usuarios pueden interactuar a distancia con inteligencia artificial y tecnología de aprendizaje automático; lo más importante, sin intermediarios.'}
              />
              <AccordionItem
                question={'DAO'}
                answer={'Organización Autónoma Descentralizada. Es una estructura o forma de organización basada en blockchain, la cual depende de contratos inteligentes. Se caracterizan por tener mayor transparencia, autonomía y seguridad, al mismo no están reguladas por organismos dentro de la ley.'}
              />
              <AccordionItem
                question={'Ethereum'}
                answer={'Es una red de cadena descentralizada en la que se pueden tener criptomonedas, realizar pagos sin pasar por organismos como el Banco y construir aplicaciones digitales. No es necesario compartir datos personales. Su criptomoneda es ETH.'}
              />
              <AccordionItem
                question={'ETH'}
                answer={'Ether (ETH) es la moneda digital o token que funciona para la red Ethereum, cadena de bloques pública. Se registra en un libro mayor, de manera transparente y no se puede modificar.'}
              />
              <AccordionItem
                question={'WETH'}
                answer={'WETH viene de las siglas “wrapped Ether”, en español “Ether Envuelto”, su finalidad es intercambiar Ether por otros tokens ERC-20. WETH no es más que un smart contract que cuenta con una estructura de datos ya preestablecida.'}
              />
              <AccordionItem
                question={'Mint'}
                answer={'En inglés significa “acuñar”, que es imprimir y sellar metales por medio de un troquel. En el ecosistema cripto, se refiere a la acción de crear un certificado para un activo y subirlo a la blockchain a través de contratos inteligentes, por eso decimos que los tokens no fungibles o NFTs se “mintean”.'}
              />
              <AccordionItem
                question={'Hash'}
                answer={'No es el popular Hashtag #, el hash en el sistema criptográfico es una cadena de texto en código que se crea en la blockchain que toma datos para generar identificadores únicos que no se pueden repetir ni modificar, por tanto garantiza la seguridad digital. Se ve como números y letras de una longitud determinada. ¡Imagina todas las combinaciones posibles!'}
              />
              <AccordionItem
                question={'Gas Fee'}
                answer={'El gas fee o tarifa de gas es la comisión que se debe pagar para que suceda una transacción en Ethereum. Recordemos, para poder "mintear" un token no fungible, es necesario que los validadores confirmen las transacciones en la cadena de bloques y así poder ejecutar el contrato.'}
              />
              <AccordionItem
                question={'Transaction Fee'}
                answer={'Estas se refieren a las tarifas que cobra el marketplace cuando se operan NFTs. Principalmente cuando los usuarios realizan una transacción de compra o venta. '}
              />
              <AccordionItem
                question={'Royalties'}
                answer={'Las regalías que se pagan a los creadores. Lo maravilloso es que en el mundo de los tokens no fungibles. Hablamos de regalías perpetuas, ya que cada vez que se venda dicho NFT, el autor se llevará el porcentaje de dicha venta que se haya establecido previamente en el contrato inteligente. Estas comisiones se establecen alrededor del 5% al 10% del valor del token.'}
              />


            </Accordion>
            






        </Stack>
    </LargeLayout>
  </>
)

export default Gigcionario