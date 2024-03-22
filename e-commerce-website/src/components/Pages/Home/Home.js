import Header from "../../Layout/Header/Header"
import Image from 'react-bootstrap/Image';
import music from '../../assests/music.jpg'
import HomeBanner from "../../Banner/HomeBanner";

const Home = () => {
    return(
        <>
          <Header />
          <Image src={music} fluid/>
          <HomeBanner />
        </>
    )
}


export default Home