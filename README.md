# Kippenlogboek Oale Esch

Dagelijks per koppel invoeren: eieren, voer, daglengte, aantal kippen; wekelijks het gewicht.
Het koppel **Lohmann Brown-Classic** wordt vergeleken met de normen uit de Lohmann Management Guide;
de **Twentse hoenders** met hun eigen gemiddelde van de zeven dagen ervoor.

## Bestanden
- `index.html` — de hele app (geen bouwstap nodig)
- `manifest.webmanifest`, `icon*.png`, `icon.svg`, `sw.js` — om de app op het beginscherm te zetten en zonder bereik te openen
- `vercel.json` — zorgt dat nieuwe versies direct zichtbaar zijn
- `supabase/schema.sql` — database (is al uitgevoerd)

## Online zetten (Vercel)
1. Zet deze bestanden in een GitHub-repository (bijv. `kippenlogboek-oale-esch`), met `index.html` bovenaan.
2. Vercel → **Add New… → Project** → Import de repository → Framework Preset **Other** → **Deploy**.

## Gebruik
- Bekijken kan iedereen met de link. Opslaan vraagt om de toegangscode (begincode `kip2026`; wijzig hem via **Koppels → Toegangscode**).
- Voorbeeldgegevens voor beoordelaars: zet `#voorbeeld` achter het adres, of gebruik de knop **Bekijk voorbeeld**.
- Zonder bereik ingevoerde gegevens worden bewaard en verstuurd zodra er weer verbinding is.
