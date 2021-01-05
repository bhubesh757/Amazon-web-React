import React from 'react'

import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className = 'home'>
            <div className="home__container">
                <img className = 'home__containerImage' src = 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Herotator/HeroPC_1500x600_HFC_3._CB413130503_.jpg'
                alt = ''
                ></img>


                {/* products */}
            <div className="home__row">
                {/* product */}
                <Product
                title = 'OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)'
                price = '45,999.00'
                image = 'https://images-na.ssl-images-amazon.com/images/I/71UqqpGVheL._SX425_.jpg'
                rating = {5}
                ></Product>
                <Product
                title = 'New Apple iPhone 12 (64GB) - Black'
                price = '79,900.00'
                image = 'https://images-na.ssl-images-amazon.com/images/I/71fVoqRC0wL._SX466_.jpg'
                rating = {5}
                ></Product>
               
                
                {/* product */}
            </div>
            <div className="home__row">
                {/* product */}
                <Product
                title = 'Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Certified Android LED TV 55X7500H (Black) (2020 Model)'
                price = '71,290.00'
                image = 'https://images-na.ssl-images-amazon.com/images/I/91QD0vRZdVL._SX425_.jpg'
                rating = {5}
                ></Product>
                <Product
                title = 'Lenovo Ideapad S145 AMD A6-9225 15.6 inch HD Thin and Light Laptop (4GB/1TB/Windows 10/Grey/1.85Kg), 81N30063IN'
                price = '26,490.00'
                image = 'https://images-na.ssl-images-amazon.com/images/I/61PXjYVtmqL._SX425_.jpg'
                rating = {5}
                ></Product>
                <Product
                title = 'New Apple MacBook Air (13-inch, 1.1GHz Dual-core 10th-Generation Intel Core i3 Processor, 8GB RAM, 256GB Storage) - Silver'
                price = '83,990.00'
                image = 'https://images-na.ssl-images-amazon.com/images/I/81MkiDFq80L._SX466_.jpg'
                rating = {5}
                ></Product>

                {/* product */}
                
                {/* product */}
            </div>
            <div className="home__row">
                {/* product */}
                <Product
                title = 'Apple Watch Series 3 (GPS, 38mm) - Silver Aluminium Case with White Sport Band'
                price = '20,900.00'
                image = 'https://images-na.ssl-images-amazon.com/images/I/71fmZDBPqPL._SX466_.jpg'
                rating = {5}
                ></Product>
                <Product
                title = 'New Apple iPad Pro (11-inch, Wi-Fi, 1TB) - Space Grey (2nd Generation)'
                price = '1,16,900.00'
                image = 'https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SX466_.jpg'
                rating = {5}
                ></Product>
            </div>
            
            

            
           </div>
        </div>
    )
}

export default Home
