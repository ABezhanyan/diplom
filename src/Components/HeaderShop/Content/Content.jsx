import classes from "./Content.module.scss";

const Content = () => {
    return (
        <div className={classes.content}>
            <div className={classes.text}>Organic food</div>
            <div className={classes.text_two}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at faucibus morbi tempor fusce nec, erat. </div>
            <div className={classes.container}>
                <div className={classes.button_effect}>
                    <a href="#" className={`${classes.effect} ${classes.effect_5}`} title="ADD TO CART">VIEW PRODUCTUS</a>
                </div>
            </div>
        </div>
    )

}

export default Content;