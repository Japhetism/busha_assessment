export const formatNumber = (num: string): string => {
  let parseIntNum = parseInt(num);
  return parseIntNum.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const getWalletIcon = (currency: string): string => {
  switch (currency) {
    case "ngn":
      return "/images/naira.png";
    case "eth":
      return "/images/eth.png";
    case "btc":
      return "/images/bitcoin.png";
    case "xlm":
      return "/images/stellar.png";
    case "xrp":
      return "/images/ripple.png";
    case "doge":
      return "/images/dogecoin.png";
    case "trx":
      return "/images/tron.png";
    case "ltc":
      return "/images/ltc.png";
    default:
      return "/images/coin.jpeg";
  }
}

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
