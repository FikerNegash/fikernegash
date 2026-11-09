// Dark-mode toggle. Loaded in <head> so the stored choice applies before paint.
(function () {
  var KEY = "theme", root = document.documentElement, theme = null;
  try { theme = localStorage.getItem(KEY); } catch (e) {}
  if (theme !== "dark" && theme !== "light") {
    theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function apply(t) {
    root.setAttribute("data-theme", t);
    var b = document.getElementById("theme-toggle");
    if (b) { b.textContent = t === "dark" ? "☀" : "☾"; b.setAttribute("aria-label", "Switch to " + (t === "dark" ? "light" : "dark") + " mode"); }
  }
  apply(theme);
  document.addEventListener("DOMContentLoaded", function () {
    apply(theme);
    var b = document.getElementById("theme-toggle");
    if (!b) return;
    b.addEventListener("click", function () {
      theme = theme === "dark" ? "light" : "dark";
      apply(theme);
      try { localStorage.setItem(KEY, theme); } catch (e) {}
    });
  });
})();
