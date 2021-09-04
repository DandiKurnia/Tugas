

var namabarang = ['The Invisible Universe','Birthright: A Phoenix is Born','Oriental Bento','Planet Rahasia']
var hargabarang = ['What lies beyond the senses? What secrets have been hidden from you due to your physical limitations? Is the universe as empty as it seems? Are we alone?.','As the next Phoenix.These words sparked a shift in my life as an Irish teenager. I went from the unknown guy at the back of the classroom.','Something sinister is brewing on planet Karomoz - the central hub and heart of a galaxy with numerous hospitable planets. Rumors abound of experiments.','Born with glowing green eyes. Destined for rotten luck.Peasant girl Meya Hild is offered the chance of a lifetime to become a Lady---at swordpoint.By mercenaries. Engaged to a dying nobleman.']
var gambarbarang = ["https://img.wattpad.com/cover/178293293-512-k791968.jpg","https://img.wattpad.com/cover/95463013-512-k705064.jpg","https://img.wattpad.com/cover/111292481-512-k564172.jpg","https://img.wattpad.com/cover/153033908-512-k252529.jpg"]
          var listproduck = document.getElementById('listproduck')

          var namabarang_keranjang = []
          var hargabarang_keranjang = []

          var listkeranjang = document.getElementById('listkeranjang')

          function showlistproduck() {
              listproduck.innerHTML =''
              for (let i = 0; i < namabarang.length; i++){
                  listproduck.innerHTML +='<div class="card float-left mr-3 mb-3" style="width: 14rem;">'+
                    '<img src="'+gambarbarang[i]+'"class="card-img-top" alt="...">'+
                   ' <div class="card-body">'+
                      '<h5 class="card-title">'+namabarang[i]+'</h5>'+
                      '<p class="card-text">Rp.'+hargabarang[i]+'</p>'+
                      '<a href="#" class="btn btn-primary" onclick="addlistite('+i+')">pinjam</a>'+
                    '</div>'+
                  '</div>'
              } 
          }

          function addlistite(id) {
              namabarang_keranjang.push(namabarang[id])
              hargabarang_keranjang.push(hargabarang[id])

              showlistkeranjang()
              
            
          }

          var listkeranjang = document.getElementById('listkeranjang')
          var tampilandiscount = document.getElementById('discount')
          var tampilanpajak = document.getElementById('pajak')
          var tampilantotalbayar = document.getElementById('totalbayar') 

          function showlistkeranjang() {
              listkeranjang.innerHTML=''

              var discount = 0
              var pajak = 0
              var hargatotal = 0
              var totalbayar = 0 
              for (let i = 0; i< namabarang_keranjang.length; i++) {
                listkeranjang.innerHTML+=' <div class="card mt-3 mb-3" style="width: 22rem;">'+
                        '<div class="card-body">'+
                            '<h5 class="card-title">'+namabarang_keranjang[i]+'</h5>'+
                            '<p class = "card-text">Rp. '+hargabarang_keranjang[i]+'</p>'+
                            '<p>qty : 1</p>'+
                            '<a href="#" class="btn btn-danger float-right" onclick = "deleteitem('+i+')">Hapus</a>'+
                          '</div>'+
                        '</div>'
              }
          }
          
          function deleteitem(id) {
              namabarang_keranjang.splice(id,1)
              hargabarang_keranjang.splice(id,1)

              showlistkeranjang()
          }
          showlistproduck()

      var namasiswa = []
       var nisn = []
       var kelamin = []
       var kelas = []
       var alamat = []

       var tampil = document.getElementById('tampildata')

       function showData() {
           tampil.innerHTML = ""

           for(i = 0; i<namasiswa.length; i++){
               var nodata = i+1
               tampil.innerHTML += "<tr>"+
                   "<td>"+nodata+"</td>"+
                   "<td>"+namasiswa[i]+"</td>"+
                   "<td>"+nisn[i]+"</td>"+
                   "<td>"+kelamin[i]+"</td>"+
                   "<td>"+kelas[i]+"</td>"+
                   "<td>"+alamat[i]+"</td>"+
                   "<td>"+
                       "<button class='btn btn-warning onclick='edit("+ i +")'>Edit</button>"+
                       "<button class='btn btn-danger float-left' onclick='hapus("+ i +")'>Delete</button>"+
                   "</td>"+
             "</tr>"
           }
       }

       ShowData()

       function tambah() {
           var namabaru = document.getElementById('data_namasiswa').value
           var nisnbaru = document.getElementById('data_nisn').value
           var kelaminbaru = document.getElementById('data_kelamin').value
           var kelasbaru = document.getElementById('data_kelas').value
           var alamatbaru = document.getElementById('data_alamat').value

           namasiswa.push(namabaru)
           nisn.push(nisnbaru)
           kelamin.push(kelaminbaru)
           kelas.push(kelasbaru)
           alamat.push(alamatbaru)

           showData()
       }

       function edit(id){
           var editnama = prompt("Ganti Nama",namasiswa[id])
           namasiswa[id] = editnama;

           var editnisn = prompt("Ganti Buku",nisn[id])
           nisn[id] = editnisn;

           var editkelamin = prompt("Ganti Tanggal Peminjaman",kelamin[id])
           kelamin[id] = editkelamin;
           
           var editalamat = prompt("Ganti Alamat",alamat[id])
           alamat[id] = editalamat;

           showData()
       }

       function hapus(i) {
           var namabaru = document.getElementById('data_namasiswa').value
           var nisnbaru = document.getElementById('data_nisn').value
           var kelaminbaru = document.getElementById('data_kelamin').value
           var kelasbaru = document.getElementById('data_kelas').value
           var alamatbaru = document.getElementById('data_alamat').value

           namasiswa.pop(i,1)
           nisn.pop(i,1)
           kelamin.pop(i,1)
           kelas.pop(i,1)
           alamat.pop(i,1)

           showData()
       
       }


          

           

          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          // var namapeminjam = ['dandi'];
          // var nomerpeminjam = [];
          // var idpeminjam = [];
          // var alamatpeminjam = [];
          // var waktupeminjamanbuku = [];
          // var waktupulangkanbuku = [];

          // var tanpil = document.getElementById('tampildata')

          // function showData() {
          //     tampilandiscount.innerHTML = ""

          //     for(i = 0; i<namapeminjam.length;i++){
          //         var nodata = i+1
                  
          //         tanpil.innerHTML +="<tr>"+
          //         "<th>"+nodata+"</th>"+
          //         "<td>"+namapeminjam[i]+"</td>"+
          //         "<td>"+nomerpeminjam[i]+"</td>"+
          //         "<td>"+idpeminjam[i]+"</td>"+
          //         "<td>"+alamatpeminjam[i]+"</td>"+
          //         "<td>"+waktupeminjamanbuku[i]+"</td>"+
          //         "<td>"+waktupulangkanbuku[i]+"</td>"+
          //         "<td>"+
          //           "<button class = 'btn btn-primary'>selesai</button>"+
          //         "</td>"+
          //       "</tr>"
          //     }
          // }

          // showData()

          // function add() {
          //     var namabaru = document.getElementById(txt_namapinjam).Value;
          //     var nobaru = document.getElementById(txt_nopinjam).Value;
          //     var idbaru = document.getElementById(txt_idpinjam).Value;
          //     var waktubaru = document.getElementById(txt_wtkpinjam).Value;
          //     var waktupulang = document.getElementById(txt_wtkpulang).Value;
          //     var alamatbaru = document.getElementById(txt_alamatpinjam).Value;

          //     namapeminjam.push(namabaru)
          //     nobaru.push(nomerpeminjam)
          //     idbaru.push(idpeminjam)
          //     alamatbaru.push(alamatpeminjam)
          //     waktubaru.push(waktupeminjamanbuku)
          //     waktupulang.push(waktupulangkanbuku)

          //     showData()
          // }


          
