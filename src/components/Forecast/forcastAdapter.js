const forcastAdapter = ({ forecast, product }, index) => {
  const result = { id: index, c1: product };

  // forecast переводим в массив
  const forecastArr = [];

  for (const [key, value] of Object.entries(forecast)) {
    console.log(`${key}: ${value}`);
    forecastArr.push([key, value]);
  }

  // на всякий случай соритируем записи, так как Object.entries не гарантирует, что отдаст в сортированом виде
  console.log(forecastArr);

  forecastArr.sort((a, b) => {
    return a[0] > b[0] ? 1 : -1;
  });

  const indexOfsSet = 2;

  forecastArr.forEach((el, index) => {
    const key = `c${index + indexOfsSet}`;

    result[key] = el[1];
  });

  return result;
};

const f1 = {
  store: "MAGAZ",
  product: "PRODUCTIK1",
  forecast_date: "2023-10-27",
  forecast: {
    "2023-01-01": 4124,
    "2023-02-02": 5245,
    "2023-03-03": 7567,
    "2023-04-04": 41275674,
  },
};

const f2 = {
  store: "MAGAZ2",
  product: "PRODUKTIK2",
  forecast_date: "2023-10-03",
  forecast: {
    "2023-01-01": 1,
    "2023-02-02": 2,
    "2023-03-03": 3,
    "2023-04-04": 4,
  },
};

const testArr = [f1, f2];

// id начинается с 0
console.log(testArr.map(forcastAdapter));
// id начинается с 1
console.log(testArr.map((el, index) => forcastAdapter(el, index + 1)));

// index = 0;
// forcastAdapter(f1, index + 1);
