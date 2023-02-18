import { localStore } from '../../utils/localStore'

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
