
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Slider from '@/components/slider/slider'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ReactPlayer from 'react-player'
import Header from '@/components/header/header';


export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  })


  return (

    <>
      <Head>
        <title>OpenSkyTrips</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />




      </Head>
     
      <div className={styles.slider} id="player">  
           
     

   <iframe src='https://www.youtube.com/embed/qgJqE7-YEl0?&amp;autoplay=1&amp;mute=1&amp;;loop=1&amp;controls=0&amp;modestbranding=0'
          allow='autoplay; encrypted-media'
          width="100%"
          height="100%"
          frameborder='0'
          allowFullScreen
          title='video'
          modestbranding='0'>
          {/* <div className={styles.sliderOverlay}>
          </div> */}
        </iframe> 
        
            </div>


      <div data-aos="fade-up" className={styles.pdsection}>
        <div className={styles.pdheading}>
          <span className={styles.h1}>Take a look at Our</span>
          <span className={styles.h5}>Most Popular Destinations</span>
        </div>
        <div className={styles.pdestinations}>
          <div data-aos="fade-up" className={styles.pdcard}>
            <img src="images/gulmarg.jpg" alt="" width="100%" height="300px" />
            <div className={styles.desc}>
              <span>Srinagar</span>
              <input type="button" className={styles.btnknowmore} value="Know More" />
            </div>
          </div>
          <div data-aos="fade-up" className={styles.pdcard}>
            <img src="images/pahalgham.jpg" alt="" width="100%" height="300px" />
            <div className={styles.desc}>
              <span>Pahalgam</span>
              <input type="button" className={styles.btnknowmore} value="Know More" />
            </div>
          </div>
          <div data-aos="fade-up" className={styles.pdcard}>
            <img src="images/srinagar.jpg" alt="" width="100%" height="290px" />
            <div className={styles.desc}>
              <span>Gulmarg</span>
              <input type="button" className={styles.btnknowmore} value="Know More" />
            </div>

          </div>
          <div data-aos="fade-up" className={styles.pdcard}>
            <img src="images/srinagar.jpg" alt="" width="100%" height="290px" />
            <div className={styles.desc}>
              <span>Sonamarg</span>
              <input type="button" className={styles.btnknowmore} value="Know More" />
            </div>

          </div>

        </div>
      </div>

      <div className={styles.abtcont}>
        <img data-aos="fade-up" src="images/palne.jpeg" />
        <div data-aos="fade-up" className={styles.habt}>
          <div className={styles.abtitle}>
            <span>About Us</span>
            <h2>Get ready for real time adventure</h2>
          </div>
          <div className={styles.abcaption}>
            <p className={styles.mb50}>Let’s start your journey with us, your dream will come true.</p>
            <p className={styles.mb50}>The world's best travel destination 'KASHMIR' hailed all over the world for its incredible
              natural beauty
              cradled high in the lofty green Himalayas surrounded by mountain peaks,
              lush green valleys, glistening lakes, temples and spectacular Mughal-era gardens. </p>
            <p className={styles.mb50}>Our Services Are Ideal for Individuals, Couples, Families and Groups.
            </p>
            <div className={styles.bydbtn}>
              <input type="button" className={styles.byd} button onClick={"/packages/packages"} value="Book Your Destination" />

            </div>
          </div>
        </div>
      </div>
      <div class="whatsapp">
  <a href="https://api.whatsapp.com/send?phone=+91-9906973143&text=Hello........" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
  </a>
      </div>
      
      <Slider />

    </>

  )
}
