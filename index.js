// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
  const listBelanjaan = function(daftarItem){
      return daftarItem.map(function(data){
          return "- "+ data.nama + " x " + data.kuantitas;
      });
  }; 
  
  // boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
  const totalBelanjaan = function(daftarItem2){
      let totalHarga = 0;
      daftarItem2.forEach(data2){
          totalHarga += data2.harga * data2.kuantitas;
      };
      return totalHarga;
  };

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
