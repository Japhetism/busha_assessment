export const formatNumber = (num: string): string => {
  let parseIntNum = parseInt(num);
  return parseIntNum.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const getWalletIcon = (currency: string): string => {
  const basePath = process.env.PUBLIC_URL + '/images/';
  switch (currency) {
    case "ngn":
      return `${basePath}naira.png`;
    case "eth":
      return `${basePath}eth.png`;
    case "btc":
      return `${basePath}bitcoin.png`;
    case "xlm":
      return `${basePath}stellar.png`;
    case "xrp":
      return `${basePath}ripple.png`;
    case "doge":
      return `${basePath}dogecoin.png`;
    case "trx":
      return `${basePath}tron.png`;
    case "ltc":
      return `${basePath}ltc.png`;
    default:
      return `${basePath}coin.jpeg`;
  }
};


export const getWalletColor = (currency: string): string => {
  switch (currency) {
    case "ngn":
      return "#05A357";
    case "eth":
      return "#627EEA";
    case "btc":
      return "#FF9900";
    case "xlm":
      return "#FFF";
    case "xrp":
      return "#000";
    case "doge":
      return "#FFF";
    case "ltc":
      return "#00AEFF";
    default:
      return "#FFF"
  }
}
