import getSubjects from '../../../api/subjectsData';
import renderToDOM from '../scripts/helpers/renderToDom';

const selectSubject = (subjectId) => {
  let domString = `<label for="subject_id">Select a Subject</label>
  <select class="form-control" id="subject_id" required>
  <option value="">Select a Subject</option>`;

  getSubjects().then((subjectArray) => {
    subjectArray.forEach((subject) => {
      domString += `
        <option 
          value="${subject.subject_name}" 
            ${subjectId === subject.firebaseKey ? 'selected' : ''}>
            ${subject.category_name}
            </option>`;
    });
    domString += '</select>';

    renderToDOM('#select-subject', domString);
  });
};

export default selectSubject;
