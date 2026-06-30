# Working Notes

## Learner profile
- 40yo male, 105 kg, 185 cm, BMI ~30.7. Reasonably fit (active), **new to structured lifting**.
- Estimated FFM ~76–80 kg; sensible goal bodyweight ~86 kg (BMI 25).
- Near-ideal **body-recomposition** candidate (untrained + higher body fat) → fast early progress likely.

## Hard constraints
- **Scaphoid fracture history** → no loaded wrist extension, no flat-palm push-ups.
  Favour: neutral/hammer grips, machine handles, goblet (held by bells), barbell RDL (bar hangs,
  wrists straight), forearm planks. Push-ups only on fists / handles / parallettes.
  Wrist wraps stabilise but do NOT remove the extension demand — choose neutral tools instead.
- 3 days/week, ~45 min/session.

## Gym equipment — CONFIRMED (day one, ~2026-06-30)
- **Machines (Technogym):** lat pulldown · leg press · leg extension/curl.
- **Free weights:** barbell + plates · dumbbells **max 30 kg** · kettlebells · benches.
- **Cardio:** treadmills + bikes (warm-up).
- **NOT present:** trap/hex bar, chest-press machine, shoulder-press machine, seated cable row,
  lifting straps. → hinge = **barbell RDL** (no trap bar); pulls use a **mixed grip** (no straps);
  press/row are the **dumbbell** versions (not machine backups). DB 30 kg cap → goblet goes higher-rep
  then → DB split squat; leg press is the main heavy quad lift. Leg curl added → fixes the v1 hamstring gap.
- Program Card is now **v2**, locked to this list.

## Teaching preferences
- **Be extremely concise** (his global instruction). Sacrifice grammar for concision in chat.
- Wants strict evidence + citations; allergic to hype. Lead with numbers.
- Wants to *understand the why*, not just follow a plan.

## Open items / next sessions
- [x] Confirm exact machines available → done; Program Card v2 locked to the real gym.
- [ ] Teach the main lifts' form (one per session) — start with hinge & squat.
- [ ] Calibrate RIR (how "near failure" actually feels) — needs hands-on.
- [ ] Recommend baseline check-up + bloodwork (glucose/HbA1c, lipids, BP, vit D) — none done yet.
- [ ] Decide nutrition depth he wants (full diet plan vs protein+deficit guardrails only).

## Research notes (for future searches)
- Stronger By Science, Starting Strength, some journals **bot-block** automated fetch (403).
  URLs are real; corroborate via primary studies or accessible mirrors.
- High-trust source stack assembled: Schoenfeld meta-analyses, Morton 2018, ISSN position
  stands, Barbell Medicine (rehab-aware — good given the wrist), r/Fitness wiki, Examine.com.

## Design system (adopted session 2)
- Look-and-feel **ported from the sibling `hydrophone` course** at the user's request — `assets/styles.css`
  + `assets/widgets.js` copied near-verbatim; **ocean-teal palette kept identical** so the courses match
  (same decision the `hydrodynamic-foil` course made). Brand glyph: ◉. Old `style.css`/`quiz.js` deleted.
- HTML template per page: topbar → kicker / lesson-title / lesson-sub / lesson-meta → numbered `h2` sections →
  `.callout` variants (mission / note / key / build / warning) → declarative `.quiz` (one `<div class="quiz">`
  per question, buttons with `data-correct` + per-option `data-feedback`) → `.recap` → `.sourcebox` →
  `.ask-teacher` → `.crosslinks` → references `<ol>` → `.lesson-nav` → `.pagefoot`.
- `index.html` is the course home (hero + phase tracks). Glossary is now a styled `reference/glossary.html`
  with anchor ids the lessons link to; `GLOSSARY.md` stays as the canonical text behind it — **edit the .md
  first, then mirror into glossary.html** to avoid drift.
- Widgets available to reuse: `.quiz`, `.checklist-widget` (tap-to-mark + tally), `input[type=range][data-output]`,
  `.calc`, `details.panel`, `.steps`. Quiz answer options must stay equal-length (no formatting tells).
