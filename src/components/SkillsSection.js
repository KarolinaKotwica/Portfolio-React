import React, {useState, useEffect} from "react";

const SkillsSection = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.skill');
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
        <section id="skills" className="scroll-container">
            <h1>Skills</h1>
            <p>Skills that I know and still develop:</p>

            <div className="skill left-animation">
                <img className={startAnimation && "rotate"} src="imgs/icons/html.png" alt="html" />
                <img className={startAnimation && "rotate"} src="imgs/icons/css.png" alt="css" />
                <img className={startAnimation && "rotate"} src="imgs/icons/js.png" alt="JavaScript" />
                <img className={startAnimation && "rotate"} src="imgs/icons/bootstrap.png" alt="bootstrap" />
                <img className={startAnimation && "rotate"} src="imgs/icons/mysqlx.png" alt="mySQL" />
                <img className={startAnimation && "rotate"} src="imgs/icons/git.png" alt="Git" />
            </div>
#
            <p>Skills that I still need to improve:</p>
            <div className="skill right-animation">
                <img className={startAnimation && "rotate"} src="imgs/icons/react.png" alt="React" />
                <img className={startAnimation && "rotate"} src="imgs/icons/nodejs.png" alt="Node.js" />
                <img className={startAnimation && "rotate"} src="imgs/icons/jquery.png" alt="jQuery" />
                <img className={startAnimation && "rotate"} src="imgs/icons/mongo.png" alt="MongoDB" />
            </div>
    </section>
    )
}

export default SkillsSection;