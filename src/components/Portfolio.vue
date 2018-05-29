<template>
  <main id="portfolio">
    <header class="portfolio-header">
      <h1 class="portfolio-header-title">
        I try to do creative & <br/>interesting projects
      </h1>
      <p class="portfolio-header-description">
        Check my work below.
      </p>
    </header>
    <ul class="portfolio-filter">
      <li class="portfolio-filter-item">
        <button class="portfolio-filter-item-button" data-category="default">All</button>
      </li>
      <li class="portfolio-filter-item">
        <button class="portfolio-filter-item-button"  data-category="website">Website</button>
      </li>
      <li class="portfolio-filter-item">
        <button class="portfolio-filter-item-button"  data-category="app">Application</button>
      </li>
    </ul>
    <ul class="portfolio-list">
      <li class="portfolio-list-item">
        <router-link to="portfolio/item">
          <article class="portfolio-list-item-description">
            <p class="portfolio-list-item-text">xdxd</p>
            <p class="portfolio-list-item-text">xdxd</p>
          </article>
          <img class="portfolio-list-item-img" src="http://www.wallpapers4u.org/wp-content/uploads/puppy_couple_sunset_nature_play_kids_1194_1920x1080.jpg" alt= />
        </router-link>
      </li>
      <li class="portfolio-list-item">
        <router-link to="portfolio/item">
          <article class="portfolio-list-item-description">
            <p class="portfolio-list-item-text">xdxd</p>
            <p class="portfolio-list-item-text">xdxd</p>
          </article>
          <img class="portfolio-list-item-img" src="http://www.wallpapers4u.org/wp-content/uploads/puppy_couple_sunset_nature_play_kids_1194_1920x1080.jpg" alt= />
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>

export default {
  name: "Portfolio"
}

</script>

