<template>
   <footer class="footer">
    <header class="footer-header">
      <h4 class="footer-header-title">Quick contact</h4>
      <p class="footer-header-description">
        You can easily contact with me via email, phone call or Facebook message.<br/>
        Feel free to ask! 
      </p>
      <span class="footer-header-line"></span>
    </header>
    <ul class="footer-contact">
      <li class="footer-contact-item">
        <a href="mailto:radek511@op.pl" aria-label="Write to me radek511@op.pl" title="Write to me radek511@op.pl">
          <div class="footer-contact-item-icon"></div>
          <p class="footer-contact-item-addition">Write to me</p>
          <p class="footer-contact-item-detail">radek511@op.pl</p>
        </a>
      </li>
      <li class="footer-contact-item">
        <a href="tel:516649611" aria-label="Call me 516649611" title="Call me 516649611">
          <div class="footer-contact-item-icon"></div>
          <p class="footer-contact-item-addition">Call me</p>
          <p class="footer-contact-item-detail">+48 516 649 611</p>
        </a>  
      </li>
      <li class="footer-contact-item">
        <a href="https://www.messenger.com/t/radek.wawrzyk" aria-label="Talk with me" title="Talk with me">
         <div class="footer-contact-item-icon"></div>
          <p class="footer-contact-item-addition">Talk with me</p>
          <p class="footer-contact-item-detail">Radek Wawrzyk</p>
        </a>
      </li>
    </ul>
    <ul class="footer-socials">
      <li class="footer-socials-item">
        <a class="footer-socials-item-icon" aria-label="Facebook" title="Facebook" href="https://www.facebook.com/radek.wawrzyk"></a>
      </li>
      <li class="footer-socials-item">
        <a class="footer-socials-item-icon" aria-label="Linkedin" title="Linkedin" href="https://www.linkedin.com/in/radek-wawrzyk-211948158/"></a>
      </li>
      <li class="footer-socials-item">
        <a class="footer-socials-item-icon" aria-label="Github" title="Github" href="https://github.com/Radek-Wawrzyk"></a>
      </li>
    </ul>
    <figure class="footer-logo">
      <router-link to="/" aria-label="homepage" title="homepage">
        <img class="footer-logo-img" src="https://blue-shark.co.uk/wp-content/uploads/2016/05/icon-web_dev.png" alt="footer logo" />
      </router-link>
    </figure>
    <p class="footer-singature">© 2018 Radek Wawrzyk</p>
  </footer>
</template>

<script>

export default {
  name: "Footer"
}

</script>
