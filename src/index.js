/* global google */
export default class Client {
  run(name, ...args) {
    return new Promise((resolve, reject) => {
      const func = google.script.run
      .withSuccessHandler(result => {
        resolve(result);
      })
      .withFailureHandler(error => {
        reject(error);
      })[name];
      func.apply(google.script.run, args);
    });
  }
}
