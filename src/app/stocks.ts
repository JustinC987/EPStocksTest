export interface Stock {
  symbol: string;
  companyName: string;
  close: number;
  latestPrice: number;
  latestTime: string;
  previousClose: number;
  change: number;
  changePercent: number;
  avgTotalVolume: number;
  marketCap: number;
  peRatio: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
}
