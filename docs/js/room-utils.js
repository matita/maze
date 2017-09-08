var RoomUtils = {
    lineV: function (rnd, lines, x, y, height) {
        var gapY = Math.floor(rnd() * height);

        if (gapY >= 1) {
            lines.push({
                x0: x,
                y0: y,
                x1: x,
                y1: y + gapY
            });
        }

        if (gapY + 1 < height) {
            lines.push({
                x0: x,
                y0: y + gapY + 1,
                x1: x,
                y1: y + height
            });
        }
    },

    lineH: function (rnd, lines, x, y, width) {
        var gapX = Math.floor(rnd() * width);

        if (gapX >= 1) {
            lines.push({
                x0: x,
                y0: y,
                x1: x + gapX,
                y1: y
            });
        }

        if (gapX + 1 < width) {
            lines.push({
                x0: x + gapX + 1,
                y0: y,
                x1: x + width,
                y1: y
            });
        }
    },


    splitV: function (rnd, lines, x, y, w, h) {
        if (w <= 1)
            return;

        var firstW = 1 + Math.floor(rnd() * (w-1));
        var lineX = x + firstW;
        RoomUtils.lineV(rnd, lines, lineX, y, h);

        RoomUtils.splitRoom(rnd, lines, x, y, firstW, h);
        RoomUtils.splitRoom(rnd, lines, lineX, y, w - firstW, h);
    },


    splitH: function (rnd, lines, x, y, w, h) {
        if (h <= 1)
            return;

        var firstH = 1 + Math.floor(rnd() * (h-1));
        var lineY = y + firstH;
        RoomUtils.lineH(rnd, lines, x, lineY, w);

        RoomUtils.splitRoom(rnd, lines, x, y, w, firstH);
        RoomUtils.splitRoom(rnd, lines, x, lineY, w, h - firstH);
    },


    splitRoom: function (rnd, lines, x, y, w, h) {
        if (w <= 1 || h <= 1)
            return;

        var maxArea = rnd() * 20;
        if (w * h <= maxArea)
            return;

        var isHorizontal = w == h ? Math.floor(rnd() * 2) : w > h;
        if (isHorizontal)
            RoomUtils.splitV(rnd, lines, x, y, w, h);
        else
            RoomUtils.splitH(rnd, lines, x, y, w, h);
    }
};