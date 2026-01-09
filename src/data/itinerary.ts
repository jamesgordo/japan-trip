export const itinerary = {
  monday: {
    id: 'monday',
    label: 'Monday – Shinsekai & Dotonbori',
    city: 'Osaka',
    center: [34.6586, 135.5045],
    pins: [
      { name: 'Shinsekai', lat: 34.6586, lng: 135.5045 },
      { name: 'Tsutenkaku', lat: 34.6523, lng: 135.5061 },
      { name: 'Den Den Town', lat: 34.6604, lng: 135.5064 },
      { name: 'Ebisucho Station', lat: 34.6517, lng: 135.5067 },
      { name: 'Namba Station', lat: 34.6652, lng: 135.5006 },
      { name: 'Dotonbori', lat: 34.6685, lng: 135.5027 },
      { name: 'Hozenji Yokocho', lat: 34.6679, lng: 135.5026 },
    ],
    route: [
      [34.6586, 135.5045],
      [34.6523, 135.5061],
      [34.6604, 135.5064],
      [34.6517, 135.5067],
      [34.6652, 135.5006],
      [34.6685, 135.5027],
      [34.6679, 135.5026],
    ],
    segments: [
      {
        from: [34.6586, 135.5045],
        to: [34.6523, 135.5061],
        mode: 'walk' as const,
        simplified: false,
      },
      {
        from: [34.6523, 135.5061],
        to: [34.6604, 135.5064],
        mode: 'walk' as const,
        simplified: false,
      },
      {
        from: [34.6604, 135.5064],
        to: [34.6517, 135.5067],
        mode: 'walk' as const,
        simplified: false,
      },
      {
        from: [34.6517, 135.5067],
        to: [34.6652, 135.5006],
        mode: 'train' as const,
        simplified: true,
      },
      {
        from: [34.6652, 135.5006],
        to: [34.6685, 135.5027],
        mode: 'walk' as const,
        simplified: false,
      },
      {
        from: [34.6685, 135.5027],
        to: [34.6679, 135.5026],
        mode: 'walk' as const,
        simplified: false,
      },
    ],
  },

  tuesday: {
    id: 'tuesday',
    label: 'Tuesday – Markets & Umeda',
    city: 'Osaka',
    center: [34.6653, 135.507],
    pins: [
      { name: 'Kuromon Ichiba Market', lat: 34.6653, lng: 135.507 },
      { name: 'Animate Osaka Nipponbashi', lat: 34.6616, lng: 135.5058 },
      { name: 'Bandai Gachapon', lat: 34.6619, lng: 135.5056 },
      { name: 'Shinsaibashi', lat: 34.6733, lng: 135.4998 },
      { name: 'Namba Station', lat: 34.6652, lng: 135.5006 },
      { name: 'Umeda Station', lat: 34.7025, lng: 135.4959 },
      { name: 'Umeda Sky Building', lat: 34.7053, lng: 135.4897 },
    ],
    route: [
      [34.6653, 135.507],
      [34.6616, 135.5058],
      [34.6619, 135.5056],
      [34.6733, 135.4998],
      [34.6652, 135.5006],
      [34.7025, 135.4959],
      [34.7053, 135.4897],
    ],
    segments: [
      {
        from: [34.6653, 135.507],
        to: [34.6616, 135.5058],
        mode: 'walk' as const,
        simplified: false,
      },
      {
        from: [34.6616, 135.5058],
        to: [34.6619, 135.5056],
        mode: 'walk' as const,
        simplified: false,
      },
      {
        from: [34.6619, 135.5056],
        to: [34.6733, 135.4998],
        mode: 'walk' as const,
        simplified: false,
      },
      {
        from: [34.6733, 135.4998],
        to: [34.6652, 135.5006],
        mode: 'walk' as const,
        simplified: false,
      },
      {
        from: [34.6652, 135.5006],
        to: [34.7025, 135.4959],
        mode: 'train' as const,
        simplified: true,
      },
      {
        from: [34.7025, 135.4959],
        to: [34.7053, 135.4897],
        mode: 'walk' as const,
        simplified: false,
      },
    ],
  },

  wednesday: {
    id: 'wednesday',
    label: 'Wednesday – Kyoto Day Trip',
    city: 'Kyoto',
    center: [34.967, 135.7703],
    pins: [
      { name: 'Shin-Imamiya Station', lat: 34.6472, lng: 135.5056 },
      { name: 'Osaka Station', lat: 34.7025, lng: 135.4959 },
      { name: 'Kyoto Station', lat: 34.9857, lng: 135.7588 },
      { name: 'Fushimi Inari Taisha', lat: 34.967, lng: 135.7703 },
      { name: 'Gion', lat: 35.0035, lng: 135.7751 },
    ],
    route: [
      [34.6472, 135.5056],
      [34.7025, 135.4959],
      [34.9857, 135.7588],
      [34.967, 135.7703],
      [35.0035, 135.7751],
    ],
    segments: [
      {
        from: [34.6472, 135.5056],
        to: [34.7025, 135.4959],
        mode: 'train' as const,
        simplified: true,
      },
      {
        from: [34.7025, 135.4959],
        to: [34.9857, 135.7588],
        mode: 'train' as const,
        simplified: true,
      },
      {
        from: [34.9857, 135.7588],
        to: [34.967, 135.7703],
        mode: 'walk' as const,
        simplified: true,
      },
      {
        from: [34.967, 135.7703],
        to: [35.0035, 135.7751],
        mode: 'walk' as const,
        simplified: true,
      },
    ],
  },

  thursday: {
    id: 'thursday',
    label: 'Thursday – Tokyo Arrival & Riverside',
    city: 'Tokyo',
    center: [35.6972, 139.784],
    pins: [
      { name: 'APA Hotel Asakusabashi Ekimae', lat: 35.6972, lng: 139.784 },
      { name: 'Sumida River Walk', lat: 35.7036, lng: 139.7901 },
    ],
    route: [
      [35.6972, 139.784],
      [35.7036, 139.7901],
    ],
  },

  friday: {
    id: 'friday',
    label: 'Friday – Asakusa & Skytree',
    city: 'Tokyo',
    center: [35.7148, 139.7967],
    pins: [
      { name: 'Senso-ji Temple', lat: 35.7148, lng: 139.7967 },
      { name: 'Nakamise Street', lat: 35.7139, lng: 139.7963 },
      { name: 'Asakusa Culture Tourist Center', lat: 35.7117, lng: 139.7976 },
      { name: 'Asakusa Station', lat: 35.7106, lng: 139.7966 },
      { name: 'Tokyo Skytree', lat: 35.71, lng: 139.8107 },
    ],
    route: [
      [35.7148, 139.7967],
      [35.7139, 139.7963],
      [35.7117, 139.7976],
      [35.71, 139.8107],
    ],
    segments: [
      {
        from: [35.7148, 139.7967],
        to: [35.7139, 139.7963],
        mode: 'walk' as const,
      },
      {
        from: [35.7139, 139.7963],
        to: [35.7117, 139.7976],
        mode: 'walk' as const,
      },
      {
        from: [35.7117, 139.7976],
        to: [35.7106, 139.7966],
        mode: 'walk' as const,
      },
      {
        from: [35.7106, 139.7966],
        to: [35.71, 139.8107],
        mode: 'subway' as const,
      },
    ],
  },

  saturday: {
    id: 'saturday',
    label: 'Saturday – Kappabashi & Farewell Tokyo',
    city: 'Tokyo',
    center: [35.7079, 139.7886],
    pins: [
      { name: 'Asakusabashi', lat: 35.6972, lng: 139.784 },
      { name: 'Kappabashi Kitchen Street', lat: 35.7079, lng: 139.7886 },
      { name: 'Asakusa Backstreets', lat: 35.711, lng: 139.792 },
    ],
    route: [
      [35.6972, 139.784],
      [35.7079, 139.7886],
      [35.711, 139.792],
    ],
  },
};

export type TransportMode = 'walk' | 'train' | 'subway' | 'bus';

export interface RouteSegment {
  from: [number, number];
  to: [number, number];
  mode: TransportMode;
  simplified?: boolean; // If true, draws direct line instead of following streets
}

export type DayId = keyof typeof itinerary;
export type DayData = (typeof itinerary)[DayId];
