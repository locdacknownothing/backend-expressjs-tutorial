const deleteModal = document.getElementById("delete-course-modal");
const deleteButton = document.getElementById("delete-course");
const deleteHiddenForm = document.forms["delete-hidden-form"];
var courseId = 0;

if (deleteModal) {
  deleteModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    courseId = button.getAttribute("data-bs-id");
  });
}

deleteButton.onclick = () => {
  deleteHiddenForm.action = "/courses/" + courseId + "?_method=DELETE";
  deleteHiddenForm.submit();
};
