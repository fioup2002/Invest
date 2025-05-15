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
    res.push(addData("00929", "2024-01-18", 0.13));
    res.push(addData("00929", "2024-02-29", 0.13));
    res.push(addData("00878", "2024-02-27", 0.395));
    res.push(addData("00929", "2024-03-19", 0.13));
    res.push(addData("00929", "2024-04-22", 0.2));
    res.push(addData("00929", "2024-05-21", 0.2));
    res.push(addData("00878", "2024-05-17", 0.51));
    res.push(addData("00929", "2024-06-20", 0.2));
    res.push(addData("00934", "2024-07-16", 0.33));
    res.push(addData("00929", "2024-07-17", 0.18));
    res.push(addData("00878", "2024-08-16", 0.55));
    res.push(addData("00934", "2024-08-16", 0.14));
    res.push(addData("00929", "2024-08-20", 0.18));
    res.push(addData("00934", "2024-09-18", 0.142));
    res.push(addData("00929", "2024-09-19", 0.16));
    res.push(addData("00934", "2024-10-17", 0.139));
    res.push(addData("00929", "2024-10-22", 0.14));
    res.push(addData("00934", "2024-11-18", 0.115));
    res.push(addData("00878", "2024-11-18", 0.55));
    res.push(addData("00929", "2024-11-19", 0.11));
    res.push(addData("00934", "2024-12-17", 0.023));
    res.push(addData("00929", "2024-12-18", 0.05));
    res.push(addData("00929", "2025-01-16", 0.05));
    res.push(addData("00934", "2025-01-17", 0.026));
    res.push(addData("00929", "2025-02-18", 0.05));
    res.push(addData("00934", "2025-02-18", 0.026));
    res.push(addData("00878", "2025-03-18", 0.5));
    res.push(addData("00934", "2025-03-18", 0.026));
    res.push(addData("00929", "2025-03-19", 0.05));

    return res;
  },
  createMine() {
    const res = {
      forex: [],
      stock: [],
      fee: [],
    };
    res.forex.push(this.createForex("美金", 3000, 0, 31.899, "2023-08-28", 0.0385, 12));
    res.forex.push(this.createForex("美金", 10000, 0, 32.133, "2024-04-28", 0.06, 1));
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
    res.stock.push(this.createStock("00929", 2, 37313, "2024-01-17"));
    res.stock.push(this.createStock("00929", 2, 41699, "2024-04-01"));
    res.stock.push(this.createStock("00929", 2, 42240, "2024-04-02"));
    res.stock.push(this.createStock("00929", 2, 42119, "2024-04-03"));
    res.stock.push(this.createStock("00929", 2, 42039, "2024-04-08"));
    res.stock.push(this.createStock("00929", 2, 42039, "2024-04-09"));
    res.stock.push(this.createStock("00929", 2, 42420, "2024-04-10"));
    res.stock.push(this.createStock("00929", 2, 42119, "2024-04-11"));
    res.stock.push(this.createStock("00929", 2, 42180, "2024-04-12"));
    res.stock.push(this.createStock("00929", 2, 41939, "2024-04-15"));
    res.stock.push(this.createStock("00929", 2, 40778, "2024-04-16"));
    res.stock.push(this.createStock("00929", 2, 40898, "2024-04-17"));
    res.stock.push(this.createStock("00929", 2, 41078, "2024-04-18"));
    res.stock.push(this.createStock("00929", 2, 39576, "2024-04-22"));
    res.stock.push(this.createStock("00929", 2, 39215, "2024-04-23"));
    res.stock.push(this.createStock("00929", 2, 39536, "2024-04-24"));
    res.stock.push(this.createStock("00929", 2, 39556, "2024-04-25"));
    res.stock.push(this.createStock("00929", 2, 39756, "2024-04-26"));
    res.stock.push(this.createStock("00929", 2, 40077, "2024-04-29"));
    res.stock.push(this.createStock("00929", 2, 40377, "2024-04-30"));
    res.stock.push(this.createStock("00929", 2, 39916, "2024-05-02"));
    res.stock.push(this.createStock("00929", 2, 40697, "2024-05-03"));
    res.stock.push(this.createStock("00929", 2, 40677, "2024-05-06"));
    res.stock.push(this.createStock("00929", 2, 40497, "2024-05-07"));
    res.stock.push(this.createStock("00929", 2, 40677, "2024-05-09"));
    res.stock.push(this.createStock("00929", 2, 40397, "2024-05-10"));
    res.stock.push(this.createStock("00929", 2, 40437, "2024-05-13"));
    res.stock.push(this.createStock("00929", 2, 40357, "2024-05-14"));
    res.stock.push(this.createStock("00929", 2, 40677, "2024-05-15"));
    res.stock.push(this.createStock("00929", 2, 40838, "2024-05-16"));
    res.stock.push(this.createStock("00929", 2, 40677, "2024-05-17"));
    res.stock.push(this.createStock("00929", 2, 40898, "2024-05-20"));
    res.stock.push(this.createStock("00929", 2, 40517, "2024-05-21"));
    res.stock.push(this.createStock("00929", 2, 43021, "2024-06-19"));
    res.stock.push(this.createStock("00929", 2, 36471, "2024-08-05"));
    res.stock.push(this.createStock("00929", 2, 39155, "2024-08-28"));
    res.stock.push(this.createStock("00929", 2, 39536, "2024-09-02"));
    res.stock.push(this.createStock("00929", 2, 38454, "2024-09-04"));
    res.stock.push(this.createStock("00929", 2, 38334, "2024-09-05"));
    res.stock.push(this.createStock("00929", 2, 37573, "2024-10-09"));
    res.stock.push(this.createStock("00929", 2, 37833, "2024-10-11"));
    res.stock.push(this.createStock("00929", 2, 37833, "2024-10-14"));
    res.stock.push(this.createStock("00929", 2, 36652, "2024-11-04"));
    res.stock.push(this.createStock("00929", 2, 36592, "2024-11-06"));
    res.stock.push(this.createStock("00929", 2, 30603, "2025-04-09"));
    res.stock.push(this.createStock("00929", 2, 31665, "2025-04-11"));
    res.stock.push(this.createStock("00929", 2, 33407, "2025-04-16"));
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
    res.stock.push(this.createStock("00929", 1, 18666, "2024-01-15"));
    res.stock.push(this.createStock("00929", 3, 56209, "2024-02-15"));
    res.stock.push(this.createStock("00929", 3, 57081, "2024-02-16"));
    res.stock.push(this.createStock("00929", 2, 38594, "2024-02-20"));
    res.stock.push(this.createStock("00929", 2, 41999, "2024-04-08"));
    res.stock.push(this.createStock("00929", 2, 38314, "2024-09-05"));
    res.stock.push(this.createStock("00929", 2, 36051, "2024-12-12"));
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
    res.push(addData("手續費回補", "2024-02-05", 31));
    res.push(addData("投錢", "2024-02-07", 70000));
    res.push(addData("投錢", "2024-02-20", 3000));
    res.push(addData("獲利", "2024-02-22", 1430));
    res.push(addData("手續費回補", "2024-03-05", 84));
    res.push(addData("投錢", "2024-03-16", 20000));
    res.push(addData("獲利", "2024-03-25", 790));
    res.push(addData("獲利", "2024-03-26", 2470));
    res.push(addData("獲利", "2024-04-16", 2470));
    res.push(addData("獲利", "2024-05-20", 4200));
    res.push(addData("手續費回補", "2024-06-05", 4));
    res.push(addData("獲利", "2024-06-13", 1010));
    res.push(addData("獲利", "2024-06-17", 4200));
    res.push(addData("獲利", "2024-06-21", 90));
    res.push(addData("獲利", "2024-07-16", 4200));
    res.push(addData("獲利", "2024-08-09", 1310));
    res.push(addData("獲利", "2024-08-12", 3780));
    res.push(addData("投錢", "2024-09-05", 10000));
    res.push(addData("獲利", "2024-09-11", 550));
    res.push(addData("獲利", "2024-09-11", 1090));
    res.push(addData("獲利", "2024-09-31", 3780));
    res.push(addData("獲利", "2024-10-07", 21));
    res.push(addData("獲利", "2024-10-15", 558));
    res.push(addData("獲利", "2024-10-16", 3680));
    res.push(addData("獲利", "2024-11-12", 546));
    res.push(addData("獲利", "2024-11-15", 3220));
    res.push(addData("獲利", "2024-12-12", 1540));
    res.push(addData("投錢", "2024-12-12", 10000));
    res.push(addData("獲利", "2024-12-13", 2530));
    res.push(addData("獲利", "2024-12-21", 68));
    res.push(addData("手續費回補", "2025-01-03", 20));
    res.push(addData("獲利", "2024-01-13", 82));
    res.push(addData("獲利", "2025-01-14", 1250));
    res.push(addData("獲利", "2025-02-17", 1250));
    res.push(addData("獲利", "2025-02-20", 94));
    res.push(addData("獲利", "2025-03-17", 990));
    res.push(addData("獲利", "2025-03-17", 1250));
    res.push(addData("獲利", "2025-03-17", 94));
    res.push(addData("獲利", "2025-04-15", 94));
    res.push(addData("獲利", "2025-04-16", 1250));
    res.push(addData("獲利", "2025-05-15", 94));
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
          if (stock.date <= benefit.date && stock.state) {
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
