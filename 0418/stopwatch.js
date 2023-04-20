class swComponent extends HTMLElement {
    constructor() {
      super();
      this.startTime = null;
      this.countTime = null;
      this.time = 0;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div class="stopwatch">
          <div class="time">00:00:00.000</div>
          <div class="btn1">
            <button class="btn start">Start</button>
            <button class="btn stop">Stop</button>
            <button class="btn reset">Reset</button>
          </div>
        </div>
      `;
      this.timeDisplay = this.shadowRoot.querySelector('.time');
      
      this.startBtn = this.shadowRoot.querySelector('.start');
      this.stopBtn = this.shadowRoot.querySelector('.stop');
      this.resetBtn = this.shadowRoot.querySelector('.reset');
      
      this.startBtn.addEventListener('click', this.start.bind(this)); 
      this.stopBtn.addEventListener('click', this.stop.bind(this));
      this.resetBtn.addEventListener('click', this.reset.bind(this));
    }
    start() {
      if (!this.startTime) {

        this.startTime = Date.now() - this.time;
      }
      this.countTime = setInterval(() => {
        this.time = Date.now() - this.startTime;
        this.updateTimeDisplay();
      }, 10);
      this.startBtn.disabled = true;
      this.stopBtn.disabled = false;
    }
  
    stop() {
      clearInterval(this.countTime);
      this.countTime = null;
      this.startTime = null;
      this.startBtn.disabled = false;
      this.stopBtn.disabled = true;

    }
  
    reset() {
      this.stop();
      this.time = 0;
      this.updateTimeDisplay();
      this.startBtn.disabled = false;
      this.stopBtn.disabled = false;
    }

    updateTimeDisplay() {
        const hours = Math.floor(this.time / (1000*60*60)).toString().padStart(2,'0');
        const minutes = Math.floor(this.time / (1000*60)).toString().padStart(2, '0');
        const seconds = Math.floor((this.time % (1000*60)) / 1000).toString().padStart(2, '0');
        const milliseconds = (this.time % 1000).toString().padStart(3, '0');
        this.timeDisplay.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
}
customElements.define('stopwatch-component', swComponent);
