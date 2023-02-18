import { localStore } from '../../utils/localStore'
import { writable } from 'svelte/store';

export const _apiData = writable({
    hoerspiel: "Der Herr der Ringe",
    autor: "J.R.R. Tolkien ",
    regie: "Bernd Lau",
    produktion: "Südwestrundfunk (SWR) / Westdeutscher Rundfunk (WDR) ",
    veroeffentlicht: 1992,
    img_url: "./img/hdr/bg-lotr.jpg",
    info: "J.R.R. Tolkiens weltberühmter Fantasy-Klassiker: Der Herr der Ringe. Ein Ring voller Zauber, geschmiedet von einer bösen Macht, hat die Harmonie von Mittelerde zerstört. Herrscher werden zu Tyrannen, Menschen zu bösen Geschöpfen. Ein Krieg steht unmittelbar bevor. Hobbit Frodo Beutlin soll den Ring dorthin zurückbringen, wo er geschmiedet wurde, und ihn vernichten. In 30 Folgen lädt dieser Hörspiel-Klassiker von 1992 in eine der bekanntesten Fantasy-Welten aller Zeiten ein.",
    books: [
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
    ],
})
export const _options = localStore('nwp_options', {
	op1: false,
	op2: false,
	op3: false,
	op4: false
})
export const _audio = localStore('nwp_session', {
	b_id: 1,
	buch: 'Die Gefaehrten',
	id: 1,
	h_id: 1,
	name: 'Folge 1: Ein festlicher Abschied',
	titel: 'Ein festlicher Abschied',
	inhalt:
		'Frodo Beutlin schätzt nichts mehr, als eine dampfende Pfeife und ein geruhsames Leben. Dies führt er auch, bis eines Tages der Zauberer Gandalf bei ihm auftaucht und ihm eine schier unlösbare Aufgabe überträgt.',
	audio_link:
		'https://nwp-cgn.de/archiv/hdr/jrrtolkienderherrderringefantasyhoerspielklassiker_2022-12-25_derherrderringe0130einfestlicherabschied_wdronline.mp3'
})

export const setTheme = (bool) => {
	let element = document.querySelector('html')
	element.setAttribute('data-bs-theme', bool ? 'dark' : 'light')
}
export const sleep = (milliseconds = 1000) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds))
