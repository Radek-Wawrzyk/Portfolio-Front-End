<template>
  <div class="page-content">
    <main id="about">
      <header class="about-header">
        <h1 class="about-header-title">Ambition & hard work!</h1>
        <p class="about-header-description">These words are my motto for further hard work.</p>
      </header>
      <section class="about-info">
        <div class="about-info-wrapper">
          <article class="about-info-tile">
            <h2 class="about-info-tile-title">
              Hello there! My name is Radek and I'm Front End Developer.
            </h2>
            <p class="about-info-tile-description">
              I like to learn new things, cause as developers we have to do it. However, the key to a success  
              is to like what you really do. Then everything is possible and the effects will be much better! 
            </p>
          </article>
        </div>
        <div class="about-info-wrapper">
          <div class="about-info-tile"></div>
          <div class="about-info-tile">
            <a href="https://drive.google.com/open?id=1fWsafCvqLPb2LHXScqeMsW9H1q0jOTeb" target="_blank" aria-label="Check my CV" title="My CV">
              <h2 class="about-info-tile-title">
                Curriculum Vitae
              </h2>
              <p class="about-info-tile-description">
                You can check my CV and see my competitions!
              </p>
            </a>
          </div>
        </div>
      </section>
      <section class="about-skills">
        <header class="about-skills-header">
          <h2 class="about-skills-header-title">
            I create & code websites with<br/> details and quality
          </h2>
        </header>
        <article class="about-skills-info">
          <h3 class="about-skills-info-title">
            Creative approach to the project<br/>ensures good final results.
          </h3>
        </article>
        <ul class="about-skills-list">
          <li class="about-skills-list-item">
            <h4 class="about-skills-list-item-title">Website</h4>
            <p class="about-skills-list-item-description">
              Starting with a simple one page website, finishing on an extensive website
              with many subpages. Webisites based on the newest HTML5 standards and ARIA accessibility will provide good SEO.
              I can code your layout from graphic file so called - PS2HTML. Otherwise, I'll contact with my graphic designer,
              and we'll create a great project together!
            </p>
          </li>
          <li class="about-skills-list-item">
            <h4 class="about-skills-list-item-title">Wordpress</h4>
            <p class="about-skills-list-item-description">
              Basic websites based on Wordpress CMS like blogs, portals or simple onepages.
              By ACF plugin you are gonna to be able to manage your descriptions, links and all content on your website.
              Also, I can help with basic SEO and implement your own layout.
            </p>
          </li>
          <li class="about-skills-list-item">
            <h4 class="about-skills-list-item-title">Application</h4>
            <p class="about-skills-list-item-description">
              With cooperate my fellow Back End developers, we can make your dream service or application.
              Concrete selection of the newest technologies will result high performance of the application. Moreover, we can fully
              customize the product for your needs, no unnecessary functions and code!
            </p>
          </li>
        </ul>
      </section>
      <section class="about-exp">
        <header class="about-exp-header">
          <h4 class="about-exp-header-title">
            For 2 years of my study & work<br/>
            I've had chances to learn from professionals.
          </h4>
          <div class="about-exp-header-tile">
            <h5 class="about-exp-header-tile-title">Experience</h5>
            <p class="about-exp-header-tile-description">
              <span>15</span>
              Projects I've done to this moment!
            </p>
          </div>
        </header>
        <article class="about-exp-info">
          <h5 class="about-exp-info-title">
            I'm learning new things all the time, cause good developer learns all his own life. In each new project
            I try to improve my abilities & skills.
          </h5>
          <p class="about-exp-info-description">
            I have a commercial experience with coding websites. I've had internship in professional interactive agency -
            <a href="https://www.websitestyle.pl/" title="interactive agency - websitestyles" aria-label="interactive agency - websitestyles"> websitestyle.</a> 
            I've learned there how to work with other developers - I've worked on my soft skills.
            Moreover, I've realized what is Git and how to work with it. Ofcourse I've work too on my Front End abilities. I've worked little as 
            freelancer cooperating with my graphic designer.
          </p>
          <router-link to="/portfolio" title="my work" aria-label="My work" class="about-exp-info-link">
            See my work
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"/></svg>
          </router-link>
        </article>
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>

import Footer from "./Footer";

export default {
  name: "About",
  components: { Footer }
}

</script>

