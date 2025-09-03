export function formatTime(datetime) {
  const d = new Date(datetime);
  return d.toISOString().split("T")[1].slice(0, 5);
}
