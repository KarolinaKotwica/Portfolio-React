import React, { useState, useEffect } from 'react';
import TypingEffect from "./TypingEffect";

const HomeSection = () => {
    const [scrollY, setScrollY] = useState(0);
      
    const handleScroll = ({text}) => {
      setScrollY(window.scrollY);
    };
      
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <section id="home">
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="text"> 
                <h1>Karolina Kotwica</h1>
                <TypingEffect text="Web Development is my passion" />
            </div>
        </section>
    );
  }
  
export default HomeSection;