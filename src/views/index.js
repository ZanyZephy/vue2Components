//车辆主要信息
export const carMain = [
  { headerName: "单据状态", field: "", pinned: "left" },
  {
    headerName: "渠道",
    children: [{ headerName: "名称⭐", field: "" }],
  },
  { headerName: "收车渠道", field: "" },
  { headerName: "业务网点", children: [{ headerName: "名称⭐", field: "" }] },
  { headerName: "收车场地", children: [{ headerName: "名称⭐", field: "" }] },
  { headerName: "车辆ID", field: "" },
  {
    headerName: "车辆",
    children: [
      { headerName: "车牌号码⭐", field: "" },
      { headerName: "当前状态", field: "" },
    ],
  },
  {
    headerName: "车辆",
    children: [
      { headerName: "类型⭐", field: "" },
      { headerName: "KPI类型⭐", field: "" },
      { headerName: "单位性质", field: "" },
      { headerName: "使用性质", field: "" },
    ],
  },
  { headerName: "定价方式", field: "" },
  { headerName: "采购员", field: "" },
  { headerName: "收车日期⭐", field: "" },
  { headerName: "收车批次", field: "" },
  { headerName: "收车备注♦", field: "" },
  { headerName: "制单人", field: "" },
  { headerName: "制单日期", field: "" },
];

//车辆属性
export const carAttr = [
  { headerName: "车辆ID", field: "" },
  {
    headerName: "车辆",
    children: [{ headerName: "车牌号码⭐", field: "" }],
  },
  {
    headerName: "车牌",
    children: [
      { headerName: "号牌件数", field: "" },
      { headerName: "号牌底色", field: "" },
    ],
  },
  {
    headerName: "车辆",
    children: [
      { headerName: "号牌种类", field: "" },
      { headerName: "品牌⭐", field: "" },
      { headerName: "型号⭐", field: "" },
      { headerName: "颜色", field: "" },
      { headerName: "发动机型号⭐", field: "" },
      { headerName: "发动机号⭐", field: "" },
      { headerName: "车架号⭐", field: "" },
      { headerName: "排量（ml）", field: "" },
      { headerName: "行驶里程（km）", field: "" },
      { headerName: "车身长度（mm）", field: "" },
      { headerName: "车身宽度（mm）", field: "" },
      { headerName: "车身高度（mm）", field: "" },
      { headerName: "总质量（Kg）", field: "" },
      { headerName: "整备重量（吨）", field: "" },
      { headerName: "核定载客", field: "" },
      { headerName: "燃油种类", field: "" },
      { headerName: "注册日期", field: "" },
    ],
  },
];

export const carOwner = [
  { headerName: "车辆ID", field: "" },
  {
    headerName: "车辆",
    children: [{ headerName: "车牌号码⭐", field: "" }],
  },
  {
    headerName: "车主",
    children: [
      { headerName: "姓名", field: "" },
      { headerName: "身份证号", field: "" },
      { headerName: "电话", field: "" },
      { headerName: "地址", field: "" },
      { headerName: "邮编", field: "" },
      { headerName: "类型", field: "" },
    ],
  },
  {
    headerName: "渠道联系人",
    children: [
      { headerName: "姓名", field: "" },
      { headerName: "联系电话", field: "" },
      { headerName: "身份证号", field: "" },
    ],
  },
  { headerName: "快递地址", field: "" },
];

export const invoicing = [
  { headerName: "车辆ID", field: "" },
  {
    headerName: "车辆",
    children: [{ headerName: "车牌号码⭐", field: "" }],
  },
  {
    headerName: "车辆",
    children: [{ headerName: "整备重量（吨）", field: "" }],
  },
  {
    headerName: "车辆",
    children: [
      { headerName: "过磅重量（吨）", field: "" },
      { headerName: "收购单价（元/吨）", field: "" },
      { headerName: "残值款", field: "" },
    ],
  },
  {
    headerName: "缺件扣费",
    field: "",
  },
  {
    headerName: "收款方",
    children: [
      { headerName: "账户名称", field: "" },
      { headerName: "银行账号", field: "" },
      { headerName: "开户银行", field: "" },
    ],
  },
  { headerName: "所属区域", field: "" },
  { headerName: "所属街镇", field: "" },
  { headerName: "开票网点名称", field: "" },
  { headerName: "发票号码", field: "" },
  { headerName: "开票日期", field: "" },
  { headerName: "缺件扣费说明", field: "" },
  { headerName: "送车补贴", field: "" },
  { headerName: "车价补贴", field: "" },
  { headerName: "业务费", field: "" },
  { headerName: "提成", field: "" },
  { headerName: "残值金额开票", field: "" },
  { headerName: "送车补贴开票", field: "" },
  { headerName: "车价补贴开票", field: "" },
  { headerName: "业务费开票", field: "" },
  { headerName: "残值金额现付", field: "" },
];

export const carProgress = [
  { headerName: "车辆ID", field: "" },
  {
    headerName: "车辆",
    children: [
      { headerName: "车牌号码⭐", field: "" },
      { headerName: "当前状态", field: "" },
    ],
  },
  { headerName: "拆解批次", field: "" },
  { headerName: "预拆日期", field: "" },
  { headerName: "拆解日期", field: "" },
  { headerName: "验车类型⭐", field: "" },
  { headerName: "验车日期", field: "" },
  { headerName: "报废证明日期", field: "" },
  {
    headerName: "查档",
    children: [
      { headerName: "批次", field: "" },
      { headerName: "序号", field: "" },
    ],
  },
  { headerName: "回收号", field: "" },
  { headerName: "注销证明日期", field: "" },
  { headerName: "取证日期", field: "" },
  { headerName: "残值支付日期", field: "" },
  { headerName: "送车补贴支付日期", field: "" },
  { headerName: "车价补贴支付日期", field: "" },
  { headerName: "业务费支付日期", field: "" },
];
