function convertScoreToGradeWithPlusAndMinus(score) {
  if (score < 0 || score > 100) {
    return 'INVALID SCORE';
  } if (score >= 98 && score <= 100) {
    return 'A+';
  } if (score >= 93 && score <= 97) {
    return 'A';
  } if (score >= 90 && score <= 92) {
    return 'A-';
  } if (score >= 88 && score <= 89) {
    return 'B+';
  } if (score >= 83 && score <= 87) {
    return 'B';
  } if (score >= 80 && score <= 82) {
    return 'B-';
  } if (score >= 78 && score <= 79) {
    return 'C+';
  } if (score >= 73 && score <= 77) {
    return 'C';
  } if (score >= 70 && score <= 72) {
    return 'C-';
  } if (score >= 68 && score <= 69) {
    return 'D+';
  } if (score >= 63 && score <= 67) {
    return 'D';
  } else if (score >= 60 && score <= 62) {
    return 'D-';
  } else {
    return 'F';
  }
}
