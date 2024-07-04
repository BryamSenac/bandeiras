export class ScrollableHeader {
    constructor(id) {
        this.scrollHeader = document.getElementById(id);
        this.isDown = false;
        this.startX = 0;
        this.scrollLeft = 0;

        this.initEvents();
    }

    initEvents() {
        this.scrollHeader.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.scrollHeader.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        this.scrollHeader.addEventListener('mouseup', this.onMouseLeave.bind(this));
        this.scrollHeader.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    onMouseDown(e) {
        this.isDown = true;
        this.startX = e.pageX - this.scrollHeader.offsetLeft;
        this.scrollLeft = this.scrollHeader.scrollLeft;
        e.preventDefault();
    }

    onMouseLeave() {
        this.isDown = false;
    }
    
    onMouseMove(e) {
        if (!this.isDown) return;
        e.preventDefault();
        const x = e.pageX - this.scrollHeader.offsetLeft;
        const walk = (x - this.startX) * 1;
        this.scrollHeader.scrollLeft = this.scrollLeft - walk;
    }
}
