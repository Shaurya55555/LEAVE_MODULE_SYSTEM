// Inclusive calendar day count between two dates (yyyy-mm-dd or Date)
export function diffDaysInclusive(start, end) {
const s = new Date(start);
const e = new Date(end);
const one = 24 * 60 * 60 * 1000;
const s0 = new Date(s.getFullYear(), s.getMonth(), s.getDate());
const e0 = new Date(e.getFullYear(), e.getMonth(), e.getDate());
return Math.round((e0 - s0) / one) + 1;
}


export function rangesOverlap(aStart, aEnd, bStart, bEnd) {
return new Date(aStart) <= new Date(bEnd) && new Date(aEnd) >= new Date(bStart);
}