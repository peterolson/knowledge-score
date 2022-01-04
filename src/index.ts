const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

export const updateScore = (points: number, previousScore: number = 0, previousTimestamp: Date = new Date()) => {
  if (!(points >= 0 && points <= 1)) {
    throw new Error(`'points' must be in the interval [0,1].`);
  }
  const timeStampDelta = +new Date() - +previousTimestamp;
  const days = timeStampDelta / MILLISECONDS_PER_DAY;
  const multiplier = (points - 0.5) * 2;
  if (multiplier >= 0) {
    const frequencyBonus = Math.max(4 - 2 * days, 1);
    const staticBonus = 0.01;
    const maxIncrease = Math.max(1, previousScore);
    return previousScore + Math.min(staticBonus + days * multiplier * frequencyBonus, maxIncrease);
  }
<<<<<<< HEAD
  let languageData: Record<string, [string, string[]]>;

  languageData = await import(`../words/${languageCode}`);
  const allWords = new Set();
  const byCategory: Record<string, Set<string>> = {};
  const translations: Record<string, string> = {};
  for (const word of Object.keys(languageData)) {
    const data = languageData[word];
    if (!data) continue;
    if (!data[0] || !data[1]) continue;
    translations[word] = data[0];
    for (const category of data[1]) {
      if (!byCategory[category]) byCategory[category] = new Set();
      byCategory[category].add(word);
      allWords.add(word);
    }
  }
  function toWordPair(word: string) {
    return {
      word,
      en: translations[word],
    };
  }
  const out: GameWords = {
    getAllWords: () => [...allWords].map(toWordPair),
    getByCategory: (category) => [...byCategory[category]].map(toWordPair) || [],
  };
  cachedGameWords[languageCode] = out;
  return out;
=======
  if (previousScore <= 0) return 0;
  return Math.floor(previousScore / 4);
>>>>>>> parent of 452adf3... add language data
};
