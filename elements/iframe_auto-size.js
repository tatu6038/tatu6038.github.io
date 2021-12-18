const iframe = document.getElementById("iframe");
function funciframe()
{
  iframe.style.width = iframe.contentWindow.document.body.scrollWidth + "px";
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
}
