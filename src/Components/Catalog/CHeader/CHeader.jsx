import classes from "./CHeader.module.scss";

const CHeader = () => {
    return (
        <div className={classes.header}>
            <h1 className={classes.header_text}>CATALOG</h1>
        </div>
    )
}

export default CHeader;