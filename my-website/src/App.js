import React, { useEffect, useRef } from 'react';
import './App.css';
import LocomotiveScroll from 'locomotive-scroll';
import { Gift } from 'lucide-react';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Wait for content to be loaded
    const initScroll = () => {
      if (scrollRef.current) {
        const scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          lerp: 0.08,
          resetNativeScroll: true
        });

        // Update scroll on content change
        const resizeObserver = new ResizeObserver(() => {
          scroll.update();
        });

        resizeObserver.observe(scrollRef.current);

        return () => {
          scroll.destroy();
          resizeObserver.disconnect();
        };
      }
    };

    // Small delay to ensure content is rendered
    const timeoutId = setTimeout(initScroll, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="loco" data-scroll-container ref={scrollRef}>
      <header>
        <nav>
          <div className="logo">
            <img src={process.env.PUBLIC_URL + '/images/temp.png'} alt="pm logo" />
          </div>
          <div className="navbar">
            <div><a href="#">Home</a></div>
            <div><a href="#projects">Projects</a></div>
            <div><a href="#">Experience</a></div>
            <div><a href="#contact">Contact</a></div>
          </div>
        </nav>
      </header>

      <section className="container about" data-scroll>
        <div data-scroll data-scroll-speed="2" className="avatar">
          <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt="pm avatar" />
        </div>
        <div className="about-text">
          <h1>I <span>code</span><br />and listen to <span>music</span>!</h1>
          <p>I am a seasoned full-stack software engineer with over 2 years of
            professional experience, specializing in frontend development. My
            expertise lies in crafting robust and scalable web-apps.</p>
          <div className="about-btn">
            <button data-scroll data-scroll-speed="0.5" data-scroll-direction="horizontal"
              className="btn-primary">Get in Touch</button>
            <a href="#projects">
              <button data-scroll data-scroll-speed="-0.5" data-scroll-direction="horizontal"
                className="btn-secondary">Projects</button>
            </a>
          </div>
        </div>
      </section>

      <section className="container experience-with" data-scroll>
        <h2>Experience With</h2>
        <div className="experience-with-lang">
          <div data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
            <img src={process.env.PUBLIC_URL + '/images/html5.png'} alt="html logo" />
          </div>
          <div data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
            <img src={process.env.PUBLIC_URL + '/images/css3.png'} alt="css logo" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/nodejs.png'} alt="nodejs logo" />
          </div>
          <div data-scroll data-scroll-speed="-5" data-scroll-direction="horizontal">
            <img src={process.env.PUBLIC_URL + '/images/reactjs.png'} alt="react logo" />
          </div>
          <div data-scroll data-scroll-speed="-5" data-scroll-direction="horizontal">
            <img src={process.env.PUBLIC_URL + '/images/javascript.png'} alt="javascript logo" />
          </div>
        </div>
      </section>

      <section className="container" id="projects" data-scroll>
        <h2 className="primary-heading heading-projects">Projects</h2>
        <div className="projects">
          {[
            { url: "https://26-pm.github.io/play/", img: process.env.PUBLIC_URL + '/images/play.png', title: "Play with Text" },
            { url: "https://26-pm.github.io/currencyConverter/", img: process.env.PUBLIC_URL + '/images/currency.jpg', title: "Currency Converter" },
            { url: "https://26-pm.github.io/Netflix/", img: "https://clipground.com/images/logo-de-netflix-clipart-2.png", title: "Netflix" },
            { url: "https://26-pm.github.io/spotify/", img: process.env.PUBLIC_URL + '/images/Spotify.png', title: "Spotify" },
            { url: "https://26-pm.github.io/todo/", img: process.env.PUBLIC_URL + '/images/todo.jpg', title: "Todo" },
            { url: "https://ezform-wd7s.onrender.com/", img: process.env.PUBLIC_URL + '/images/1.png', title: "eZForm" },
            { url: "https://crud-app-x5sd.onrender.com", img: process.env.PUBLIC_URL + '/images/CRSH.png', title: "CRSH" },
            { url: "https://26-pm.github.io/Pinterestt/", img: process.env.PUBLIC_URL + '/images/Pinterestt.png', title: "Pinterestt" },
            { url: "https://ez-saver.onrender.com/", img: process.env.PUBLIC_URL + '/images/eZ Saver.png', title: "eZ Saver" },
            { url: "https://donateconnect.vercel.app/", icon: <Gift size={100} />, title: "Donate Connect", useIcon: true }
          ].map((project, index) => (
            <div key={index} data-scroll data-scroll-speed="0.5" data-scroll-direction="vertical" className="project-item">
              <a href={project.url}>
                <div className="img">
                  {project.useIcon ? project.icon : <img src={project.img} alt={project.title} />}
                </div>
              </a>
              <div className="projects-title">
                <p>Click img to visit.</p>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" data-scroll>
        <div className="container">
          <h2>Contact</h2>
          <p>
            Seasoned Full Stack Software Engineer with over 2 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies.
          </p>
          <div className="email-container">
            <div><img src={process.env.PUBLIC_URL + '/images/email-icon.svg'} alt="email" /></div>
            <div>pm26new@gmail.com</div>
          </div>
          <div className="social-links">
            <div><img src={process.env.PUBLIC_URL + '/images/x.png'} alt="twitter" /></div>
            <div><img src={process.env.PUBLIC_URL + '/images/instagram.svg'} alt="instagram" /></div>
            <div><img src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="youtube" /></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
