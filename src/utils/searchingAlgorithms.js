const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const linearSearch = async (array, target, setIsSearching, setIsNumberFound, setCheckedValue, speed) => {
  setIsSearching(true);
  for (const [index, number] of array.entries()) {
    setCheckedValue(index);
    if (target == number) {
      setIsNumberFound(true);
      break;
    }
    await delay(1050 - speed);
  }

  setIsSearching(false);
};
