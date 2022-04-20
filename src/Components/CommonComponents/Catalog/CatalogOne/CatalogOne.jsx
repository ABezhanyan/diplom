import classes from "./CatalogOne.module.css";
import OneCard from "../Img/OneCard.jpg"

const CatalogOne = () => {
    return (
        // <div className={classes.Card}>
        //     <img src={OneCard} className={classes.img} alt=""/>
        //     <div className={classes.text}>Blackcurrant</div>
        //     <div className={classes.text_two}>$6.50</div>
        //     <div className="container">
        //         <div className="button-effect">
        //             <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
        //         </div>
        //     </div>
        // </div>

            <section className={classes.section}>
            <div className={classes.container}>
              <div className={classes.catalog}>
                <div className={classes.catalog__flex}>
                  <div className={classes.catalog__col}>
                      <div className={classes.Card}>
                          <img src={OneCard} className={classes.img} alt=""/>
                          <div className={classes.text}>Blackcurrant</div>
                          <div className={classes.text_two}>$6.50</div>
                          <div className="container">
                            <div className="button-effect">
                              <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                            </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.catalog__col}>
                      <div className={classes.Card}>
                          <img src={OneCard} className={classes.img} alt=""/>
                          <div className={classes.text}>Blackcurrant</div>
                          <div className={classes.text_two}>$6.50</div>
                          <div className="container">
                            <div className="button-effect">
                              <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                            </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.catalog__col}>
                      <div className={classes.Card}>
                          <img src={OneCard} className={classes.img} alt=""/>
                          <div className={classes.text}>Blackcurrant</div>
                          <div className={classes.text_two}>$6.50</div>
                          <div className="container">
                            <div className="button-effect">
                              <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                            </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.catalog__col}>
                      <div className={classes.Card}>
                          <img src={OneCard} className={classes.img} alt=""/>
                          <div className={classes.text}>Blackcurrant</div>
                          <div className={classes.text_two}>$6.50</div>
                          <div className="container">
                            <div className="button-effect">
                              <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                            </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.catalog__col}>
                      <div className={classes.Card}>
                          <img src={OneCard} className={classes.img} alt=""/>
                          <div className={classes.text}>Blackcurrant</div>
                          <div className={classes.text_two}>$6.50</div>
                          <div className="container">
                            <div className="button-effect">
                              <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                            </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.catalog__col}>
                      <div className={classes.Card}>
                          <img src={OneCard} className={classes.img} alt=""/>
                          <div className={classes.text}>Blackcurrant</div>
                          <div className={classes.text_two}>$6.50</div>
                          <div className="container">
                            <div className="button-effect">
                              <a href="#" className="effect effect-5" title="ADD TO CART">ADD TO CART</a>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </section>
    )

}

export default CatalogOne;