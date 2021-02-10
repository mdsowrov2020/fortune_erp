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

// function clock() {
//   var hours = document.getElementById('hour');
//   var minute = document.getElementById('minute');
//   var seconds = document.getElementById('seconds');
//   var AmPm = document.getElementById('ampms');
//   var h = new Date().getHours();
//   var m = new Date().getMinutes();
//   var s = new Date().getSeconds();

//   hours.innerHTML = h;
//   minute.innerHTML = m;
//   seconds.innerHTML = s;

//   function checkTime(i) {
//     if (i < 10) {
//       i = '0' + i;
//     }
//     return i;
//   }

//   if (hours > 12) {
//     hours = hours - 12;
//     if (hours == 12) {
//       hours = checkTime(hours);
//       document.getElementById('seconds').innerHTML = ' AM';
//     } else {
//       hours = checkTime(hours);
//       document.getElementById('seconds').innerHTML = ' PM';
//     }
//   } else {
//     document.getElementById('seconds').innerHTML = ' AM';
//   }
// }
// var interval = setInterval(clock, 1000);

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
