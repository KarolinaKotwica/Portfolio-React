import Project from "./Project/Project";

const PortfolioSection = () => {
    return (
        <section id="portfolio">
            <h1>Portfolio</h1>
            <p>Examples of my projects:</p>

            <h3>NodeJS, ExpressJS</h3>
            <div class="projects">

                <Project
                    imageSrc="imgs/Projects/book-to-cook.PNG"
                    projectLink="http://cookbook.com.pl/"
                    altText="Project cookbook"
                    description="Website about recipes. After logging in, you can add a recipe, add to favorites, have a shopping list. I used MongoDB as a database. This website is in polish language, but you can easily translate it on the bottom of the page."
                />

                <Project 
                    imageSrc="imgs/Projects/wedding.PNG"
                    projectLink="https://stingy-bold-fahrenheit.glitch.me/"
                    altText="Project Wedding Website"
                    description="Website about wedding. Contains information such as: remaining time until wedding, invitation, location, RSVP"
                />

            </div>

            <h3>React</h3>
            <div class="projects">

                <Project 
                    imageSrc="imgs/Projects/books.png"
                    projectLink="https://main--fascinating-eclair-8b9d92.netlify.app/"
                    altText="Project React Books"
                    description="An application about favorite books. You can add new entries or edit existing ones"
                />

            </div>    

        <h3>HTML, CSS, Javascript</h3>
        <div class="projects">

            <Project 
                imageSrc="imgs/Projects/Nail-shine.png"
                projectLink="https://karolinakotwica.github.io/Beauty-world-grid/"
                altText="Website Project GRID"
                description="Simple, pure html, css website project. I used Sass as a preprocessor. Based on GRID CSS"
            />

            <Project 
                imageSrc="imgs/Projects/Project_grid.png"
                projectLink="https://grid-website-1.netlify.app/"
                altText="Website Project GRID"
                description="Simple, pure html, css website project. I used Sass as a preprocessor. Based on GRID CSS"
            />

            <Project 
                imageSrc="imgs/Projects/hotel-reservation.png"
                projectLink="https://hotel-reservation-2.netlify.app/"
                altText="Website Project FLEXBOX"
                description="Simple, pure html, css website project. I used Sass as a preprocessor. Based on CSS FLEXBOX"
            />

            <Project 
                imageSrc="imgs/Projects/Naturos.png"
                projectLink="https://karolinakotwica.github.io/Website-Natours/"
                altText="Website Project"
                description="Simple, pure css website project. I used Sass as a preprocessor"
            />

            <Project 
                imageSrc="imgs/Projects/guess-number.PNG"
                projectLink="https://karolinakotwica.github.io/Game---Guess-my-number/"
                altText="Project Game"
                description="Simple guess the number game. You can play for a while with friends. It's fun! Your numbers are shown and the highest score is stored if you don't refresh the page"
            />

            <Project 
                imageSrc="imgs/Projects/powercoders.PNG"
                projectLink="https://project-powercoders.netlify.app/"
                altText="Project Powercoders"
                description="Website created during Powercoders Bootcamp. An idea was to show what I've learned during this 3 months there. I created also a section for a common interview technical questions and answers"
            />

            <Project 
                imageSrc="imgs/Projects/Excel_website.png"
                projectLink="https://karolinakotwica.github.io/Excel/"
                altText="Project Excel"
                description="Website about MS Excel. It's all written in rhyme. Advices about Excel and VBA in polish language. There is no much resources in this language, so I created this website"
            />

            <Project 
                imageSrc="imgs/Projects/beauty_website.png"
                projectLink="https://karolinakotwica.github.io/Beauty-salon/"
                altText="Project Beauty Salon"
                description="Website about beauty salon. Website is in polish language. This is one of my exercises of creating websites. I created it from a psd template"
            />

        </div>
        
    </section>
    )
}

export default PortfolioSection;