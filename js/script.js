function toggleSidebar() {
  var sidebarDiv = document.getElementById('sidebar');
  var icon = document.getElementById('nav-icon1');
  var align = document.getElementById('align_play');
  sidebarDiv.classList.toggle('active');
  icon.classList.toggle('open');
  align.classList.toggle('add_right_align');
}

var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active_colls');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

function digi() {
  var date = new Date(),
    hour = date.getHours(),
    minute = checkTime(date.getMinutes()),
    ss = checkTime(date.getSeconds());

  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  if (hour > 12) {
    hour = hour - 12;
    if (hour == 12) {
      hour = checkTime(hour);
      document.getElementById('tt').innerHTML =
        hour + ':' + minute + ':' + ss + ' AM';
    } else {
      hour = checkTime(hour);
      document.getElementById('tt').innerHTML =
        hour + ':' + minute + ':' + ss + ' PM';
    }
  } else {
    document.getElementById('tt').innerHTML =
      hour + ':' + minute + ':' + ss + ' AM';
  }
  var time = setTimeout(digi, 1000);
}
