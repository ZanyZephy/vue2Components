import EditTableCell from "./EditTableCell.vue";
export default {
  name: undefined,
  functional: true,
  render(h, context) {
    const { data } = context;
    return h(EditTableCell, data);
  },
};
