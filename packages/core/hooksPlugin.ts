import { each, isFunction } from "lodash-es";
import shell from "shelljs";

function hooksPlugin({
  rmFiles = [],
  beforeBuild,
  afterBuild,
}: {
  rmFiles?: string[];
  beforeBuild?: Function;
  afterBuild?: Function;
}) {
  return {
    name: "hooks-plugin",
    buildStart() {
      each(rmFiles, (fName) => shell.rm("-rf", fName));
      isFunction(beforeBuild) && beforeBuild();
    },
    buildEnd(err?: Error) {
      !err && isFunction(afterBuild) && afterBuild();
    },
  };
}

export default hooksPlugin;
