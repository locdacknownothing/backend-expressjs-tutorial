var courseId = 0;
const restoreButtons = document.getElementsByClassName("restore-course");
const restoreHiddenForm = document.forms["restore-hidden-form"];

Array.from(restoreButtons).forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    courseId = button.getAttribute("data-bs-id");
    restoreHiddenForm.action =
      "/courses/" + courseId + "/restore?_method=PATCH";
    restoreHiddenForm.submit();
  });
});

const deleteModal = document.getElementById("delete-course-modal");
const deleteButton = document.getElementById("delete-course");
const deleteHiddenForm = document.forms["delete-hidden-form"];

if (deleteModal) {
  deleteModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    courseId = button.getAttribute("data-bs-id");
  });
}

deleteButton.onclick = () => {
  deleteHiddenForm.action = "/courses/" + courseId + "/force?_method=DELETE";
  deleteHiddenForm.submit();
};
