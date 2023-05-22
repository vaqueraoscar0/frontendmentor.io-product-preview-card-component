import React, {useEffect, useState} from 'react';
import productImg from '../images/image-product-desktop.jpg';
import productMobileImg from '../images/image-product-mobile.jpg';
import buttonCart from '../images/icon-cart.svg';

function ProductCard() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

    const handleResize = () => {
        console.log(window.innerWidth, window.screenX)
        if (window.innerWidth <= 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[])

    return (
            <div className={'productCard'}>
                <div className={'product-img'}>
                    <img src={isMobile? productMobileImg: productImg} alt={'product'}/>
                </div>
                <div className={'product-details'}>
                    <div className={'product-details-body'}>
                        <label>PERFUME</label>
                        <h1>Gabrielle Essence Eau De Parfum</h1>
                        <p>A floral, solar and voluptuous
                            interpretation composed by
                            Over Polge. Pertumer-Creator
                            for the House of CHANEL.</p>
                        <div className={'price-text'}>
                            <h5>$149.99</h5>
                            <label>$16.99</label>
                        </div>
                        <button className={'button-cart'}>
                            <img src={buttonCart} alt={'icon cart'}/>
                            <h5>Add To Cart</h5>
                        </button>
                    </div>
                </div>

            </div>
        );
}

export default ProductCard;