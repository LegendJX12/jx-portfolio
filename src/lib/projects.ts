import { getCollection } from 'astro:content';

export const categories = {
  coastal: 'Coastal & water',
  health: 'Health tech',
  digital: 'Digital & AI',
  structures: 'Structures',
  academic: 'Academic',
} as const;

export async function getProjects() {
  return (await getCollection('projects')).sort((a, b) => b.data.date.localeCompare(a.data.date));
}

// "2024-08" -> "Aug 2024"
export function formatDate(ym: string) {
  const [y, m] = ym.split('-').map(Number);
  return new Date(y, (m || 1) - 1).toLocaleString('en-GB', { month: 'short', year: 'numeric' });
}
