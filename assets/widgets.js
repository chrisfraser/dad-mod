/* ============================================================================
   dad-mod course — shared widget behaviour
   Auto-wires any markup that follows the conventions below. Load with `defer`.
   Pairs with the .quiz / .calc / .checklist styles in assets/styles.css.
   ============================================================================ */
(function () {
  'use strict';

  /* ---- Quizzes ----------------------------------------------------------
     <div class="quiz" data-explain-right="..." data-explain-wrong="...">
       <div class="q-text">Question?</div>
       <div class="q-options">
         <button class="opt" data-correct>Right answer</button>
         <button class="opt">Distractor</button>
       </div>
       <div class="q-feedback"></div>
     </div>
     Per-option override: add data-feedback="..." to a button.
  ------------------------------------------------------------------------- */
  function wireQuiz(quiz) {
    var options = Array.prototype.slice.call(quiz.querySelectorAll('button.opt'));
    var feedback = quiz.querySelector('.q-feedback');
    var answered = false;

    options.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (answered) return;
        answered = true;
        var isRight = btn.hasAttribute('data-correct');

        options.forEach(function (o) {
          o.disabled = true;
          if (o.hasAttribute('data-correct')) o.classList.add('correct');
        });
        if (!isRight) btn.classList.add('wrong');

        if (feedback) {
          var msg = btn.getAttribute('data-feedback');
          if (!msg) {
            msg = isRight
              ? (quiz.getAttribute('data-explain-right') || 'Correct.')
              : (quiz.getAttribute('data-explain-wrong') || 'Not quite — see the highlighted answer.');
          }
          feedback.innerHTML = (isRight ? '✓ ' : '✗ ') + msg;
          feedback.classList.add('show', isRight ? 'right' : 'nope');
        }
      });
    });
  }

  /* ---- Range helper -----------------------------------------------------
     <input type="range" data-output="#myOutput" data-suffix=" kHz">
     Mirrors the live value into the element matched by data-output.
     Lessons add their own 'input' listeners for the real computation.
  ------------------------------------------------------------------------- */
  function wireRange(input) {
    var sel = input.getAttribute('data-output');
    if (!sel) return;
    var out = document.querySelector(sel);
    if (!out) return;
    var suffix = input.getAttribute('data-suffix') || '';
    var sync = function () { out.textContent = input.value + suffix; };
    input.addEventListener('input', sync);
    sync();
  }

  /* ---- Checklist with live "still to buy" tally --------------------------
     <div class="checklist-widget">
       <ul class="checklist">
         <li data-check data-cost="2">27 mm piezo disc</li>
         <li data-check data-cost="6">Shielded cable</li>
       </ul>
       <div class="checklist-bar">
         <span data-checklist-progress></span>
         <span data-checklist-cost></span>
       </div>
     </div>
     Click an item to mark it "got it". Progress shows gathered/total; cost
     shows the sum of items NOT yet checked (what's left to buy).
  ------------------------------------------------------------------------- */
  function wireChecklist(widget) {
    var items = Array.prototype.slice.call(widget.querySelectorAll('[data-check]'));
    var progressEl = widget.querySelector('[data-checklist-progress]');
    var costEl = widget.querySelector('[data-checklist-cost]');

    function fmt(n) { return (Math.round(n * 100) / 100).toString(); }
    function update() {
      var done = 0, remaining = 0, total = items.length;
      items.forEach(function (it) {
        var cost = parseFloat(it.getAttribute('data-cost')) || 0;
        if (it.classList.contains('done')) done++;
        else remaining += cost;
      });
      if (progressEl) progressEl.textContent = done + ' / ' + total + ' gathered';
      if (costEl) costEl.textContent = 'Still to buy: $' + fmt(remaining);
    }

    items.forEach(function (it) {
      it.setAttribute('role', 'button');
      it.setAttribute('tabindex', '0');
      var toggle = function () { it.classList.toggle('done'); update(); };
      it.addEventListener('click', toggle);
      it.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });
    update();
  }

  /* ---- Fault-finder (symptom → cause → fix) ------------------------------
     <div class="faultfinder">
       <div class="ff-q">What's going wrong?</div>
       <ul class="ff-list">
         <li class="ff-item" data-cause="..." data-fix="...">Symptom <span class="ff-tag">Squat</span></li>
       </ul>
       <div class="ff-panel"><div class="ff-cause"></div><div class="ff-fix"></div></div>
     </div>
     Click a symptom → its cause and fix appear in the panel. One active at a time.
  ------------------------------------------------------------------------- */
  function wireFaultFinder(ff) {
    var items = Array.prototype.slice.call(ff.querySelectorAll('.ff-item'));
    var causeEl = ff.querySelector('.ff-cause');
    var fixEl = ff.querySelector('.ff-fix');
    items.forEach(function (it) {
      it.addEventListener('click', function () {
        items.forEach(function (x) { x.classList.remove('active'); });
        it.classList.add('active');
        ff.classList.add('answered');
        if (causeEl) causeEl.innerHTML = '<span class="lab">Likely cause</span>' + (it.getAttribute('data-cause') || '');
        if (fixEl) fixEl.innerHTML = '<span class="lab">Fix</span>' + (it.getAttribute('data-fix') || '');
      });
    });
  }

  /* ---- init -------------------------------------------------------------- */
  function init() {
    document.querySelectorAll('.quiz').forEach(wireQuiz);
    document.querySelectorAll('input[type=range][data-output]').forEach(wireRange);
    document.querySelectorAll('.checklist-widget').forEach(wireChecklist);
    document.querySelectorAll('.faultfinder').forEach(wireFaultFinder);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Expose helpers for lesson-specific scripts that want them. */
  window.DadMod = { wireQuiz: wireQuiz, wireRange: wireRange, wireChecklist: wireChecklist, wireFaultFinder: wireFaultFinder };
})();
