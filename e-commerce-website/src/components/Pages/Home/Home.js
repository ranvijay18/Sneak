import Header from "../../Layout/Header/Header"
import Image from 'react-bootstrap/Image';
import music from '../../assests/music.jpg'
import HomeBanner from "../../Banner/HomeBanner";

const Home = (props) => {
  const handleModal = (show) => {
    console.log(show)
  }
    return(
        <>
          <Header onShowModal={handleModal}/>
          <Image src={music} fluid/>
          <HomeBanner />
        </>
    )
}


export default Home