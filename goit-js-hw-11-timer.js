`use strict`;
class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.selector = selector),
      (this.time = targetDate),
      (this.swatch = document.querySelector(this.selector)),
      (this.secs = this.swatch.querySelector('span[data-value="secs"]'));
      (this.min = this.swatch.querySelector('span[data-value="mins"]'));
      (this.hours = this.swatch.querySelector('span[data-value="hours"]'));
      (this.days = this.swatch.querySelector('span[data-value="days"]'));
      // console.log(this.secs);

  }
}
    const timer = {
      start() {
        const targetDate = this.time;
        this.timerId = setInterval(() => {
          const currentTime = Date.now();
          const dataTime = targetDate - currentTime > 0 ? targetDate - currentTime:0;
          // const data = new Date(dataTime);
          // console.log(dataTime);
          // const days = data.getDay();
          const days = Math.floor(dataTime / (1000 * 60 * 60 * 24));
          // console.log(days);
          // const hours = data.getHours();
          const hours = Math.floor((dataTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          // const min = data.getMinutes();
          const min = Math.floor((dataTime % (1000 * 60 * 60)) / (1000 * 60));
          // const secs = data.getSeconds();
          const secs = Math.floor((dataTime % (1000 * 60)) / 1000);
          // console.log(`${hours}: ${min}: ${secs}`);
          // function updateClockFace(){
            this.secs.textContent = secs;
            this.min.textContent = min;
            this.hours.textContent = hours;
            this.days.textContent = days;
            
            // console.log
            if(dataTime <= 0 ){
              // alert("Time out, go home");
              clearInterval(this.timerId);

              alert('Time out, go home')
            }
        }, 1000);

      }
    };



timer.start.apply(new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Thu feb 18 2020 '),
}));
