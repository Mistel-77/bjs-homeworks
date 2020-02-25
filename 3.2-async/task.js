class AlarmClock {
    constructor(alarmCollection, id) {
        this.alarmCollection = [];
        this.id = null;
    }

    addClock(time, callback, id) {
        if(id == undefined) {
            console.error('Не передан параметр id звонка');
            return;
        }

        if (this.id.indexOf(id) == -1) {
            this.id.push(id);
            this.alarmCollection.push([time, callback]);
        } else {
            console.error('Такой id звонка уже существует');
            return;
        }
    }

    removeClock(id) {
        if (this.id.indexOf(id) == -1) {
            console.error('Такой id звонка не существует');
            return false;
        } else {
            this.id.splise(this.id.indexOf(id), 1);
            this.id.alarmCollection(this.id.indexOf(id), 1);
            return true;
        }
    }

    getCurrentFormattedTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutas = now.getMinutes();
        return `${hours} : ${minutas}`;
    }

    start() {
       function checkClock(time) {
            let now = new Date();
            let hours = now.getHours();
            let minutas = now.getMinutes();
            let nowHM = `${hours} : ${minutas}`;
            return this.clock[0] == nowHM);
       }
    }
}