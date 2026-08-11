function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function PSExamInit(config) {
  var count = config.questionCount || 10;
  var shuffled = shuffleArray(config.pool);
  var picked = shuffled.slice(0, Math.min(count, shuffled.length));

  // Deep-clone each picked step so re-numbering titles never mutates the shared pool array
  // (matters if the exam is retaken without a full page reload).
  picked = picked.map(function (step) {
    var clone = {};
    for (var key in step) { if (Object.prototype.hasOwnProperty.call(step, key)) clone[key] = step[key]; }
    return clone;
  });

  picked.forEach(function (step, i) {
    step.title = "Question " + (i + 1) + " of " + picked.length;
    step.prefill = "";
    delete step.continuesFromLabel;
  });

  var LESSON = {
    title: config.phaseLabel + " Exam",
    requestLabel: "Exam",
    request: count + " questions, randomly drawn from everything covered across " + config.phaseLabel + ". Answer each one with real PowerShell syntax, exactly like the lessons, just no manager framing this time, this one's a straight check on what stuck.",
    completeMessage: config.completeMessage || ("That's the " + config.phaseLabel + " exam. Retake it any time for a fresh, randomly drawn set of questions, your best score is what gets remembered."),
    isExam: true,
    examId: config.examId,
    nextHref: config.nextHref,
    hubHref: "../index.html",
    steps: picked
  };

  PSLabInit(LESSON);
}
