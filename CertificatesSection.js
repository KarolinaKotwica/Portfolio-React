import React, {useState, useEffect} from "react";

const CertificatesSection = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.certificates');
            const position = element.getBoundingClientRect();
            if (position.top <= window.innerHeight && position.bottom >= 0) {
                setStartAnimation(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="certificates">
        <h1>Certificates</h1>
        <div class="certificates">
            <img className={startAnimation && "slide-right"} src="imgs/Certificates/Advance-css.jpg" alt="certificates advances css, grid, flexbox" />
            <img className={startAnimation && "slide-left"} src="imgs/Certificates/seo.jpg" alt="certificates sql, analytics" />
            <img className={startAnimation && "slide-right"} src="imgs/Certificates/sql-mysql_for_data_analytics.jpg" alt="certificates sql, analytics" />
            <img className={startAnimation && "slide-left"} src="imgs/Certificates/sql.jpg" alt="certificates sql" />
            <img className={startAnimation && "slide-right"} src="imgs/Certificates/web_dev.jpg" alt="certificates web development" />
            <img className={startAnimation && "slide-left"} src="imgs/Certificates/php.PNG" alt="certificates php" />
            <img className={startAnimation && "slide-right"} src="imgs/Certificates/mySQL.png" alt="certificates mysql" />
        </div>
    </section>
    )
}

export default CertificatesSection;