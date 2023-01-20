import httpRequest from "@/utils/httpRequest";

export default {
  install: (app) => {
    app.config.globalProperties['$http'] = {
      httpRequest,
      
    };
  },
};


