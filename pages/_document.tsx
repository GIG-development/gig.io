// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang={this.props.locale || 'es-mx'}>
        <Head>
          <link rel='icon' href="favicon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Source+Code+Pro:ital,wght@0,300;1,300&display=swap" rel="stylesheet" />
          <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GIG Marketplace",
              //"legalName" : "",
              "url": "https://gig.io",
              "logo": "https:/gig.io/logo.png",
              "foundingDate": "2022",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Jerónimo Vargas"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                //"streetAddress": "",
                "addressLocality": "Mexico City",
                "addressRegion": "Mexico City",
                //"postalCode": "",
                "addressCountry": "MX"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Soporte",
                //"telephone": "[+]",
                "email": "soporte@gig.io"
              },
              "sameAs": [ 
                "https://www.instagram.com/holagig",
                "https://www.twitter.com/holagig",
                "https://www.youtube.com/holagig"
              ]
            }
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
