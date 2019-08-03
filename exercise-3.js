//Proxytia Gameplay

var nama = 'Marcell';
var peran = 'Ksatria';

if (nama === '' && peran === '') {
    console.log('Nama harus diisi!');
} else if (nama === 'Marcell' && peran === '') {
    console.log('Halo Marcell, Pilih peranmu untuk memulai game!');
} else if (nama === 'Marcell' && peran === 'Ksatria') {
    console.log('Selamat datang di Dunia Proxytia, Marcell');
    console.log('Halo Ksatria Marcell, kamu dapat menyerang dengan senjatamu!');
} else if (nama === 'Marcell' && peran === 'Tabib') {
    console.log('Selamat datang di Dunia Proxytia, Marcell');
    console.log('Halo Tabib Marcell, kamu akan membantu temanmu yang terluka.');
} else if (nama === 'Marcell' && peran === 'Penyihir') {
    console.log('Selamat datang di Dunia Proxytia, Marcell');
    console.log('Halo Penyihir Marcell, ciptakan keajaiban yang membantu kemenanganmu!');
} else {
    console.log('');
}