const $tooltipsGoogle = document.querySelectorAll(".tooltip-google");

$tooltipsGoogle.forEach($tooltipGoogle => {
  const contentTooltip = $tooltipGoogle.getAttribute("data-tooltip");
  const $tooltip = document.createElement("p");

  $tooltip.classList.add("tooltip");
  $tooltip.textContent = contentTooltip;
  $tooltipGoogle.insertBefore($tooltip, null);
});
