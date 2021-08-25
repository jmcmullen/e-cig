type AgeCheckerFields = {
  firstName: string
  lastName: string
  address: string
  zip: string
  country: string
  state: string
  city: string
}

export const getConfig = (fields: AgeCheckerFields) => {
  return `
    (function(w,d) {
      var config = {
        key: "KemA4KkE2j36C65CiJvwfbuUYbaQQjVy",
        mode: "manual",
        autoload: true,
        notify_on_complete: true,
        data: {
          first_name: "${fields.firstName}",
          last_name: "${fields.lastName}",
          address: "${fields.address}",
          zip: "${fields.zip}",
          country: "${fields.country}",
          state: "${fields.state}",
          city: "${fields.city}",
        },
        onclosed: () => {
          window.location.href="/verify/complete"
        }
      };

      w.AgeCheckerConfig=config;if(config.path&&(w.location.pathname+w.location.search).indexOf(config.path)) return;
      var h=d.getElementsByTagName("head")[0];var a=d.createElement("script");a.src="https://cdn.agechecker.net/static/popup/v1/popup.js";a.crossOrigin="anonymous";
      a.onerror=function(a){w.location.href="https://agechecker.net/loaderror";};h.insertBefore(a,h.firstChild);
    })(window, document);
  `
}
