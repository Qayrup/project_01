
/**
 * Does something asynchronously and executes the callback on completion.
 * @timeStr {时间类型字符串} cb - The callback that handles the response.
 * @format   {时间字符串格式如yyyy-MM-DD hh:mm:ss}
 */
function timeStringFormat(timeStr, format) {
    let dateStr = '';
    const dt = new Date(timeStr);
    const yyyy = dt.getFullYear();
    const M = dt.getMonth() + 1;

    const D = dt.getDate();

    const h = dt.getHours();
    const m = dt.getMinutes();
    const s = dt.getSeconds();

    const MM = padZero(M);
    const DD = padZero(D);
    const hh = padZero(h);
    const mm = padZero(m);
    const ss = padZero(s)
    switch (format) {
        case 'yyyy-MM-DD hh:mm:ss':
            dateStr = `${yyyy}-${MM}-${DD} ${hh}:${mm}:${ss}`;
            break;
        case 'yyyy-MM-DD hh:mm':
            dateStr = `${yyyy}-${MM}-${DD} ${hh}:${mm}`; break;
        case 'yyyy-MM-DD':
            dateStr = `${yyyy}-${MM}-${DD} `; break;
        case 'yy-MM-DD hh:mm:ss':
            dateStr = `${yyyy.toString().slice(-2)}-${MM}-${DD} ${hh}:${mm}:${ss} `;
            break;
        default:
            dateStr = `${yyyy}-${M}-${D} ${h}:${m}:${s}`;
            break;
    }
    return dateStr

}
// 补零函数
function padZero(numStr) {
    return numStr > 9 ? numStr : '0' + numStr;
}
module.exports.timeStringFormat = timeStringFormat