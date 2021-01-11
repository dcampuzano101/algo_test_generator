const longestPeak = (array) => {
  let i = 1;
  let maxPeak = 0;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];

    if (!isPeak) {
      i++;
      continue;
    }

    let left = i - 2;

    while (left >= 0 && array[left] < array[left + 1]) {
      left--;
    }

    let right = i + 2;
    while (right < array.length && array[right] < array[right - 1]) {
      right++;
    }

    i = right;
    let currentPeak = right - left - 1;
    maxPeak = Math.max(currentPeak, maxPeak);
  }
  return maxPeak;
};
