import dayjs from "dayjs";

export const getHour = (date: string) => dayjs(date).format("HH:mm");
