import httpRequest from "@/utils/httpRequest";

//导入各个模块
import * as baseAxiosTest from "./http/baseAxiosTest";

export default {
  install: (app) => {
    app.config.globalProperties['$http'] = {
      httpRequest,
      baseAxiosTest,

    };
  },
};

