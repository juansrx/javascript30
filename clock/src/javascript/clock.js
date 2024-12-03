/**
 * class Clock
 */
 class Clock {
    
    /**
     * 
     */
    #intervalHandler;

    /**
     * 
     * @param {number} units 
     * @param {number} base 
     * @returns number
     */
    #unitsToDegrees(units, base)
    {
        return 90 + (360 * units) / base;
    }

    /**
     * 
     */
    #updateClock()
    {
        const currDate = new Date();
        const secondDegrees = this.#unitsToDegrees(currDate.getSeconds(), 60);
        const minuteDegrees = this.#unitsToDegrees(currDate.getMinutes(), 60);
        const hourDegrees = this.#unitsToDegrees(currDate.getHours() % 12, 12);

        const secondHand = document.querySelector(
            '.clock-body .clock-face .hand-second'
            );
        
        const minuteHand = document.querySelector(
            '.clock-body .clock-face .hand-minute'
            );
        
        const hourHand = document.querySelector(
            '.clock-body .clock-face .hand-hour'
            );
        
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    /**
     * 
     * @returns 
     */
    start()
    {
        if (this.#intervalHandler) {
            console.log('This clock is already running');
            return;
        }

        this.#intervalHandler = setInterval(() => {
            this.#updateClock();
        }, 500);
    }
}