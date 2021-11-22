const log=console.log
if('serviceWorker' in navigator) {   // 檢查browser有無支援serviceWorker
    navigator.serviceWorker.register('/service-worker.js').then(function() {   // register會回傳一個Promise
        console.log('**************** Service worker registered! ***********************');

        if('granted' != Notification.permission){
            Notification.requestPermission(function (status) {
                log(`required Notification ${status}`)
                
            });
        }

        // displayNotification()
    });
}


function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        var options = {
          icon: './assets/images/android_048.png',
          body: '歡迎加入 Angular 社群',
          image: 'https://augt-forum-upload.s3-ap-southeast-1.amazonaws.com/original/1X/6b3cd55281b7bedea101dc36a6ef24034806390b.png'
        };
        reg.showNotification('Angular User Group Taiwan', options);
        console.log('displayNotification');
      });
    }
  }