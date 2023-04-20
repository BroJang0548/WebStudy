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
      // console.log(this.shadowRoot.getElementsByClassName('start')); //ㅋ..안되네
      // getElementById만 있나..
      

      //document.getElementById는 shadowDOM 내에서 못찾음
      // bind로 새로운 함수를 생성
      this.startBtn.addEventListener('click', this.start.bind(this)); 
      this.stopBtn.addEventListener('click', this.stop.bind(this));
      this.resetBtn.addEventListener('click', this.reset.bind(this));
    }
    start() {
      if (!this.startTime) {
        // Date.now()가 더 빠름;;
        // getHours 등의 format은 느림..
        this.startTime = Date.now() - this.time;
      }
      this.countTime = setInterval(() => {
        // 실행 타임
        this.time = Date.now() - this.startTime;
        this.updateTimeDisplay();
      }, 10);
      this.startBtn.disabled = true;
      this.stopBtn.disabled = false;
    }
  
    stop() {
      // countTime 종료
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
        // ms
        const hours = Math.floor(this.time / (1000*60*60)).toString().padStart(2,'0');
        const minutes = Math.floor(this.time / (1000*60)).toString().padStart(2, '0');
        const seconds = Math.floor((this.time % (1000*60)) / 1000).toString().padStart(2, '0');
        const milliseconds = (this.time % 1000).toString().padStart(3, '0');
        this.timeDisplay.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
}
// 쳇.. 커스텀 태그는 '-'를 꼭 붙여야되네..
customElements.define('stopwatch-component', swComponent);
