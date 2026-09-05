import re
import json

with open("scripts/raw_user_eas.txt") as f:
    raw = f.read().replace("\xa0", " ")

ans_pos = raw.find("itu soal EAS nya")
q_raw = raw[:ans_pos]
a_raw = raw[ans_pos:]

q_raw = q_raw.replace("sizeQuestion 76", "size\nQuestion 76")
q_raw = q_raw.replace("Question 46 //5 soal", "Question 46\n")
q_raw = re.sub(r"(?<!\n)Question\s+(\d+)", r"\nQuestion \1", q_raw)

q_matches = list(re.finditer(r"Question\s+(\d+)", q_raw))
q_dict = {}
for i in range(len(q_matches)):
    q_num = int(q_matches[i].group(1))
    start = q_matches[i].end()
    end = q_matches[i+1].start() if i+1 < len(q_matches) else len(q_raw)
    content = q_raw[start:end].strip()
    content = re.sub(r"Question\s+\d+\s*$", "", content).strip()
    if q_num not in q_dict or len(content) > len(q_dict[q_num]):
        q_dict[q_num] = content

a_matches = list(re.finditer(r"\*\*Question\s+(\d+)\*\*", a_raw))
a_dict = {}
for i in range(len(a_matches)):
    a_num = int(a_matches[i].group(1))
    start = a_matches[i].end()
    end = a_matches[i+1].start() if i+1 < len(a_matches) else len(a_raw)
    content = a_raw[start:end].strip()
    if a_num not in a_dict or len(content) > len(a_dict[a_num]):
        a_dict[a_num] = content

