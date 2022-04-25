import "../../../App.css"
import CHeader from "./CHeader/CHeader";
import CatalogOne from "./CatalogOne/CatalogOne";
import "./Catalog.scss"




const arr = [
    {
      title: 'Blackcurrant',
      price: 6.50,
      imageUrl: 'img/OneCard.jpg',
    },
    { 
        title: 'Strawberry', 
        price: 5.40, 
        imageUrl: 'img/TwoCard.jpg' 
    },
    {
      title: 'Peach',
      price: 4.60,
      imageUrl: 'img/ThreeCard.png',
    },
    {
      title: 'Pomegranate',
      price: 8.50,
      imageUrl: 'img/FourCard.jpg',
    },
    {
      title: 'Pepper',
      price: 2.30,
      imageUrl: 'img/FiveCard.jpg',
    },
    {
      title: 'Limon',
      price: 8.30,
      imageUrl: 'img/SixCard.jpg',
    },
    {
      title: 'Orange',
      price: 5.20,
      imageUrl: 'img/SevenCard.jpg',
    },
    {
      title: 'Tangerine',
      price: 3.37,
      imageUrl: 'img/EightCard.jpg',
    },
    {
      title: 'Tomato',
      price: 5.50,
      imageUrl: 'img/NineCard.jpg',
    },

  ];



const Catalog = (props) => {
    return (
        <div className="Catalog">
                <CHeader />

                <div className="catalog_items">
                    <div className="catalog_items_col">
                        {arr.map((obj) => (
                        <CatalogOne
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}

                        />
                        ))}
                    </div>
                </div>
        </div>
    )

}

export default Catalog;