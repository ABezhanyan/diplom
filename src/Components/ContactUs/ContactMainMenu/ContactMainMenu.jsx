import classes from './ContactMainMenu.module.css';


const ContactMainMenu = () => {
    return (
       <div className={classes.HeaderMain}>
           <div className={classes.header}>
               MAIN MENU
           </div>
           <div className={classes.nav}>
               <div className={`${classes.NavBar} ${classes.btn}`}>
                   HOME
               </div>
               <div className={`${classes.NavBar} ${classes.btn}`}>
                   SHOP
               </div>
               <div className={`${classes.NavBar} ${classes.btn}`}>
                   ABOUT
               </div>
               <div className={`${classes.NavBar} ${classes.btn}`}>
                   GALLERY
               </div>
               <div className={`${classes.NavBar} ${classes.btn}`}>
                   CONTACT
               </div>
           </div>
       </div>
    )

}

export default ContactMainMenu;