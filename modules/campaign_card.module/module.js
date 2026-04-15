document.addEventListener("click", (e) => {
  const card = e.target.closest(".hs-card");
  if (!card) return;

  // 手機點擊切換展開（桌機hover仍有效）
  card.classList.toggle("is-open");
});
