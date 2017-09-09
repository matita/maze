(function() {
    // functions found at https://stackoverflow.com/a/1501725
    function sqr(x) { return x * x }
    function dist2(x0, y0, x1, y1) { return sqr(x0 - x1) + sqr(y0 - y1) }
    function distToSegmentSquared(x, y, x0, y0, x1, y1) {
    var l2 = dist2(x0, y0, x1, y1);
    if (l2 == 0) return dist2(x, y, x0, y0);
    var t = ((x - x0) * (x1 - x0) + (y - y0) * (y1 - y0)) / l2;
    t = Math.max(0, Math.min(1, t));
    return dist2(x, y, x0 + t * (x1 - x0), y0 + t * (y1 - y0));
    }
    function distToSegment(x, y, x0, y0, x1, y1) { return Math.sqrt(distToSegmentSquared(x, y, x0, y0, x1, y1)); }

    window.LinesUtils = {
        minDistanceToPoint: function (line, x, y) {
            return distToSegment(x, y, line.x0, line.y0, line.x1, line.y1);
        }
    }

})();