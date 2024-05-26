export const formatDate = (date: string) => {
  const dt = new Date(date)

  return dt.toLocaleString('default', { day: '2-digit', month: 'long', year: 'numeric' })
}
