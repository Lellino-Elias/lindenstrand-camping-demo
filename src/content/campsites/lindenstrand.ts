import type { CampsiteConfig } from "../types";

const IMG = "/campsites/lindenstrand";

const lindenstrand: CampsiteConfig = {
  name: "Romantik-Camping Wolfgangsee Lindenstrand",
  shortName: "Lindenstrand",
  slug: "lindenstrand",
  ort: "Abersee am Wolfgangsee",
  region: "Salzkammergut",
  brandKind: "Romantik-Camping",
  see: "Wolfgangsee",
  regionLong: "Salzkammergut · Wolfgangsee · Österreich",

  theme: "schiefer",
  heroVariant: "center",

  claim: "Am Lindenstrand beginnt dein Wolfgangsee",
  claimEmphasis: "dein Wolfgangsee",
  intro:
    "Mitten im Salzkammergut, direkt am Ufer des Wolfgangsees: 209 großzügige Plätze zwischen altem Obstgarten, Sommerwiese und 140 m Kiesstrand — von Familie Leitner persönlich geführt.",

  statement: {
    text: "Bis zum Wasser sind es nur wenige Schritte — der Kiesstrand liegt gleich hinter deinem Stellplatz.",
    emphasis: "wenige Schritte",
  },

  pillars: [
    {
      title: "Direkt am Wolfgangsee",
      text: "Plätze in erster Reihe, ein privater Steg und 140 m Kiesstrand mit flachem Einstieg — der See gehört hier zum Alltag.",
      image: { src: `${IMG}/activity-50fc4913fd.webp`, alt: "Stellplätze am Seeufer des Wolfgangsees mit Blick auf die Berge" },
    },
    {
      title: "Hof mit Geschichte",
      text: "Der historische Bauernhof von Familie Leitner steht für gelebte Tradition — Wiesen und Felder bewirtschaften wir bis heute selbst.",
      image: { src: `${IMG}/activity-e972e8d9d5.webp`, alt: "Historisches Bauernhaus von Camping Lindenstrand mit Fahnen" },
    },
    {
      title: "Im alten Obstgarten",
      text: "Schon Opas Obstbäume spenden Schatten: Hier stellst du Zelt oder Wohnwagen unter knorrige, über Jahre veredelte Originale.",
      image: { src: `${IMG}/activity-667fe899ce.webp`, alt: "Stellplätze unter alten Obstbäumen im Obstgarten am Lindenstrand" },
    },
  ],

  usps: [
    "140 m Kiesstrand",
    "Privater Steg am See",
    "209 großzügige Plätze",
    "SUP, Kajak & Räder",
    "Hunde willkommen",
    "Gratis WLAN",
  ],

  trust: {
    heading: "Darauf ist am Lindenstrand Verlass",
    headingEmphasis: "Lindenstrand",
    intro:
      "Seit Generationen in Familienhand: ein gepflegter Platz direkt am See, mit eigenem Strand, modernem Sanitär und kurzen Wegen — und Gastgebern, die ihren Hof noch selbst bewirtschaften.",
  },

  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/activity-956f5ed570.webp`, alt: "Luftaufnahme: Romantik-Camping Lindenstrand am Ufer des Wolfgangsees" },
  },

  breather: {
    image: { src: `${IMG}/activity-2b491fd14e.webp`, alt: "Morgenstimmung über dem Wolfgangsee beim Camping Lindenstrand" },
    line: "Wenn der erste Sonnenstrahl über dem Wolfgangsee aufgeht.",
  },

  camping: {
    heading: "Camping am Lindenstrand",
    intro:
      "Vier Platzkategorien zwischen See, Linden, Obstgarten und Sommerwiese — dazu alles, was den Campingtag leicht macht: Strom, WLAN, moderne Sanitäranlagen und der Nahversorger gleich am Hof.",
    features: [
      {
        title: "Plätze am Seeufer",
        text: "Elf Stellplätze liegen direkt am Wasser — einschlafen beim Plätschern der Wellen, aufwachen mit Blick über den Wolfgangsee.",
        image: { src: `${IMG}/activity-97b2e28017.webp`, alt: "Stellplätze direkt am Kiesufer des Wolfgangsees" },
      },
      {
        title: "Modernes Sanitär & Waschküche",
        text: "Zwei Sanitärhäuser mit gepflegten Duschen, Familienbad und Waschmaschinen — eines davon barrierefrei und mit Babybad.",
        image: { src: `${IMG}/activity-677f9e86fd.webp`, alt: "Moderne Waschbecken und Waschmaschinen im Sanitärhaus am Lindenstrand" },
      },
      {
        title: "Nahversorger & Pizza-to-go",
        text: "Der kleine Selbstbedienungsladen am alten Bauernhaus führt Frühstückssemmeln, regionale Produkte und die beliebte Pizza-to-go.",
        image: { src: `${IMG}/activity-117cfd7e5c.webp`, alt: "Gäste im Selbstbedienungsladen am Camping Lindenstrand" },
      },
      {
        title: "Strandhaus-Lounge",
        text: "Im Obergeschoss des Strandhauses: viel Holz, große Glasflächen und drei Balkone mit Panoramablick auf Schafberg und See.",
        image: { src: `${IMG}/activity-d9f8532e52.webp`, alt: "Helle Holz-Lounge im Strandhaus mit Balkon und Seeblick" },
      },
      {
        title: "Privater Steg am See",
        text: "Der hauseigene Steg reicht weit in den Wolfgangsee hinaus — perfekt für den Sprung ins glasklare, tiefe Wasser.",
        image: { src: `${IMG}/activity-3adbce3094.webp`, alt: "Privater Steg am Wolfgangsee beim Camping Lindenstrand im Abendlicht" },
      },
      {
        title: "Bei den Linden",
        text: "Geschotterte Parzellen zwischen See und Bauernhaus, benannt nach den Linden, die überall auf dem Areal stehen.",
        image: { src: `${IMG}/activity-8ad78f2ed0.webp`, alt: "Stellplätze unter Linden mit Blick über den Wolfgangsee" },
      },
    ],
  },

  kinder: {
    heading: "Kinder lieben den Lindenstrand",
    intro:
      "Flacher Kiesstrand zum Planschen, zwei Spielplätze und ein Spielzimmer im Strandhaus — hier sind Kinder den ganzen Tag draußen.",
    features: [
      {
        title: "Großer Spielplatz",
        text: "Rutsche, Schaukel und Ballwiese mit Fußballtoren — Platz zum Austoben gleich neben den Stellplätzen auf der Sommerwiese.",
        image: { src: `${IMG}/activity-59846d50a1.webp`, alt: "Mädchen spielen Fußball am Tor auf der Ballwiese, Rutsche und Klettergerüst im Hintergrund" },
      },
      {
        title: "Flacher Kiesstrand",
        text: "Die seichte Uferzone mit warmen Kieseln ist ideal für die ersten Schwimmversuche der Kleinen.",
        image: { src: `${IMG}/activity-e93eb920c0.webp`, alt: "Flacher Kiesstrand mit planschenden Kindern am Wolfgangsee" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Wolfgangsee",
    intro:
      "Baden, paddeln, radeln: Der See liegt vor dem Vorzelt, Rad- und Wanderwege starten direkt vor dem Platz.",
    items: [
      {
        title: "Baden & Klippenspringen",
        text: "Glasklares Wasser direkt am Platz — und für Mutige lockt die nahe Falkensteinwand zum Sprung ins kühle Nass.",
        image: { src: `${IMG}/activity-a9a73a80c9.webp`, alt: "Sprung ins glasklare Wasser des Wolfgangsees am Lindenstrand" },
      },
      {
        title: "SUP, Kajak & Räder",
        text: "Die Leihstation hat SUP-Boards, Einer- und Zweier-Kajaks, E-Bikes und Räder für den Tag am und um den See.",
        image: { src: `${IMG}/activity-7a24561a17.webp`, alt: "Kajak auf dem Wolfgangsee in der Abendsonne" },
      },
      {
        title: "Sonnen am Seeufer",
        text: "Liegestuhl ausleihen, auf den Naturwiesen neben der Bucht entspannen und den Blick über den See schweifen lassen.",
        image: { src: `${IMG}/activity-67b88f6237.webp`, alt: "Entspannen am Seeufer mit Steg und Bergblick am Lindenstrand" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Lindenstrand",
    modes: [
      { title: "Mit dem Auto", text: "Über die A1 West Autobahn bis Mondsee oder Salzburg, dann auf der B158 nach Abersee/St. Gilgen — der Platz liegt in Schwand 19, direkt am See." },
      { title: "Mit der Bahn", text: "Bahnhof Salzburg Hbf, weiter mit dem Postbus Richtung Bad Ischl bis Abersee — von der Haltestelle sind es nur wenige Minuten." },
      { title: "Mit dem Schiff", text: "Im Sommer verkehrt die Wolfgangsee-Schifffahrt zwischen St. Gilgen, Abersee und St. Wolfgang." },
    ],
  },

  galerie: {
    heading: "Sommer am Lindenstrand",
    headingEmphasis: "Sommer",
    intro: "Seeluft, alte Bäume und lange Abende am Wasser — ein paar Eindrücke vom Platz.",
    tag: "April bis Oktober",
    moreCount: 20,
    images: [
      { src: `${IMG}/activity-f779b8fe49.webp`, alt: "Oldtimer-Campingbus unter Bäumen am Lindenstrand" },
      { src: `${IMG}/activity-fa3163b4ed.webp`, alt: "Stellplätze mit Wohnmobilen zwischen Bäumen mit Bergblick" },
      { src: `${IMG}/activity-7eb829e286.webp`, alt: "Spielzimmer im Strandhaus mit Riesenbausteinen und Sitzsäcken" },
      { src: `${IMG}/activity-57050b4f1f.webp`, alt: "Stellplätze auf der Sommerwiese mit Blick auf den Wolfgangsee" },
    ],
  },

  booking: {
    heading: "Reservier deinen Platz am Wolfgangsee",
    headingEmphasis: "am Wolfgangsee",
    intro: "Wähle Kategorie und Zeitraum — Familie Leitner bestätigt deine Anfrage persönlich.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise Vorsaison · Stellplatz inkl. 2 Erwachsene · zzgl. Ortstaxe € 3,50 pro Person/Nacht · Hund ab € 4",
    highlight: { title: "Direkt am See", text: "Von den Seeplätzen sind es nur wenige Schritte bis ins Wasser." },
    categories: [
      { id: "sommerwiese", label: "Auf der Sommerwiese", perNight: 31, perExtraGuest: 10 },
      { id: "obstgarten", label: "Im Obstgarten", perNight: 32, perExtraGuest: 10 },
      { id: "linden", label: "Bei den Linden", perNight: 37, perExtraGuest: 10 },
      { id: "seeufer", label: "Am Seeufer", perNight: 42, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    tel: "+43 6227 3205",
    telHref: "tel:+4362273205",
    mail: "camping@lindenstrand.at",
    facebook: "https://www.facebook.com/romantikcamping/",
    adresse: "Schwand 19 · 5342 Abersee · St. Gilgen",
    coords: { lat: 47.7398212, lng: 13.4027492 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default lindenstrand;
