var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://www.jquery-az.com/javascript/alert/dist/sweetalert.css';
var script = document.createElement('script');
script.src = "//www.jquery-az.com/javascript/alert/dist/sweetalert-dev.js";
head.appendChild(link);
document.body.appendChild(script);

function bypass() (
window.close;
swal("GoGuardian Bypass", "has been successfully executed", "success");
}
