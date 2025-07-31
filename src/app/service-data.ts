export interface ServiceData {
    icon: string;
  title: string;
  description: string;
  points: string[];
}
export const SERVICES_DATA: ServiceData[] = [
  {
    icon: 'home',
    title: 'Residential Construction',
    description: 'Turn your vision into reality with our expert residential construction services.',
    points: [
      'Custom Designs',
      'Premium Quality Materials',
      'On-Time Completion',
      'Unbeatable price with quality',
    ],
  },
  {
    icon: 'apartment',
    title: 'Consulting',
    description: 'Professional construction services for offices, retail spaces, and more.',
    points: [
      'Building Permission (Nirman 2.0)',
      'Structural Consulting',
      'Building Plans as per Vastu',
      'NA/KJP Layouts',
    ],
  },
  {
    icon: 'build',
    title: 'Waterproofing',
    description: 'Enhance and protect your spaces with our professional waterproofing solutions.',
    points: ['Terrace Waterproofing', 'Bathroom Waterproofing'],
  },
  {
    icon: 'design_services',
    title: 'Interior Designing',
    description: 'Elevate your spaces with our innovative and customized interior design solutions.',
    points: ['Architectural drawings', '3D Elevations', '3D Interior Designing'],
  },
];
