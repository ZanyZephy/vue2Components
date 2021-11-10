//车辆主要信息

export const carMain = [
  {
    minWidth: 95,
    headerName: "选择",
    rowDrag: true,
    headerCheckboxSelection: true,
    checkboxSelection: true,
    pinned: "left",
    field: "id",
    editable: false,
    filter: false, //默认可筛选
    floatingFilter: false,
    valueGetter: () => "",
  },
  {
    headerName: "单据状态",
    field: "billState",
    cellEditor: "CellDatePicker",
    cellEditorParams: {
      bind: {
        // "value-format": "yyyy-MM-d",
      },
    },

    editable: true,
  },
  {
    headerName: "渠道",
    children: [
      {
        headerName: "名称⭐",
        field: "channelName",
        cellEditor: "CellCheckBox",
        cellRendererFramework: "CellCheckBoxRender",
      },
    ],
  },
  // {
  //   headerName: "收车渠道",
  //   field: "carSourceName",
  //   cellEditor: "CellDialog",
  //   valueParser: (params) => {
  //     //解析选中的数值
  //     const { name, age } = params.newValue[0];
  //     params.data.outletsId = age;
  //     return name;
  //   },
  //   suppressKeyboardEvent: (params) => {
  //     const { key } = params.event;
  //     if (key === "Backspace") {
  //       params.data.carSourceName = "";
  //       params.data.carSourceId = "";
  //       params.api.refreshCells();
  //       return true;
  //     }
  //   },
  //   cellEditorParams: {
  //     dataKey: "", //
  //     bind: {
  //       // "value-format": "yyyy-MM-d",
  //     },
  //   },
  // },
  // {
  //   headerName: "业务网点",
  //   children: [
  //     {
  //       headerName: "名称⭐",
  //       field: "outletsName",
  //     },
  //   ],
  // },
  // {
  //   headerName: "收车场地",
  //   children: [
  //     {
  //       headerName: "名称⭐",
  //       field: "carAreaName",
  //     },
  //   ],
  // },
  // { headerName: "当前所在车场", field: "currentCarAreaName" },
  // { headerName: "采购员", field: "carHanle.buyer" },
  // { headerName: "车辆ID", field: "carSn" },
  // { headerName: "SAP采购订单号", field: "sapPurchaseOrder" },
  // { headerName: "SAP收货凭证号", field: "sapReceiptVoucherNo" },
  // { headerName: "SAP批次编号", field: "sapBatchNumber" },
  // {
  //   headerName: "车辆",
  //   children: [
  //     { headerName: "车牌号码⭐", field: "carNo" },
  //     { headerName: "当前状态", field: "handleState" },
  //     { headerName: "技术验车日期", field: "carHanle.itVerificationDate" },
  //   ],
  // },
  // {
  //   headerName: "车辆",
  //   children: [
  //     { headerName: "类型⭐", field: "carTypeName" },
  //     { headerName: "KPI类型⭐", field: "kpiName" },
  //     { headerName: "单位性质", field: "companyNature" },
  //     { headerName: "使用性质", field: "useNature" },
  //   ],
  // },
  // { headerName: "定价方式", field: "priceMode" },
  // { headerName: "采购员", field: "buyer" },
  // { headerName: "收车日期⭐", field: "admissionDate" },
  // { headerName: "收车批次", field: "collectCarBatch" },
  // { headerName: "收车备注♦", field: "remarks" },
  // { headerName: "制单人", field: "createUserCode" },
  // { headerName: "制单日期", field: "createTime" },
];

//车辆属性
export const carAttr = [
  { headerName: "车辆ID", field: "carSn" },
  {
    headerName: "车辆",
    children: [{ headerName: "车牌号码⭐", field: "carNo" }],
  },
  {
    headerName: "车牌",
    children: [
      { headerName: "号牌件数", field: "carHanle.cardNumber" },
      { headerName: "号牌底色", field: "carHanle.cardColour" },
    ],
  },
  {
    headerName: "车辆",
    children: [
      { headerName: "号牌种类", field: "carHanle.cardType" },
      { headerName: "品牌⭐", field: "brand" },
      { headerName: "型号⭐", field: "model" },
      { headerName: "颜色", field: "bodyColour" },
      { headerName: "发动机型号⭐", field: "engineModel" },
      { headerName: "发动机号⭐", field: "engineNo" },
      { headerName: "车架号⭐", field: "vin" },
      { headerName: "排量（ml）", field: "carHanle.emissions" },
      { headerName: "行驶里程（km）", field: "carHanle.mileage" },
      { headerName: "车身长度（mm）", field: "carHanle.bodyLength" },
      { headerName: "车身宽度（mm）", field: "carHanle.bodyWidth" },
      { headerName: "车身高度（mm）", field: "carHanle.bodyHeight" },
      { headerName: "总质量（Kg）", field: "totalMass" },
      { headerName: "整备重量（吨）", field: "carHanle.servicingQuality" },
      { headerName: "核定载客", field: "carHanle.verificationCapacity" },
      { headerName: "燃油种类", field: "fuelType" },
      { headerName: "注册日期", field: "registrationDate" },
    ],
  },
];

