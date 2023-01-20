import httpRequest from "@/utils/httpRequest";

import baseAxiosTest from "./http/baseAxiosTest";

export default {
  install: (app) => {
    app.config.globalProperties['$http'] = {
      httpRequest,
      baseAxiosTest,

    };
  },
};

