// Unix Epoch - January 1st 1970 00:00:00

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month : ${now.getMonth()}`);
// console.log(`Day; ${now.getDate()}`);
// console.log(`Hour ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);
// console.log(`Milliseconds: ${now.getMilliseconds()}`);

// 1. Create two dates in the past (use string for Date)
// 2. Get timestamps for both
// 3. Figure out which is first and print its time (use toString)

const date1 = new Date('September 30 1970').getTime()
const date2 = new Date('March 29 1997').getTime()

const timestamp1 = new Date(date1)
const timestamp2 = new Date(date2)

if (date1 > date2) {
    console.log(`Date: ${timestamp1.toString()} is recent than Date: ${timestamp2.toString()}`);
} else console.log(`Date: ${timestamp2.toString()} is recent than Date: ${timestamp1.toString()}`);