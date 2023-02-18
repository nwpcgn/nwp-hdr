import { wrap } from "svelte-spa-router/wrap";
// @index(['./*.svelte', './list/*.svelte'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
import Hsp from './Hsp.svelte';
import Info from './Info.svelte';
import NotFound from './NotFound.svelte';
import Settings from './Settings.svelte';
import Start from './Start.svelte';
// @endindex

  const routes = {
    "/": wrap({
      component: Start,
      props: {
        pData: {
          title: "NWP-APP",
          subtitle: "nwp-studio",
          header: "Der Herr der Ringe",
          subheader: "Hoerspiel nach J.R.R. Tolkien",
          bg: "./img/bga1.png",
          nav: [
            {
              id: 1,
              path: "/hsp/1",
              name: "Buch 1",
              buch: "Die Gefaehrten",
            },
            {
              id: 2,
              path: "/hsp/2",
              name: "Buch 2",
              buch: "Die zwei Türme",
            },
            {
              id: 3,
              path: "/hsp/3",
              name: "Buch 3",
              buch: "Die Rückkehr des Königs",
            },
          ]
        },
      },
    }),
    "/info": wrap({
      component: Info,
      props: {
        pData: {
          title: "NWP-APP",
          subtitle: "nwp-studio",
          header: "Der Herr der Ringe",
          subheader: "Information",
          nav: []
        },
      },
    }),
    '/hsp/*': Hsp,
    '/settings/*': Settings,
    '*': NotFound
  }
  
  export default routes;