import {
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import Head from '../components/Head'
import LargeLayout from '../layouts/large'
import { NextPage } from 'next'
  
const Tutoriales: NextPage = () => (
  <div id="tutoriales">
    <LargeLayout>
        <Head
            title="Tutoriales"
            description="Sigue estos pasos para que tu camino por el ecosistema cripto sea lo más amigable. No necesitas ser experto, solo necesitas tu talento."
        />
        <Stack spacing={6} mb={20}>
            <Heading as={'h1'} variant="title">
              Tutoriales
            </Heading>
            <Text size={'sm'}>
            Que las trabas no sean una excusa. Sigue estos pasos para que tu camino por el ecosistema cripto sea lo más amigable. Te guíamos en cada fase, verás que la creación de tus NFTs no es cosa de otro universo. 
            </Text>
            <Heading as={'h2'} variant="subtitle">
              ¿Cómo crear mi perfil?
            </Heading>
            <Text>
              <ol>
                <li>En el menú, dale clic al botón Iniciar sesión. Para ello requieres tener una wallet (cartera digital) aquí se van a guardar todas tus criptomonedas y tokens.</li>
                <li>Si no tienes una, elige la de tu preferencia. Sigue los pasos, tendrás que descargar la cartera, ya sea que estés en tu cel o compu, elige en dónde descargar. Añádelo como extensión.</li>
                <li>Al crear tu cartera, te va a dar una frase semilla y NUNCA la vayas a compartir. Se recomienda que la copies en físico y no en digital. También deberás crear una contraseña para fácil acceso a tu wallet.</li>
                <li>De vuelta a lo importante, una vez que diste clic en Inicio, el portal te arrojó las opciones de Wallet a elegir. Deberás conectar esta wallet, así se te generará un perfil y comienza la aventura.</li>
                <li>Para completar tu perfil, sube una foto de perfil y una imagen para el fondo.</li>
                <li>Agrega el nombre de Display, o sea el que se mostrará a los usuarios. </li>
                <li>Tu descripción, cuéntanos quién eres, qué tipo de creatividad es tu favorita, así como el tipo de proyectos que traes.</li>
                <li>Deja tu correo electrónico para poder contactarte y para recibir notificaciones sobre tus transacciones.</li>
                <li>Ahora llena los campos de redes sociales con tu información.</li>
                <li>Finalmente compártenos el link a tu web o portafolio. (No te asustes si no tienes un sitio web, puedes enviarnos el link a tus obras maestras)</li>
              </ol>
            </Text>
              
            <Heading as={'h2'} variant="subtitle">
              ¿Cómo verificar mi perfil?
            </Heading>
            <Text>
              <ol>
                <li>Para verificar tu perfil es necesario que primero lo hayas completado según los pasos de creación.</li>
                <li>Luego, deberás llenar los datos que solicitamos en el <Link href="/creadores">siguiente formulario</Link> en nuestra sección de creadores.</li>
                <li>Deberás ingresar la dirección de tu “wallet”. Si no te la sabes, dirígete al ícono de tu perfil, da clic en Wallet y ahí podrás encontrar a dirección. </li>
                <li>Una vez que hayas ingresado la dirección de tu Wallet, envía el formulario y listo. </li>
              </ol>
              Buenas noticias, eso significa que ya tenemos tu información para poder verificar tu cuenta. En breve recibirás una notificación y podrás acceder a las funciones de creación en nuestra plataforma. Si no compartiste un link con referencias de tu trabajo, ten a la mano tus proyectos ya que es posible que te los solicitemos. Si aún te quedan dudas contáctanos al correo electrónico <Link href="mailto:soporte@gig.io">soporte@gig.io</Link>
            </Text>
            
            <Heading as={'h2'} variant="subtitle">
              ¿Cómo Mintear / Acuñar nuevos NFTs?
            </Heading>
            <Text>
              <ol>
                <li>Es fundamental que tu perfil esté verificado si quieres crear NFTs. Para nosotros es muy importante realizar los filtros necesarios para cuidar la calidad del contenido. Para verificar tu perfil es necesario que primero hayas completado el <Link href="/creadores">siguiente formulario</Link></li>
                <li>En el menú principal, haz click en <b>Crear</b></li>
                <li>Esto te llevará a la página en donde puedes subir tus obras digitales. Tienes dos opciones: Individual o Múltiple. La primera te permite crear una sola copia, mientras que la opción múltiple, te permitirá crear varias copias del mismo arte.</li>
                <li>Ahora carga tu futuro NFT, el cual puede ser JPG, PNG, GIF, WEBP, WEBM o MP4 con un peso máximo de 100 MB</li>
                <li>Una vez que subiste tu archivo digital puedes llenar los datos referentes a dicho NFT. Recuerda que la calidad de los mismos te ayudará a darle promoción, así que piensa muy bien en:
                  <ul>
                    <li>Un título que sea descriptivo.</li>
                    <li>Una Descripción. ¿No se te ocurre? Cuéntanos en qué te inspiraste, cómo surgió la idea y qué quieres hacer con tu NFT (en caso de que tenga alguna utilidad).</li>
                    <li>Monto de las regalías que quieres obtener a raíz de la venta perpetua de tu NFT.</li>
                    <li>Elige la categoría en donde tu token no fungible va a habitar.</li>
                  </ul>
                <li>Al confirmar la creación se te abrirá una ventana de tu wallet, ahí deberás hacer clic en Confirmar. Estarás completando la operación y ¡listo! con esto es más que suficiente para tener tus NFTs en la plataforma.</li>
                </li>
              </ol>
              Recuerda que la creación siempre va a generar una comisión por gas, por lo tanto es importante que tengas ya criptomonedas en tu wallet. 
            </Text>
            
            <Heading as={'h2'} variant="subtitle">
              Quiero comprar NFTs.
            </Heading>
            <Text>
              <ol>
                <li>Da clic en el botón del menú que dice Explorar, te llevará a la página con los NFTs verificados. Algunos de éstos estarán disponibles en modo subasta y otros en venta. Para aquellos que estén bajo subasta, en el precio deberás poner lo que estás dispuesto a pagar. Es fundamental que tengas un balance en tu perfil para que puedas realizar las transacciones que quieras. </li>
                <br/>
                Ojo: Fíjate muy bien en qué moneda está cotizado, no te vayas a hacer bolas. Vas a requerir tener comprado WETH en tu cuenta porque con esta criptomoneda estaremos realizando las operaciones.
              </ol>
            </Text>
            
            <Heading as={'h2'} variant="subtitle">
              Quiero vender NFTs.
            </Heading>
            <Text>
              <ol>
                <li>Es tan sencillo como subir productos a otros mercados digitales en mercados como Amazon, Mercado Libre o EBay. Una vez que tienes cargado tu NFT, si lo quieres vender es indispensable que des clic en el botón: Poner a la venta, de lo contrario, solo va a estar en exhibición. Finalmente, deberás ponerle precio a tu trabajo. Tú lo determinas. Recuerda que puedes basarte en el mercado para que sea una cantidad razonable y que al mismo tiempo ganes lo que desees. Como último paso, deberás seleccionar si lo pondrás a la venta o como subasta.</li>
              </ol>
            <br/>
            Y así empieza la magia. 
            <br/>
            Nota: Debes de tomar en cuenta las blockchain con que serán compatibles, dependiendo de ello también se determinarán las comisiones.
            </Text>

        </Stack>
    </LargeLayout>
  </div>
)

export default Tutoriales