module.exports = function () {
  var time = new Date();
  return (time.getMonth() + 1) + '-' + time.getDate();
}

