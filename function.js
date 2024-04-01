
import {  HDate, Location, Zmanim ,Sedra} from '@hebcal/core';
let yiddishDate = new HDate();
export function thisWeeksZmanim(HDate ,timeAgo) {
    let arr = []
    let todayDayOfWeek = HDate.getDay();
    let Sunday = HDate.subtract(todayDayOfWeek)
    let dayOfMunt = HDate.getDate() - todayDayOfWeek
    const daysOfWeek = ["גיטנוז" ,"גיטנאָמ","גיטסניד","ךאווטימ", "גיטשרענוד",  "גיטיירפ",  "תבש"];

    for (let i = 0; i < 7; i++) {
        let zmanim = new Zmanim(Location.lookup("New York"), Sunday)
        Sunday = Sunday.add(1)
        let zman = {}
        zman.dayOfWeek = `${new Sedra(5784).lookup( HDate).parsha[0]} ${daysOfWeek[i]} `
        zman.dayOfMonth= dayOfMunt + 'th of ' + yiddishDate.getMonthName()
        dayOfMunt++;
        if (todayDayOfWeek == i) { zman.sofZmanShma = timeAgo.format(zmanim.sofZmanShma()) } else { zman.sofZmanShma = zmanim.sofZmanShma().toLocaleTimeString() }
        if (todayDayOfWeek == i) { zman.sofZmanTfilla = timeAgo.format(zmanim.sofZmanTfilla()) } else { zman.sofZmanTfilla = zmanim.sofZmanTfilla().toLocaleTimeString() }
        arr.push(zman)
    }
    return arr

}

