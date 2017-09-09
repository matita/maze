var RoomUtils = {
    lineV: function (rnd, lines, x, y, height, gapWidth) {
        if (typeof(gapWidth) === 'undefined')
            gapWidth = 1;
        var gapY = Math.floor(rnd() * height);

        if (gapY >= 1) {
            lines.push({
                x0: x,
                y0: y,
                x1: x,
                y1: y + gapY
            });
        }

        if (gapY + gapWidth < height) {
            lines.push({
                x0: x,
                y0: y + gapY + gapWidth,
                x1: x,
                y1: y + height
            });
        }
    },

    lineH: function (rnd, lines, x, y, width, gapWidth) {
        if (typeof(gapWidth) === 'undefined')
            gapWidth = 1;
        var gapX = Math.floor(rnd() * width);

        if (gapX >= gapWidth) {
            lines.push({
                x0: x,
                y0: y,
                x1: x + gapX,
                y1: y
            });
        }

        if (gapX + 1 < width) {
            lines.push({
                x0: x + gapX + gapWidth,
                y0: y,
                x1: x + width,
                y1: y
            });
        }
    },


    splitV: function (rnd, lines, x, y, w, h, level) {
        if (w <= 1)
            return;

        var firstW = 1 + Math.floor(rnd() * (w-1));
        var lineX = x + firstW;
        RoomUtils.lineV(rnd, lines, lineX, y, h);

        RoomUtils.splitRoom(rnd, lines, x, y, firstW, h), level + 1;
        RoomUtils.splitRoom(rnd, lines, lineX, y, w - firstW, h, level + 1);
    },


    splitH: function (rnd, lines, x, y, w, h, level) {
        if (h <= 1)
            return;

        var firstH = 1 + Math.floor(rnd() * (h-1));
        var lineY = y + firstH;
        RoomUtils.lineH(rnd, lines, x, lineY, w);

        RoomUtils.splitRoom(rnd, lines, x, y, w, firstH, level + 1);
        RoomUtils.splitRoom(rnd, lines, x, lineY, w, h - firstH, level + 1);
    },


    splitRoom: function (rnd, lines, x, y, w, h, level) {
        if (w <= 1 || h <= 1)
            return;

        level = level || 0;
        
        var maxArea = rnd() * 20;
        if (w * h <= maxArea)
            return;

        var isHorizontal = w == h ? Math.floor(rnd() * 2) : w > h;
        if (isHorizontal)
            RoomUtils.splitV(rnd, lines, x, y, w, h, level);
        else
            RoomUtils.splitH(rnd, lines, x, y, w, h, level);
    }
};