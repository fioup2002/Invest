const util = {
  init() {
    this.setRem();
    window.addEventListener("resize", this.setRem);
  },
  setRem() {
    const width = window.innerWidth;
    if (width <= 750) {
      document.documentElement.style.fontSize = width / 7.5 + "px";
    } else {
      document.documentElement.style.fontSize = "50px";
    }
  },
  formateDate(timestamp, formate = "YYYY-MM-DD hh:mm:ss") {
    let res = formate;
    const time = new Date(timestamp);
    res = res.replace(/YYYY/g, time.getFullYear());
    res = res.replace(/MM/g, this.numberToString(time.getMonth() + 1));
    res = res.replace(/DD/g, this.numberToString(time.getDate()));
    res = res.replace(/hh/g, this.numberToString(time.getHours()));
    res = res.replace(/mm/g, this.numberToString(time.getMinutes()));
    res = res.replace(/ss/g, this.numberToString(time.getSeconds()));
    return res;
  },
  numberToString(val, digit = 2) {
    let res = "";
    let zero = "";
    for (let i = 0; i < digit; i++) {
      zero += "0";
    }
    res = `${zero}${val.toString()}`;
    res = res.substring(res.length - digit, res.length);
    return res;
  },
  decimalPoint(val, digit = 0) {
    let res = Number(val);
    return Math.round(res * Math.pow(10, digit)) / Math.pow(10, digit);
  },
};
util.init();
