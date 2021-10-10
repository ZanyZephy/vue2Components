import { componentMap } from "@/components/Table/src/componentMap";
export const CellComponent = {
  name: undefined,
  functional: true,
  render(h, context) {
    const { props, data } = context;
    // console.log(context);
    const config = {
      component: props.component || "Input",
      rule: true,
    };
    const Comp = componentMap.get(config.component);
    return h(Comp, data);
  },
};
