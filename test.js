
HTMLElement.prototype.tweenTranslateXAnimate = 
function (start, end, callback) {
  var duration = 50;
  var t = 0;
  var vv = end - start;
  var Tween = {
    Quad: {
      easeOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      }
    }
  };

  this.timer = setInterval(function () {
    var dis = start + Tween.Quad.easeOut(++t, 0, vv, duration);
    this.style.transform = 'translate3d(' + dis + 'px, 0, 0)';
    if (vv > 0 && parseInt(this.style.transform.slice(12)) >= end) {
      this.style.transform = 'translate3d(' + parseInt(dis) + 'px, 0, 0)';
      clearInterval(this.timer);
      callback && callback();
    }
    if (vv < 0 && parseInt(this.style.transform.slice(12)) <= end) {
      this.style.transform = 'translate3d(' + parseInt(dis) + 'px, 0, 0)';
      clearInterval(this.timer);
      callback && callback();
    }
  }.bind(this), 4);
}
