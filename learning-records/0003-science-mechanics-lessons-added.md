# Added three science/mechanics lessons (L2–L4) with interactive widgets

Session 3 (2026-06-28). Chris asked for "a few lessons on the science and mechanics around what we are doing,"
with interactive material and nice graphics (he referenced `/design`, which isn't a registered skill here — used
the course's existing bespoke-SVG approach instead, for visual consistency).

**Built (each evidence-researched first via sub-agents, then authored):**
- **L2 · How Muscle Actually Grows** — mechanical tension → mechanotransduction → MPS; the corrected
  three-mechanisms view (damage is not a driver); the Damas time-course. Hero interactive: a draggable
  week-scrubber chart contrasting measured size (mostly edema early) vs real contractile muscle.
- **L3 · Levers, Tension & Your Wrist** — torque = force × moment arm; sticking points; strength curves; ROM /
  load-the-stretch; tempo. Hero interactive: a physically-correct biceps-curl torque simulator (τ = W·L·cosθ,
  F = τ/r) + a neutral-vs-extended wrist load-path toggle (ties the scaphoid constraint to mechanics).
- **L4 · Muscle, the Glucose Sink** — muscle = ~70–80% of insulin-driven glucose disposal; GLUT4's two doors
  (insulin vs insulin-independent contraction); acute vs chronic; HbA1c −0.3–0.4%; myokines (irisin hedged).
  Hero interactive: an animated "two doors" muscle-cell sim (jam the insulin door, contract, watch glucose drain).

**Course changes:** `index.html` re-phased — Phase 1 now the four science lessons (all Ready); the old form
lessons moved to Phase 2 "The Lifts" (L5–L7, Soon); Fuel & Recover → Phase 3 (L8–L9); Keep Progressing → Phase 4
(L10–L11). Glossary gained 9 terms (mechanotransduction, MPS, size principle, moment arm, strength curve, ROM,
GLUT4, insulin sensitivity, myokine) in both `reference/glossary.html` and `GLOSSARY.md`. `RESOURCES.md` gained a
"Mechanism & biomechanics" subsection.

**Decision:** kept `/design` request satisfied via inline SVG + JS widgets in the shared ocean palette (matches
hydrophone/foil), not an external diagram tool — consistency over novelty.

**Status:** active. Phase-1 foundations complete. Next: confirm gym machines → Program Card v2, then Phase-2
form lessons (L5 hinge & squat).
