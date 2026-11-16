# Biims Studio-guide — feedback utkast 2

Öppna `/studio` på webbplatsen och logga in. Välj dokument i vänstermenyn, därefter fliken och fältet nedan. **Publicera** för att ändringen ska synas på sajten. Fliken **Alla fält** finns också. Förhandslänken nedan visar den dolda sidan med publicerat innehåll, inte opublicerade Sanity-utkast.

| Punkt | Var ändrar jag? | Vad händer? |
|---|---|---|
| 1. Bildtexter | Inget fält behövs längre. Bildens **Bildtext för den som inte ser bilden** är fortfarande viktig. | Synliga bildtexter är borttagna överallt. Alt-texten är kvar för tillgänglighet och SEO. |
| 2. Distribution | **Webbplats och kontaktuppgifter → Synlighet → Visa Distribution** | Av som standard. Döljer meny, startsideskort, tjänstelista, sidfotslänkar och bokningsämnet. Sidan ger 404 och tas bort ur sitemap. På återställer befintligt innehåll. |
| 3. Recensioner | **Startsida → Recensioner → Recensioner → Etikett / Rubrik / Ingress (valfri) / Länktext till Trustpilot** | Tom ingress visar ingenting. Rubriken kan innehålla `*betonade ord*`. Själva omdömena redigeras under **Recensioner** i vänstermenyn. |
| 4. Sidfot | **Webbplats och kontaktuppgifter → Sidfot → Om-text / Adressrader / Studiorad** | Skriv adressens rader på separata rader. Dessa fält påverkar bara sidfoten, inte kontaktkort eller sökmotordata. Befintliga publicerade uppgifter bevaras av migreringen. |
| 5. Pedagogik | **Sånglektioner → Vår sångpedagogik → Vår sångpedagogik → Fem styrkor** | Öppna en punkt och ändra **Rubrik**, **Text** eller **Ikon**. Dra punkterna för att ändra ordning. Sektionen ligger på sånglektionssidan, inte startsidan. |
| 6. Också inom sången | **Sånglektioner → Också inom sången → Visa sektionen / Rubrik / Ingress (valfri) / Kort** | Stäng av hela sektionen eller töm bara ingressen. Varje kort har **Namn** och **Text**. |
| 7. Bokningsformulär | **Webbplats och kontaktuppgifter → Bokningsformulär → Formulärets rubrik / Skicka-knappens text / Hjälptext under knappen** | Samma texter används på bokningssidan, andra formulär, desktopmodalen och mobilrutan. Standardrubrik: **Boka ett möte!**. Inledning och ämneslista finns fortfarande under **Planeringsmöte**. |
| 8. Kurskort | **Kurser → välj kurs → Kort på listsidan → Korttext** | Detta är den korta beskrivningen på Utbildning, separat från kursens ingress. Kursnamnet finns under **Alla fält → Namn**. |
| 9. Distribution i menyn | Samma växel som punkt 2. | Gäller både mobil och desktop. Inga menyposter behöver raderas. |
| 10. Community | **Webbplats och kontaktuppgifter → Synlighet → Visa Community** | Låt vara av för att hålla sidan dold. Använd förhandslänken nedan för egen granskning. |
| 11. Värdeord | **Principer → välj värdeord → Alla fält → Nummer / Namn / Text** | Nummer 01–04 styr visningsordningen. Rutnätet är 2×2 även på mobil. |
| 12. Studiorubrik | **Om oss → Alla fält → Studio → Rubrik** | Skriv exempelvis `En plats för musik och *kreativitet*.`. Asteriskerna visas inte; ordet blir brunt. |
| 13. Kontaktens studioruta | **Kontakt → Kontaktuppgifter → Studioruta (valfri)** | Lämna tomt för att dölja hela rutan STUDIO. Skriv komplett text om den ska visas igen. |
| 14. Huvudrubrik | **Startsida → Alla fält → Överst → Rubrik** | Texten redigeras här. Storleken är justerad i designen, cirka 12 procent större. |

## Förhandsvisa dolda sidor

Den som sköter webbplatsen sätter en lång slumpmässig **PREVIEW_SECRET** i serverns miljö och startar om/deployar den nya versionen. Hemligheten ska inte ligga i källkod, Studio-fält eller versionshantering.

Öppna någon av följande länkar på samma webbplats (ersätt `HEMLIGHET` med URL-kodad hemlighet):

```text
/api/preview?secret=HEMLIGHET&slug=/community
/api/preview?secret=HEMLIGHET&slug=/tjanster/distribution
```

Länken sätter en cookie och skickar dig vidare till sidan utan hemligheten i adressfältet. Banderollen **Förhandsvisning — ej publik** visas. Klicka **Avsluta förhandsvisning** för att stänga läget. Dolda sidor ger därefter 404 igen. Förhandsläget är noindex och lägger inte till dolda sidor i menyn eller sitemap. Dela inte den hemliga länken.

## Engångsuppdatering av innehåll — för den som sköter sajten

Den 16 november 2026 förhandsgranskades migreringarna mot Sanity men ingen skrivtoken fanns i sessionen. Därför behöver innehållsuppdateringen fortfarande appliceras. Det nya schemat finns i koden och blir tillgängligt när denna version körs.

Med `SANITY_API_TOKEN` satt i processens miljö:

```powershell
npm run sanity:migrate:nov4
npm run sanity:migrate:feedback2
# Granska docs/verification/feedback-2/migration-preview.json.
npm run sanity:migrate:nov4 -- --apply
npm run sanity:migrate:feedback2 -- --apply
```

Feedback-2-migreringen inkluderar också PR #6:s fältuppdateringar. Den kan alltså köras ensam, och båda kommandona är testade för säker omkörning. Befintlig redaktionell text och `_key` bevaras. Den gamla standardingressen om recensionsplatshållare töms; egna ingresser bevaras. Publicerade dokument och befintliga utkast uppdateras separat. Säkerhetskopia skrivs lokalt till ignorerade `.audit-temp/` före ändring; revisionskontroll stoppar samtidig överskrivning.

`npm run sanity:seed` är för ett nytt dataset och skapar bara saknade dokument. Använd migreringen för befintliga dokument. Efter innehållsuppdateringen: uppdatera innehållscachen via befintligt revalideringsflöde eller gör en ny build/deploy. Kontrollera sedan pedagogikpunkterna och kurskorttexterna i Studio och på sajten.
