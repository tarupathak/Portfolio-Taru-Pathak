import dynamic from "next/dynamic";
import Link from "next/link";
import ContactForm from "../src/components/ContactForm";
import TestimonialSlider from "../src/components/TestimonialSlider";
import Layout from "../src/layout/Layout";

const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});


const Index = () => {
  return (
    <Layout>
      <section className="section section-started">
        <div className="container">
          {/* Hero Started */}
          <div className="hero-started">
            <div className="slide">
              <img src="assets/images/profile.jpg" alt="" />
              <span className="circle circle-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="749px"
                  height="375px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#ff8059"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#3aafc9"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b9d1e4"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="121px"
                  height="241px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#676cdb"
                    d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="232px"
                  height="117px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 208, 65)"
                    d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                  />
                </svg>
              </span>
            </div>
            <div className="content">
              <div className="titles">
                <div className="subtitle">
                  SOFTWARE ENGINEER
                </div>
                <h2 className="title">Taru Pathak</h2>
              </div>
              <div className="description">
                <p>
                  I am a Software Engineer proficient in data engineering, full-stack development, and cloud technologies, with experience in building scalable data pipelines, web applications, and analytics solutions.
                </p>
              </div>
            </div>
            <div className="info-list">
              <ul>
                <li>
                  Born in <strong>Prayagraj</strong>
                </li>
                <li>
                  Experience <strong>Fresher</strong>
                </li>
                <li>
                  Date of Birth <strong>19 October 2002</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-1"
        id="about-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">About Me</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
              {/* Section numbers */}
              <div className="numbers-items">
                <div className="numbers-item">
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-check-circle" />
                  </div>
                  <div className="num">12+</div>
                  <div className="title">
                    Completed <br />
                    Project
                  </div>
                </div>
                <div className="numbers-item">
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-smile-beam" />
                  </div>
                  <div className="num">7</div>
                  <div className="title">
                    Happy <br />
                    Clients
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Section Profile */}
              <div className="profile-box">
                <div className="text">
                  <p>
                    Hi there! I'm Taru Pathak, a passionate BTech graduate and Software Engineer with a strong background in Full Stack Development and Data Engineering.
                  </p>
                  <p>
                    As a developer, I specialize in building scalable web applications and data-driven solutions. I enjoy creating clean and responsive front-end experiences using React.js and Next.js, while leveraging Node.js and Express.js on the back end to develop robust and efficient systems. I also have hands-on experience working with large datasets, ETL pipelines, and cloud technologies to deliver impactful analytics solutions.

I’m always excited to work on innovative projects and explore new technologies. If you're looking for someone who can turn ideas into scalable and efficient applications, feel free to connect with me!
                  </p>

                  <a href="#contact-section" className="btn">
                    <span>Contact Me</span>
                  </a>
                  {/* <div className="signature">
                    <img src="assets/images/signature.png" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-parallax section-parallax-2"
        id="resume-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">My Resume</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div className="text">
                <p>
                 Hello! I'm Taru Pathak, a BTech graduate in Electronics and Communication Engineering with a strong interest in full-stack development and data engineering. I specialize in building scalable web applications using technologies like React.js, Next.js, Node.js, and MongoDB, along with working on data-driven solutions using Python and modern data tools.

I’ve developed projects like blogging and e-commerce platforms, and gained hands-on experience through internships and my current role as a Software Engineer. I enjoy solving real-world problems, exploring new technologies, and building efficient, user-focused solutions.
                </p>
              </div>
              {/* Skills */}
              <div className="skills-items">
                <div className="p-title">SKILLS</div>
                <div className="skills-item">
                  <div className="name">ReactJS and NextJS</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>
                <div className="skills-item">
  <div className="name">Java</div>
  <div className="dots dots-85">
    <div className="dots-row">
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
    </div>
  </div>
  <div className="value"><span className="num">85%</span></div>
</div>

<div className="skills-item">
  <div className="name">Python</div>
  <div className="dots dots-85">
    <div className="dots-row">
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
    </div>
  </div>
  <div className="value"><span className="num">85%</span></div>
</div>

<div className="skills-item">
  <div className="name">Machine Learning</div>
  <div className="dots dots-75">
    <div className="dots-row">
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
    </div>
  </div>
  <div className="value"><span className="num">75%</span></div>
</div>

<div className="skills-item">
  <div className="name">Unix</div>
  <div className="dots dots-85">
    <div className="dots-row">
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
    </div>
  </div>
  <div className="value"><span className="num">85%</span></div>
</div>

<div className="skills-item">
  <div className="name">AWS</div>
  <div className="dots dots-80">
    <div className="dots-row">
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
    </div>
  </div>
  <div className="value"><span className="num">80%</span></div>
</div>

<div className="skills-item">
  <div className="name">ETL (SSIS)</div>
  <div className="dots dots-85">
    <div className="dots-row">
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
    </div>
  </div>
  <div className="value"><span className="num">85%</span></div>
</div>

<div className="skills-item">
  <div className="name">OOPs</div>
  <div className="dots dots-90">
    <div className="dots-row">
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
    </div>
  </div>
  <div className="value"><span className="num">90%</span></div>
</div>

<div className="skills-item">
  <div className="name">Agile</div>
  <div className="dots dots-85">
    <div className="dots-row">
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
      <div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" /><div className="dot" />
    </div>
  </div>
  <div className="value"><span className="num">85%</span></div>
</div>
                <div className="skills-item">
                  <div className="name">NodeJS and ExpressJS</div>
                  <div className="dots dots-80">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">80%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">HTML & CSS</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">JavaScript</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">TypeScript</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>

                <div className="skills-item">
                  <div className="name">Git/Github</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Redux</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Context API</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Wordpress</div>
                  <div className="dots dots-80">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">80%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">C/C++</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">MongoDB</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">SQL</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Operating System</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Computer Networks</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">DBMS</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Data Structure and Algorithm</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Firebase</div>
                  <div className="dots dots-80">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">80%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">GCP</div>
                  <div className="dots dots-80">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">80%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Git/Github</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">C/C++</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
              </div>
              {/* Services */}
              <div className="p-title">SERVICES</div>
              <div className="services-items">
                <div className="services-col">
                  <div className="services-item">
                    <div className="icon">
                      <i aria-hidden="true" className="fab fa-chrome" />
                    </div>
                    <div className="title">Web development</div>
                    <div className="text">
                      <p>
                        Modern and mobile-ready website that will help you reach
                        all of your marketing.
                      </p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div>
                <div className="services-col">
                  <div className="services-item">
                    <div className="icon">
                      <i aria-hidden="true" className="fab fa-soundcloud" />
                    </div>
                    <div className="title">UI/UX Designing</div>
                    <div className="text">
                      <p>Designing web and app pages, wireframing etc.</p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div>
              </div>
              {/* History */}
              <div className="history-left">
                <div className="history-items">
                  <div className="p-title">EDUCATION</div>
                  <div className="history-item">
                    <div className="date">2019-2021</div>
                    <div className="name">Class 11th and 12th</div>
                    <div className="subname">D.P. Public School</div>
                  </div>
                  <div className="history-item">
                    <div className="date">2021-2025</div>
                    <div className="name">
                      Dr. APJ Abdul Kalam Technical University
                    </div>
                    <div className="subname">
                      Bachelor of Technology (Electronics and Communication
                      Engineering)
                    </div>
                    <div className="subname">Ghaziabad</div>
                  </div>
                </div>
              </div>
              <div className="history-right">
                <div className="history-items">
                  <div className="p-title">EXPERIENCE</div>
                  <div className="history-item">
                    <div className="date">
                      November 2025 - Ongoing
                    </div>
                    <div className="name">Infosys</div>
                    <div className="subname">Software Engineer</div>
                    <div className="text">
                      <p>
                        • Designed and optimized SQL queries and implemented scalable ETL pipelines using SSIS to process and
transform 100K+ records daily from 3+ enterprise data sources. Programmed data processing and analysis pipelines using Python libraries (NumPy, Pandas, Matplotlib,
Scikit-Learn) to analyze 100K+ rows of data and support analytics and predictive modeling. Worked with Big Data technologies including Hadoop to perform distributed processing on 20GB+ datasets for
efficient large-scale data management. Automated data workflows using Unix shell scripting, reducing manual processing time by 25%, and collaborated
within Agile teams of 4+ members to improve pipeline reliability and scalability.
                      </p>
                    </div>
                  </div>
                  <div className="history-item">
                    <div className="date">
                      January 2025 - November 2025
                    </div>
                    <div className="name">Fractit</div>
                    <div className="subname">Fullstack Developer</div>
                    <div className="text">
                      <p>
                        • Developed a blockchain-based project using Next.js,
                        TypeScript, and Supra blockchain, enabling minting of
                        50,000+ tokens, debt repayment, and real-time smart
                        contract interactions for 1,000+ users, while building a
                        responsive frontend with MUI and Tailwind CSS to manage
                        10,000+ monthly transactions across optimized mobile and
                        desktop dashboards.
                      </p>
                    </div>
                  </div>
                  <div className="history-item">
                    <div className="date">May 2024 - August 2024 (Remote)</div>
                    <div className="name">TailorTalk</div>
                    <div className="subname">Web Developer Intern</div>
                    <div className="text">
                      <p>
                        • Developed a dashboard with Next.js and Tailwind CSS
                        for creating organizations and WhatsApp-interacting
                        agent bots, integrating chat bots. Built the main
                        website for Tailor Talk
                      </p>
                    </div>
                  </div>
                  <div className="history-item">
                    <div className="date">
                      October 2023 - March 2024 (Remote)
                    </div>
                    <div className="name">Neolen Technologies.</div>
                    <div className="subname">Frontend Developer Intern</div>
                    <div className="text">
                      <p>
                        • Created an MVP dashboard where users can launch
                        campaigns and ads similar to Meta campaigns using
                        Next.js and Tailwind CSS, and designed the UI using
                        Figma. Developed a second website for email warming
                        using the Django MVT model.
                      </p>
                    </div>
                  </div>
                  <div className="history-item">
                    <div className="date">May 2023 - June 2023 (Remote)</div>
                    <div className="name">LocalVille</div>
                    <div className="subname">React Developer Intern</div>
                    <div className="text">
                      <p>
                        • Developed an e-commerce website for Tiles using React
                        JS and also created the main website for LocalVille with
                        the same technology.
                      </p>
                    </div>
                  </div>
                  <div className="history-item">
                    <div className="date">
                      December 2022 - January 2023 (Remote)
                    </div>
                    <div className="name">SRL Life</div>
                    <div className="subname">
                      Frontend Developer and UI/UX Designer Intern
                    </div>
                    <div className="text">
                      <p>
                        • Developed the SRL Life website interface on WordPress
                        and Elementor, seamlessly integrating Figma, Canva, and
                        Adobe Photoshop for cohesive design and content
                        consistency, ensuring a unified and functional online
                        presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear" />
              {/* Button CV */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1Sev_UnScyNK0r5iJ5y2FJ9ClhrvkMXnY/view?usp=sharing"
                className="btn"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-5"
        id="works-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">My Projects</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div className="text">
                <p>
                  A Collection of my favorites project I’ve developed recently.
                  Feeling great while sharing here.
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop />
        </div>
      </section>

      <section className="section no-padding-top section-parallax section-parallax-4">
        <div className="container">
          <div className="m-titles">
            <h2 className="m-title">My Certificates</h2>
          </div>
          {/* Testimonials */}
          <TestimonialSlider />
        </div>
      </section>

      <ContactForm />
    </Layout>
  );
};
export default Index;
