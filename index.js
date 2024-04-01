import {  HDate, Location, Zmanim } from '@hebcal/core';
import TimeAgo from 'javascript-time-ago'
import { thisWeeksZmanim } from './function.js';

// English.
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

let yiddishDate = new HDate();


/*function thisWeeksZmanim(HDate ,timeAgo) {
    let arr = []
    let todayDayOfWeek = HDate.getDay();
    let Sunday = HDate.subtract(todayDayOfWeek)
    let dayOfMunt = HDate.getDate() - todayDayOfWeek
    const daysOfWeek = ["גיטנוז" ,"גיטנאָמ","גיטסניד","ךאווטימ", "גיטשרענוד",  "גיטיירפ",  "תבש"];

    for (let i = 0; i < 7; i++) {
        let zmanim = new Zmanim(Location.lookup("New York"), Sunday)
        Sunday = Sunday.add(1)
        let zman = {}
        zman.dayOfWeek = daysOfWeek[i]
        zman.dayOfMunt = dayOfMunt + 'th of ' + yiddishDate.getMonthName()
        dayOfMunt++;
        if (todayDayOfWeek == i) { zman.sofZmanShma = timeAgo.format(zmanim.sofZmanShma()) } else { zman.sofZmanShma = zmanim.sofZmanShma().toLocaleTimeString() }
        if (todayDayOfWeek == i) { zman.sofZmanTfilla = timeAgo.format(zmanim.sofZmanTfilla()) } else { zman.sofZmanTfilla = zmanim.sofZmanTfilla().toLocaleTimeString() }
        arr.push(zman)
    }
    return arr

}*/


let arrOfZmanimOfThisWeek = thisWeeksZmanim(yiddishDate , timeAgo)

console.table(arrOfZmanimOfThisWeek)


