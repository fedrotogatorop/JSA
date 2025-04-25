console.log(
  "Halo, ini adalah hari pertama saya belajar javascript asynchronous"
);
setTimeout(() => {
  console.log(
    "ini udah masuk memory proses tapi dijalankan setelah 3 detik kedepan"
  );
}, 3000);
console.log("bakal muncul ke dua");
