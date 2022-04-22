import classes from "./CardOne.module.css";
import OneCard from "../img/CardOne.svg"

const CardOne = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.catalog}>
                    <div className={classes.catalog__flex}>
                        <div className={classes.catalog__col}>
                            <div className={classes.CardOne}>
                                <img src={OneCard} className={classes.img} alt=""/>
                                <div className={classes.text}>Environmentally friendly products</div>
                                <div className={classes.text_two}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</div>
                            </div>
                        </div>
                        <div className={classes.catalog__col}>
                            <div className={classes.CardOne}>
                                <img src={OneCard} className={classes.img} alt=""/>
                                <div className={classes.text}>Environmentally friendly products</div>
                                <div className={classes.text_two}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</div>
                            </div>
                        </div>
                        <div className={classes.catalog__col}>
                            <div className={classes.CardOne}>
                                <img src={OneCard} className={classes.img} alt=""/>
                                <div className={classes.text}>Environmentally friendly products</div>
                                <div className={classes.text_two}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</div>
                            </div>
                        </div>
                        <div className={classes.catalog__col}>
                            <div className={classes.CardOne}>
                                <img src={OneCard} className={classes.img} alt=""/>
                                <div className={classes.text}>Environmentally friendly products</div>
                                <div className={classes.text_two}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default CardOne;


