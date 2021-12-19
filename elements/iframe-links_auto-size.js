const links = document.getElementById("links");
function funclinks()
{
  links.style.width = links.contentWindow.document.body.scrollWidth + "px";
  links.style.height = links.contentWindow.document.body.scrollHeight + "px";
}
