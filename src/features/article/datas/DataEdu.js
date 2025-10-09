export const courseData = [
    {
        id: "perikanan-berkelanjutan",
        image: "https://images.unsplash.com/photo-1619157614857-56fd8a009a91?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Dasar Perikanan Berkelanjutan",
        description: "Belajar praktik sederhana menjaga kualitas laut, mengurangi limbah, dan menjaga stok ikan tetap melimpah.",
    },
    {
        id: "teknologi-digital",
        image: "https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Teknologi Digital untuk Nelayan",
        description: "Mengenal aplikasi digital untuk penjualan hasil laut, traceability, dan cara menggunakan platform Nusea secara maksimal",
    },
    {
        id: "ekspor-hasil-laut",
        image: "https://images.unsplash.com/photo-1741835126165-da633c30d4f8?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Pengenalan Ekspor Hasil Laut",
        description: "Panduan dasar memahami dokumen ekspor, standar kualitas internasional, dan alur distribusi ke pasra global.",
    },
];

export const quizData = {
    "perikanan-berkelanjutan": {
        title: "Dasar Perikanan Berkelanjutan",
        description: "Belajar praktik sederhana menjaga kualitas laut, mengurangi limbah, dan menjaga stok ikan tetap melimpah.",
        image: "https://images.unsplash.com/photo-1619157614857-56fd8a009a91?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        questions: [
            {
                id: 1,
                question: "Mengapa penting untuk tidak menangkap ikan yang masih kecil?",
                options: [
                    { id: "A", text: "Karena ikan kecil rasanya kurang enak" },
                    { id: "B", text: "Agar stok ikan bisa terus berkembang di masa depan" },
                    { id: "C", text: "Supaya lebih mudah dijual di pasar lokal" },
                    { id: "D", text: "Karena lebih sulit dibersihkan" },
                ],
                correct: "B",
                explain: "Ikan kecil masih dalam tahap tumbuh dan berkembang biak. Jika ditangkap terlalu dini, populasi ikan akan berkurang drastis.",
            },
            {
                id: 2,
                question: "Apa arti dari perikanan berkelanjutan?",
                options: [
                    { id: "A", text: "Menangkap ikan sebanyak mungkin untuk keuntungan cepat" },
                    { id: "B", text: "Menangkap ikan dengan cara menjaga ekosistem laut tetap sehat" },
                    { id: "C", text: "Menggunakan alat tangkap apa saja tanpa batasan" },
                    { id: "D", text: "Menjual ikan langsung ke tengkulak" },
                ],
                correct: "B",
                explain: "Perikanan berkelanjutan berfokus pada keseimbangan antara kebutuhan ekonomi dan kesehatan ekosistem laut jangka panjang.",
            },
            {
                id: 3,
                question: "Apa tujuan utama teknik tangkap ramah lingkungan?",
                options: [
                    { id: "A", text: "Meningkatkan jumlah tangkapan tanpa batas" },
                    { id: "B", text: "Mempercepat proses penangkapan" },
                    { id: "C", text: "Menjaga keseimbangan ekosistem laut" },
                    { id: "D", text: "Mengurangi biaya operasional nelayan" },
                ],
                correct: "C",
                explain: "Teknik ramah lingkungan dapat menjaga habitat dan stok ikan agar tetap lestari.",
            },
            {
                id: 4,
                question: "Salah satu cara menjaga kesegaran ikan hasil tangkapan adalah…",
                options: [
                    { id: "A", text: "Menggunakan es balok atau pendingin" },
                    { id: "B", text: "Membiarkannya di udara terbuka" },
                    { id: "C", text: "Menjemurnya di bawah sinar matahari" },
                    { id: "D", text: "Menaruhnya di karung plastik biasa" },
                ],
                correct: "A",
                explain: "Pendinginan segera setelah penangkapan memperlambat pembusukan ikan, menjaga kualitas dan nilai jual lebih tinggi di pasar.",
            },
            {
                id: 5,
                question: "Apa dampak utama sampah plastik di laut bagi nelayan?",
                options: [
                    { id: "A", text: "Tidak ada dampak signifikan" },
                    { id: "B", text: "Menambah hasil tangkapan ikan" },
                    { id: "C", text: "Membuat laut lebih indah" },
                    { id: "D", text: "Merusak habitat ikan & mengurangi kualitas hasil tangkapan" },
                ],
                correct: "D",
                explain: "Sampah plastik mencemari laut, mengganggu ekosistem, dan membuat hasil tangkapan menurun baik dari segi jumlah maupun kualitas.",
            }
        ],
    },
    "teknologi-digital": {
        title: "Teknologi Digital untuk Nelayan",
        description: "Mengenal aplikasi digital untuk penjualan hasil laut, traceability, dan cara menggunakan platform Nusea secara maksimal.",
        image: "https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        questions: [
            {
                id: 1,
                question: "Manakah yang BUKAN manfaat teknologi digital untuk nelayan?",
                options: [
                    { id: "A", text: "Mendapat informasi cuaca" },
                    { id: "B", text: "Menjual langsung ke konsumen" },
                    { id: "C", text: "Meningkatkan jumlah ikan di laut" },
                    { id: "D", text: "Mencatat hasil tangkapan" },
                ],
                correct: "C",
                explain: "Teknologi digital membantu dalam operasional dan penjualan, namun tidak secara langsung meningkatkan populasi ikan di laut.",
            },
            {
                id: 2,
                question: "Contoh teknologi digital yang membantu menentukan lokasi ikan adalah…",
                options: [
                    { id: "A", text: "GPS dan fish finder" },
                    { id: "B", text: "Pendingin ikan" },
                    { id: "C", text: "Mesin kapal" },
                    { id: "D", text: "Jaring selektif" },
                ],
                correct: "A",
                explain: "GPS dan fish finder adalah teknologi digital yang digunakan untuk memetakan lokasi ikan tanpa merusak ekosistem.",
            },
            {
                id: 3,
                question: "Apa fungsi traceability pada platform digital?",
                options: [
                    { id: "A", text: "Menambah biaya operasional" },
                    { id: "B", text: "Mencatat asal-usul dan proses penangkapan ikan" },
                    { id: "C", text: "Membuat ikan lebih segar" },
                    { id: "D", text: "Menghitung hasil tangkapan harian secara otomatis" },
                ],
                correct: "B",
                explain: "Traceability memungkinkan pembeli melihat asal ikan, metode penangkapan, dan jalur distribusi, sehingga meningkatkan kepercayaan.",
            },
            {
                id: 4,
                question: "Mengapa nelayan perlu belajar teknologi digital?",
                options: [
                    { id: "A", text: "Supaya bisa menggantikan kapal" },
                    { id: "B", text: "Agar dapat menjual hasil tangkapan lebih transparan dan efisien" },
                    { id: "C", text: "Agar tidak perlu bekerja" },
                    { id: "D", text: "Supaya ikan jadi lebih besar" },
                ],
                correct: "B",
                explain: "Dengan teknologi digital, nelayan dapat menjual hasil tangkapan secara lebih transparan, mengelola data, dan berkomunikasi lebih efisien dengan pembeli.",
            },
            {
                id: 5,
                question: "Contoh penggunaan sederhana teknologi digital bagi nelayan adalah…",
                options: [
                    { id: "A", text: "Mengandalkan kabar dari tetangga" },
                    { id: "B", text: "Membeli kapal lebih besar" },
                    { id: "C", text: "Menyimpan ikan tanpa pendingin" },
                    { id: "D", text: "Mengirim pesan harga ikan lewat aplikasi chat" },
                ],
                correct: "D",
                explain: "Teknologi digital tidak selalu rumit, bahkan pengiriman pesan harga dan foto ikan lewat aplikasi chat adalah langkah awal yang efektif.",
            },
        ],
    },
    "ekspor-hasil-laut": {
        title: "Pengenalan Ekspor Hasil Laut",
        description: "Panduan dasar memahami dokumen ekspor, standar kualitas internasional, dan alur distribusi ke pasar global.",
        image: "https://images.unsplash.com/photo-1741835126165-da633c30d4f8?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        questions: [
            {
                id: 1,
                question: "Apa syarat utama agar produk laut bisa diekspor ke luar negeri?",
                options: [
                    { id: "A", text: "Memenuhi standar kualitas dan dokumen ekspor" },
                    { id: "B", text: "Menggunakan kapal yang besar" },
                    { id: "C", text: "Menjual lewat tengkulak" },
                    { id: "D", text: "Menyimpan ikan di karung plastik" },
                ],
                correct: "A",
                explain: "Ekspor memerlukan standar kualitas tertentu serta dokumen resmi (sertifikat kesehatan, asal-usul, dan legalitas).",
            },
            {
                id: 2,
                question: "Dokumen apa yang penting untuk proses ekspor hasil laut?",
                options: [
                    { id: "A", text: "KTP Nelayan" },
                    { id: "B", text: "Sertifikat Hasil Uji Laboratorium" },
                    { id: "C", text: "Surat Izin Mengemudi" },
                    { id: "D", text: "Kartu Keluarga" },
                ],
                correct: "B",
                explain: "Sertifikat hasil uji lab (Certificate of Analysis) sangat penting untuk membuktikan kualitas dan keamanan produk sesuai standar negara tujuan.",
            },
            {
                id: 3,
                question: "Apa manfaat sertifikasi keberlanjutan bagi nelayan yang ingin ekspor?",
                options: [
                    { id: "A", text: "Mendapatkan akses pasar global lebih luas" },
                    { id: "B", text: "Bebas biaya transportasi" },
                    { id: "C", text: "Tidak perlu pendinginan ikan" },
                    { id: "D", text: "Mengurangi hasil tangkapan" },
                ],
                correct: "A",
                explain: "Sertifikasi keberlanjutan meningkatkan kepercayaan pembeli internasional sehingga produk lebih mudah diterima di pasar global.",
            },
            {
                id: 4,
                question: "Mengapa kualitas pengemasan penting dalam ekspor hasil laut?",
                options: [
                    { id: "A", text: "Supaya nelayan bisa hemat biaya" },
                    { id: "B", text: "Agar ikan terlihat lebih mahal" },
                    { id: "C", text: "Untuk menjaga kesegaran dan keamanan produk selama perjalanan" },
                    { id: "D", text: "Agar pembeli lebih cepat bayar" },
                ],
                correct: "C",
                explain: "Pengemasan yang tepat menjaga suhu, mencegah kebocoran, dan memastikan produk sampai dalam kondisi baik ke negara tujuan.",
            },
            {
                id: 5,
                question: "Salah satu langkah awal bagi nelayan untuk memulai ekspor adalah…",
                options: [
                    { id: "A", text: "Menjual langsung tanpa dokumen" },
                    { id: "B", text: "Bergabung dengan koperasi atau platform digital yang mendukung ekspor" },
                    { id: "C", text: "Menangkap lebih banyak ikan" },
                    { id: "D", text: "Mengurangi kualitas produk" },
                ],
                correct: "B",
                explain: "Bergabung dengan koperasi atau platform digital mempermudah akses pasar internasional dan membantu proses administrasi ekspor.",
            },
        ],
    },
};
