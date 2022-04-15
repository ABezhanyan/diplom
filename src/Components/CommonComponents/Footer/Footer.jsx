import classes from "./Footer.module.scss";
import Wip from "./Swiper/Wip";
import Content from "./Content/Content";





const Footer = () => {
    return (
        <>
            <content>
                <div className={classes.ShopFood}>
                    <Content />
                    <Wip />
                </div>
            </content>
        </>
    )

}

export default Footer;