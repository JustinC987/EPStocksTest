export interface Stock {
  symbol: string;
  company: string;
  close: number;
  lastTradeDate: string;
  lastTradeTime: string;
  change: number;
  percentChange: number;
  volume: number;
  averageDailyVol: number;
  /*
  fi: $scope.data.Chart.Fi,
  instrument: $scope.data.Quotes.instrument,
  chart: $scope.data.Chart,
  chartVisible: false
  */
}
