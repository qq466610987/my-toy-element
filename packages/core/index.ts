import { makeInstaller } from "@toy-element/utils";
import components from "./components";
import "@toy-element/theme/index.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
const installer = makeInstaller(components);
export default installer;

export * from '@toy-element/components'