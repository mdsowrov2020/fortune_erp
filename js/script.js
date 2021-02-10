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

// clock

function clock() {
  var hours = document.getElementById('hour');
  var minute = document.getElementById('minute');
  var seconds = document.getElementById('seconds');
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  hours.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);
