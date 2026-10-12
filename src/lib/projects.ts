import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';

// Drop a photo named after the project file into src/assets/projects/
// (e.g. seasiders.jpg) and it replaces the scene picture automatically.
const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', { eager: true });

export function coverFor(project: CollectionEntry<'projects'>) {
  const own = Object.entries(photos).find(([path]) => path.split('/').pop()!.replace(/\.\w+$/, '') === project.id);
  return own ? own[1].default : project.data.cover;
}

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
