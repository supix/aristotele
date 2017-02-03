export enum DayOfWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

export function isWorkingDay(d: DayOfWeek): boolean {
    return ((d != DayOfWeek.SUNDAY) && (d != DayOfWeek.SATURDAY));
}
