import React from "react";
import classes from "./CatalogOne.module.css";




const CatalogOne = ({title, imageUrl, price, onPluse}) => {

  const [isAdded, serIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPluse({title, imageUrl, price});
    serIsAdded(!isAdded);
  }

    return (


            <section className={classes.section}>
            <div className={classes.container}>
              <div className={classes.catalog}>
                <div className={classes.catalog__flex}>
                  <div className={classes.catalog__col}>
                      <div className={classes.Card}>
                          <img src={imageUrl} className={classes.img} alt=""/>
                          <div className={classes.text}>{title}</div>
                          <div className={classes.text_two}>$ {price}</div>
                          <div className={classes.btn_card_main}>
                            <img 
                            className={classes.btn_card} 
                            onClick={onClickPlus} 
                            src={isAdded ? '/img_card/btn-checked.svg' : "/img_card/btn-plus.svg"} 
                            alt=" "/>
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