export const carOwner = [
  { headerName: "车辆ID", field: "carSn" },
  {
    headerName: "车辆",
    children: [{ headerName: "车牌号码⭐", field: "carNo" }],
  },
  {
    headerName: "车主",
    children: [
      { headerName: "姓名", field: "name" },
      { headerName: "身份证号", field: "idCard" },
      { headerName: "电话", field: "phone" },
      { headerName: "地址", field: "address" },
      { headerName: "邮编", field: "carHanle.ownerPostcode" },
      { headerName: "类型", field: "carHanle.ownerType" },
    ],
  },
  {
    headerName: "渠道联系人",
    children: [
      { headerName: "姓名", field: "carHanle.agentName" },
      { headerName: "联系电话", field: "carHanle.agentPhone" },
      { headerName: "身份证号", field: "carHanle.agentIdCard" },
    ],
  },
  { headerName: "快递地址", field: "carHanle.expressAddress" },
];

export const invoicing = [
  { headerName: "车辆ID", field: "carSn" },
  {
    headerName: "车辆",
    children: [{ headerName: "车牌号码⭐", field: "carNo" }],
  },
  {
    headerName: "车辆",
    children: [
      { headerName: "整备重量（吨）", field: "carHanle.servicingQuality" },
    ],
  },
  {
    headerName: "车辆",
    children: [
      { headerName: "过磅重量（吨）", field: "carHanle.weighScale" },
      { headerName: "收购单价（元/吨）", field: "carHanle.purchasePrice" },
      { headerName: "残值款", field: "carHanle.damageMoney" },
    ],
  },
  {
    headerName: "缺件扣费",
    field: "carHanle.lackDeduction",
  },
  {
    headerName: "收款方",
    children: [
      { headerName: "账户名称", field: "carHanle.receivingBankAccountName" },
      { headerName: "银行账号", field: "carHanle.receivingBankAccount" },
      { headerName: "开户银行", field: "carHanle.receivingBankName" },
    ],
  },
  { headerName: "所属区域", field: "carHanle.areRegion" },
  { headerName: "所属街镇", field: "carHanle.areStreet" },
  { headerName: "开票网点名称", field: "invoicingSiteName" },
  { headerName: "发票号码", field: "carHanle.invoiceNo" },
  { headerName: "开票日期", field: "carHanle.invoiceDate" },
  { headerName: "缺件扣费说明", field: "carHanle.lackDeductionRemarks" },
  { headerName: "送车补贴", field: "carHanle.carDeliverySubsidy" },
  { headerName: "车价补贴", field: "carHanle.carPriceSubsidy" },
  { headerName: "业务费", field: "carHanle.businessMoney" },
  { headerName: "提成", field: "carHanle.commission" },
  { headerName: "残值金额开票", field: "carHanle.damageMoneyInvoice" },
  { headerName: "送车补贴开票", field: "carHanle.carDeliverySubsidyInvoice" },
  { headerName: "车价补贴开票", field: "carHanle.carPriceSubsidyInvoice" },
  { headerName: "业务费开票", field: "carHanle.businessMoneyInvoice" },
  { headerName: "残值金额现付", field: "carHanle.damageMoneyActive" },
];

export const carProgress = [
  { headerName: "车辆ID", field: "carSn" },
  {
    headerName: "车辆",
    children: [
      { headerName: "车牌号码⭐", field: "carNo" },
      { headerName: "当前状态", field: "handleState" },
    ],
  },
  { headerName: "拆解批次", field: "carHanle.dismantlingExpectBatch" },
  { headerName: "预拆日期", field: "carHanle.preSplitDate" },
  { headerName: "拆解日期", field: "carHanle.dismantlingDate" },
  { headerName: "验车类型⭐", field: "verificationType" },
  { headerName: "验车日期", field: "carHanle.verificationDate" },
  { headerName: "报废证明日期", field: "carHanle.scrapCertificateDate" },
  {
    headerName: "注销",
    children: [
      { headerName: "批次", field: "carHanle.consultFileBatch" },
      { headerName: "序号", field: "carHanle.consultFileNumber" },
    ],
  },
  { headerName: "回收号", field: "carHanle.recoveryNo" },
  { headerName: "注销证明日期", field: "carHanle.cancellationProveDate" },
  { headerName: "取证日期", field: "carHanle.obtainEvidenceDate" },
  { headerName: "残值支付日期", field: "carHanle.damagePaymentDate" },
  {
    headerName: "送车补贴支付日期",
    field: "carHanle.carDeliverySubsidyPaymentDate",
  },
  {
    headerName: "车价补贴支付日期",
    field: "carHanle.carPriceSubsidyPaymentDate",
  },
  { headerName: "业务费支付日期", field: "carHanle.businessMoneyPaymentDate" },
];
