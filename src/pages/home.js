import React from 'react';
import { motion } from "framer-motion"
// animation function
const container = (delay)=>({
  hidden: {x:-100, opacity: 0},
  visible:{
    x: 0,
    opacity: 1,
    transition:{
      duration: 0.5, delay: delay
    },
  }

});
const moveVariants = (duration)=>({
  initial: {y: -10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

class Home extends React.Component{


    render(){
        return(
        <div>
            <div id="home">
                <nav id ='desktop-nav'>
        <div class="logo">Anson Cheung</div>
        <div>
            <ul class="nav-links">
                <li><a href="#about"> About </a> </li>
                <li><a href="#experience"> Experience </a> </li>
                <li><a href="#project"> Project </a> </li>
                <li><a href="#contact"> Contact </a> </li>

            </ul>
        </div>
    </nav>
    <nav id="hamburger-nav">
        <div class="logo">Anson Cheung</div>
        <div class="hamburger-menu">
        <div class="hamburger-icon" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>

        </div>
        <div class="menu-links">
            <li><a href="#about" onClick={this.toggleMenu}> About </a> </li>
            <li><a href="#experience" onClick={this.toggleMenu}> Experience </a> </li>
            <li><a href="#project" onClick={this.toggleMenu}> Project </a> </li>
            <li><a href="#contact" onClick={this.toggleMenu}> Contact </a> </li>

        </div>
    </div>
    </nav>
    <section id="profile">
    <motion.div
          animate={{ x: -100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.0 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }} class="section_pic-container">
            <img src="./assets/assests/Anson-modified.png" alt="Anson profile pic" />

        </motion.div>
        <div
         class="section_text">
          <motion.p
              variants={container(0)}
              initial="hidden"
              animate="visible"
              class="section_text" class="section_text_p1">Hi, I'm</motion.p>
                    <motion.h1
                    variants={container(0.7)}
                    initial="hidden"
                    animate="visible"
                    class="section_text" class="title">Anson Cheung</motion.h1>
                    <motion.p
                    variants={container(1.4)}
                    initial="hidden"
                    animate="visible"
                    class="section_text"class="section_text_p2">Engineering and Business student</motion.p>
                    <motion.div
                    variants={container(2.1)}
                    initial="hidden"
                    animate="visible"
                    class="section_text"class="btn-container">
                              <button className="btn btn-color-1" onClick={() => { window.location.href = './#contact' }}>
                                                  Contact Info
                                              </button>
                                              <button className="btn btn-color-2" onClick={() => { window.location.href = 'https://www.instagram.com/_anson_cheung_?igsh=MTZyZ2ZwNzlqZ2N3bA%3D%3D&utm_source=qr' }}>
                                                  My IG
                                              </button>
                        
                </motion.div>
                <motion.div
                    variants={container(2.8)}
                    initial="hidden"
                    animate="visible"
                    class="section_text" id="socials-container">
                    <img src="./assets/assests/linkedin.png" alt="My Linkdein"
                    class="icon" onClick={()=> {window.location.href='https://www.linkedin.com/in/tsz-shun-cheung-63349a250/'}}/>
                    <img src="./assets/assests/github.png" alt="My github"
                    class="icon" onClick={()=> {window.location.href='https://github.com/AnsonCheung1020'}}/>


                </motion.div>
        </div>
        <img src="./assets/assests/arrow.png" alt="Arrow icon" class="icon arrow"
    onClick={()=> {window.location.href='#about'}} style={{ marginRight: '10.5rem' }}
      />
    </section>
    <section id="about">
      <motion.div 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}>
        <p class="section_text_p1">Get to Know More</p>
        <h1 class="title">About Me</h1>
        </motion.div>
        <div class="section-container">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration: 0.7}}
            
            
            class="section_pic-container">
            <img src="./assets/assests/Anson_about_pic.jpeg" alt="Profile pic" class="about-pic"
        />
    </motion.div>
        
    <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration: 0.7}}
        
          class="about-details-container">
            <div class="about-containers">
                <div class="details-container">
                <img src="./assets/assests/hobbies.png" alt="Interest icon" class="icon"/>
                <h3>Interest</h3>
                <p>Gym Rat 🐭 <br/>2 yrs training 🏋🏻‍♀️</p>
                <p>Investor 🤑<br/>Swing trade & Long-term invest 📈</p>


            </div>
            <div class="details-container">
                <img src="./assets/assests/education.png" alt="education icon" class="icon" style={{ marginTop: '1rem' }}/>
                <h3>Education</h3>
                <p>2022-2027</p>
                <p>B.Eng. Computer Science + AI 💻<br /> B.Ba. Economics 🌎</p>

            </div>
        </div>
        
        <div class="text-container">
            <p>
                I'm Anson Cheung, a student who is interested at tech developing 
                and financial world — I work hard to strive to live the life I 
                want!
            </p>
        </div>
        </motion.div>
    </div>
    <img src="./assets/assests/arrow.png" alt="Arrow icon" class="icon arrow"
    onClick={()=> {window.location.href='#experience'}}
      />
    </section>

    <section id="experience" style={{marginLeft: '12rem'}}>
    <motion.div 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}>

        <p class="section_text_p1">Discover my</p>
        <h1 class="title">Experience</h1>
        </motion.div>
        <div class="experience-details-container">
            <div class="about-containers">
              <div class="details-container">
                <h2 class="experience-sub-title">Frontend Development</h2>
                <div class="article-container">
                  <motion.article 
              variants={moveVariants(2)}
              initial="initial"
              animate="animate">
                    <img
                      src="./assets/assests/experience.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>HTML</h3>
                      <p>Experienced</p>
                    </div>
                  </motion.article>
                  <motion.article 
              variants={moveVariants(2.5)}
              initial="initial"
              animate="animate">
                    <img
                      src="./assets/assests/experience.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>CSS</h3>
                      <p>Experienced</p>
                    </div>
                  </motion.article>
          
                  <motion.article
              variants={moveVariants(2)}
              initial="initial"
              animate="animate">
                    <img
                      src="./assets/assests/experience.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Intermediate</p>
                    </div>
                  </motion.article>
                  <motion.article 
                    variants={moveVariants(2.5)}
                    initial="initial"
                    animate="animate">
                    <img
                      src="./assets/assests/experience.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>React.JS</h3>
                      <p>Intermediate</p>
                    </div>
                  </motion.article>
                 
                </div>
              </div>
              <div class="details-container">
                <h2 class="experience-sub-title">Backend Development</h2>
                <div class="article-container">
                <motion.article
                  variants={moveVariants(2)}
                  initial="initial"
                  animate="animate">
                    <img
                      src="./assets/assests/experience.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div style={{marginLeft:'1rem'}}>
                      <h3>Python, Django</h3>
                      <p>Experienced</p>
                    </div>
                  </motion.article>
                  <motion.article 
                variants={moveVariants(2.5)}
                initial="initial"
                animate="animate">
                    <img
                      src="./assets/assests/experience.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div style={{marginRight: '1.5rem'}}>
                        <h3>Node JS</h3>
                        <p>basic</p>
                      </div>
                    </motion.article>
                    <motion.article
                      variants={moveVariants(2)}
                      initial="initial"
                      animate="animate">
                      <img
                        src="./assets/assests/experience.png"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>C++(OOP)</h3>
                        <p>Intermediate</p>
                      </div>
                    </motion.article>
                    <motion.article
                      variants={moveVariants(2.5)}
                      initial="initial"
                      animate="animate">
                      <img
                        src="./assets/assests/experience.png"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>Git</h3>
                        <p>Intermediate</p>
                      </div>
                    </motion.article>
                  </div>
                </div>
              </div>
            </div>
            <img src="./assets/assests/arrow.png" alt="Arrow icon" class="icon arrow"
    onClick={()=>{window.location.href="#project"}}
      />


    </section>
    <section id="project">
    <motion.div 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}>

        <p class="section_text_p1">Browse My Recent</p>
        <h1 class="title">Projects</h1>
        </motion.div>
        <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration: 0.7}} class="experience-details-container">
            <div class="about-containers">
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/assests/proj1.png"
                  alt="Project 1"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Project One</h2>
              <h3 style={{marginBottom: '2rem'}}> Stock Screener</h3>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/AnsonCheung1020/Stock-Screener'"
                >
                  Github
                </button>
                </div>
            </div>
            <div class="details-container color-container">
                <div class="article-container">
                  <img
                    src="./assets/assests/investingWeb.png"
                    alt="Project 2"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title">Project Two</h2>
                <h3 style={{marginBottom: '2rem'}}> Personal Investing Web</h3>
                <div class="btn-container">
                  <button
                    class="btn btn-color-2 project-btn"
                    
                  >
                    Coming Soon
                  </button>
                  </div>
              </div>


              
        </div>

   
    </motion.div>
    <img src="./assets/assests/arrow.png" alt="Arrow icon" class="icon arrow"
    onClick={()=>{window.location.href="#contact"}}
      />

  
    </section>
    <section id='contact'>
    <motion.div 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}} className='contact'>
        <div className='contact-title'>
            <h1>Looking for a Developer?</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, please feel free to send me a message about anything that you want me to collaborate.</p>
                <div className='contact-details'>
                <div className='contact-detail'>
                  <img src='./assets/assests/email.png' alt="" style={{height:'2.5rem'}}/><p><a href="mailto:anson9764@gmail.com">anson9764@gmail.com</a></p>

                </div>
                <div className='contact-detail'>
                <img src='./assets/assests/instagram.png' alt="" style={{height:'2.5rem'}}/><p><a href="https://www.instagram.com/_anson_cheung_/?igsh=MTZyZ2ZwNzlqZ2N3bA%3D%3D&utm_source=qr">_anson_cheung_</a></p>
                    
                </div>
                <div className='contact-detail'>
                <img src='./assets/assests/location.png' alt="" style={{height:'2.5rem'}}/><p style={{color:'#000000'}}>Hong Kong</p>
                    
                </div>
            </div>
        </div>
        <form action='' className='contact-right'>
          <label htmlFor=''>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' />
          <label htmlFor=''>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email'/>
          <label htmlFor=''>Write your message here</label>
          <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
          <button type='submit'  className='contact-submit'>Submit now</button>


        </form>
    </div>
    </motion.div>
    </section>
    


    <script src="/assets/script.js"></script>
            </div>
        </div>
        );
    }

}
export default Home;