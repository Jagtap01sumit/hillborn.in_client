import React from "react";
import "../css/aboutus.css";
import "../css/home.css";

import Navbar from "../home/Navbar";
import { ImOffice } from "react-icons/im";
import image1 from "../utils/img/image1.jpeg";
import image2 from "../utils/img/image2.jpeg";
import image3 from "../utils/img/image3.jpeg";
const AboutUs = () => {
  return (
    <div className="aboutus">
      <Navbar />
      <div className="abt-one">
        <div className="abt-two">
          <h1 className="abt-h1">About us</h1>
        </div>
        <i className="fa-solid fa-shop abt-icon1"></i>
      </div>
      <div className="abt-three">
        <h2 className="abt-h2-1" data-aos="fade-up">
          Who we are{" "}
        </h2>

        <p className=" text-left p-10" data-aos="fade-up">
          Hillborn Technologies, where innovation meets impact, has been
          revolutionizing the digital landscape since 2019. In our journey
          spanning over 4 years, we've proudly partnered with 500+ clients and
          counting, helping them reach new heights in the digital realm. We're
          more than just a tech company; we're the embodiment of your digital
          aspirations. Our core purpose is to make digital solutions accessible,
          effective, and uniquely tailored to your needs. We specialize in
          creating bespoke websites and apps that resonate with your vision,
          crafting compelling digital marketing campaigns that inspire action,
          and using our expertise to connect you with a global audience through
          expert lead generation. Our team is your team, and together, we're
          rewriting the rules of what's possible in the digital world. Join us,
          and let's create the future together.
        </p>
      </div>

      <div className="h-three-contact setter">
        <div className="h-three-inner">
          <div className="h-three-contact-child" data-aos="fade-up">
            <i className="fa-solid fa-user-tie d-icon"></i>
            <p className="h-three-contact-p1">24+</p>
            <p className="h-three-contact-p2">EMPLOYEES</p>
          </div>
          <div className="h-three-contact-child" data-aos="fade-up">
            <ImOffice className="fa-solid fa-tree-city d-icon"></ImOffice>
            <p className="h-three-contact-p1">2+</p>
            <p className="h-three-contact-p2">OFFICES</p>
          </div>
          <div className="h-three-contact-child" data-aos="fade-up">
            <i className="fa-solid fa-tree-city d-icon"></i>
            <p className="h-three-contact-p1">23+</p>
            <p className="h-three-contact-p2">CITIES</p>
          </div>
        </div>
      </div>

      <div className="abt-four">
        <div className="abt-four-s">
          <h2 className="abt-h2-2" data-aos="fade-right">
            Our founding brains
          </h2>
          <div className="abt-four-s-2" data-aos="fade-right">
            <div className="abt-four-ss1">
              <img src={image1} alt="" className="abt-img1" />
            </div>
            <div className="abt-four-ss2">
              <p className="abt-p-2">Gowtham Kumar D</p>
              <p className="abt-p-3">Cofounder and CEO</p>
              <p className="abt-p-4">
                I'm Gowtham Kumar D, Founder & CEO of Hillborn Technologies.
                With over 8+ years of digital expertise, I'm dedicated to
                driving growth, sales, and techno-functional excellence. We've
                always strived to create a company where innovation isn't just a
                buzzword but a way of life. Our approach includes a deep
                understanding of business development and growth strategies, a
                keen eye on market dynamics, and an emphasis on operational
                efficiency. Effective leadership is fundamental to our
                achievements. Guiding teams in sales and technology functions
                has been my privilege, and creating an environment that nurtures
                collaboration, innovation, and a commitment to excellence is our
                core. Together, with our 8+ years of digital expertise, we're
                shaping the future and setting new industry standards. Join us
                on this remarkable journey.
              </p>
            </div>
          </div>
          <div className="abt-four-s-3" data-aos="fade-right">
            <div className="abt-four-ss1">
              <img src={image2} alt="" className="abt-img1" />
            </div>
            <div className="abt-four-ss2">
              <p className="abt-p-2">Munikrishna</p>
              <p className="abt-p-3">Co-founder & CTO</p>
              <p className="abt-p-4">
                I'm Muni Krishna, co-founder at Hillborn Technologies, and I
                bring more than 11 years of experience in marketing and global
                processes to our dynamic team. With a deep passion for marketing
                and a keen understanding of global processes, my journey has
                been dedicated to driving strategies that fuel sustainable
                growth and brand excellence. From crafting innovative campaigns
                that resonate on a global scale to building lasting customer
                relationships that transcend borders, I've honed my expertise in
                the art of marketing and global processes. At Hillborn
                Technologies, we firmly believe that exceptional marketing,
                aligned with global processes, is the bedrock of business
                success. Join us as we embark on a journey to set new industry
                standards in marketing and embrace the complexities of the
                global marketplace.
              </p>
            </div>
          </div>
          <div className="abt-four-s-2 " data-aos="fade-right">
            <div className="abt-four-ss1 ">
              <img src={image3} alt="" className="abt-img1" />
            </div>
            <div className="abt-four-ss2">
              <p className="abt-p-2">Mano Gnanaseelan</p>
              <p className="abt-p-3">Co-founder & CTO</p>
              <p className="abt-p-4 ">
                I'm Mano Gnanaseelan, the Chief Technology Officer (CTO) at
                Hillborn Technologies, where technology is not just a tool but a
                driving force for transformative change. With over 7 years of
                unwavering dedication to technology, I've developed a profound
                expertise in coding and the ability to seamlessly adapt to a
                diverse spectrum of tech domains. As CTO, I embrace every
                technological challenge with an unwavering commitment to
                innovation, seeking out solutions for complex issues. At
                Hillborn Technologies, we believe in the profound impact
                technology can have on industries and its potential to unravel
                even the most intricate problems. Join us on our exciting
                journey, where we are continuously navigating the ever-evolving
                tech landscape, pioneering new standards in the industry, and
                creating solutions that push the boundaries of what's possible.
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
