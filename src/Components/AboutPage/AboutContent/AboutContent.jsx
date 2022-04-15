import classes from './AboutContent.module.scss'
import about from "./img/about.png";


const AboutContent = () => {
    return (
        <div className={classes.about_main}>
            <div className={classes.about}>
                <div className={classes.text_main}>
                    <div className={classes.text}>
                        <h1 className={classes.text_header}>Small steps to great benefits</h1>
                        <p className={classes.about_text}>
                            Posuere elementum morbi est tempor viverra dolor. Consectetur sagittis semper a tellus aliquam non sapien. Velit, ultricies potenti sed vestibulum pellentesque dui aliquet lacus. Ac natoque faucibus amet facilisi neque morbi eget ac. Sit faucibus congue nec ut. Enim enim augue adipiscing felis, augue maecenas viverra. Tortor nam integer sit potenti lacinia et, aliquam viverra. Feugiat pharetra, consectetur tellus et diam. Fringilla imperdiet
                        </p>
                        <p className={classes.about_text}>
                            Mollis cras ut nulla ut non aliquam. Eu dapibus diam tristique sapien, nibh pellentesque lorem enim bibendum. Varius facilisi in hendrerit mattis dui. Facilisis blandit feugiat aliquet blandit. Ultricies ac dignissim eget erat mi metus. Id massa sit leo est quam egestas odio. Justo nisi sit penatibus elementum. Velit posuere id duis imperdiet turpis aliquam hac fusce nunc. Nisl fermentum a sit nunc risus justo, senectus. Mattis iaculis vitae morbi etiam enim lectus ac nam ultricies. Pellentesque neque, pharetra pulvinar cras adipiscing faucibus. Amet elit nibh pellentesque a quis. Et libero, in aliquet praesent fermentum hendrerit. Fringilla dictum et phasellus sed quis ornare.
                        </p>
                    </div>
                </div>
                <img className={classes.about_img} alt="" src={about}/>
                <div className={classes.text_main}>
                    <div className={classes.text}>
                        <p className={classes.about_text_img}>
                            Fermentum nullam lectus vitae rhoncus, venenatis at libero
                        </p>
                        <p className={classes.about_text}>
                            Vulputate facilisis elit interdum vitae. Lobortis dolor auctor auctor nascetur at viverra lobortis ac scelerisque. Tempus rhoncus commodo sapien placerat vestibulum. Massa risus ipsum, consequat fringilla aliquet. Mauris elementum eget vitae interdum eget amet, sit.
                        </p>
                        <p className={classes.about_text}>
                            Est facilisis id nunc hac augue tellus. Risus convallis augue dolor nisl. Turpis sed hendrerit enim et dictum in faucibus. Quisque condimentum arcu, urna egestas cursus lobortis leo pellentesque libero. Nisl a, ut pellentesque cras. Vitae dui ipsum suscipit viverra congue mattis orci sollicitudin tincidunt.
                        </p>
                        <p className={classes.about_text}>
                            Consectetur gravida fermentum venenatis pulvinar. Dignissim platea quam odio tortor, sagittis id enim faucibus urna. Pellentesque feugiat sit donec vel pretium. Cursus sit lectus sollicitudin ipsum ullamcorper molestie. Sed a mattis at ac diam urna. Arcu, elementum fringilla amet, quis iaculis. Ultrices consequat amet ac vitae nisl lectus tristique a. Viverra quam cursus interdum nisi, neque. Lectus orci malesuada aliquam, urna integer. Urna eget amet, id erat sagittis elementum eu. Non semper eget consequat nunc.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutContent;