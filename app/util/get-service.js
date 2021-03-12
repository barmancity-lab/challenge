module.exports = async (requestTimeout, configFile, compendiumInstance) => {
  const timeoutOverride = requestTimeout || configFile.timeout;
  const overrideOptions = {
    endpoint: configFile.endpoint,
    timeout: Number(timeoutOverride)
  };
  const service = await compendiumInstance.create(configFile.service_name, overrideOptions);
  return service;
};
