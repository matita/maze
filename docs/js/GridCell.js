function GridCell (gridX, gridY, seed) {
    this.init(gridX, gridY, seed);
    GridCell.count = (GridCell.count || 0) + 1;
    console.log('GridCell count', GridCell.count);
}

GridCell.prototype.init = function (gridX, gridY, seed) {
    this.x = gridX * cellSize;
    this.y = gridY * cellSize;
    this.width = cellSize;
    this.height = cellSize;
    
    this.gridX = gridX;
    this.gridY = gridY;
    this.seed = seed;
    this.rnd = SeededRandom(seed).next;

    this.lines = null;
    this.addedLines = [];
};

GridCell.prototype.generateMaze = function() {
    if (this.lines) {
        if (!this._createdLines.length)
            return;

        var line = this._createdLines.shift();
        this.lines.push(line);
        return;
    }

    this.lines = [];
    this._createdLines = [];
    var linesList = GridCell.incrementalRender ? this._createdLines : this.lines;

    var gridW = this.width / unitSize;
    var gridH = this.height / unitSize;
    
    RoomUtils.lineV(this.rnd, linesList, gridW, 0, gridH);
    RoomUtils.lineH(this.rnd, linesList, 0, gridH, gridW);

    RoomUtils.splitRoom(this.rnd, linesList, 0, 0, gridW, gridH);
};

GridCell.prototype.render = function(ctx) {
    this.generateMaze();

    ctx.strokeStyle = 'rgba(0,0,0,.5)';
    ctx.lineWidth = 2;
    
    for (var i = 0; i < this.lines.length; i++) {
        var line = this.lines[i];
        var dist = LinesUtils.minDistanceToPoint(line, (cam.centerX - this.x) / unitSize, (cam.centerY - this.y) / unitSize);
        var maxDist = 20;

        if (dist > maxDist)
            continue;

        var alpha = 1 / dist;
        ctx.strokeStyle = 'rgba(0,0,0,' + alpha + ')';
        ctx.beginPath();
        ctx.moveTo(this.x + line.x0 * unitSize - cam.x, this.y + line.y0 * unitSize - cam.y);
        ctx.lineTo(this.x + line.x1 * unitSize - cam.x, this.y + line.y1 * unitSize - cam.y);
        ctx.stroke();
    }
}
