import type { CampsiteConfig } from "../types";

/**
 * Romantik-Camping Wolfgangsee Lindenstrand — Familie Leitner, Abersee (St. Gilgen).
 * Inhalte zu 100 % aus raw/digest abgeleitet. Bilder provenienzgebunden, je einmalig.
 * Preise: Richtpreise aus der aktuellen Preisliste (Stellplatz + 2 Erwachsene, günstigste Saison).
 */
const IMG = "/campsites/lindenstrand";

const lindenstrand: CampsiteConfig = {
  name: "Romantik-Camping Wolfgangsee Lindenstrand",
  shortName: "Lindenstrand",
  slug: "lindenstrand",
  ort: "Abersee am Wolfgangsee",
  region: "Salzkammergut",
  brandKind: "Romantik-Camping",
  see: "Wolfgangsee",
  regionLong: "Wolfgangsee · Salzkammergut · Salzburg",

  theme: "schiefer",
  heroVariant: "center",

  claim: "Mit den Füßen im Wolfgangsee aufwachen",
  claimEmphasis: "im Wolfgangsee",
  intro:
    "Ein familiär geführter Platz auf einem alten Bauernhof: 209 großzügige Stellplätze zwischen Obstgarten, Sommerwiese und eigenem Kiesstrand — direkt am glasklaren Wolfgangsee im Salzkammergut.",

  statement: {
    text: "Elf Plätze stehen in erster Reihe — da beginnt der Wolfgangsee fünf Schritte hinter deinem Vorzelt.",
    emphasis: "fünf Schritte",
  },

  pillars: [
    {
      title: "Mitten im Wolfgangsee",
      text: "Glasklares, türkisgrünes Wasser direkt am Platz — vom Steg geht es kopfüber in den See.",
      image: { src: `${IMG}/activity-a9a73a80c9.webp`, alt: "Sprung in den türkisgrünen Wolfgangsee am Lindenstrand" },
    },
    {
      title: "Vier Plätze, ein See",
      text: "Am Seeufer, Bei den Linden, Im Obstgarten oder Auf der Sommerwiese — such dir deinen Lieblingsplatz.",
      image: { src: `${IMG}/activity-8ad78f2ed0.webp`, alt: "Stellplätze unter den Linden am Ufer des Wolfgangsees" },
    },
    {
      title: "Familiär & echt",
      text: "Ein bewirtschafteter Bauernhof am See, seit Generationen in der Hand der Familie Leitner.",
      image: { src: `${IMG}/activity-e972e8d9d5.webp`, alt: "Historischer Hof des Camping Lindenstrand am Wolfgangsee" },
    },
  ],

  usps: [
    "Eigener Kiesstrand am See",
    "209 Stellplätze mit Strom",
    "Steg & Bootsverleih",
    "Hunde willkommen",
    "WLAN am ganzen Platz",
    "Familiär geführt",
  ],

  trust: {
    heading: "Darauf ist am Lindenstrand Verlass",
    headingEmphasis: "Verlass",
    intro:
      "Seit Generationen in Familienhand: ein Hof, der noch bewirtschaftet wird, kurze Wege zum Wasser und ein Platz, an dem Kinder den ganzen Tag draußen sein dürfen.",
  },

  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: {
      src: `${IMG}/activity-956f5ed570.webp`,
      alt: "Luftaufnahme: Camping Lindenstrand am Ufer des Wolfgangsees",
    },
  },

  breather: {
    image: { src: `${IMG}/activity-2b491fd14e.webp`, alt: "Morgenstimmung am Wolfgangsee beim Camping Lindenstrand" },
    line: "Morgens liegt der Wolfgangsee noch ganz still vor dem Platz.",
  },

  camping: {
    heading: "Camping zwischen Hof und Seeufer",
    intro:
      "Vom Stellplatz in den See sind es nur ein paar Schritte: vier Platzkategorien, zwei moderne Sanitärhäuser und alles, was ein entspannter Campingtag am Wolfgangsee braucht.",
    features: [
      {
        title: "Stellplätze mit Seeblick",
        text: "Ebene Plätze von 70 bis 100 m², jeder mit Stromanschluss, die meisten mit Wasser und Abwasser — und morgens zuerst der Blick aufs Wasser.",
        image: { src: `${IMG}/activity-97b2e28017.webp`, alt: "Stellplätze am Seeufer des Wolfgangsees" },
      },
      {
        title: "Eigener Kiesstrand",
        text: "Der 140 m lange, flach abfallende Kiesstrand liegt nur wenige Schritte vom Platz — der seichte Uferbereich ist ideal für Familien mit Kindern.",
        image: { src: `${IMG}/activity-67b88f6237.webp`, alt: "Kiesstrand am Wolfgangsee beim Camping Lindenstrand" },
      },
      {
        title: "Steg & Bootsverleih",
        text: "Unser Steg reicht weit in den See — für den Sprung ins klare Wasser. SUP, Kajak, E-Bikes und Liegestühle gibt es direkt an der Rezeption.",
        image: { src: `${IMG}/activity-3adbce3094.webp`, alt: "Holzsteg in den Wolfgangsee am Lindenstrand" },
      },
      {
        title: "Zwei Sanitärhäuser",
        text: "Stadlbad und Strandhaus bieten moderne Duschen, Waschmaschinen und ein eigenes Babybad — das Stadlbad ist komplett barrierefrei.",
        image: { src: `${IMG}/activity-677f9e86fd.webp`, alt: "Modernes Sanitärhaus mit Waschküche am Lindenstrand" },
      },
      {
        title: "Strandhaus-Lounge",
        text: "Die Lounge im Strandhaus öffnet sich mit drei Balkonen zum See und zum Schafberg — mit Kaffee, Snackautomat und kostenlosem WLAN.",
        image: { src: `${IMG}/activity-d9f8532e52.webp`, alt: "Strandhaus-Lounge mit Seeblick am Camping Lindenstrand" },
      },
      {
        title: "Shop & Pizza-to-go",
        text: "Der Selbstbedienungs-Laden führt frisches Gebäck, regionale Produkte und das beliebte Pizza-to-go; ein Wirtshaus liegt fußläufig am Platz.",
        image: { src: `${IMG}/activity-117cfd7e5c.webp`, alt: "Nahversorger-Shop am Campingplatz Lindenstrand" },
      },
    ],
  },

  kinder: {
    heading: "Hier dürfen Kinder Kinder sein",
    intro:
      "Flacher Einstieg ins Wasser, zwei Spielplätze und ein Spielzimmer für Regentage — am Lindenstrand sind die Kleinen den ganzen Tag draußen.",
    features: [
      {
        title: "Spielplatz & Fußballwiese",
        text: "Großer Spielplatz mit Rutsche und Schaukel, dazu Ballwiesen mit Toren und Badmintonnetz — Platz zum Auspowern direkt am Hof.",
        image: { src: `${IMG}/activity-59846d50a1.webp`, alt: "Kinder beim Fußballspielen am Spielplatz Lindenstrand" },
      },
      {
        title: "Spielzimmer im Strandhaus",
        text: "Wird das Wetter mal nass, warten im Strandhaus ein Spielzimmer für die Kleinsten und gemütliche Ecken zum Bauen und Lesen.",
        image: { src: `${IMG}/activity-7eb829e286.webp`, alt: "Kinderspielzimmer im Strandhaus am Lindenstrand" },
      },
      {
        title: "Eigenes Babybad",
        text: "Im Stadlbad gibt es ein liebevoll gestaltetes Babybad mit Wanne, Wickeltisch und Kindertoilette — alles für die ganz Kleinen.",
        image: { src: `${IMG}/activity-ca824fa442.webp`, alt: "Babybad im Sanitärhaus Stadlbad am Lindenstrand" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Das Salzkammergut vor der Vorzelttür",
    intro:
      "Baden, Paddeln, Radeln, Wandern — und für Regentage ein Erlebnispark in der Nähe: rund um den Wolfgangsee liegt dein Sommerprogramm direkt bereit.",
    items: [
      {
        title: "Baden & SUP",
        text: "Glasklares, türkisgrünes Wasser direkt am Platz — Stand-up-Paddles leihst du an der Rezeption.",
        image: { src: `${IMG}/activity-39799a8c3b.webp`, alt: "Stand-up-Paddling am Wolfgangsee" },
      },
      {
        title: "Mit dem Kajak hinaus",
        text: "Im Einer- oder Zweier-Kajak über den stillen See gleiten — am schönsten früh am Morgen und am Abend.",
        image: { src: `${IMG}/activity-7a24561a17.webp`, alt: "Kajak am Wolfgangsee bei Sonnenuntergang" },
      },
      {
        title: "Radwege ab Platz",
        text: "Direkt vor dem Haus führt ein Radweg entlang; Räder und E-Bikes gibt es an der Rezeption — los geht es ohne Umwege.",
        image: { src: `${IMG}/activity-4c249d0218.webp`, alt: "Radfahren mit Bergpanorama am Wolfgangsee" },
      },
      {
        title: "Wandern & Klettern",
        text: "Wanderwege aller Schwierigkeitsgrade starten direkt am Campingplatz — von gemütlich bis hinauf zu Klettersteigen und Aussichtsgipfeln.",
        image: { src: `${IMG}/activity-b49f6a8caf.webp`, alt: "Wandern hoch über dem Wolfgangsee" },
      },
      {
        title: "Abarena für Kinder",
        text: "Der Erlebnispark Abarena zwischen Berg und See begeistert bei jedem Wetter mit Wasserspielplatz, Riesenrutsche und Indoor-Arena.",
        image: { src: `${IMG}/activity-28dc60163b.webp`, alt: "Wasserspielplatz im Erlebnispark Abarena nahe dem Wolfgangsee" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Wolfgangsee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 Westautobahn bis Mondsee oder Thalgau, dann auf der B158 nach Abersee/St. Gilgen — der Platz liegt in Schwand 19 und ist beschildert.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Ab Salzburg Hauptbahnhof mit dem Postbus Richtung Bad Ischl bis Abersee — die Haltestelle liegt nur wenige Minuten vom Platz.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Salzburg ist rund 45 Autominuten entfernt — von dort weiter über die B158 ans Seeufer.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Lindenstrand",
    headingEmphasis: "Sommer",
    intro: "Vom historischen Bauernhof bis zum Steg im See — ein paar Eindrücke von deinem Sommer am Wolfgangsee.",
    tag: "April bis Oktober",
    moreCount: 24,
    images: [
      { src: `${IMG}/activity-765128f9f8.webp`, alt: "Frisches Gebäck aus dem Shop am Lindenstrand" },
      { src: `${IMG}/activity-57050b4f1f.webp`, alt: "Stellplätze auf der Sommerwiese mit Bergblick" },
      { src: `${IMG}/activity-e93eb920c0.webp`, alt: "Entspannen am Seeufer mit Blick auf den Steg" },
      { src: `${IMG}/activity-1f87832e1a.webp`, alt: "Stellplätze Bei den Linden am Wolfgangsee" },
    ],
  },

  story: {
    kicker: "Familie Leitner",
    heading: "Ein Hof, der noch ein Hof ist",
    intro:
      "Der Lindenstrand ist kein Programm-Campingplatz, sondern ein echter Bauernhof am See — seit Generationen in der Hand der Familie Leitner, die die Wiesen ringsum bis heute selbst bewirtschaftet.",
    chapters: [
      {
        no: "01",
        kicker: "Wurzeln",
        title: "Das alte Bauernhaus",
        text: "Der historische Hof ist das Herz des Platzes — er steht für die Verbundenheit der Familie mit dieser Landschaft und für Beständigkeit über Generationen.",
        image: { src: `${IMG}/activity-fe59294e1c.webp`, alt: "Historisches Bauernhaus am Camping Lindenstrand" },
      },
      {
        no: "02",
        kicker: "Obstgarten",
        title: "Großvaters Bäume",
        text: "Die alten Obstbäume hat noch der Großvater gepflanzt und veredelt — manche tragen Sorten, die es nur hier gibt. In ihrem Schatten stehen heute Zelte und Wohnwagen.",
        image: { src: `${IMG}/activity-667fe899ce.webp`, alt: "Wohnwagen unter alten Obstbäumen im Obstgarten" },
      },
      {
        no: "03",
        kicker: "Persönlich",
        title: "Familie Leitner",
        text: "Geheizt wird ausschließlich mit Holz aus dem eigenen Wald — und an der Rezeption stehst du der Familie selbst gegenüber, die den Platz mit Herz führt.",
        image: { src: `${IMG}/activity-67a0a635e3.webp`, alt: "Familie Leitner am Camping Lindenstrand" },
      },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am See",
    headingEmphasis: "am See",
    intro:
      "Wähle Kategorie, Zeitraum und Personen — Familie Leitner meldet sich persönlich mit deiner Verfügbarkeit am Wolfgangsee.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise ab günstigster Saison — Stellplatz inkl. 2 Erwachsene; jede weitere Person ab € 10, Kinder (4–14) ab € 5,50. Zzgl. Ortstaxe € 3,50 pro Erwachsener/Nacht.",
    highlight: {
      title: "Direkt am Seeufer",
      text: "Elf Plätze der Kategorie „Am Seeufer“ liegen in erster Reihe direkt am Wasser.",
    },
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
    coords: { lat: 47.7398, lng: 13.4027 },
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär & Strandhaus", href: "#camping" },
      ],
    },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Unser Hof", href: "#story" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default lindenstrand;
