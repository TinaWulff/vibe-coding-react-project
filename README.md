# Bemærk om styling

Alle komponent- og side-specifikke styles ligger i SCSS-moduler med filendelsen `.module.scss`.
Dette sikrer, at CSS-klasser kun gælder for den komponent, hvor modulet importeres (scoped styling).
Det forhindrer navnekonflikter og gør det nemt at vedligeholde og overskue projektets styles.

# Vite + React + React Router

Dette projekt er sat op med Vite, React og React Router.

## Scripts

- `npm install` – Installerer afhængigheder
- `npm run dev` – Starter udviklingsserveren
- `npm run build` – Bygger projektet til produktion
- `npm run preview` – Viser den byggede app lokalt

## Struktur

- `src/` – Kildemappe med React-komponenter
- `public/` – Offentlige filer

## Routing

Projektet bruger React Router til navigation mellem sider.

---

> Tilpas og udbyg projektet efter behov.
