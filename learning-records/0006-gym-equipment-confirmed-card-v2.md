# Gym equipment confirmed → Program Card v2 + trap-bar removed course-wide

Session 10 (2026-06-30). Chris reported the actual gym kit, closing the long-open "confirm the machines" item.

**Confirmed equipment**
- Machines (Technogym): lat pulldown · leg press · **leg extension/curl**.
- Free weights: barbell + plates · dumbbells **max 30 kg** · kettlebells · benches.
- Cardio: treadmills + bikes.
- **Absent vs. the v1 assumptions:** trap/hex bar, chest-press machine, shoulder-press machine,
  seated cable row, lifting straps.

**Design decisions (Program Card v2)**
- **Hinge: trap-bar deadlift → barbell Romanian deadlift.** No trap bar exists. The barbell RDL is
  scaphoid-safe because the bar *hangs* from straight wrists (pronation ≠ extension; the dangerous
  position is loaded wrist *extension*, not a hanging load). Start 50 kg, 3×6–8. DB/KB RDL (2×30 kg) = fallback.
- **No straps → mixed grip** is the new answer everywhere straps were recommended (L6 ×4, L3 quiz, card §5).
- **Leg curl machine added** to Workout A (2×10–12) — directly fixes the hamstring slot the v1 tally left low (~4–5/wk).
- **Leg press promoted** to the main heavy quad lift (3 sets), since the RDL is more hip/hamstring than quad.
- **DB 30 kg ceiling** → goblet squat moved 6–8 → **8–12 reps** (24 kg start) and, once easy at 30 kg, becomes a
  **DB split squat** (unilateral beats the bilateral load cap). Bench/press/row will cap later → higher reps or single-arm.
- Dropped now-impossible alternates (machine chest/shoulder press, cable row); the dumbbell versions are the plan, not a backup.

**Files touched:** `reference/program-card.html` (both workouts, Start-col note, §5 wrist, §6 rewritten as
"Your gym — and what changed", footer v1→v2). `lessons/0008` (L5: trap-bar lift card → barbell RDL steps, intro,
§1, muted note, §5 wrist, recap, primary video → E3 Rehab RDL). `lessons/0009` (L6: 4 strap refs → mixed grip).
`lessons/0001`, `lessons/0003` (wrist-tool lists), `reference/glossary.html` (hinge "main" lift), `index.html`
(L5 card blurb), `NOTES.md`.

**Wrist-mechanics note for future me:** the rule is *loaded wrist extension is the enemy*. A hanging barbell
(deadlift/RDL/row) keeps the wrist neutral and is fine; pronation, mixed grip, and even axial load through a
roughly neutral wrist (neutral-grip DB press) are all acceptable. Front-rack / low-bar / barbell-bench / overhead
catch force extension → still banned.

**Status:** active. Program Card now v2, locked to the real gym. Still Soon: Phase 4 (L11 stalls, L12 volume).
