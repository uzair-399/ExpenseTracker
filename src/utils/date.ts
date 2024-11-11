export function getFormattedDate(date?: Date) {
  if (!date) return "N/A";

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function dateMinusDays(date: Date = new Date(), days: number = 0) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
