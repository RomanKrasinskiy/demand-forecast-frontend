// Хардкод даты, вместо того, что забирается с API
export const chartRows = [
  { id: 1, c1: 'Булочка'},
  { id: 2, c1: 'Булочка с маком'},
  { id: 3, c1: 'Булочка с повидлом'},
  { id: 4, c1: 'Булочка Московская'},
  { id: 5, c1: 'Булочка с изюмом'},
  { id: 6, c1: 'Булочка Свердловская'},
  { id: 7, c1: 'Булочка со сгущенкой'},
  { id: 8, c1: 'Булочка с творогом'},
  { id: 9, c1: 'Слойка с ветчиной'},
  { id: 10, c1: 'Слойка с сыром'},
  { id: 11, c1: 'Слойка с джемом'},
  { id: 12, c1: 'Хачапури'},
  { id: 13, c1: 'Беляш'},
  { id: 14, c1: 'Чебурек'},
  { id: 15, c1: 'Брокколи'},
];

export const chartColumns = [
  { field: 'c1', headerName: 'Товар', width: '100%', headerClassName: 'header'},
];

export const data = {
  labels: ['2023-10-01', '2023-10-02', '2023-10-03', '2023-10-04', '2023-10-05', '2023-10-06', '2023-10-07', '2023-10-08', '2023-10-09', '2023-10-10', '2023-10-11', '2023-10-12', '2023-10-13', '2023-10-14'],
  datasets: [
    {
      label: 'Булочка с маком',
      data: [ 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7 ],
      backgroundColor: 'black',
      borderColor: 'black',
      pointBorderColor: '#003C96',
    },
    {
      label: 'Чебурек',
      data: [ 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3 ],
      backgroundColor: '#FFB900',
      borderColor: '#FFB900',
      pointBorderColor: '#003C96',
    },
    {
      label: 'Слойка с ветчиной',
      data: [ 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6 ],
      backgroundColor: '#D17CCB',
      borderColor: '#D17CCB',
      pointBorderColor: '#003C96',
    },
    {
      label: 'Бородинский хлеб',
      data: [ 9, 3, 9, 9, 3, 7, 5, 1, 0, 5, 8, 2, 0, 9 ],
      backgroundColor: 'brown',
      borderColor: 'brown',
      pointBorderColor: '#003C96',
    },
    {
      label: 'Броколли',
      data: [ 7, 4, 9, 4, 4, 5, 9, 2, 3, 0, 7, 8, 1, 6 ],
      backgroundColor: '#007841',
      borderColor: '#007841',
      pointBorderColor: '#003C96',
    }
  ]
}

export const options = {
  plugins: {
    legend: true
  },
  scales: {
    y: {
      min: 0,
      max: 20
    }
  }
}