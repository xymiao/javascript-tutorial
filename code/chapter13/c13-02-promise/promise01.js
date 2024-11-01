const testSuccess = new Promise((resolve, reject) => {
  resolve("success");
});
testSuccess.then((result) => {
  console.log(result);
});

const testFail = new Promise((resolve, reject) => {
  reject("fail");
});
testFail.then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
});
