const data = {
  info: null,
  init() {
    this.info = new Object();
    this.info.benefit = this.createBenefit();
    this.info.mine = this.createMine();
    this.info.our = this.createOur();
    this.info.account = this.createAccount();
    this.calculateTotal();
  },
  createBenefit() {
    const addData = (name, date, price) => {
      const res = {
        name,
        date: new Date(date).getTime(),
        price: price * 1000,
        month: name == "00878" ? 3 : 1,
      };
      return res;
    };
    const res = [];
    res.push(addData("00929", "2023-09-19", 0.11));
    res.push(addData("00929", "2023-10-24", 0.11));
    res.push(addData("00878", "2023-11-16", 0.345));
    res.push(addData("00929", "2023-11-21", 0.11));
    res.push(addData("00929", "2023-12-19", 0.11));
    return res;
  },
  createMine() {
    const res = {
      forex: [],
      stock: [],
      fee: [],
    };
    res.forex.push(this.createForex("美金", 3000, 0, 31.899, "2023-08-28", 0.0385, 12));
    res.forex.push(this.createForex("美金", 3000, 0, 31.94, "2023-08-28", 0.045, 6));
    res.stock.push(this.createStock("00929", 2, 34529, "2023-10-31"));
    res.stock.push(this.createStock("00929", 2, 34248, "2023-11-01"));
    res.stock.push(this.createStock("00929", 2, 34709, "2023-11-02"));
    res.stock.push(this.createStock("00929", 2, 35089, "2023-11-03"));
    res.stock.push(this.createStock("00929", 2, 35250, "2023-11-06"));
    res.stock.push(this.createStock("00929", 2, 35310, "2023-11-07"));
    res.stock.push(this.createStock("00929", 2, 35430, "2023-11-08"));
    res.stock.push(this.createStock("00929", 2, 35490, "2023-11-09"));
    res.stock.push(this.createStock("00929", 2, 35250, "2023-11-10"));
    res.stock.push(this.createStock("00929", 2, 35610, "2023-11-13"));
    res.stock.push(this.createStock("00929", 2, 35570, "2023-11-14"));
    res.stock.push(this.createStock("00929", 2, 35951, "2023-11-15"));
    res.stock.push(this.createStock("00929", 2, 35891, "2023-11-16"));
    res.stock.push(this.createStock("00929", 2, 35951, "2023-11-17"));
    res.stock.push(this.createStock("00929", 2, 36071, "2023-11-20"));
    res.stock.push(this.createStock("00929", 1, 18065, "2023-11-21"));
    res.stock.push(this.createStock("00929", 2, 37152, "2023-12-06"));
    res.stock.push(this.createStock("00929", 1, 18836, "2024-01-08"));
    res.stock.push(this.createStock("00929", 2, 37313, "2024-01-11"));
    res.stock.push(this.createStock("00929", 2, 37172, "2024-01-12"));
    res.stock.push(this.createStock("00929", 2, 37333, "2024-01-15"));
    res.fee.push(this.createFee("手續費", "2023-11-10", 48));

    return res;
  },
  createOur() {
    const res = {
      forex: [],
      stock: [],
      fee: [],
    };
    res.forex.push(this.createForex("日幣", 0, 10000, 0.2166, "2023-11-15", 0, 0));
    res.forex.push(this.createForex("日幣", 0, 10000, 0.2166, "2023-11-15", 0, 0));
    res.forex.push(this.createForex("日幣", 0, 20000, 0.2196, "2023-11-15", 0, 0));
    res.stock.push(this.createStock("00878", 1, 20849, "2023-09-15"));
    res.stock.push(this.createStock("00929", 1, 18326, "2023-09-15"));
    res.stock.push(this.createStock("00929", 2, 36632, "2023-09-18"));
    res.stock.push(this.createStock("00929", 2, 34669, "2023-10-04"));
    res.stock.push(this.createStock("00929", 1, 17076, "2023-10-26"));
    res.stock.push(this.createStock("00878", 1, 19716, "2023-10-26"));
    res.stock.push(this.createStock("00929", 2, 0, "2023-10-30", false));
    res.stock.push(this.createStock("00929", 2, 35250, "2023-11-06"));
    res.stock.push(this.createStock("00934", 2, 32346, "2023-11-28"));
    res.stock.push(this.createStock("00934", 2, 32926, "2023-12-06"));
    res.stock.push(this.createStock("00929", 2, 37713, "2024-01-08"));
    res.fee.push(this.createFee("手續費", "2023-10-05", 86));
    res.fee.push(this.createFee("手續費", "2023-11-03", 82));
    return res;
  },
  createAccount() {
    const addData = (...param) => {
      const { 0: name, 1: date, 2: value } = param;
      const res = {
        name,
        date: new Date(date).getTime(),
        value: name == "投錢" ? value * 2 : value,
      };
      return res;
    };
    const res = [];
    res.push(addData("投錢", "2023-09-15", 20000));
    res.push(addData("投錢", "2023-09-20", 19000));
    res.push(addData("投錢", "2023-10-04", 20000));
    res.push(addData("手續費回補", "2023-10-05", 86));
    res.push(addData("獲利", "2023-10-18", 330));
    res.push(addData("投錢", "2023-10-26", 20000));
    res.push(addData("投錢", "2023-10-30", 15000));
    res.push(addData("手續費回補", "2023-11-03", 82));
    res.push(addData("投錢", "2023-11-06", 20000));
    res.push(addData("獲利", "2023-11-17", 550));
    res.push(addData("手續費回補", "2023-12-05", 78));
    res.push(addData("投錢", "2023-12-06", 20000));
    res.push(addData("獲利", "2023-12-12", 690));
    res.push(addData("獲利", "2023-12-15", 880));
    res.push(addData("手續費回補", "2024-01-05", 37));
    res.push(addData("投錢", "2024-01-06", 20000));
    res.push(addData("獲利", "2024-01-15", 880));
    return res;
  },
  createStock(...param) {
    const { 0: name, 1: amount, 2: cost, 3: date, 4: state = true } = param;
    const res = {
      name,
      amount,
      cost,
      date: new Date(date).getTime(),
      total: 0,
      monthRate: 0,
      last: 0,
      state,
    };
    return res;
  },
  createForex(...param) {
    const { 0: name, 1: forex, 2: twd, 3: buyRate, 4: date, 5: yearRate, 6: month } = param;
    const forexCost = forex == 0 ? twd / buyRate : forex;
    const twdCost = forex == 0 ? twd : forex * buyRate;
    const res = {
      name,
      cost: {
        forex: util.decimalPoint(forexCost),
        twd: util.decimalPoint(twdCost),
      },
      date: new Date(date).getTime(),
      totalBenefit: ((forexCost * yearRate) / 12) * month,
      yearRate,
      month,
      exchangeType: name.includes("美金") ? "usd" : "jpy",
    };
    return res;
  },
  createFee(...param) {
    const { 0: name, 1: date, 2: value } = param;
    const res = {
      name,
      date: new Date(date).getTime(),
      value,
    };
    return res;
  },
  calculateTotal() {
    const updateStock = (benefit, type) => {
      const list = this.info[type].stock;
      list.forEach((stock) => {
        if (stock.name == benefit.name) {
          if (stock.date < benefit.date && stock.state) {
            stock.total += benefit.price * stock.amount;
            stock.last = benefit.price * stock.amount;
            stock.monthRate = util.decimalPoint(stock.last / stock.cost / benefit.month, 4);
          }
        }
      });
    };
    this.info.benefit.forEach((benefit) => {
      updateStock(benefit, "mine");
      updateStock(benefit, "our");
    });
  },
};
data.init();
