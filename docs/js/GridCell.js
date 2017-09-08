function GridCell (gridX, gridY, seed) {
    this.x = gridX * cellSize;
    this.y = gridY * cellSize;
    this.width = cellSize;
    this.height = cellSize;
    
    this.gridX = gridX;
    this.gridY = gridY;
    this.seed = seed;
    this.rnd = SeededRandom(seed).next;

    this.lines;
}

GridCell.prototype.generateMaze = function() {
    var gridW = this.width / unitSize;
    var gridH = this.height / unitSize;

    this.lines = [];
    
    RoomUtils.lineV(this.rnd, this.lines, gridW, 0, gridH);
    RoomUtils.lineH(this.rnd, this.lines, 0, gridH, gridW);

    RoomUtils.splitRoom(this.rnd, this.lines, 0, 0, gridW, gridH);
};

GridCell.prototype.render = function(ctx) {
    if (!this.lines)
        this.generateMaze();

    ctx.strokeStyle = 'rgba(0,0,0,.5)';
    ctx.lineWidth = 2;
    
    for (var i = 0; i < this.lines.length; i++) {
        var line = this.lines[i];
        ctx.beginPath();
        ctx.moveTo(this.x + line.x0 * unitSize - cam.x, this.y + line.y0 * unitSize - cam.y);
        ctx.lineTo(this.x + line.x1 * unitSize - cam.x, this.y + line.y1 * unitSize - cam.y);
        ctx.stroke();
    }
}