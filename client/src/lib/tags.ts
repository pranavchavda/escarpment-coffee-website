export interface CoffeeAttributes {
  roast?: string;
  processing?: string;
  region?: string;
  elevation?: string;
  notes?: string[];
  varietal?: string[];
  harvest?: string;
  brew?: string;
}

export function parseCoffeeAttributes(tags: string[]): CoffeeAttributes {
  // console.log('Parsing tags:', tags); // Debug log
  const attributes: CoffeeAttributes = {};
  const notes: string[] = [];
  const varietals: string[] = [];

  tags.forEach(tag => {
    const upperTag = tag.toUpperCase();
    
    // Handle key-value tags (e.g., "ROAST-Medium")
    if (upperTag.startsWith('ROAST-')) {
      attributes.roast = tag.substring(6).replace(/-/g, ' ');
    } else if (upperTag.startsWith('PROCESSING-')) {
      attributes.processing = tag.substring(11);
    } else if (upperTag.startsWith('REGION-')) {
      attributes.region = tag.substring(7);
    } else if (upperTag.startsWith('ELEVATION-')) {
      attributes.elevation = tag.substring(10);
    } else if (upperTag.startsWith('HARVESTING-')) {
      attributes.harvest = tag.substring(11);
    } else if (upperTag.startsWith('BREW-')) {
      attributes.brew = tag.substring(5);
    } else if (upperTag.startsWith('NOTES-')) {
      // Handle notes which might be hash-separated (e.g., "NOTES-Apple#Caramel")
      const rawNotes = tag.substring(6);
      const splitNotes = rawNotes.split('#').map(n => n.trim());
      notes.push(...splitNotes);
    } else if (upperTag.startsWith('VARIETAL-')) {
      const rawVarietals = tag.substring(9);
      const splitVarietals = rawVarietals.split('#').map(v => v.trim());
      varietals.push(...splitVarietals);
    } else if (upperTag.startsWith('ORIGIN-')) {
      // Fallback for region if not explicitly set
      if (!attributes.region) {
        attributes.region = tag.substring(7).replace(/-/g, ' ');
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
    'box', 'bts', 'canada', 'featured', '13tier', '35days'
  ];

  const lowerTag = tag.toLowerCase();
  
  // Filter out known internal prefixes
  if (ignoredPrefixes.some(prefix => lowerTag.startsWith(prefix))) return false;
  
  // Filter out attribute tags as they are displayed separately
  const upperTag = tag.toUpperCase();
  if (upperTag.startsWith('ROAST-') || 
      upperTag.startsWith('PROCESSING-') || 
      upperTag.startsWith('REGION-') || 
      upperTag.startsWith('ELEVATION-') || 
      upperTag.startsWith('HARVESTING-') || 
      upperTag.startsWith('BREW-') || 
      upperTag.startsWith('NOTES-') ||
      upperTag.startsWith('VARIETAL-') || 
      upperTag.startsWith('ORIGIN-')) return false;

  return true;
}
