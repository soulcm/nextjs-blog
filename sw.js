self.addEventListener('push', async function (e) {
  var data = await e.data.text();
  console.log('push data :>> ', data);
  if (data) {
    self.registration.showNotification(data);
  } else {
    console.log('没有 push 任何数据')
  }
})
