function convertScoreToGrade(score) {
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  }

  if (score <= 59) {
    return 'F';
  } if (score <= 69) {
    return 'D';
  } if (score <= 79) {
    return 'C';
  } if (score <= 89) {
    return 'B';
  } if (score <= 100) {
    return 'A';
  }
}
