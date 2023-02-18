<script>
  import HspList from "./HspList.svelte";
  import HspBooks from "./HspBooks.svelte";
  import Router from "svelte-spa-router";
  const prefix = "/hsp";
  const routes = {
    "/": HspBooks,
    "/:book": HspList,
  };

</script>

<section class="page">
  <Router {routes} {prefix} />
</section>
