# Redesign: adopt the Hydrophone course look-and-feel

Session 2 (2026-06-28). Chris asked to **replicate the design scheme and layout of the sibling `hydrophone`
course** across dad-mod. Presentation/structure overhaul, not a [[MISSION.md]] change.

**What changed:**
- New shared design system ported from hydrophone: `assets/styles.css` (ocean-teal palette, serif body + Inter
  sans, topbar, hero, phase tracks, `.callout` variants, `.sourcebox`, `.recap`, `.crosslinks`, `.lesson-nav`,
  declarative `.quiz`, `.checklist-widget`) and `assets/widgets.js` (auto-wires `.quiz`, range helper, checklist).
- `index.html` created as the course home: topbar + hero + three phases (1 Foundations & Form L1–L4,
  2 Fuel & Recover L5–L6, 3 Keep Progressing L7–L8) + a Program Card feature box. L1 Ready, rest Soon.
- `lessons/0001-the-big-rocks.html` rewritten into the new template (numbered h2 sections, the six "levers" as
  compact cards, five declarative one-question quizzes with equal-length options, recap, sourcebox, references).
- `reference/program-card.html` rebuilt in the new template (workout cards, callouts, interactive equipment
  checklist via `.checklist-widget`).
- `reference/glossary.html` created from `GLOSSARY.md` with anchor ids the lessons link to (volume, frequency,
  rir, rpe, double-progression, recomposition, hinge, neutral-grip, +10 more). `GLOSSARY.md` kept as canonical.
- Deleted the old `assets/style.css` and `assets/quiz.js` (superseded).

**Decision:** kept the hydrophone ocean palette **identical** rather than giving fitness a distinct accent — the
courses are siblings and "use this" was the explicit ask (same call the foil course made). Brand glyph ◉.

**Validated:** all HTML link to the shared CSS/JS; all internal page links and all 7 referenced glossary anchors
resolve; `node -c assets/widgets.js` passes.

**Status:** active. Next teaching priority unchanged: confirm the gym's machines → Program Card v2, then L2
(hinge & squat technique).
