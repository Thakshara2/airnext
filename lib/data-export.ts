function convertToCSV(data: any[]): string {
  const headers = Object.keys(data[0]);
  const rows = data.map(obj => headers.map(header => obj[header]));
  return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
}

export function exportToCSV(data: any[]) {
  const csvContent = convertToCSV(data);
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'revenue-forecast.csv';
  link.click();
} 