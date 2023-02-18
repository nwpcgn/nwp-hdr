<script>
  export let book_id = 1;
</script>

<header
  class="mb-5"
  style="background-image: url(./img/hdr/lotr_b{book_id}.jpg);"
>
  <h2 class="p-3">
    <span class="header-text">
      <slot><!-- optional fallback --></slot>
    </span> 
  </h2>
</header>

<style>
  header {
    --slide-height: 300px;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    min-height: var(--slide-height);
    scroll-snap-align: start;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center -80px;
    border-radius: 0.5rem;
  }
  .header-text {
    padding: 0.1rem 0.5rem;
    background-color: rgba(17, 17, 17, 0.2);
    color: #fff;
    border-radius: 0.5rem;
  }
</style>
