export interface CoffeeAttributes {
  roast?: string;
  processing?: string;
  region?: string;
  elevation?: string;
  notes?: string[];
  varietal?: string[];
  harvest?: string;
}

export function parseCoffeeAttributes(tags: string[]): CoffeeAttributes {
  const attributes: CoffeeAttributes = {};
  const notes: string[] = [];
  const varietals: string[] = [];

  tags.forEach(tag => {
    // Handle key-value tags (e.g., "ROAST-Medium")
    if (tag.startsWith('ROAST-')) {
      attributes.roast = tag.replace('ROAST-', '').replace(/-/g, ' ');
    } else if (tag.startsWith('PROCESSING-')) {
      attributes.processing = tag.replace('PROCESSING-', '');
    } else if (tag.startsWith('REGION-')) {
      attributes.region = tag.replace('REGION-', '');
    } else if (tag.startsWith('ELEVATION-')) {
      attributes.elevation = tag.replace('ELEVATION-', '');
    } else if (tag.startsWith('HARVESTING-')) {
      attributes.harvest = tag.replace('HARVESTING-', '');
    } else if (tag.startsWith('NOTES-')) {
      // Handle notes which might be hash-separated (e.g., "NOTES-Apple#Caramel")
      const rawNotes = tag.replace('NOTES-', '');
      const splitNotes = rawNotes.split('#').map(n => n.trim());
      notes.push(...splitNotes);
    } else if (tag.startsWith('VARIETAL-')) {
      const rawVarietals = tag.replace('VARIETAL-', '');
      const splitVarietals = rawVarietals.split('#').map(v => v.trim());
      varietals.push(...splitVarietals);
    } else if (tag.startsWith('origin-')) {
      // Fallback for region if not explicitly set
      if (!attributes.region) {
        attributes.region = tag.replace('origin-', '').replace(/-/g, ' ');
        // Capitalize first letter of each word
        attributes.region = attributes.region.replace(/\b\w/g, l => l.toUpperCase());
      }
    }
  });

  if (notes.length > 0) attributes.notes = notes;
  if (varietals.length > 0) attributes.varietal = varietals;

  return attributes;
}

export function shouldDisplayTag(tag: string): boolean {
  const ignoredPrefixes = [
    'bfcm', 'bw', 'cd', 'coffee', 'consumer', 'easter', 'eos', 'escarpment', 
    'espresso', 'fathersday', 'fd', 'free', 'is-us', 'NC_', 'ncd', 'oversell', 
    'prime', 'tg', 'tier', 'under', 'WAR', 'YGroup', '5x', '68box', '75box',
    'box', 'bts', 'canada', 'featured'
  ];

  const lowerTag = tag.toLowerCase();
  
  // Filter out known internal prefixes
  if (ignoredPrefixes.some(prefix => lowerTag.startsWith(prefix))) return false;
  
  // Filter out attribute tags as they are displayed separately
  if (tag.startsWith('ROAST-') || 
      tag.startsWith('PROCESSING-') || 
      tag.startsWith('REGION-') || 
      tag.startsWith('ELEVATION-') || 
      tag.startsWith('HARVESTING-') || 
      tag.startsWith('NOTES-') || 
      tag.startsWith('VARIETAL-') || 
      tag.startsWith('origin-')) return false;

  return true;
}
