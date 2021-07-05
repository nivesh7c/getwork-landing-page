import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
<>

    <div className="container">
      <Head>
        <title>GetWork</title>
        <link rel="icon" href="/img/getwork-logo.png"/>
        <meta name="description" content="Development " />
      </Head>

      <main>
       
      <Image
           className="banner"
           src="/work.gif"
           alt="Picture of the team"
           width="550px"
           height="450px"
           
         />
    
        <h1 className="title">
          Work In  <a href="https://getwork.org/">Progress</a>
        </h1>
       
        <p className="description">
          Visit Job Page 
        </p>

       
      </main>

      <footer>
        <a
          href="https://getwork.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <Image src="/img/getwork-logo.png" width="70px"
           height="70px"alt="Vercel Logo" />
        </a>
      </footer>

      <style jsx>{`

     
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        
        .logo {
          height: 4em;
        }

        .banner{
          border-radius:30px;
         }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    </>
  )
}
