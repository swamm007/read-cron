import { ExpressionDescriptor } from "./expressionDescriptor";
import { enLocaleLoader } from "./i18n/enLocaleLoader";
debugger
// 初始化本地语言
ExpressionDescriptor.initialize(new enLocaleLoader());
export default ExpressionDescriptor;

let toString = ExpressionDescriptor.toString;
export { toString };
