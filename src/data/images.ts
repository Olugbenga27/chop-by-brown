const img = (id: string, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const images = {
  hero: img("photo-1533777857889-4be7c70b33f7", 2000),
  story: "https://commons.wikimedia.org/wiki/Special:FilePath/Soup%20(Afang)%20and%20swallow%20(fufu).%20(Nigerian%20cuisine).jpg?width=1200",
  storyFloor: img("photo-1504674900247-0877df9cc836", 900),
  chef: img("photo-1600565193348-f74bd3c7ccdf", 1200),
  services: {
    privateDinner: img("photo-1482049016688-2d3e1b311543"),
    celebrations: img("photo-1556909212-d5b604d0c90d"),
    eventCatering: img("photo-1517248135467-4c7edcad34c4"),
    customMenus: img("photo-1466637574441-749b8f19452f"),
  },
}

export const fallbackImage = "/img-fallback.svg"