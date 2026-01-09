export const itinerary = {
  monday: {
    id: "monday",
    label: "Monday – Shinsekai & Tennoji",
    city: "Osaka",
    center: [34.6539, 135.5063],
    pins: [
      { name: "APA Hotel Namba Minami Ebisucho Eki Shinsekai", lat: 34.6539, lng: 135.5063 },
      { name: "Shinsekai", lat: 34.6533, lng: 135.5059 },
      { name: "Tsutenkaku Tower", lat: 34.6525, lng: 135.5061 },
      { name: "Janjan-Yokocho", lat: 34.6528, lng: 135.5050 },
      { name: "Tennoji Park", lat: 34.6513, lng: 135.5100 },
    ],
    route: [
      [34.6539, 135.5063],
      [34.6533, 135.5059],
      [34.6525, 135.5061],
      [34.6528, 135.5050],
      [34.6513, 135.5100],
    ],
  },

  tuesday: {
    id: "tuesday",
    label: "Tuesday – Namba & Dotonbori",
    city: "Osaka",
    center: [34.6687, 135.5012],
    pins: [
      { name: "Namba Station", lat: 34.6687, lng: 135.5012 },
      { name: "Dotonbori Canal", lat: 34.6685, lng: 135.5010 },
      { name: "Hozen-ji Temple", lat: 34.6672, lng: 135.5009 },
      { name: "Shinsaibashi-suji", lat: 34.6721, lng: 135.5015 },
    ],
    route: [
      [34.6687, 135.5012],
      [34.6685, 135.5010],
      [34.6672, 135.5009],
      [34.6721, 135.5015],
    ],
  },

  wednesday: {
    id: "wednesday",
    label: "Wednesday – Umeda Skyline",
    city: "Osaka",
    center: [34.7055, 135.4983],
    pins: [
      { name: "Osaka Station", lat: 34.7025, lng: 135.4959 },
      { name: "Umeda Sky Building", lat: 34.7055, lng: 135.4983 },
    ],
    route: [
      [34.7025, 135.4959],
      [34.7055, 135.4983],
    ],
  },

  thursday: {
    id: "thursday",
    label: "Thursday – Tokyo Arrival & Riverside",
    city: "Tokyo",
    center: [35.6972, 139.7840],
    pins: [
      { name: "APA Hotel Asakusabashi Ekimae", lat: 35.6972, lng: 139.7840 },
      { name: "Sumida River Walk", lat: 35.7036, lng: 139.7901 },
    ],
    route: [
      [35.6972, 139.7840],
      [35.7036, 139.7901],
    ],
  },

  friday: {
    id: "friday",
    label: "Friday – Asakusa & Skytree",
    city: "Tokyo",
    center: [35.7148, 139.7967],
    pins: [
      { name: "Senso-ji Temple", lat: 35.7148, lng: 139.7967 },
      { name: "Nakamise Street", lat: 35.7139, lng: 139.7963 },
      { name: "Asakusa Culture Tourist Center", lat: 35.7117, lng: 139.7976 },
      { name: "Tokyo Skytree", lat: 35.7100, lng: 139.8107 },
    ],
    route: [
      [35.7148, 139.7967],
      [35.7139, 139.7963],
      [35.7117, 139.7976],
      [35.7100, 139.8107],
    ],
  },

  saturday: {
    id: "saturday",
    label: "Saturday – Kappabashi & Farewell Tokyo",
    city: "Tokyo",
    center: [35.7079, 139.7886],
    pins: [
      { name: "Asakusabashi", lat: 35.6972, lng: 139.7840 },
      { name: "Kappabashi Kitchen Street", lat: 35.7079, lng: 139.7886 },
      { name: "Asakusa Backstreets", lat: 35.7110, lng: 139.7920 },
    ],
    route: [
      [35.6972, 139.7840],
      [35.7079, 139.7886],
      [35.7110, 139.7920],
    ],
  },
};
