import type { RichLine } from "@/content/rich-text";

export const contactPage = {
  metaTitle: "Kontakt",
  metaDescription:
    "Kontakta Yellow Music United i Uppsala. Telefon, e-post, postadress och kostnadsfritt planeringsmöte.",
  eyebrow: "Kontakt",
  title: [
    { text: "Hör av dig. Vi " },
    { text: "svarar", accent: true },
    { text: "." },
  ] satisfies RichLine,
  lede: "Osäker på vad du ska boka, eller vill du bara fråga? Skriv, ring, eller skicka en förfrågan om ett kostnadsfritt planeringsmöte.",
};

export const bookingPage = {
  metaTitle: "Boka nu",
  metaDescription:
    "Boka ett kostnadsfritt planeringsmöte med Yellow Music United. Formuläret öppnar ett mejl. Ingen bokningsmotor är igång ännu.",
  eyebrow: "Boka nu",
  title: [
    { text: "Nästa steg börjar med ett " },
    { text: "samtal", accent: true },
    { text: "." },
  ] satisfies RichLine,
  lede: "Onlinebokning med tider och kalender är inte igång ännu. Tills dess öppnar formuläret ett mejl till oss, så vi kan återkomma och boka tiden med dig. Du kan också ringa.",
};

export const faqPage = {
  metaTitle: "FAQ",
  metaDescription:
    "Vanliga frågor om Yellow Music United: sånglektioner, priser, studio, utbildning och distribution i Uppsala.",
  eyebrow: "FAQ",
  title: [
    { text: "Frågor vi redan " },
    { text: "vet", accent: true },
    { text: " att du har." },
  ] satisfies RichLine,
  lede: "Svaren bygger på det som står på den nuvarande sajten och det Biim bett oss visa. Där något saknas står det rakt ut.",
  items: [
    {
      q: "Var ligger ni?",
      a: "Postadressen är Östra Ågatan 67, 754 22 Uppsala. Studion Starlight Studios ligger i Fyrislund, och kontor och studio delar lokal. På den nuvarande sajten anges studion till Svederusgatan 3A. En tredje adress, Salabacksgatan, används inte här.",
    },
    {
      q: "Hur bokar jag en sånglektion?",
      a: "Skicka en förfrågan via Boka nu, eller ring 0730 80 52 69. Formuläret öppnar ett mejl. Det finns ingen kalender att boka i på sajten ännu. Vi återkommer och bokar tiden.",
    },
    {
      q: "Är första lektionen verkligen kostnadsfri?",
      a: "Ja, enligt den nuvarande sidan för sånglektioner. Första lektionen är kostnadsfri och du binder dig inte till att fortsätta. Det är ett annat erbjudande än det kostnadsfria planeringsmötet, som är ett samtal om nästa steg.",
    },
    {
      q: "Vad kostar en kurs?",
      a: "Det är inte publicerat. Det finns upplägg om sex och om tolv tillfällen, en timme vardera. Priserna är platshållare tills Biim satt en prislista.",
    },
    {
      q: "Måste jag ha sjungit förut?",
      a: "Nej. Du är välkommen oavsett mål och förkunskaper. Vi arbetar med tonsäkerhet, känsla, rytmik och frihet, och med lagom mycket utmaning.",
    },
    {
      q: "Vad är hälsosam sångteknik hos er?",
      a: "Biim studerade själv tekniken efter problem med stämband och heshet, bland annat genom samtal med vocal coaches i USA och Kanada. Pedagogiken tar hänsyn till hur rösten mår, inte bara till hur det låter just i dag.",
    },
    {
      q: "Finns kursen i musikproduktion för tjejer kvar?",
      a: "Ja. Den ger grunderna i musikproduktion. Ni arbetar med en valfri låt, en cover eller en egen, med målet att kunna påbörja och avsluta en inspelning och göra en lättare mix. Omfattning och pris saknas på sidan.",
    },
    {
      q: "Kan jag gå en kurs i låtskrivning?",
      a: "Ja. Det finns workshop och kurs, individuellt och i grupp. Målet är att starta och färdigställa en låt. Yellow Music kan också hjälpa till att ge ut den digitalt.",
    },
    {
      q: "Tar ni royalties om ni hjälper mig att ge ut musik?",
      a: "Nej. Yellow Music har inga rättigheter i din musik. Din musik är din. Hundra procent av royalties och intäkter ska gå till rätt roll.",
    },
    {
      q: "Kan jag hyra studion?",
      a: "Ja. Starlight Studios hyrs dagtid enligt överenskommelse, för musik och för podcast om du har spelat in förut. Lokalen kan också användas för till exempel möhippa eller födelsedag. Hör av dig för att prata om vad som passar.",
    },
    {
      q: "Vad är community?",
      a: "Ett sammanhang för att förena musik med människor, inte en färdig medlemsprodukt med pris och nivåer. Hur man går med beskrivs inte i detalj ännu. Skriv till oss om du vill vara med.",
    },
    {
      q: "Hur når jag er snabbast?",
      a: "Ring +46 730 80 52 69 eller mejla info@yellowmusicunited.se. För ett planeringsmöte går det bra att använda formuläret under Boka nu eller på kontaktsidan.",
    },
  ],
};
