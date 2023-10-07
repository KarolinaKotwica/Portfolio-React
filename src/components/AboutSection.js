const AboutSection = () => {
    return (
        <section id="about" className="scroll-container">
            <h1>About</h1>
                <p>Hello, my name is Karolina. I come from Poland and I live in Switzerland now.
                <br />
                    I am interested in Web Development since around 5 years. Creating websites is really my passion. I like to create beautiful and performant websites with delightful user experiences. I am looking for opportunities to improve my skills and I'd like to start my first job in this area.
                <br /><br />
                    I have learned all at home from self-study. In April 2022 I took part in 3 months <a href="https://powercoders.org/" target="_blank">Powercoders Bootcamp</a> in Switzerland. It's 13-week intensive programming course about web development and every Wednesday I had an opportunity to practice social and business skills.
                <br /><br />
                    Now, in my free time I expand knowledge about React.</p>

                <p><i className="far fa-comment-dots"></i> Languages I know:</p>
                <ul className="languages">
                    <li><span>Polish:</span> Mother tongue</li>
                    <li><span>English:</span> Intermediate</li>
                    <li><span>German:</span> Good and I still learn</li>
                </ul>
        </section>
    )
}

export default AboutSection;