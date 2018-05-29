<template>
  <main id="contact">
    <header class="contact-header">
      <h1 class="contact-header-title">
        I'm full of ideas & willingness <br/>to implement new project!
      </h1>
      <p class="contact-header-description">
        If you have any question, go ahead and just ask me.
      </p>
    </header>
    <div class="contact-info">
      <div class="contact-info-tile">
        <h2 class="contact-info-tile-title">Radek Wawrzyk</h2>
        <p class="contact-info-tile-description">
          Poland, Pomorskie, Gdynia<br/>
          +48 516 649 611<br/>
          radek511@op.pl<br/>
        </p>
      </div>
      <div class="contact-info-tile">
        <h2 class="contact-info-tile-title">
          Junior Front End Developer
        </h2>
        <p class="contact-info-tile-description">
          ...without boring passions & descriptions!
        </p>
      </div>
    </div>
    <header class="contact-communication-header">
      <h3 class="contact-communication-header-title">
        Let's do some great things together!
      </h3>
      <p class="contact-communication-header-description">
        Be in touch and feel free to correspondence with me.
      </p>
    </header>
    <form class="contact-form" action="http://dobrastronka.cba.pl/SendMail.php" method="POST" >
      <div class="contact-form-item">
        <input type="text" name="name" onChange={this.onChangeHandler} placeholder="Name" aria-required="true" title="Your name" aria-label="Name"/>
      </div>
      <div class="contact-form-item">
        <input type="text"  name="email"  placeholder="Email adress" aria-required="true" title="Your adress email" aria-label="Email adress"/>
      </div>
      <div class="contact-form-item">
        <input type="text" name="subject" placeholder="Subject" aria-required="true" title="Subject" aria-label="Subject"/>
      </div>
      <div class="contact-form-item">
        <textarea  placeholder="Your message" name="message"  aria-required="true" title="Message" aria-label="Your message"></textarea>
      </div>
      <div class="contact-form-item">
        <button class="contact-form-item-btn" type="submit" onSubmit={this.sumbit}>
          Sumbit
        </button>
      </div>
    </form>
  </main>
</template>

<script>

export default {
  name: "Contact"
}

</script>
