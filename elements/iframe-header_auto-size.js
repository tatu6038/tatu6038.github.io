const header = document.getElementById("header");
function funcheader()
{
  header.style.width = header.contentWindow.document.body.scrollWidth + "px";
  header.style.height = header.contentWindow.document.body.scrollHeight + "px";
}
