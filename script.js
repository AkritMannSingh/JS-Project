function calculateGrade() {
  const marks = parseInt(document.getElementById('marks').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(marks) || marks < 0 || marks > 100) {
      resultDiv.innerHTML = "❌ Please enter valid marks between 0 and 100!";
      resultDiv.style.display = 'block';
      resultDiv.className = 'result';
      return;
  }

  let grade = '';
  let message = '';
  let gradeClass = '';

  if (marks >= 90) {
      grade = 'A+';
      gradeClass = 'A';
      message = '🎉 Outstanding! Excellent performance!';
  } 
  else if (marks >= 80) {
      grade = 'A';
      gradeClass = 'A';
      message = '👍 Very Good! Keep it up!';
  } 
  else if (marks >= 70) {
      grade = 'B';
      gradeClass = 'B';
      message = '✅ Good! You are doing well.';
  } 
  else if (marks >= 60) {
      grade = 'C';
      gradeClass = 'C';
      message = '⚠️ Average. Need to improve.';
  } 
  else if (marks >= 50) {
      grade = 'D';
      gradeClass = 'D';
      message = '📚 Below Average. Focus on studies.';
  } 
  else if (marks >= 35) {
      grade = 'E';
      gradeClass = 'D';
      message = '🚨 Just Passed. Serious improvement needed.';
  } 
  else {
      grade = 'F';
      gradeClass = 'F';
      message = '❌ Failed! Need to work very hard.';
  }
  resultDiv.innerHTML = `
      <h3>📊 Result Analysis</h3>
      <p><strong>Marks Obtained:</strong> ${marks}/100</p>
      <p><strong>Grade:</strong> ${grade}</p>
      <p><strong>Performance:</strong> ${message}</p>
      <p><strong>Remarks:</strong> ${getRemarks(grade)}</p>
  `;
  resultDiv.style.display = 'block';
  resultDiv.className = `result ${gradeClass}`;
}

function getRemarks(grade) {
  if (grade === 'A+') {
      return 'Eligible for Scholarship!';
  } 
  else if (grade === 'A') {
      return 'Great candidate for higher studies.';
  } 
  else if (grade === 'B') {
      return 'Good potential, keep working hard.';
  } 
  else if (grade === 'C') {
      return 'Need regular practice and focus.';
  } 
  else if (grade === 'D') {
      return 'Requires extra classes and attention.';
  } 
  else if (grade === 'E') {
      return 'Immediate remedial classes needed.';
  } 
  else {
      return 'Must repeat the course with special attention.';
  }
}

function resetCalculator() {
  document.getElementById('marks').value = '';
  document.getElementById('result').style.display = 'none';
document.getElementById('marks').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      calculateGrade();
  }
});