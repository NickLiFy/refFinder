import { UNSPLASH_ACCESS_KEY } from '../.env';

export const searchUnsplash = async (query, perPage = 5) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    const data = await response.json();
    // Возвращаем массив URL изображений
    return data.results.map(img => img.urls.small);
  } catch (error) {
    console.error("Unsplash API error:", error);
    return [];
  }
};
