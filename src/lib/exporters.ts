export type BrandConcept = {
  id: string;
  name: string;
  style: string;
  description: string;
  palette: string[];
  type: string;
};

export type PaletteDefinition = {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
};

export function generateBrandConcepts(input: {
  businessName: string;
  industry: string;
  description: string;
  audience: string;
  personality: string[];
}) {
  const seed = input.businessName.toLowerCase().replace(/\s+/g, '');
  const basePalette = [
    '#111318',
    '#F8F8F5',
    '#B8F36B',
    '#8A8D96',
    '#C9A66B',
  ];

  return [
    {
      id: `${seed}-concept-1`,
      name: `${input.businessName} Core`,
      style: 'Wordmark + symbol',
      description: `A confident identity for ${input.industry} brands that want a high-trust, modern positioning.`,
      palette: basePalette,
      type: 'Premium',
    },
    {
      id: `${seed}-concept-2`,
      name: `${input.businessName} Pulse`,
      style: 'Abstract emblem',
      description: `Dynamic and memorable, built to stand out among ${input.audience} audiences in digital-first channels.`,
      palette: ['#0F172A', '#8A8D96', '#B8F36B', '#E3F5AF', '#F8F8F5'],
      type: 'Bold',
    },
    {
      id: `${seed}-concept-3`,
      name: `${input.businessName} Frame`,
      style: 'Monogram system',
      description: `A refined luxury direction designed for premium positioning and elevated brand trust.`,
      palette: ['#1B1B1B', '#C29A5A', '#F8F8F5', '#8A8D96', '#B8F36B'],
      type: 'Elegant',
    },
  ] as BrandConcept[];
}

export function generatePalette(kind: string, seed: string) {
  const base = [
    '#111318',
    '#F8F8F5',
    '#B8F36B',
    '#8A8D96',
    '#D7E9C7',
    '#C7A57D',
  ];

  const variants: Record<string, string[]> = {
    complementary: ['#111318', '#F8F8F5', '#B8F36B', '#B3B7D8', '#E9B26D'],
    analogous: ['#111318', '#7E8A75', '#B8F36B', '#D2F38E', '#F8F8F5'],
    monochromatic: ['#111318', '#2A2E35', '#5C636D', '#8A8D96', '#F8F8F5'],
    triadic: ['#111318', '#B8F36B', '#908CFF', '#F8F8F5', '#FFD166'],
    neutral: ['#111318', '#3D4046', '#8A8D96', '#D9D7D3', '#F8F8F5'],
    custom: base,
  };

  return (variants[kind] ?? base).map((hex, index) => ({
    name: `${seed} ${index + 1}`,
    hex,
    rgb: hexToRgb(hex),
    hsl: hexToHsl(hex),
  }));
}

export function hexToRgb(hex: string) {
  const value = hex.replace('#', '');
  const bigint = Number.parseInt(value, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
}

export function hexToHsl(hex: string) {
  const value = hex.replace('#', '');
  const r = Number.parseInt(value.slice(0, 2), 16) / 255;
  const g = Number.parseInt(value.slice(2, 4), 16) / 255;
  const b = Number.parseInt(value.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  const d = max - min;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r:
        h = (g - b) / d % 6;
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }

  return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

export function contrastRatio(background: string, foreground: string) {
  const toRgb = (hex: string) => {
    const value = hex.replace('#', '');
    const num = Number.parseInt(value, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return [r, g, b];
  };

  const lum = (rgb: number[]) => {
    const [r, g, b] = rgb.map((value) => {
      const s = value / 255;
      return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = lum(toRgb(background));
  const l2 = lum(toRgb(foreground));
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
