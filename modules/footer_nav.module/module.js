document.addEventListener("DOMContentLoaded", function() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function(e) {
      e.preventDefault(); // 阻止原本預設的瞬間跳轉
      window.scrollTo({
        top: 0,
        behavior: "smooth" // 平滑捲動效果
      });
    });
  }
});