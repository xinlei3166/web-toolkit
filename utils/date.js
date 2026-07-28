// 小于10的数据补0
export const suppleZero = (value) => {
    return value < 10 ? '0' + value : value
};

// 格式化日期时间
export const formatDatetime = (time) => {
    const d = new Date(time);
    return `${d.getFullYear()}-${suppleZero((d.getMonth() + 1))}-${suppleZero(d.getDate())} ${suppleZero(d.getHours())}:${suppleZero(d.getMinutes())}:${suppleZero(d.getSeconds())}`;
};

// 格式化日期
export const formatDate = (time) => {
    const d = new Date(time);
    return `${d.getFullYear()}-${suppleZero((d.getMonth() + 1))}-${suppleZero(d.getDate())}`;
};

/** 两次时间的差值换算为小时和分钟 */
export const timeDifferenceToHourAndMinute = (start, end) => {
    let startTimestamp
    let endTimestamp
    if (start instanceof Date) {
        startTimestamp = start.getTime()
    } else {
        start = start.replace(/-/g, '/')
        startTimestamp = new Date(start).getTime()
    }
    if (end instanceof Date) {
        endTimestamp = end.getTime()
    } else {
        end = end.replace(/-/g, '/')
        endTimestamp = new Date(end).getTime()
    }
    const difference = endTimestamp - startTimestamp
    const perHour = 60 * 60 * 1000
    const perMinute = 60 * 1000
    let hour
    let minute
    if (difference <= 0) {
        hour = 0
        minute = 0
    } else {
        hour = Math.floor(difference / perHour)
        minute = Math.floor(difference % perHour / perMinute)
    }
    return { hour: hour, minute: minute }
}

/** 获取一个月有多少天 */
export const getCountDays = (date) => {
    const curDate = date ? new Date(date) : new Date()
    const curMonth = curDate.getMonth()
    curDate.setMonth(curMonth + 1)
    curDate.setDate(0)
    return curDate.getDate()
}

/** 获取本月剩余日期（含今天） */
export const getMonthDays = () => {
    let dates = []
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const count = getCountDays(date)
    for (let i = day; i <= count; i++) {
        const ymd = `${year}-${suppleZero(month)}-${suppleZero(i)}`
        dates.push(ymd)
    }
    return dates
}

// 获取两个日期间的所有日期
export const getTwoDateDays = (start, end) => {
    let dates = []
    const _start = start.replace(/-/g, '/')
    const _end = end.replace(/-/g, '/')
    let startTime = new Date(_start)
    let endTime = new Date(_end)
    while ((endTime.getTime() - startTime.getTime()) >= 0) {
        let year = startTime.getFullYear()
        let month = startTime.getMonth() + 1
        let day = startTime.getDate()
        const ymd = `${year}-${suppleZero(month)}-${suppleZero(day)}`
        dates.push(ymd)
        startTime.setDate(startTime.getDate() + 1)
    }
    return dates
}
