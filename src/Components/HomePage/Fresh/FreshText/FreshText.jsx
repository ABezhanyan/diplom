import classes from "./FreshText.module.css";

const FreshText = () => {
    return (
        <div className={classes.freshText}>
            <div className={classes.text}>FRESH FOOD</div>
            <div className={classes.text_two}>Aliquet duis mauris, varius semper turpis feugiat ut amet. Blandit arcu amet et nisl. Ullamcorper eget adipiscing id tellus dolor, eget magnis in. Id neque nibh sit penatibus risus orci sagittis a viverra. Eget cursus volutpat sit adipiscing est nunc sed. Vestibulum etiam neque ut quisque.</div>
            <div className={classes.text_three}>
                <button className={classes.btn}>VIEW PRODUCTS</button>
            </div>
        </div>
    )

}

export default FreshText;