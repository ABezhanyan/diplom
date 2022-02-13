import classes from "./Content.module.css";

const Content = () => {
    return (
        <div className={classes.content}>
            <div className={classes.text}>Organic food</div>
            <div className={classes.text_two}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at faucibus morbi tempor fusce nec, erat. </div>
            <div>
                <button className={classes.button}>VIEW PRODUCTS</button>
            </div>
        </div>
    )

}

export default Content;