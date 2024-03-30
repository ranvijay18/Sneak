import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import Header from '../../Layout/Header/Header';

const ProductDetails = () => {
    const params = useParams();
    
    const productsArr = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }]

        const product = productsArr[params.productId]

return(
    <>
    <Header />
    <div className='image'>
    <div className='image-list'>
    <img src={product.imageUrl} />
    <img src={product.imageUrl} />
    <img src={product.imageUrl} />
    <img src={product.imageUrl} />
    <img src={product.imageUrl} />
    </div>
    <div className='main-image'>
        <img src={product.imageUrl} />
    </div>
    <div className='details-div'>
        <h1>{product.title}</h1>
        <p>Lorem ljdnkjcvndskvd dknsvkdnsvdn dnbvkdnv dbkndkcv dnhcnds chdbckdhcds cdsiocksdc hndibcn dsichsd csdkbhcidc sdcbdhc sdcbisdcdcbidcds chids hdcscsd csdc sdc dc dscsdcds cdsc sdcvsdvsd vsd cdsvsd vsdv sdv dsvdsv</p>
        <br />
        <h3>Reviews</h3>
        <p>3.5/5</p>
        <h3>Comments</h3>
        <p>Ranvijay: Good product</p>
        <p>Ranvijay: Good product</p>
        <p>Ranvijay: Good product</p>
        <p>Ranvijay: Good product</p>
    </div>
    </div>
    </>
)
    

}


export default ProductDetails