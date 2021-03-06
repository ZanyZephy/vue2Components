import {
  Input,
  Select,
  Checkbox,
  InputNumber,
  Switch,
  DatePicker,
  TimePicker,
} from "element-ui";
const componentMap = new Map();
componentMap.set("Input", Input);
componentMap.set("InputNumber", InputNumber);
componentMap.set("Select", Select);
// componentMap.set("ApiSelect", ApiSelect);
// componentMap.set("ApiTreeSelect", ApiTreeSelect);
componentMap.set("Switch", Switch);
componentMap.set("Checkbox", Checkbox);
componentMap.set("DatePicker", DatePicker);
componentMap.set("TimePicker", TimePicker);

export function add(compName, component) {
  componentMap.set(compName, component);
}

export function del(compName) {
  componentMap.delete(compName);
}

export { componentMap };
