export interface Location {
  id: number,
  title: string,
  content:string,
  opened: Boolean,
  mask: string,
  towel: string,
  foutain: string,
  locker_room:string,
  schedules: Schedule[]
}

interface Schedule {
  weekdays: string,
  hour: string
}
