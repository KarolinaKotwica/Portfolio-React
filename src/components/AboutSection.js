const AboutSection = () => {
    return (
        <section id="about" className="scroll-container">
            <h1>About</h1>
                <p>Hello, I'm Karolina from Poland, currently living in Switzerland. I've been passionate about web development for quite some time. I love creating attractive, efficient websites that offer excellent user experiences. I'm eager to enhance my skills and am seeking my first job in this field.
                <br /><br />
                I've self-taught most of what I know. In April 2022, I attended a 13-week Powercoders Bootcamp in Switzerland. This intensive course focused on web development, and each Wednesday, we practiced social and business skills.
                <br /><br />
                Currently, I'm furthering my knowledge in React during my free time.</p>

                <p><i className="far fa-comment-dots"></i> Languages I know:</p>
                <ul className="languages">
                    <li><span>Polish:</span> Mother tongue</li>
                    <li><span>English:</span> Intermediate</li>
                    <li><span>German:</span> Good (and still getting better!)</li>
                </ul>
        </section>
    )
}

export default AboutSection;