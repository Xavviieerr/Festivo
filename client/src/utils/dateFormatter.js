export function formatDate(datetime) {
  const d = new Date(datetime);
  return d.toISOString().split("T")[0];
}
