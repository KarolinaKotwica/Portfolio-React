import React, {useState, useEffect} from "react";

const SkillsSection = () => {
    // const [startAnimation, setStartAnimation] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const element = document.querySelector('.skill');
    //         const position = element.getBoundingClientRect();
    //         if (position.top <= window.innerHeight && position.bottom >= 0) {
    //             setStartAnimation(true);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <section id="skills" className="scroll-container">
            <h1>Skills</h1>
            <p>Skills that I know and still develop:</p>

            <div className="skill">
                <img src="imgs/icons/html.png" alt="html" />
                <img src="imgs/icons/css.png" alt="css" />
                <img src="imgs/icons/js.png" alt="JavaScript" />
                <img src="imgs/icons/bootstrap.png" alt="bootstrap" />
                <img src="imgs/icons/mysqlx.png" alt="mySQL" />
                <img src="imgs/icons/git.png" alt="Git" />
            </div>

            <p>Skills that I still need to improve:</p>
            <div className="skill">
                <img src="imgs/icons/react.png" alt="React" />
                <img src="imgs/icons/nodejs.png" alt="Node.js" />
                <img src="imgs/icons/jquery.png" alt="jQuery" />
                <img src="imgs/icons/mongo.png" alt="MongoDB" />
            </div>
    </section>
    )
}

export default SkillsSection;