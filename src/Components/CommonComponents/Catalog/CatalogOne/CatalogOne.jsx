import classes from "./CatalogOne.module.css";



const CatalogOne = (props) => {
    return (
            <section className={classes.section}>
            <div className={classes.container}>
              <div className={classes.catalog}>
                <div className={classes.catalog__flex}>
                  <div className={classes.catalog__col}>
                      <div className={classes.Card}>
                          <img src={props.imageUrl} className={classes.img} alt=""/>
                          <div className={classes.text}>{props.title}</div>
                          <div className={classes.text_two}>$ {props.price}</div>
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