document.addEventListener("DOMContentLoaded", () => {
  const selectAll = $("#selectAll");
  const selectCourses = $('input[name="courseIds[]"]');
  const applyBtn = $(".btn-apply");
  const containerForm = $('form[name="container-form"]');

  selectAll.change(() => {
    var isCheckedAll = $("#selectAll").prop("checked");
    selectCourses.prop("checked", isCheckedAll);
    reRenderApply();
  });

  selectCourses.change(() => {
    var isCheckedAll =
      selectCourses.length === $('input[name="courseIds[]"]:checked').length;
    selectAll.prop("checked", isCheckedAll);
    reRenderApply();
  });

  const reRenderApply = () => {
    var checkedCount = $('input[name="courseIds[]"]:checked').length;
    checkedCount > 0
      ? applyBtn.attr("disabled", false)
      : applyBtn.attr("disabled", true);
  };
});
