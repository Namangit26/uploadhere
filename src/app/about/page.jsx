import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600"
          fill={true}
          alt="Digital Storytellers"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award-winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a passionate team of creative professionals dedicated to
            crafting compelling digital experiences that captivate audiences and
            drive innovation. Our journey began with a shared love for technology
            and design, and a common goal to make a meaningful impact in the digital
            world.

            With years of combined experience, our diverse team brings together
            a wide range of skills and expertise. From graphic designers and
            web developers to UX/UI experts and digital marketers, we collaborate
            seamlessly to turn ideas into reality.

            What sets us apart is our unwavering commitment to quality and
            innovation. We believe that each project is a canvas for innovation, and
            we take pride in pushing the boundaries of whats possible in the digital
            realm. Our work is a reflection of our creativity, attention to detail,
            and a deep understanding of the ever-evolving digital landscape.

            Whether youre a startup looking to establish your online presence or a
            well-established company seeking a digital transformation, were here
            to transform your vision into captivating digital experiences. We
            understand that every project is unique, and we tailor our solutions to
            meet your specific needs and objectives.

            Join us on this exciting journey as we continue to write our story as
            &ldquo;Digital Storytellers,&rdquo; and lets create digital experiences that
            leave a lasting impression.
          </p>

        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            At Digital Storytellers, we specialize in a wide range of services to
            meet your digital needs, including:
            <br />
            <br />
            - Creative Illustrations: We bring your ideas to life with
            eye-catching and unique illustrations.
            <br />
            <br />
            - Dynamic Websites: We design and develop interactive and
            user-friendly websites that engage your audience.
            <br />
            <br />
            - Fast and Handy: Our team ensures your digital solutions are
            responsive and optimized for speed.
            <br />
            <br />
            - Mobile Apps: We create cutting-edge mobile applications that
            enhance user experiences.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
