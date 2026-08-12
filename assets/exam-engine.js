function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

// Draws `count` questions spread evenly across every lesson represented in
// the pool (grouped by step.sourceLesson), instead of pure random sampling.
// Round 0 takes at most one question per lesson, in shuffled lesson order,
// so a short exam can't accidentally skip whole lessons. If count is bigger
// than the number of lessons, later rounds pick a second/third question from
// whichever lessons still have some left, re-shuffling the lesson order each
// round so the "extra" picks don't always land on the same lessons.
function stratifiedSample(pool, count) {
  var buckets = {};
  pool.forEach(function (step) {
    var key = step.sourceLesson || "_";
    if (!buckets[key]) buckets[key] = [];
    buckets[key].push(step);
  });
  Object.keys(buckets).forEach(function (k) { buckets[k] = shuffleArray(buckets[k]); });

  var picked = [];
  var round = 0;
  while (picked.length < count) {
    var keys = shuffleArray(Object.keys(buckets).filter(function (k) { return buckets[k].length > round; }));
    if (keys.length === 0) { break; } // every bucket exhausted, pool smaller than count
    for (var i = 0; i < keys.length && picked.length < count; i++) {
      picked.push(buckets[keys[i]][round]);
    }
    round++;
  }
  return picked;
}

function PSExamInit(config) {
  var count = config.questionCount || 10;
  var picked = stratifiedSample(config.pool, count);

  // Deep-clone each picked step so re-numbering titles never mutates the shared pool array
  // (matters if the exam is retaken without a full page reload).
  picked = picked.map(function (step) {
    var clone = {};
    for (var key in step) { if (Object.prototype.hasOwnProperty.call(step, key)) clone[key] = step[key]; }
    return clone;
  });

  // Answer order should still feel random even though the draw was stratified.
  picked = shuffleArray(picked);

  picked.forEach(function (step, i) {
    step.title = "Question " + (i + 1) + " of " + picked.length;
    step.prefill = "";
    delete step.continuesFromLabel;
  });

  var LESSON = {
    title: config.phaseLabel + " Exam",
    requestLabel: "Exam",
    request: count + " questions, drawn from everything covered across " + config.phaseLabel + " (spread across every lesson, not just a random handful). Answer each one with real PowerShell syntax, exactly like the lessons, just no manager framing this time, this one's a straight check on what stuck.",
    completeMessage: config.completeMessage || ("That's the " + config.phaseLabel + " exam. Retake it any time for a fresh, evenly-spread set of questions, your best score is what gets remembered."),
    isExam: true,
    examId: config.examId,
    passThreshold: config.passThreshold || 0.7,
    nextHref: config.nextHref,
    hubHref: "../index.html",
    steps: picked
  };

  PSLabInit(LESSON);
}
