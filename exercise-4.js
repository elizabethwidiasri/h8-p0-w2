var tanggal = '30';
var bulan = '4';
var tahun = '2018';

if (tanggal < 1 || tanggal > 31) {
    console.log('Input data tanggal dalam rentang antara 1 hingga 31');
} else if (bulan < 1 || bulan > 12) {
    console.log('Input data bulan dalam rentang antara 1 hingga 12');
} else if (tahun <= 1899 || tahun >= 2201) {
    console.log('Input data tahun dalam rentang antara 1900 hingga 2200');
} else {
        switch (bulan) {
            case '1':
                console.log(tanggal + ' ' + 'Januari' + ' ' + tahun);
                break;
            case '2':
                console.log(tanggal + ' ' + 'Februari' + ' ' + tahun);
                break;
            case '3':
                console.log(tanggal + ' ' + 'Maret' + ' ' + tahun);
                break;
            case '4':
                console.log(tanggal + ' ' + 'April' + ' ' + tahun);
                break;
            case '5':
                console.log(tanggal + ' ' +'Mei' + ' ' + tahun);
                break;
            case '6':
                console.log(tanggal + ' ' + 'Juni' + ' ' + tahun);
                break;
            case '7':
                console.log(tanggal + ' ' + 'Juli' + ' ' + tahun);
                break;
            case '8':
                console.log(tanggal + ' ' + 'Agustus' + ' ' + tahun);
                break;
            case '9':
                console.log(tanggal + ' ' + 'September' + ' ' + tahun);
                break;
            case '10':
                console.log(tanggal + ' ' + 'Oktober' + ' ' + tahun);
                break;
            case '11':
                console.log(tanggal + ' ' + 'November' + ' ' + tahun);
                break;
            case '12':
                console.log(tanggal + ' ' + 'Desember' + ' ' + tahun);
                break;
        }
}