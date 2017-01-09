
/**
 * Return backend dns based on the current server of the user.
 *
 * @param location string
 *
 * @return dns string 
 */
function getUrl(location) {
  if (location == "developweb.myelephant.xyz") {
    return 'develop.myelephant.xyz';
  }
  else if (location == "testweb.myelephant.xyz") {
    return 'test.myelephant.xyz';
  }
  else if (location == "myelephant.xyz") {
    return 'service.myelephant.xyz';
  }
  else if (location == "172.20.26.12") {
    return 'service.myelephant.xyz';
  }
}