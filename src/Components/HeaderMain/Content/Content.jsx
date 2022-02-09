import classes from "./Content.module.css";

const Content = () => {
    return (
        <div className={classes.content}>
            <a className={classes.text}>Organic food</a>
            <a className={classes.textTwo}>Pretium hendrerit a turpis interdum. Orci arcu at ipsum placerat facilisis est faucibus. Cursus at faucibus morbi tempor fusce nec, erat. </a>
            <div>
                <button className={classes.button}>VIEW PRODUCTS</button>
            </div>
        </div>
    )

}

export default Content;