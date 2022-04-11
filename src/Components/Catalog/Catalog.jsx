import "../../App.css"
import CHeader from "./CHeader/CHeader";
import CatalogOne from "./CatalogOne/CatalogOne";
import CatalogTwo from "./CatalogTwo/CatalogTwo";
import CatalogThree from "./CatalogThree/CatalogThree";
import CatalogFour from "./CatalogFour/CatalogFour";
import CatalogFive from "./CatalogFive/CatalogFive";
import CatalogSix from "./CatalogSix/CatalogSix";
import CatalogSeven from "./CatalogSeven/CatalogSeven";
import CatalogEight from "./CatalogEight/CatalogEight";
import CatalogNine from "./CatalogNine/CatalogNine";
import AllProducts from "./CatalogAllProducts/AllProducts";
import "./Catalog.scss"


const Catalog = () => {
    return (
        <div className="Catalog">
            <CHeader />
            <CatalogOne />
            <CatalogTwo />
            <CatalogThree />
            <CatalogFour />
            <CatalogFive />
            <CatalogSix />
            <CatalogSeven />
            <CatalogEight />
            <CatalogNine />
            <AllProducts />
        </div>
    )

}

export default Catalog;