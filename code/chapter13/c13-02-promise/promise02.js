const testSuccess = Promise.resolve("success");
testSuccess.then((result) => {
  console.log(result);
});

const testFail = Promise.reject("fail");
testFail.then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
});
