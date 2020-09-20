import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ErrorMessage.css'
import Navbar from '../components/navbar/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