# Explanations for questions that had empty explanation in prompt
custom_exp = {
    3: "Jaringan perusahaan (enterprise) dan kampus menggunakan switch Ethernet berkecepatan tinggi untuk menghubungkan end systems (komputer, server, printer) di dalam gedung dan antar gedung kampus.",
    5: "Kode status HTTP 404 (Not Found) adalah standar client error yang mengindikasikan bahwa server tidak dapat menemukan resource yang diminta oleh klien pada URL yang dituju.",
    10: "Socket diidentifikasi secara unik oleh pasangan IP Address (mengidentifikasi host) dan Port Number (mengidentifikasi proses/aplikasi spesifik pada host tersebut).",
    11: "Nonblocking I/O memungkinkan system call untuk segera return tanpa memblokir thread eksekusi jika operasi I/O belum selesai, sehingga thread dapat mengerjakan proses lain.",
    12: "Keunggulan utama arsitektur P2P adalah self-scalability (skalabilitas tinggi), karena setiap peer yang mengunduh (leeching) sekaligus menyumbangkan kapasitas upload kepada peer lain.",
    16: "Buku Kurose & Ross menekankan bahwa terlepas dari skala masifnya, Internet didasarkan pada prinsip-prinsip pemandu (guiding principles) dan struktur berlapis yang sistematis dan dapat dipahami secara logis.",
    17: "Protokol rdt2.0 adalah protokol stop-and-wait, di mana pengirim mengirim 1 paket lalu berhenti menunggu umpan balik (ACK/NAK) dari penerima sebelum mengirim paket berikutnya.",
    21: "System call listen() menempatkan socket server dalam keadaan pasif (listening state) untuk menunggu dan menerima permintaan koneksi masuk dari klien.",
    22: "Secara default, FTP server mendengarkan koneksi kontrol (control connection) pada TCP port 21, sedangkan koneksi transfer data dibuka pada TCP port 20.",
    23: "Pipelining (pemipaan) memungkinkan pengirim mengirim beberapa paket sekaligus ke dalam jaringan ('in flight') tanpa harus menunggu ACK untuk setiap paket terlebih dahulu.",
    24: "Enkapsulasi (Encapsulation) adalah proses membungkus data dari lapisan atas dengan header baru pada setiap lapisan saat data bergerak turun melalui protocol stack.",
    26: "Dalam ekosistem BitTorrent, peer yang belum memiliki file lengkap dan masih aktif mengunduh potongan file disebut leechers (sedangkan yang sudah lengkap disebut seeds).",
    27: "Content Delivery Network (CDN) adalah jaringan server terdistribusi secara geografis yang mereplikasi konten untuk disajikan dari server terdekat ke pengguna guna mengurangi latensi.",
    28: "TCP socket menggunakan 4-tuple (Source IP, Source Port, Dest IP, Dest Port) sehingga server dapat melayani banyak koneksi bersamaan ke port server yang sama dari berbagai klien berbeda secara terisolasi.",
    29: "TCP menyediakan transfer andal (RDT). Jika timer habis sebelum ACK diterima untuk suatu segmen, TCP akan melakukan retransmisi segmen yang belum terkonfirmasi tersebut.",
    30: "FTP (File Transfer Protocol) menggunakan dua koneksi TCP terpisah: koneksi kontrol 'out-of-band' pada port 21 dan koneksi transfer data pada port 20.",
    31: "Jaminan in-order dan loss-free pada TCP dicapai terutama melalui kombinasi Sequence Numbers, Acknowledgments (ACK), dan Retransmissions saat terjadi kehilangan paket.",
    32: "Analogi rumah tangga Ann dan Bill mengilustrasikan: Transport layer menyediakan komunikasi logis antar-proses (process-to-process), sedangkan Network layer menyediakan pengiriman antar-host (host-to-host).",
    33: "Selama three-way handshake TCP, segmen kontrol (SYN, SYN-ACK, ACK) dipertukarkan untuk menyinkronkan nomor urut awal (ISN) dan variabel state koneksi antara klien dan server.",
    34: "Adaptive timeout sangat krusial agar interval timeout retransmisi TCP selalu disesuaikan dengan variasi kondisi jaringan nyata (RTT), mencegah retransmisi prematur yang sia-sia maupun delay retransmisi yang terlalu lama.",
    35: "Hierarki DNS memiliki Root DNS Server pada tingkat teratas, yang mengarahkan query ke Top-Level Domain (TLD) servers (.com, .org, .id, dll).",
    39: "Botnet member (atau zombie) adalah perangkat/komputer yang disusupi malware dan dikendalikan secara jarak jauh dalam suatu jaringan terkoordinasi untuk melancarkan serangan seperti DDoS.",
    40: "Pada Blocking I/O tradisional, proses eksekusi akan ditangguhkan (suspend) dan menunggu sampai operasi I/O (seperti membaca atau menulis ke socket) selesai sepenuhnya.",
    41: "BitTorrent menggunakan Tracker, yaitu server terpusat yang memantau dan mencatat peer-peer mana saja yang sedang aktif dalam swarm file tertentu.",
    42: "TCP State Machine mengatur transisi status yang valid (seperti CLOSED, LISTEN, SYN-SENT, ESTABLISHED, FIN-WAIT, TIME-WAIT) selama pembuatan koneksi, transfer data, dan penutupan koneksi.",
    43: "HTTP dapat beroperasi dalam mode Nonpersistent (setiap permintaan objek memerlukan koneksi TCP baru) dan Persistent (banyak objek dapat ditransfer melalui satu koneksi TCP yang tetap terbuka).",
    44: "Explicit Congestion Notification (ECN) memungkinkan router menandai bit dalam header IP ketika terjadi kongesti alih-alih langsung membuang (drop) paket, sehingga pengirim dapat memperlambat laju sebelum terjadi packet loss.",
    45: "Penerimaan 3 duplicate ACKs memicu mekanisme Fast Retransmit, di mana TCP langsung mengirim ulang segmen yang hilang tanpa menunggu timer timeout habis.",
    49: "Jaringan seluler (cellular access networks) mencakup area geografis yang sangat luas (wide-area coverage) melalui menara pemancar / base stations (BTS), mendukung mobilitas pengguna saat berpindah antar sel.",
    50: "Virus memerlukan interaksi manusia (seperti membuka lampiran email atau menjalankan file eksekusi) untuk menyebar, sedangkan worm dapat mereplikasi diri dan menyebar secara otomatis melalui celah keamanan jaringan tanpa interaksi pengguna.",
    51: "Keunggulan utama arsitektur berlapis (layering) adalah modularitas: setiap lapisan menyediakan layanan tertentu melalui antarmuka yang terdefinisi dengan baik, menyederhanakan desain, implementasi, dan pemeliharaan.",
    52: "Selective Acknowledgment (SACK) memungkinkan penerima memberitahu pengirim tentang blok data non-kontigu yang berhasil diterima, sehingga pengirim hanya perlu mengirim ulang paket yang benar-benar hilang.",
    53: "Peran utama Link Layer dalam protokol Internet adalah mentransfer datagram melintasi satu tautan (link) komunikasi fisik individual antara dua node jaringan yang bersebelahan.",
    55: "Dalam FTP, koneksi kontrol (Control Connection pada port 21) tetap terbuka sepanjang sesi pengguna, sedangkan koneksi data dibuat dan ditutup secara dinamis untuk setiap file yang ditransfer.",
    56: "Layanan full-duplex pada TCP berarti data dapat dikirim dan diterima secara bersamaan (simultan) di kedua arah melalui koneksi TCP yang sama.",
    57: "Metode HTTP GET digunakan oleh klien untuk meminta resource atau data dari server tanpa mengubah (mutasi) status resource di server (idempoten dan aman).",
    58: "Conditional GET menggunakan header 'If-Modified-Since' yang memungkinkan browser memverifikasi apakah objek di cache masih valid tanpa perlu mengunduh ulang seluruh konten objek jika belum berubah (server merespons 304 Not Modified).",
    60: "Packet sniffer (seperti Wireshark/tcpdump) bersifat pasif; sniffer hanya menyalin paket yang melintas tanpa menginjeksikan atau mengubah lalu lintas jaringan, sehingga sangat sulit dideteksi oleh perangkat lain.",
    61: "Protokol stop-and-wait (seperti rdt2.1) hanya memerlukan ruang nomor urut 1-bit (nilai 0 dan 1) untuk membedakan antara paket baru dan retransmisi paket sebelumnya.",
    62: "Socket adalah antarmuka pemrograman (API) sistem operasi yang menjadi pintu gerbang komunikasi antara proses aplikasi dengan lapisan transport jaringan.",
    63: "Untuk mendeteksi hilangnya paket atau ACK pada saluran yang tidak andal, protokol transfer data menggunakan countdown timer yang memicu retransmisi jika terjadi timeout.",
    66: "Dua pendekatan pipelined error-recovery yang paling umum adalah Go-Back-N (GBN) dengan cumulative ACKs dan retransmisi dari titik hilang, serta Selective Repeat (SR) dengan ACK per-paket dan retransmisi selektif.",
    67: "Pipelining memungkinkan banyak paket berada di jalur transmisi secara bersamaan ('in flight'), sehingga nomor urut harus diperluas agar setiap paket yang sedang meluncur dapat diidentifikasi secara unik.",
    68: "TCP Congestion Control cenderung membagi kapasitas bottleneck secara proporsional kepada semua flow yang bersaing, menunjukkan sifat Fairness (keadilan).",
    69: "Setelah Fast Retransmit (akibat 3 duplicate ACKs), TCP memasuki Fast Recovery: ukuran congestion window (cwnd) dipotong setengahnya (halved) dan dilanjutkan dengan penambahan aditif (Additive Increase).",
    71: "DNS query umumnya menggunakan UDP (port 53) karena transaksinya sangat ringkas dan UDP tidak memerlukan overhead pembuatan koneksi (3-way handshake) yang menambah latensi.",
    74: "Ketika laju kedatangan paket melebihi kapasitas tautan keluar, antrian buffer router akan terisi penuh. Jika buffer meluap (overflow), paket-paket berikutnya akan dibuang / hilang (packet drop/loss).",
    75: "Protokol jaringan adalah sekumpulan aturan dan konvensi yang menentukan format, urutan pengiriman/penerimaan pesan, serta tindakan yang diambil saat pesan dikirim atau diterima antar entitas komunikasi.",
    76: "Perbedaan mendasar: GBN menggunakan Cumulative ACKs (satu ACK mengonfirmasi semua paket hingga nomor tersebut), sedangkan SR menggunakan Per-packet ACKs di mana setiap paket diakui secara individual.",
    77: "Throughput ujung-ke-ujung (end-to-end throughput) pada jalur multi-link dibatasi oleh kapasitas tautan terlambat (bottleneck link), yaitu nilai minimum dari seluruh kecepatan link pada jalur.",
    78: "Formula transmisi delay adalah d_trans = L / R, di mana L adalah panjang paket dalam bit dan R adalah laju transmisi link dalam bit per detik (bps).",
    79: "Terdapat trade-off mendasar antara efisiensi pemanfaatan jaringan dan keadilan (fairness) dalam alokasi bandwidth di antara berbagai flow TCP yang bersaing.",
    80: "Lapisan transport bertanggung jawab menyediakan komunikasi logis antar-proses aplikasi (process-to-process communication) yang berjalan pada host yang berbeda.",
    81: "Jika laju kedatangan paket di buffer router secara konsisten melampaui laju pemrosesan/transmisi, buffer akan meluap (buffer overflow) dan menyebabkan packet loss.",
    84: "CDN menempatkan server lokal yang disebut Edge Servers (server tepi) sedekat mungkin dengan pengguna untuk meminimalkan jarak propagasi dan latensi.",
    86: "Pada DNS, Resource Record (RR) bertipe 'A' (Address record) memetakan nama domain/host ke alamat IPv4 32-bit yang sesuai.",
    87: "Fase awal koneksi TCP di mana congestion window (cwnd) bertumbuh secara eksponensial (mengganda setiap RTT) disebut Slow Start.",
    89: "TCP mengakhiri koneksi menggunakan segmen dengan bit flag FIN (Finish) yang diaktifkan, menandai bahwa pihak tersebut tidak lagi mengirimkan data baru.",
    91: "Lapisan fisik (Physical Layer) bertugas mengonversi bit-bit biner menjadi sinyal listrik, optik, atau gelombang elektromagnetik untuk ditransmisikan melalui media komunikasi fisik.",
    93: "Penggunaan cookies untuk pelacakan (tracking) pengguna di berbagai situs memicu kekhawatiran privasi (Privacy Invasion), karena riwayat perilaku dan preferensi pengguna dapat diprofilkan tanpa persetujuan eksplisit.",
    94: "Dalam BitTorrent, peer yang telah memiliki keseluruhan file secara utuh dan terus membiarkan komputernya aktif mengunggah bagian-bagian file ke peer lain disebut Seeds (seeding).",
    95: "Fungsi lapisan aplikasi adalah menyediakan layanan langsung kepada pengguna dan memfasilitasi pertukaran pesan antar-proses aplikasi, seperti HTTP (web) dan SMTP (email).",
    96: "IMAP (Internet Message Access Protocol) memungkinkan email tetap tersimpan di server, diatur dalam folder-folder hierarkis, dan disinkronkan secara konsisten di banyak perangkat klien.",
    97: "Socket adalah abstraksi API jaringan yang disediakan oleh sistem operasi sehingga pengembang aplikasi dapat mengirim dan menerima data melalui jaringan.",
    98: "Cookies adalah token/string pengidentifikasi unik yang disimpan di browser klien dan dikirimkan secara otomatis pada setiap permintaan HTTP berikutnya ke server untuk memelihara sesi (state).",
    99: "Buku Kurose & Ross menggunakan analogi pengiriman surat pos untuk menjelaskan bagaimana pesan dipecah, dibungkus dalam amplop (header/enkapsulasi), dan dikirimkan sebagai paket.",
    100: "DNS record bertipe MX (Mail Exchange) menentukan nama mail server yang bertanggung jawab menerima pesan email untuk suatu nama domain.",
    101: "Domain Name System (DNS) adalah sistem direktori terdistribusi hierarkis yang memetakan nama host yang ramah manusia (seperti www.example.com) menjadi alamat IP numerik.",
    103: "Dalam arsitektur Client-Server, proses yang menunggu (listening) permintaan koneksi masuk dari klien disebut Server.",
    104: "Arsitektur awal Internet (ARPANET) dirancang di lingkungan akademis dengan asumsi bahwa semua pengguna saling percaya (mutual trust), sehingga fitur keamanan tidak diintegrasikan secara bawaan sejak awal.",
    105: "Fase eksponensial Slow Start berakhir ketika cwnd mencapai threshold (ssthresh), terjadi packet loss yang ditandai oleh retransmission timeout, atau penerimaan 3 duplicate ACKs.",
    106: "ISP pada tingkatan yang sama (peers) sering melakukan peering (pertukaran lalu lintas langsung di IXP) agar dapat saling mengirimkan data pengguna secara gratis tanpa membayar biaya transit ke provider tingkat atas (Tier-1 ISP).",
    107: "DNS queries sangat diuntungkan oleh UDP karena transaksinya berbasis request-response tunggal yang cepat tanpa beban overhead handshake TCP.",
    108: "Packet switches (router dan link-layer switches) di jaringan core bertugas meneruskan (forward) paket data dari link input ke link output yang sesuai menuju tujuan akhir.",
    109: "DNS Poisoning (atau DNS Cache Poisoning) adalah serangan di mana penyerang memasukkan entri alamat IP palsu ke dalam cache server DNS, mengarahkan pengguna ke situs berbahaya.",
    110: "Peran utama lapisan transport adalah menyediakan komunikasi logis antar-proses aplikasi (process-to-process) beserta mekanisme keandalan dan kontrol kongesti.",
    111: "Dalam BitTorrent, teknik di mana seorang klien mengunduh potongan-potongan file secara simultan dari banyak peer yang berbeda disebut Swarming.",
    112: "World Wide Web (WWW) ditemukan oleh Tim Berners-Lee di CERN antara tahun 1989 dan 1991, mencakup protokol HTTP, HTML, dan URI.",
    113: "Protokol transfer data andal (RDT) menjamin keandalan data (bebas eror, in-order, tanpa kehilangan), namun tidak dapat menjamin kapasitas bandwidth tak terbatas.",
    114: "Protokol rdt2.1 menyertakan nomor urut pada paket ACK/NAK agar pengirim dapat mengonfirmasi secara pasti nomor urut paket mana yang sedang diakui oleh penerima.",
    115: "FTP memisahkan lalu lintas menjadi dua koneksi TCP paralel: Koneksi Kontrol (Control Connection) untuk perintah autentikasi dan status, serta Koneksi Data (Data Connection) untuk transfer file.",
    116: "Dalam protokol Go-Back-N, batas maksimum jumlah paket yang belum diakui di dalam pipeline ditentukan oleh Sliding Window Size (ukuran jendela penggeser N).",
    118: "Delay propagasi (propagation delay) pada suatu tautan ditentukan murni oleh jarak fisik (distance d) dibagi dengan kecepatan rambat sinyal pada medium fisik (speed of propagation s): d_prop = d / s.",
    119: "Keterbatasan utama POP3 dibandingkan IMAP adalah POP3 tidak mendukung sinkronisasi status email (baca, hapus, folder) di berbagai perangkat yang berbeda.",
    120: "Baris pertama dalam pesan permintaan HTTP disebut Request Line, yang berisi HTTP method (misal GET), URL/Path resource, dan versi protokol HTTP.",
    121: "Store-and-forward transmission delay adalah waktu yang dibutuhkan router untuk menerima seluruh bit paket sebelum mulai mentransmisikannya ke tautan keluar berikutnya.",
    124: "TCP Vegas memantau throughput dan perubahan RTT untuk mendeteksi tanda-tanda awal kemacetan jaringan dan menyesuaikan cwnd secara proaktif sebelum terjadi kehilangan paket nyata.",
    125: "Web caching sangat menguntungkan server asal karena mengurangi beban pemrosesan dan lalu lintas keluar server secara drastis (Reduced Server Load).",
    126: "Field Receive Window (rwnd) dalam header TCP menunjukkan jumlah byte tambahan yang bersedia dan mampu diterima oleh buffer penerima, digunakan untuk Flow Control.",
    127: "Enkripsi (seperti pada TLS/HTTPS) menyediakan kerahasiaan (confidentiality) dan integritas data untuk melindungi data sensitif dari penyadapan dan pemalsuan.",
    128: "Pada Circuit Switching: FDM (Frequency-Division Multiplexing) membagi spektrum frekuensi menjadi pita-pita berbeda, sedangkan TDM (Time-Division Multiplexing) membagi waktu transmisi menjadi slot-slot waktu berkala.",
    129: "Dalam situasi di mana antrian (queuing) dan pemrosesan dapat diabaikan, dua komponen delay fisik yang harus selalu diperhitungkan adalah Transmission Delay (L/R) dan Propagation Delay (d/s).",
    130: "Tujuan utama Content Delivery Network (CDN) adalah mengurangi latensi pengguna (dengan menempatkan konten dekat user) dan meningkatkan ketersediaan (availability) serta ketahanan layanan.",
    131: "Transmission rate (laju transmisi link) adalah laju di mana bit-bit data didorong masuk ke dalam media transmisi, diukur dalam satuan bit per second (bps).",
    132: "Fungsi inti dari Network Layer adalah merutekan paket dari host sumber ke host tujuan melintasi berbagai router jaringan menggunakan pengalamatan logis (IP Addressing).",
    133: "Dalam pemrograman socket, Datagram Socket (SOCK_DGRAM) digunakan untuk aplikasi yang berkomunikasi melalui protokol UDP tanpa koneksi.",
    135: "Kode status HTTP 200 (OK) menandakan bahwa permintaan klien berhasil diproses oleh server dan objek resource yang diminta dikirimkan dalam payload respons.",
    136: "Port Numbers (Nomor Port) adalah pengenal numerik 16-bit yang digunakan pada transport layer untuk membedakan proses atau socket aplikasi yang berjalan pada host yang sama.",
    137: "DNS menggunakan redundansi banyak server di setiap level untuk mendistribusikan beban kueri (load distribution) dan mencegah adanya titik kegagalan tunggal (single point of failure).",
    138: "System call bind() digunakan dalam socket programming untuk mengaitkan alamat IP dan nomor port tertentu ke suatu socket.",
    139: "UDP adalah protokol connectionless yang minimalis; UDP TIDAK menyediakan Reliable Data Transfer (tidak ada ACK, retransmisi, atau pengurutan).",
    140: "UDP tidak memiliki kontrol kongesti bawaan (built-in congestion control); justru ketiadaan kontrol kongesti ini sering dimanfaatkan oleh aplikasi real-time yang ingin mentransmisikan data pada laju konstan.",
    141: "Dalam Selective Repeat (SR), penerima menyimpan (buffer) paket-paket benar yang tiba di luar urutan sehingga pengirim tidak perlu mengirim ulang seluruh jendela, melainkan hanya paket yang hilang.",
    142: "Node paket switch pertama ARPANET (Interface Message Processor / IMP) dipasang di UCLA di bawah pimpinan Leonard Kleinrock pada tahun 1969.",
    143: "HTTP (HyperText Transfer Protocol) adalah protokol aplikasi web untuk request dan response halaman web, secara standar berjalan di atas TCP port 80 (atau port 443 untuk HTTPS).",
    145: "Leonard Kleinrock menerbitkan makalah pertama tentang efektivitas packet switching menggunakan teori antrian (queuing theory) pada tahun 1961-1964.",
    146: "Persistent HTTP memungkinkan pengiriman beberapa objek melalui satu koneksi TCP yang sama, sehingga menghemat round-trip time (RTT) koneksi handshake dan mengurangi latensi.",
    147: "Protokol rdt1.0 beroperasi pada saluran yang sepenuhnya andal (perfect channel tanpa bit error dan tanpa packet loss), sehingga pengirim tidak memerlukan feedback (ACK/NAK) dari penerima.",
    148: "Socket UDP diidentifikasi hanya oleh 2-tuple (Destination IP, Destination Port). Dua pengirim berbeda yang mengirim ke Dest IP dan Dest Port yang sama akan diterima oleh socket/proses yang sama.",
    149: "System call accept() pada socket TCP server menerima koneksi klien yang masuk dan membuat sebuah socket baru yang khusus didedikasikan untuk melayani koneksi klien tersebut.",
    150: "Field Sequence Number dan Acknowledgment Number pada header TCP digunakan bersama-sama untuk memastikan pengiriman data yang andal, berurutan, dan bebas duplikasi.",
    153: "Akses Internet kabel (Cable Broadband) menggunakan arsitektur hybrid fiber-coaxial (HFC) di mana bandwidth fisik dibagi bersama (shared medium) di antara tetangga sekitar, menimbulkan potensi persaingan bandwidth.",
    154: "Analogi sistem pos menekankan bahwa untuk mengirim surat, pengirim harus mematuhi format aturan baku: menuliskan alamat lengkap penerima beserta kode pos pada amplop yang tertutup rapi.",
    155: "Analogi salam manusia (seperti 'Halo' dibalas 'Halo') mengilustrasikan bahwa komunikasi memerlukan format pesan tertentu dan ekspektasi urutan aksi respons yang disepakati bersama (protokol).",
    158: "DNS Caching adalah penyimpanan sementara hasil pemetaan nama-ke-IP pada server DNS lokal atau resolver untuk mempercepat resolusi kueri berikutnya dan mengurangi lalu lintas ke server root/TLD.",
    160: "Selective Repeat (SR) lebih kompleks daripada GBN karena membutuhkan buffer tersendiri pada pengirim dan penerima serta timer individual yang berjalan untuk setiap paket yang belum diakui.",
    161: "UDP adalah protokol transport tanpa embel-embel ('no-frills') yang hanya menambahkan nomor port (multiplexing/demultiplexing) dan checksum opsional ke data aplikasi.",
    162: "Kontrol kongesti TCP mencegah penumpukan paket berlebih di router jaringan core, sehingga mencegah kolapsnya seluruh jaringan dan melindungi sumber daya Internet publik.",
    166: "Tanggung jawab utama transport layer adalah menyediakan pengiriman data antar-proses yang andal, kontrol aliran data (flow control), dan kontrol kongesti.",
    169: "Tier-1 ISPs adalah penyedia backbone global teratas yang saling terhubung satu sama lain tanpa membeli transit IP dari pihak manapun, menjangkau seluruh dunia.",
    170: "Terdapat 13 alamat IP root name server logis (diberi label A hingga M) di seluruh dunia, yang masing-masing direplikasi menjadi ratusan server fisik menggunakan teknologi anycast.",
    176: "Pada teknologi DSL, pita frekuensi kabel tembaga telepon dibagi menggunakan Frequency-Division Multiplexing (FDM): frekuensi rendah untuk suara telepon analog, frekuensi menengah untuk upstream, dan frekuensi tinggi untuk downstream.",
    180: "Dari sudut pandang infrastruktur layanan, Internet adalah platform komputasi terdistribusi yang menyediakan API bagi aplikasi seperti streaming video, VoIP, web, dan e-commerce.",
    181: "Urutan 5 lapisan dalam Internet Protocol Stack dari lapisan teratas ke terbawah adalah: Application -> Transport -> Network -> Link -> Physical.",
    182: "Stream Socket (SOCK_STREAM) adalah tipe socket yang menggunakan protokol TCP untuk menyediakan aliran byte (byte-stream) dua arah yang andal dan berurutan.",
    187: "Caching pada DNS sangat vital karena secara drastis memangkas latensi resolusi alamat IP bagi pengguna dan melindungi server root serta TLD dari lonjakan beban kueri global.",
    189: "Arsitektur P2P mendistribusikan sumber daya (penyimpanan dan bandwidth upload) ke setiap pengguna (node), sehingga kapasitas sistem tumbuh sebanding dengan jumlah pengguna aktif.",
    190: "Bagi pengguna akhir, manfaat utama CDN adalah kecepatan akses (faster access) dan pengurangan waktu muat (loading latency) karena konten disajikan dari server tepi terdekat.",
    191: "Aplikasi video streaming dan panggilan video membutuhkan jaminan minimum throughput konstan agar video tidak buffering atau mengalami penurunan kualitas secara drastis.",
    193: "Kabel tembaga pilin (Twisted-pair copper wire) adalah contoh media transmisi terpandu (guided media) di mana gelombang sinyal dirambatkan di dalam konduktor fisik padat.",
    194: "Meskipun menggunakan teknologi transmisi yang berbeda-beda, DSL, Cable, FTTH, dan satelit semuanya berfungsi sebagai jaringan akses (access network) yang menghubungkan end system ke router tepi ISP.",
    197: "Arsitektur Peer-to-Peer (P2P) membagi peran peminta layanan (client) dan penyedia layanan (server) secara setara kepada semua simpul (nodes) tanpa server pusat.",
    198: "Ketika intensitas lalu lintas (traffic intensity I = La/R) mendekati 1, panjang antrian di buffer router meningkat secara eksponensial menuju tak hingga (approaches infinity).",
    200: "Keuntungan utama Packet Switching dibandingkan Circuit Switching adalah efisiensi pemanfaatan sumber daya tautan yang jauh lebih tinggi melalui statistical multiplexing.",
    201: "Arsitektur FTTH umumnya menggunakan Passive Optical Networks (PON) yang memanfaatkan splitter optik pasif tanpa komponen elektronik berdaya listrik untuk membagi sinyal fiber ke banyak rumah.",
    202: "ISP tingkat atas (Upper-tier ISPs) saling bertukar lalu lintas data melalui tautan serat optik berkecepatan tinggi membentuk tulang punggung (backbone) Internet global.",
    203: "Receive Window (rwnd) diiklankan oleh penerima kepada pengirim untuk memastikan bahwa laju pengiriman data tidak melebihi kapasitas buffer penerima (Flow Control).",
    205: "DNS query umumnya dikirimkan menggunakan User Datagram Protocol (UDP) port 53 untuk meminimalkan overhead dan latensi pembuatan koneksi.",
    206: "Cumulative ACK pada Go-Back-N berarti bahwa satu pesan ACK dengan nomor N mengonfirmasi bahwa seluruh paket dengan nomor urut hingga N telah berhasil diterima tanpa celah.",
    210: "UDP tidak menjamin keandalan data (unreliable). UDP tidak memiliki jaminan in-order delivery, tidak ada retransmisi paket hilang, dan tidak ada kontrol kongesti.",
    212: "POP3 (Post Office Protocol 3) mengunduh pesan email ke perangkat lokal dan secara default menghapusnya dari server, sehingga tidak mendukung sinkronisasi status baca antar berbagai perangkat.",
    221: "TCP menyediakan model layanan 'Reliable Byte-Stream Delivery': data dialirkan sebagai urutan byte kontinu yang dijamin tiba secara utuh, berurutan, dan tanpa duplikasi.",
    222: "Ketika datagram IP tiba di host penerima, lapisan network melepaskan header IP (dekapsulasi) dan menyerahkan segmen transport yang ada di dalamnya ke transport layer.",
    223: "Web Caching adalah mekanisme penyimpanan salinan objek web yang baru saja diakses ke dalam penyimpanan lokal browser atau proxy untuk mempercepat akses masa depan.",
    226: "Checksum pada header TCP dihitung melingkupi header, payload data, dan pseudo-header IP untuk mendeteksi adanya bit error (kerusakan data) selama transmisi.",
    227: "Dalam kueri DNS Iteratif, server yang dikontak merespons dengan memberikan alamat server DNS berikutnya yang harus dihubungi oleh klien alih-alih mencarikan jawabannya hingga tuntas.",
    228: "Simple Mail Transfer Protocol (SMTP) adalah protokol standar yang digunakan untuk mentransfer pesan email antar server surat (mail server to mail server).",
    229: "Keuntungan efisiensi utama Selective Repeat dibandingkan GBN adalah SR hanya mengirim ulang paket yang dilaporkan rusak atau hilang, menghindari retransmisi paket-paket yang sudah berhasil diterima.",
    231: "Dalam Kueri Rekursif (Recursive Query), server DNS lokal memikul seluruh beban resolusi nama dengan menghubungi server lain secara bertingkat hingga menemukan jawaban untuk klien.",
    233: "ARPANET secara resmi bermigrasi dari protokol NCP ke suite protokol TCP/IP pada tanggal 1 Januari 1983, yang dikenal sebagai 'Flag Day' dalam sejarah Internet.",
    234: "Dalam terminologi jaringan komputer, semua perangkat yang terhubung ke Internet dan menjalankan aplikasi (laptop, HP, server, IoT) secara umum disebut Hosts atau End Systems.",
    236: "Gejala kongesti di dalam jaringan adalah antrian panjang di buffer router yang mengakibatkan peningkatan drastis pada antrian delay (queuing delay) dan packet drop (loss)."
}

print(f"Total custom explanations prepared: {len(custom_exp)}")
