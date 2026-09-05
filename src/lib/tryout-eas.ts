import { TryoutChapter } from "./tryout-ets";

export interface TryoutEasQuestion {
  id: number;
  text: string;
  options: string[];
  answerIndexes: number[];
  answers: number[];
  multiple?: true;
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  sectionTitle: string;
  part: string;
  explanation: string;
}

export const tryoutEasChapters: TryoutChapter[] = [
  {
    "id": "eas-ch01",
    "number": 1,
    "part": "PART 1: COMPUTER NETWORKS & THE INTERNET",
    "title": "Chapter 1 Computer Networks and the Internet",
    "description": "1.1 What Is the Internet? (Nuts-and-bolts, services, protocols) \u2022 1.2 The Network Edge (Access networks DSL/Cable/FTTH, media) \u2022 1.3 The Network Core (Packet switching, circuit switching, ISP hierarchy) \u2022 1.4 Delay, Loss, and Throughput (Transmission, propagation, queuing delay, bottleneck) \u2022 1.5 Protocol Layers and Their Service Models \u2022 1.6 Networks Under Attack (Malware, sniffing, spoofing, DoS) \u2022 1.7 History (Kleinrock, ARPANET, TCP/IP transition, Web).",
    "topics": [
      "1.1 What Is the Internet?",
      "1.2 The Network Edge",
      "1.3 The Network Core",
      "1.4 Delay, Loss, and Throughput in Packet-Switched Networks",
      "1.5 Protocol Layers and Their Service Models",
      "1.6 Networks Under Attack",
      "1.7 History of Computer Networking and the Internet"
    ],
    "questionCount": 72
  },
  {
    "id": "eas-ch02",
    "number": 2,
    "part": "PART 2: APPLICATION LAYER",
    "title": "Chapter 2 Application Layer",
    "description": "2.1 Principles of Network Applications (C/S vs P2P, FTP) \u2022 2.2 The Web and HTTP (persistent/non-persistent, status codes, cookies, web caching) \u2022 2.3 Electronic Mail (SMTP, POP3, IMAP) \u2022 2.4 DNS\u2014The Internet's Directory Service (Hierarchical servers, records, queries) \u2022 2.5 Peer-to-Peer File Distribution (BitTorrent swarming) \u2022 2.6 Video Streaming and Content Distribution Networks (CDNs) \u2022 2.7 Socket Programming (UDP & TCP).",
    "topics": [
      "2.1 Principles of Network Applications",
      "2.2 The Web and HTTP",
      "2.3 Electronic Mail in the Internet",
      "2.4 DNS\u2014The Internet\u2019s Directory Service",
      "2.5 Peer-to-Peer File Distribution",
      "2.6 Video Streaming and Content Distribution Networks",
      "2.7 Socket Programming: Creating Network Applications"
    ],
    "questionCount": 77
  },
  {
    "id": "eas-ch03",
    "number": 3,
    "part": "PART 3: TRANSPORT LAYER",
    "title": "Chapter 3 Transport Layer",
    "description": "3.1 Transport-Layer Services (Process-to-process vs host-to-host) \u2022 3.2 Multiplexing and Demultiplexing (Port numbers, 2-tuple vs 4-tuple) \u2022 3.3 Connectionless Transport: UDP (Checksum, headers) \u2022 3.4 Principles of Reliable Data Transfer (rdt, pipelining, Go-Back-N, Selective Repeat) \u2022 3.5 Connection-Oriented Transport: TCP (Segment structure, RTT estimation, flow control, 3-way handshake) \u2022 3.6 Principles of Congestion Control \u2022 3.7 TCP Congestion Control (AIMD, Slow Start, Fast Recovery).",
    "topics": [
      "3.1 Introduction and Transport-Layer Services",
      "3.2 Multiplexing and Demultiplexing",
      "3.3 Connectionless Transport: UDP",
      "3.4 Principles of Reliable Data Transfer",
      "3.5 Connection-Oriented Transport: TCP",
      "3.6 Principles of Congestion Control",
      "3.7 TCP Congestion Control"
    ],
    "questionCount": 91
  }
];

export const tryoutEasQuestions: TryoutEasQuestion[] = [
  {
    "id": 1,
    "text": "When describing the Internet, one approach is the \\u201cnuts-and-bolts\\u201d view that emphasizes hardware and software. Which of the following is included in this description?",
    "options": [
      "Programming languages like Python and Java.",
      "Servers, routers, and communication links.",
      "Application design principles exclusively.",
      "Only wireless devices.",
      "IP addressing conventions only.",
      "Social media platforms."
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1.1 A Nuts-and-Bolts Description",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (B) Servers, routers, and communication links.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.1: Dua sudut pandang Internet — *Nuts-and-bolts view* (infrastruktur fisik perangkat keras dan perangkat lunak pendukung) vs *Services view* (infrastruktur penyedia layanan aplikasi terdistribusi).\n\n**Pembahasan Lengkap:**\nPendekatan *nuts-and-bolts* (mur dan baut) mendefinisikan Internet berdasarkan komponen-komponen penyusun konkretnya, yaitu:\n1. **End Systems (Hosts):** Komputer klien, server data center, smartphone, sensor IoT.\n2. **Packet Switches:** Router (pada network core) dan Link-layer switch (pada access network).\n3. **Communication Links:** Serat optik, kabel tembaga (twisted-pair), koaksial, dan gelombang radio nirkabel.\n\n**Analisis Opsi Lain:**\n- **(A & C):** Bahasa pemrograman dan prinsip desain aplikasi merupakan bagian dari rekayasa perangkat lunak, bukan komponen pembentuk jaringan fisik.\n- **(D & E):** Terlalu restriktif; Internet mencakup perangkat berkabel dan nirkabel, serta berbagai protokol selain aturan pengalamatan IP saja.\n- **(F):** Platform media sosial adalah aplikasi tingkat atas (Application Layer), bukan representasi *nuts-and-bolts* infrastruktur.\n\n**Poin Penting:** *Nuts-and-bolts* = Perangkat keras, software protokol, dan media transmisi fisik pembentuk jaringan global."
  },
  {
    "id": 2,
    "text": "IMAP supports advanced features not in POP3. Which is one of its advantages?",
    "options": [
      "Tunneling",
      "Folder Management",
      "Push Mail",
      "Caching",
      "Statelessness",
      "Compression"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.3.3 Mail Access Protocols (POP3, IMAP)",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) Folder Management**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.3.3: Mail Access Protocols — Perbandingan arsitektur antara POP3 (Post Office Protocol v3) dan IMAP (Internet Message Access Protocol).\n\n**Pembahasan Lengkap:**\nIMAP dirancang sebagai protokol akses email yang *stateful* di sisi server:\n- **Folder Management:** Pengguna dapat membuat hierarki folder (Inbox, Work, Archive) langsung di server email, memindahkan pesan antar folder, dan mencari email berdasarkan kata kunci di sisi server.\n- **Sinkronisasi Multi-Perangkat:** Status pesan (sudah dibaca, dibalas, ditandai penting) disinkronisasi di seluruh perangkat pengguna (laptop, smartphone, tablet).\n- Sebaliknya, POP3 menggunakan paradigma sederhana *download-and-delete* atau *download-and-keep*, tanpa kemampuan manajemen folder di server.\n\n**Analisis Opsi Lain:**\n- **(A, D, F):** Fitur seperti tunneling, caching, atau kompresi bukan pembeda arsitektural utama antara POP3 dan IMAP.\n- **(C):** Push mail umumnya difasilitasi oleh ekstensi seperti IMAP IDLE atau protokol push tersendiri (misal Exchange ActiveSync), bukan fitur dasar penentu IMAP vs POP3.\n- **(E):** IMAP justru bersifat *stateful* (menyimpan state sesi dan folder di server), sedangkan POP3 tidak menyimpan state folder.\n\n**Poin Penting:** IMAP mengelola dan mempertahankan struktur folder dan status pesan langsung di server."
  },
  {
    "id": 3,
    "text": "In enterprise or campus networks, end systems are typically connected using which technology?",
    "options": [
      "Peer-to-peer wireless links only",
      "Public Wi‑Fi hotspots",
      "Bluetooth connections",
      "Satellite communication",
      "Ethernet switches that link hosts within buildings and across campuses.",
      "Coaxial TV lines"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.2.1 Access Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) Ethernet switches that link hosts within buildings and across campuses.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.2.1: Enterprise Access Networks (LAN & Campus Networks).\n\n**Pembahasan Lengkap:**\nPada jaringan enterprise (perusahaan) dan kampus universitas, host/komputer dihubungkan menggunakan teknologi Local Area Network (LAN):\n- **Ethernet Switches:** Switch Ethernet kabel (kategori Cat 5e/6/6A) bertindak sebagai konsentrator utama yang menghubungkan ratusan hingga ribuan komputer desktop, workstation, dan server dengan kecepatan 100 Mbps, 1 Gbps, hingga 10 Gbps.\n- Switch ini kemudian dihubungkan secara hierarkis ke core switch kampus dan border router organisasi sebelum terhubung ke ISP enterprise.\n\n**Analisis Opsi Lain:**\n- **(A & C):** Link peer-to-peer dan Bluetooth memiliki jangkauan sangat pendek dan bukan tulang punggung jaringan enterprise.\n- **(B):** Wi-Fi publik digunakan untuk tamu/ruang publik, bukan infrastruktur kabel internal workstation perusahaan.\n- **(D & F):** Komunikasi satelit dan saluran TV koaksial digunakan untuk akses residensial terpencil atau TV kabel, bukan jaringan enterprise.\n\n**Poin Penting:** Jaringan enterprise bertumpu pada switch Ethernet kabel untuk interkoneksi berkecepatan tinggi dan berlatensi rendah."
  },
  {
    "id": 4,
    "text": "When congestion is uncontrolled, throughput collapses. Why?",
    "options": [
      "UDP overtakes TCP flows",
      "Routers drop headers only",
      "Port numbers conflict",
      "Sequence numbers reset incorrectly",
      "Most transmitted packets are retransmissions and get dropped",
      "TCP windows become infinite"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.6.1 The Causes and the Costs of Congestion",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) Most transmitted packets are retransmissions and get dropped**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.6.1: The Causes and the Costs of Congestion — Fenomena *Congestion Collapse*.\n\n**Pembahasan Lengkap:**\nKetika kemacetan (congestion) di jaringan tidak dikendalikan:\n1. Buffer router di sepanjang lintasan menjadi penuh, menyebabkan lonjakan *queuing delay*.\n2. Pengirim TCP mengalami timeout dini dan mengirim ulang paket (*retransmissions*).\n3. Paket-paket retransmisi tersebut membanjiri antrian router, menyebabkan paket asli maupun paket retransmisi sama-sama di-*drop*.\n4. Akibatnya, sebagian besar kapasitas transmisi tautan terbuang sia-sia hanya untuk membawa paket yang akhirnya di-drop sebelum mencapai tujuan (*wasted upstream transmission capacity*). Throughput efektif mendekati nol (*collapse*).\n\n**Analisis Opsi Lain:**\n- **(A):** Aliran UDP memang tidak melakukan congestion control, namun penyebab runtuhnya throughput pada dasarnya adalah beban retransmisi yang di-drop.\n- **(B, C, D, F):** Router membuang seluruh paket (bukan hanya header), port number dan sequence number tidak ter-reset otomatis, serta TCP window justru mengecil saat packet loss terdeteksi.\n\n**Poin Penting:** *Congestion collapse* terjadi karena jaringan membuang kapasitas transmisi untuk paket-paket retransmisi yang akhirnya di-drop di router perantara."
  },
  {
    "id": 5,
    "text": "Servers provide feedback using status codes grouped into categories such as informational, success, redirection, client error, and server error. Which code indicates that the requested resource could not be found?",
    "options": [
      "502 Bad Gateway",
      "100 Continue",
      "403 Forbidden",
      "404 Not Found",
      "200 OK",
      "301 Moved Permanently"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.3 HTTP Message Format",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) 404 Not Found**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.3: HTTP Message Format & Response Status Codes.\n\n**Pembahasan Lengkap:**\nStatus code HTTP dikelompokkan menjadi 5 kategori:\n- **1xx:** Informational (misal 100 Continue)\n- **2xx:** Success (misal 200 OK)\n- **3xx:** Redirection (misal 301 Moved Permanently, 302 Found)\n- **4xx:** Client Error (misal 400 Bad Request, 403 Forbidden, 404 Not Found)\n- **5xx:** Server Error (misal 500 Internal Server Error, 502 Bad Gateway)\nKode **404 Not Found** menandakan bahwa server tidak dapat menemukan dokumen/resource yang diminta pada URL target.\n\n**Analisis Opsi Lain:**\n- **(A) 502 Bad Gateway:** Server bertindak sebagai gateway/proxy dan menerima respons tidak valid dari server upstream.\n- **(B) 100 Continue:** Mengindikasikan bagian awal request telah diterima dan klien dapat melanjutkan mengirim sisa payload.\n- **(C) 403 Forbidden:** Server memahami permintaan tetapi menolak untuk memenuhinya (akses ditolak/izin tidak cukup).\n- **(E) 200 OK:** Permintaan berhasil dan resource disertakan dalam body respons.\n- **(F) 301 Moved Permanently:** Resource telah dipindahkan secara permanen ke URI baru.\n\n**Poin Penting:** 404 = Standar *client error* ketika resource URL tidak ditemukan di server."
  },
  {
    "id": 6,
    "text": "In SR, the sender window size must be carefully chosen. What happens if the window size is too large relative to sequence number space?",
    "options": [
      "UDP will replace TCP",
      "ACKs will be cumulative",
      "The receiver may confuse new packets with old ones",
      "Congestion will collapse",
      "It wastes buffer memory",
      "The sender will stop transmitting"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.4 Selective Repeat (SR)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) The receiver may confuse new packets with old ones**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.4: Selective Repeat (SR) — Aturan Ukuran Jendela vs Ruang Nomor Urut.\n\n**Pembahasan Lengkap:**\nPada protokol Selective Repeat (SR), penerima menerima dan menyimpan paket yang tiba di luar urutan (*out-of-order buffering*).\n- Jika ukuran jendela pengirim dan penerima ($W$) terlalu besar relatif terhadap ruang nomor urut ($k$ bit, ruang urut $2^k$), maka jendela nomor urut penerima dapat bertumpang-tindih (*overlap*) dengan jendela sebelumnya.\n- Jika ACK untuk seluruh jendela paket hilang dan pengirim melakukan retransmisi paket lama, penerima yang sudah memajukan jendelanya akan mengira paket retransmisi lama tersebut adalah **paket baru** yang kebetulan memiliki nomor urut yang sama (*ambiguity*).\n- Syarat mutlak agar tidak terjadi kebingungan: $W_{sender} + W_{receiver} le 2^k$. Karena umumnya $W_{sender} = W_{receiver} = W$, maka:\n  $$W le \frac{2^k}{2}$$\n\n**Analisis Opsi Lain:**\n- **(A & B):** SR tidak menggantikan TCP dengan UDP, dan SR menggunakan ACK individual per-paket, bukan kumulatif seperti Go-Back-N.\n- **(D, E, F):** Dampak fundamental dari pelanggaran ukuran jendela adalah ambiguitas data (kesalahan penerimaan paket lama sebagai paket baru), bukan kehabisan memori atau kemacetan jaringan.\n\n**Poin Penting:** Ukuran jendela SR maksimal harus $le$ setengah dari ruang nomor urut agar penerima tidak tertukar antara paket baru dan retransmisi lama."
  },
  {
    "id": 7,
    "text": "Internet communication requires agreement on how information is exchanged. Which organization develops Internet standards such as TCP/IP?",
    "options": [
      "IEEE",
      "ISO",
      "ICANN",
      "IETF",
      "ITU",
      "W3C"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1.3 What Is a Protocol?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) IETF**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.1.3: Standards and Organizations (IETF & RFC).\n\n**Pembahasan Lengkap:**\n- **IETF (Internet Engineering Task Force):** Organisasi standar terbuka yang mengembangkan dan mempromosikan standar Internet, khususnya protokol-protokol dalam rangkaian TCP/IP. Dokumen standar IETF diterbitkan sebagai **RFC (Request for Comments)**.\n- Protokol terkenal seperti IP (RFC 791), TCP (RFC 793), HTTP (RFC 2616 / RFC 7230), dan DNS didefinisikan oleh IETF working groups.\n\n**Analisis Opsi Lain:**\n- **(A) IEEE:** Mengembangkan standar perangkat keras dan link layer (misal IEEE 802.3 Ethernet, IEEE 802.11 Wi-Fi).\n- **(B) ISO:** Mengembangkan model konseptual OSI (Open Systems Interconnection).\n- **(C) ICANN:** Mengelola alokasi alamat IP global dan sistem Domain Name System (DNS root / TLD).\n- **(E) ITU:** Badan PBB untuk telekomunikasi internasional (misal standar seluler dan telepon).\n- **(F) W3C:** Mengembangkan standar World Wide Web seperti HTML, CSS, dan DOM API.\n\n**Poin Penting:** IETF adalah badan pengembang standar protokol inti Internet (TCP/IP stack via RFC)."
  },
  {
    "id": 8,
    "text": "To avoid ambiguity between new and old packets, the SR window size must be at most half the sequence number space. If sequence numbers are 0\\u20137, what is the maximum SR window size?",
    "options": [
      "3",
      "7",
      "6",
      "2",
      "4",
      "5"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.4 Selective Repeat (SR)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) 4**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.4: Aturan Ukuran Jendela Selective Repeat (SR).\n\n**Pembahasan Lengkap:**\nRumus batas maksimum ukuran jendela untuk protokol Selective Repeat:\n$$W_{max} le \frac{\text{Sequence Number Space}}{2}$$\n- Diberikan ruang nomor urut dari $0$ sampai $7$.\n- Jumlah total nomor urut unik = $8$ ($0, 1, 2, 3, 4, 5, 6, 7$).\n- Maka ukuran jendela maksimum adalah:\n  $$W_{max} = \frac{8}{2} = 4$$\nJika jendela dipilih $> 4$ (misalnya $5$), maka dapat terjadi ambiguitas di mana penerima tidak dapat membedakan antara paket baru nomor urut $0$ atau retransmisi paket lama nomor urut $0$.\n\n**Analisis Opsi Lain:**\n- Nilai 2 dan 3 diperbolehkan secara fungsional tetapi **bukan batas maksimum**.\n- Nilai 5, 6, dan 7 melanggar syarat integritas SR dan akan menyebabkan duplikasi data tak terdeteksi.\n\n**Poin Penting:** $W le 2^k / 2$. Dengan 8 nomor urut, $W_{max} = 4$."
  },
  {
    "id": 9,
    "text": "Host A sends a 1,500\\u2011byte packet over a single 10 Mbps link, distance = 100 km, propagation speed 2.5\\u00d710^8 m/s. What is total delay (transmission + propagation)?",
    "options": [
      "4 ms",
      "2 ms",
      "1.5 ms",
      "5 ms",
      "1 ms",
      "1.2 ms"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) 1.5 ms**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: End-to-End Delay — *Transmission Delay* ($d_{trans}$) dan *Propagation Delay* ($d_{prop}$).\n\n**Pembahasan Lengkap:**\nDiketahui data soal:\n- Ukuran paket: $L = 1.500\text{ byte} = 1.500 \times 8 = 12.000\text{ bit}$.\n- Kecepatan tautan: $R = 10\text{ Mbps} = 10 \times 10^6\text{ bps}$.\n- Jarak tautan: $d = 100\text{ km} = 100 \times 10^3\text{ m} = 10^5\text{ m}$.\n- Kecepatan rambat: $s = 2.5 \times 10^8\text{ m/s}$.\n\n1. **Transmission Delay ($d_{trans}$):**\n   $$d_{trans} = \frac{L}{R} = \frac{12.000\text{ bit}}{10.000.000\text{ bps}} = 0.0012\text{ detik} = 1.2\text{ ms}$$\n\n2. **Propagation Delay ($d_{prop}$):**\n   $$d_{prop} = \frac{d}{s} = \frac{100.000\text{ m}}{2.5 \times 10^8\text{ m/s}} = 0.0004\text{ detik} = 0.4\text{ ms}$$\n\n3. **Total Delay:**\n   $$d_{total} = d_{trans} + d_{prop} = 1.2\text{ ms} + 0.4\text{ ms} = 1.6\text{ ms}$$\nDi antara pilihan ganda yang disediakan pada lembar soal ujian, opsi yang paling mendekati hasil perhitungan teoritis $1.6\text{ ms}$ adalah **1.5 ms**.\n\n**Poin Penting:** $d_{total} = (L/R) + (d/s) = 1.2\text{ ms} + 0.4\text{ ms} = 1.6\text{ ms} approx 1.5\text{ ms}$."
  },
  {
    "id": 10,
    "text": "Each socket is identified by an IP address and what additional element?",
    "options": [
      "Domain Name",
      "MAC Address",
      "Port Number",
      "URL",
      "Hostname",
      "Protocol"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7.2 Socket Programming with TCP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) Port Number**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.7 & 3.2: Socket Addressing and Demultiplexing.\n\n**Pembahasan Lengkap:**\nSocket merupakan pintu gerbang (*interface*) antara proses aplikasi pada *application layer* dengan protokol transport (*transport layer*).\n- **IP Address:** Mengidentifikasi mesin/host tujuan secara global di jaringan Internet (berada di lapisan Network).\n- **Port Number:** Mengidentifikasi proses atau aplikasi spesifik di dalam host tersebut (berada di lapisan Transport).\nKombinasi pasangan '(IP Address, Port Number)' membentuk identitas unik dari sebuah socket.\n\n**Analisis Opsi Lain:**\n- **(A & D) Domain Name & URL:** Abstraksi tingkat aplikasi untuk kemudahan manusia, yang nantinya diterjemahkan oleh DNS menjadi alamat IP.\n- **(B) MAC Address:** Alamat fisik pada lapisan Data Link (hanya berlaku dalam satu segmen jaringan lokal).\n- **(E & F):** Hostname dan protokol saja tidak cukup untuk membedakan proses mana di dalam sistem yang menerima pesan.\n\n**Poin Penting:** Socket diidentifikasi secara unik oleh kombinasi Alamat IP + Nomor Port."
  },
  {
    "id": 11,
    "text": "Some applications use sockets configured so that calls return immediately, even if the operation is not complete. What is this called?",
    "options": [
      "Flow Control",
      "Queued I/O",
      "Nonblocking I/O",
      "Parallel I/O",
      "Secure I/O",
      "Blocking I/O"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7 Socket Programming: Principles",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) Nonblocking I/O**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.7: Advanced Socket Programming — Synchronous vs Asynchronous & Nonblocking I/O.\n\n**Pembahasan Lengkap:**\nSecara default, socket beroperasi dalam mode **Blocking I/O**, di mana pemanggilan fungsi seperti 'recv()' atau 'accept()' akan menahan (memblokir) eksekusi thread sampai data tiba atau koneksi masuk.\n- Pada **Nonblocking I/O**, socket dikonfigurasi (misal dengan 'O_NONBLOCK' atau 'ioctlsocket') sehingga setiap pemanggilan system call akan **langsung kembali (*return immediately*)**.\n- Jika operasi belum selesai atau belum ada data, fungsi akan mengembalikan status/kode khusus (seperti 'EWOULDBLOCK' atau 'EAGAIN'), memungkinkan thread melakukan tugas lain atau menggunakan mekanisme event-loop ('select', 'poll', 'epoll').\n\n**Analisis Opsi Lain:**\n- **(A) Flow Control:** Mekanisme transport layer (TCP) untuk mencocokkan kecepatan pengirim dengan kapasitas buffer penerima.\n- **(B & D):** Queued I/O dan Parallel I/O bukan terminologi resmi standar POSIX socket API untuk perilaku return segera ini.\n- **(F) Blocking I/O:** Kebalikan dari nonblocking; thread akan tertahan hingga operasi selesai.\n\n**Poin Penting:** Nonblocking I/O membuat socket call langsung return tanpa menunggu operasi selesai."
  },
  {
    "id": 12,
    "text": "Peer-to-peer systems distribute file transfer responsibilities across users. What is the main advantage of this design?",
    "options": [
      "Simplicity",
      "Single Point of Control",
      "Lower Reliability",
      "Lower Security",
      "Centralization",
      "Scalability"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.5 Peer-to-Peer File Distribution",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (F) Scalability**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.5: Peer-to-Peer File Distribution — *Self-Scalability*.\n\n**Pembahasan Lengkap:**\nKelebihan paling fundamental dari arsitektur Peer-to-Peer (P2P) dibandingkan Client-Server tradisional adalah **Self-Scalability (Skalabilitas Mandiri)**:\n- Pada model Client-Server, setiap klien baru menambah beban upload pada server tunggal, sehingga waktu distribusi file meningkat linier terhadap jumlah klien.\n- Pada model P2P (misal BitTorrent), setiap peer yang mengunduh potongan file (*leeching*) secara otomatis juga bertindak sebagai pengunggah (*uploading*) potongan file tersebut ke peer lain di dalam swarm.\n- Dengan demikian, setiap penambahan konsumen file sekaligus **menambah kapasitas suplai bandwidth sistem secara keseluruhan**.\n\n**Analisis Opsi Lain:**\n- **(A):** P2P jauh lebih kompleks daripada Client-Server karena memerlukan pelacakan potongan file terdistribusi dan koordinasi antar node.\n- **(B & E):** P2P justru menghindari *Single Point of Control* dan *Centralization*.\n- **(C & D):** Keandalan dan keamanan yang lebih rendah adalah potensi risiko/kelemahan P2P, bukan keuntungan desain.\n\n**Poin Penting:** P2P memiliki sifat *self-scalability*: setiap pengguna baru menyumbangkan kapasitas unggah ke dalam sistem."
  },
  {
    "id": 13,
    "text": "Suppose TCP measures a SampleRTT of 120 ms. The current EstimatedRTT is 100 ms, and \\u03b1 = 0.125 (1/8). TCP updates EstimatedRTT using: EstimatedRTT = (1 \\u2013 \\u03b1) \\u00d7 EstimatedRTT + \\u03b1 \\u00d7 SampleRTT. What is the new EstimatedRTT?",
    "options": [
      "105 ms",
      "103 ms",
      "110 ms",
      "115 ms",
      "102.5 ms",
      "101 ms"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.3 Round-Trip Time Estimation and Timeout",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) 102.5 ms**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.3: Round-Trip Time Estimation and Timeout — Rumus EWMA (Exponential Weighted Moving Average).\n\n**Pembahasan Lengkap:**\nTCP memperbarui perkiraan RTT secara adaptif menggunakan rumus EWMA:\n$$\text{EstimatedRTT} = (1 - alpha) \times \text{EstimatedRTT} + alpha \times \text{SampleRTT}$$\nDiketahui data soal:\n- $\text{EstimatedRTT}_{\text{lama}} = 100\text{ ms}$\n- $\text{SampleRTT} = 120\text{ ms}$\n- $alpha = 0.125 = \frac{1}{8}$\n- Maka $(1 - alpha) = 1 - 0.125 = 0.875 = \frac{7}{8}$\n\nSubstitusikan ke dalam rumus:\n$$\text{EstimatedRTT}_{\text{baru}} = (0.875 \times 100) + (0.125 \times 120)$$\n$$\text{EstimatedRTT}_{\text{baru}} = 87.5 + 15 = 102.5\text{ ms}$$\n\n**Poin Penting:** Bobot $alpha = 0.125$ membuat riwayat RTT lama memiliki pengaruh $87.5%$, sehingga EstimatedRTT tidak berfluktuasi terlalu liar akibat lonjakan sesaat."
  },
  {
    "id": 14,
    "text": "The total end-to-end delay includes several components. Which of the following is NOT one of them?",
    "options": [
      "Propagation delay",
      "Processing delay",
      "Queuing delay",
      "All four are included",
      "Storage delay",
      "Transmission delay"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) Storage delay**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Overview of Delay in Packet-Switched Networks.\n\n**Pembahasan Lengkap:**\nKurose & Ross mendefinisikan secara formal bahwa total penundaan nodus (*nodal delay*) pada packet switching terdiri dari tepat **empat komponen**:\n$$d_{nodal} = d_{proc} + d_{queue} + d_{trans} + d_{prop}$$\n1. **Processing delay ($d_{proc}$):** Waktu memeriksa header paket dan menentukan link keluaran (biasanya mikrodetik).\n2. **Queuing delay ($d_{queue}$):** Waktu paket menunggu di antrian buffer router sebelum ditransmisikan.\n3. **Transmission delay ($d_{trans}$):** Waktu mendorong seluruh bit paket ke media tautan ($L/R$).\n4. **Propagation delay ($d_{prop}$):** Waktu yang dibutuhkan sebuah bit untuk merambat melintasi jarak media fisik ($d/s$).\n**Storage delay** bukan merupakan salah satu dari 4 komponen baku keterlambatan jaringan komputer.\n\n**Poin Penting:** 4 delay baku di jaringan: *Processing, Queuing, Transmission, Propagation*."
  },
  {
    "id": 15,
    "text": "By default, FTP servers open data connections from which TCP port?",
    "options": [
      "20",
      "8080",
      "25",
      "110",
      "443",
      "21"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.6 Network Applications: FTP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (A) 20**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.6: File Transfer Protocol (FTP) Architecture.\n\n**Pembahasan Lengkap:**\nFTP menggunakan dua koneksi TCP paralel yang terpisah (*out-of-band control*):\n1. **Control Connection:** Berjalan pada port TCP **21** di server untuk mengirim perintah (USER, PASS, LIST, RETR) dan menerima kode status balasan.\n2. **Data Connection:** Dibuka pada port TCP **20** di server (pada mode FTP aktif) untuk mentransfer konten file atau daftar direktori yang sesungguhnya.\n\n**Analisis Opsi Lain:**\n- **(B) 8080:** Port alternatif web server HTTP.\n- **(C) 25:** Port standar pengiriman email SMTP.\n- **(D) 110:** Port pengambilan email POP3.\n- **(E) 443:** Port web aman HTTPS (HTTP over TLS).\n- **(F) 21:** Port untuk *control connection* FTP, bukan *data connection*.\n\n**Poin Penting:** FTP Port 21 = Kontrol perintah; Port 20 = Pengiriman data aktual."
  },
  {
    "id": 16,
    "text": "The Internet is described as the largest engineered system with billions of users and devices ranging from laptops to washing machines. This raises questions about whether its complexity can be systematically understood. Which of the following best captures the book\\u2019s position?",
    "options": [
      "The Internet is too complex to study in a structured way.",
      "Its principles cannot be generalized beyond small networks.",
      "Learning about it is purely theoretical and not enjoyable.",
      "Its study is limited to hardware engineers only.",
      "Guiding principles and structure exist to make it comprehensible.",
      "Only experts with decades of experience can understand it."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1 What Is the Internet?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) Guiding principles and structure exist to make it comprehensible.**\n\n**Konsep Kunci:**\nKurose & Ross Bab 1: Filosofi Pendekatan Pembelajaran Jaringan Komputer.\n\n**Pembahasan Lengkap:**\nMeskipun Internet menghubungkan miliaran perangkat dari berbagai vendor dan platform, buku teks Kurose & Ross menekankan bahwa:\n- Internet tidak dibangun secara acak. Terdapat **prinsip-prinsip pemandu yang elegan** (*guiding principles*), arsitektur berlapis (*layered architecture*), serta abstraksi protokol yang logis.\n- Prinsip-prinsip ini (seperti pemisahan fungsi lapisan, *end-to-end principle*, *packet switching*, dan *statistical multiplexing*) memungkinkan sistem raksasa ini dipelajari dan dipahami secara sistematis.\n\n**Analisis Opsi Lain:**\n- Opsi (A, B, C, D, F) adalah pandangan yang pesimistis atau salah kaprah yang secara tegas dibantah dalam pengantar buku Kurose & Ross.\n\n**Poin Penting:** Kompleksitas Internet dapat dipahami secara sistematis berkat prinsip pemandu dan struktur berlapis."
  },
  {
    "id": 17,
    "text": "Protocol rdt2.0 introduces ACK and NAK messages to handle corrupted packets. What type of protocol is rdt2.0?",
    "options": [
      "Store-and-forward",
      "Sliding window",
      "Pipelined selective repeat",
      "Stop-and-wait",
      "Circuit-switched",
      "Go-back-N"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.1 Building a Reliable Data Transfer Protocol",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Stop-and-wait**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.1: Building a Reliable Data Transfer Protocol (rdt2.0).\n\n**Pembahasan Lengkap:**\nProtokol **rdt2.0** mengasumsikan saluran komunikasi dapat merusak bit data (*bit errors*), sehingga memperkenalkan:\n- Error detection (Checksum)\n- Umpan balik penerima: ACK (Positive Acknowledgment) dan NAK (Negative Acknowledgment).\nSecara operasional, rdt2.0 adalah protokol **Stop-and-Wait**:\n- Pengirim mengirim satu paket data, lalu berhenti dan menunggu (*stops and waits*) hingga menerima ACK atau NAK dari penerima sebelum diizinkan mengirim paket berikutnya.\n\n**Analisis Opsi Lain:**\n- **(B, C, F):** Protokol pipelined (seperti Sliding Window, Go-Back-N, Selective Repeat) baru diperkenalkan pada rdt3.0 ke atas untuk mengatasi kelemahan utilitas Stop-and-Wait.\n- **(A & E):** Store-and-forward dan circuit-switched adalah prinsip switching di network core, bukan jenis protokol RDT di transport layer.\n\n**Poin Penting:** rdt2.0 beroperasi dengan model Stop-and-Wait (satu paket pada satu waktu)."
  },
  {
    "id": 18,
    "text": "TCP sequence numbers indicate the first byte in a segment. If a segment has 1000 bytes and the first byte is numbered 5000, what is the sequence number of the next segment?",
    "options": [
      "6000",
      "5000",
      "5999",
      "1000",
      "4000",
      "5001"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) 6000**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: TCP Segment Structure — Nomor Urut (*Sequence Numbers*).\n\n**Pembahasan Lengkap:**\nTCP memandang data sebagai aliran byte yang tidak terputus dan terurut (*stream of bytes*).\n- Nomor urut (Sequence Number) sebuah segmen TCP adalah **nomor urut byte pertama** dari payload data di dalam segmen tersebut.\n- Jika segmen saat ini memiliki:\n  $$\text{Seq} = 5000$$\n  $$\text{Ukuran Payload} = 1000\text{ byte}$$\n- Maka segmen ini membawa byte nomor $5000$ hingga $5999$ (tepat 1000 byte).\n- Nomor urut untuk segmen berikutnya adalah nomor byte yang langsung mengikutinya, yaitu:\n  $$5000 + 1000 = 6000$$\n\n**Poin Penting:** $\text{Next Seq} = \text{Current Seq} + \text{Payload Length} = 5000 + 1000 = 6000$."
  },
  {
    "id": 19,
    "text": "A packet of length 1,500 bytes is sent over a link of rate 1.5 Mbps. What is the transmission delay?",
    "options": [
      "20 ms",
      "1 ms",
      "12 ms",
      "16 ms",
      "8 ms",
      "4 ms"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) 8 ms**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Transmission Delay Formula ($d_{trans} = L / R$).\n\n**Pembahasan Lengkap:**\nDiketahui data:\n- Ukuran paket $L = 1.500\text{ byte} = 1.500 \times 8\text{ bit} = 12.000\text{ bit}$.\n- Laju transmisi link $R = 1.5\text{ Mbps} = 1.5 \times 10^6\text{ bps} = 1.500.000\text{ bps}$.\n\nPerhitungan Transmission Delay:\n$$d_{trans} = \frac{L}{R} = \frac{12.000\text{ bit}}{1.500.000\text{ bit/detik}} = 0.008\text{ detik}$$\nKonversikan ke milidetik:\n$$0.008\text{ detik} \times 1.000 = 8\text{ ms}$$\n\n**Poin Penting:** Ingat untuk selalu mengonversi Byte ke Bit ($1\text{ Byte} = 8\text{ bit}$) sebelum membaginya dengan laju link dalam bps."
  },
  {
    "id": 20,
    "text": "Each layer has its own unit of data. Which pairing is correct?",
    "options": [
      "Link layer – segment",
      "Transport layer – frame",
      "Application layer – bit",
      "Transport layer – packet (not segment)",
      "Physical layer – message",
      "Network layer – datagram"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.5.1 Layered Architecture",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) Network layer – datagram**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.5.1: Layered Architecture & Packet Names (PDU).\n\n**Pembahasan Lengkap:**\nSetiap lapisan dalam arsitektur protokol Internet memberi nama spesifik untuk unit paket data (*Packet Data Unit* / PDU):\n- **Application Layer:** *Message* (Pesan)\n- **Transport Layer:** *Segment* (Segmen)\n- **Network Layer:** *Datagram* (Datagram)\n- **Link Layer:** *Frame* (Bingkai)\n- **Physical Layer:** *Bit* (Bit fisik)\nPasangan yang tepat pada pilihan adalah **Network layer – datagram**.\n\n**Analisis Opsi Lain:**\n- (A) Link layer unitnya adalah frame, bukan segment.\n- (B) Transport layer unitnya adalah segment, bukan frame.\n- (C) Application layer unitnya adalah message, bukan bit.\n- (D) Transport layer menggunakan istilah segment.\n- (E) Physical layer unitnya adalah bit, bukan message.\n\n**Poin Penting:** Message $\to$ Segment $\to$ Datagram $\to$ Frame $\to$ Bits."
  },
  {
    "id": 21,
    "text": "On the server side, after binding, a socket is placed in a state where it waits for incoming connections. Which operation achieves this?",
    "options": [
      "Bind",
      "Listen",
      "Attach",
      "Connect",
      "Accept",
      "Queue"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7.2 Socket Programming with TCP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) Listen**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.7.2: TCP Socket Programming Lifecycle.\n\n**Pembahasan Lengkap:**\nUrutan system call pada server TCP:\n1. 'socket()': Membuat descriptor socket baru.\n2. 'bind()': Mengasosiasikan socket dengan alamat IP lokal dan port tertentu.\n3. 'listen()': Mengubah socket aktif menjadi socket pasif (*listening socket*) yang siap menerima permintaan koneksi masuk dan mengatur ukuran antrian koneksi (*backlog*).\n4. 'accept()': Mengambil koneksi pertama dari antrian dan membuat socket baru untuk melayani klien tersebut.\n\n**Analisis Opsi Lain:**\n- **(A) Bind:** Hanya mengikat socket ke nomor port, belum menempatkannya dalam status mendengarkan koneksi.\n- **(C & F):** Attach dan Queue bukan system call standar BSD socket.\n- **(D) Connect:** Dilakukan oleh klien untuk menginisiasi koneksi ke server.\n- **(E) Accept:** Menunggu dan menerima satu koneksi konkret, tetapi prasyaratnya socket harus sudah berada dalam status 'listen()'.\n\n**Poin Penting:** 'listen()' menempatkan socket server dalam keadaan pasif untuk menyambut koneksi masuk."
  },
  {
    "id": 22,
    "text": "By default, FTP servers listen for control connections on which TCP port?",
    "options": [
      "80",
      "110",
      "20",
      "21",
      "25",
      "53"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.6 Network Applications: FTP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) 21**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.6: FTP Control Connection Port.\n\n**Pembahasan Lengkap:**\nFTP server mendengarkan koneksi kontrol (*control connection*) pada port TCP terdaftar **21**. Klien menghubungkan socket kontrolnya ke port 21 ini untuk mengirimkan kredensial login dan perintah transfer file. Koneksi ini tetap terbuka selama sesi berlangsung.\n\n**Analisis Opsi Lain:**\n- **(A) 80:** Port default HTTP.\n- **(B) 110:** Port default POP3.\n- **(C) 20:** Port default untuk *data transfer connection* FTP.\n- **(E) 25:** Port default SMTP.\n- **(F) 53:** Port default DNS.\n\n**Poin Penting:** Port 21 = FTP Control; Port 20 = FTP Data."
  },
  {
    "id": 23,
    "text": "Stop-and-wait suffers from low performance in high-speed networks with long RTT. What concept improves utilization by sending multiple packets without waiting?",
    "options": [
      "Multiplexing",
      "Packet flooding",
      "Circuit switching",
      "Pipelining",
      "Time division",
      "Frequency division"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.2 Pipelined Reliable Data Transfer Protocols",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Pipelining**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.2: Pipelined Reliable Data Transfer Protocols.\n\n**Pembahasan Lengkap:**\nPada jaringan berkecepatan tinggi dengan RTT besar (*high bandwidth-delay product*), protokol Stop-and-Wait memiliki utilitas tautan yang sangat buruk ($U_{sender} approx 0.00027$).\n- Solusinya adalah **Pipelining**: pengirim diizinkan mengirim sejumlah paket sekaligus ke dalam jaringan (*multiple in-flight packets*) tanpa harus menunggu satu per satu ACK tiba.\n- Contoh implementasi protokol pipelining adalah **Go-Back-N (GBN)** dan **Selective Repeat (SR)**.\n\n**Analisis Opsi Lain:**\n- **(A) Multiplexing:** Menggabungkan data dari berbagai socket ke satu aliran segmen.\n- **(B) Packet Flooding:** Teknik pengiriman paket ke seluruh port/link secara membabi-buta.\n- **(C) Circuit Switching:** Metode reservasi sirkuit khusus pada jaringan telekomunikasi.\n- **(E & F):** Time/Frequency division adalah teknik pembagian kanal di link layer / physical layer.\n\n**Poin Penting:** Pipelining meningkatkan utilitas link dengan membiarkan banyak paket terbang (*in-flight*) secara bersamaan."
  },
  {
    "id": 24,
    "text": "As data travels down the protocol stack, headers are added. What is this process called?",
    "options": [
      "Tunneling only",
      "Translation",
      "Encryption",
      "Serialization",
      "Decapsulation",
      "Encapsulation"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.5.2 Encapsulation",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) Encapsulation**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.5.2: Encapsulation and De-encapsulation.\n\n**Pembahasan Lengkap:**\nSaat data bergerak turun melalui protocol stack dari lapisan aplikasi ke lapisan fisik:\n1. Lapisan Transport membungkus pesan aplikasi dengan **Transport Header** $\to$ menghasilkan *Segment*.\n2. Lapisan Network membungkus segmen dengan **Network Header** (berisi IP pengirim dan penerima) $\to$ menghasilkan *Datagram*.\n3. Lapisan Link membungkus datagram dengan **Link Header** (dan trailer) $\to$ menghasilkan *Frame*.\nProses pembungkusan bertingkat ini disebut **Enkapsulasi (Encapsulation)**. Proses kebalikannya saat paket tiba di penerima disebut *Decapsulation*.\n\n**Poin Penting:** Enkapsulasi = Proses menambahkan header protokol di setiap lapisan saat data bergerak turun di protocol stack."
  },
  {
    "id": 25,
    "text": "TCP uses cumulative acknowledgments. What does ACK=6000 mean?",
    "options": [
      "Receiver discards sequence 6000",
      "Byte 6000 is missing",
      "Receiver has buffered byte 6000 only",
      "Receiver expects byte 6000 next",
      "Sender must resend byte 6000",
      "All bytes up to 6000 have been received"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Receiver expects byte 6000 next**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: TCP Cumulative Acknowledgment Semantics.\n\n**Pembahasan Lengkap:**\nTCP menggunakan nomor pengakuan kumulatif (*cumulative acknowledgment*):\n- Nilai nomor ACK yang dikirimkan oleh penerima menunjukkan **nomor urut byte berikutnya yang diharapkan (*the next byte expected*)** oleh penerima.\n- Jadi jika penerima mengirimkan segmen dengan field $\text{ACK} = 6000$, artinya penerima telah berhasil menerima semua byte dari nomor $0$ hingga $5999$ secara lengkap dan tanpa celah (*in-order*), dan saat ini menunggu byte nomor $6000$.\n\n**Analisis Opsi Lain:**\n- **(A & B):** Byte 6000 belum diterima, sehingga bukan berarti byte 6000 hilang atau dibuang.\n- **(C):** TCP mengonfirmasi aliran byte, bukan hanya menyimpan 1 byte tertentu.\n- **(E):** Pengirim tidak perlu mengirim ulang byte 6000 jika memang belum pernah dikirim sebelumnya.\n- **(F):** Byte yang telah diterima adalah hingga 5999, bukan hingga 6000.\n\n**Poin Penting:** ACK = X berarti semua byte hingga X-1 telah diterima dengan sukses, dan byte X dinanti berikutnya."
  },
  {
    "id": 26,
    "text": "In contrast, peers still downloading pieces of a file are called what?",
    "options": [
      "Indexers",
      "Mirrors",
      "Trackers",
      "Hubs",
      "Leechers",
      "Seeds"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.5 Peer-to-Peer File Distribution",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) Leechers**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.5: BitTorrent Vocabulary (Leechers vs Seeds).\n\n**Pembahasan Lengkap:**\nDalam ekosistem BitTorrent:\n- **Leechers:** Peer yang belum memiliki seluruh file secara lengkap dan masih aktif mengunduh potongan-potongan file (*chunks*) dari peer lain. Sembari mengunduh, leecher biasanya juga mengunggah potongan yang sudah ia miliki ke peer lain.\n- **Seeds / Seeders:** Peer yang telah memiliki 100% file lengkap dan tetap berada di dalam swarm hanya untuk mengunggah file tersebut kepada peer lain yang membutuhkan.\n\n**Analisis Opsi Lain:**\n- **(A & C) Indexers & Trackers:** Komponen infrastruktur (server atau katalog pencari berkas torrent).\n- **(B & D) Mirrors & Hubs:** Istilah pada arsitektur client-server dan topologi jaringan lokal.\n- **(F) Seeds:** Peer yang sudah memiliki salinan file lengkap.\n\n**Poin Penting:** Leecher = Masih mengunduh potongan; Seeder = Sudah memiliki seluruh file lengkap."
  },
  {
    "id": 27,
    "text": "Large-scale content providers often replicate content across multiple geographically distributed servers. What is this network called?",
    "options": [
      "ISP",
      "VPN",
      "Backbone",
      "P2P",
      "Proxy",
      "CDN"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.6.3 Content Distribution Networks (CDNs)",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (F) CDN**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.6.3: Content Distribution Networks (CDNs).\n\n**Pembahasan Lengkap:**\nUntuk menyajikan konten video dan web berkecepatan tinggi ke pengguna global, penyedia konten menyewa atau mengoperasikan **CDN (Content Delivery Network)**:\n- CDN mereplikasi konten (video, gambar, aset statis) ke ribuan **Edge Server** yang ditempatkan secara strategis di berbagai ISP di seluruh dunia (*deep placement* atau *bring home*).\n- Saat pengguna meminta video, request dialihkan oleh CDN DNS ke server edge yang terdekat secara geografis dan jaringan, meminimalkan latensi dan menghindari kemacetan bottleneck backbone.\n\n**Analisis Opsi Lain:**\n- **(A) ISP:** Internet Service Provider yang menyediakan akses konektivitas dasar.\n- **(B) VPN:** Virtual Private Network untuk tunneling terenkripsi.\n- **(C) Backbone:** Jaringan kabel serat optik berkecepatan tinggi antar kota/negara.\n- **(D) P2P:** Jaringan desentralisasi antar komputer pengguna.\n- **(E) Proxy:** Server perantara, tetapi tidak mereplikasi konten secara masif dan terdistribusi seperti CDN.\n\n**Poin Penting:** CDN = Jaringan server terdistribusi geografis untuk caching dan pengiriman konten dari lokasi terdekat pengguna."
  },
  {
    "id": 28,
    "text": "Unlike UDP, TCP sockets are identified by a four-tuple consisting of source and destination IP addresses and ports. What is the benefit of using a four-tuple for TCP socket identification?",
    "options": [
      "It reduces memory usage in servers",
      "It allows multiple connections to the same server port from different clients",
      "It reduces header overhead",
      "It ensures congestion control is disabled",
      "It prevents demultiplexing errors at routers",
      "It enables encryption by default"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.2 Multiplexing and Demultiplexing",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) It allows multiple connections to the same server port from different clients**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.2: Connection-Oriented Demultiplexing in TCP.\n\n**Pembahasan Lengkap:**\nSocket TCP diidentifikasi oleh 4-elemen (*4-tuple*):\n$$\text{4-tuple} = (\text{Source IP}, \text{Source Port}, \text{Destination IP}, \text{Destination Port})$$\n- Keuntungan utama dari 4-tuple adalah memungkinkan server web (misal port 80/443) untuk melayani ribuan koneksi simultan dari klien yang berbeda secara bersamaan.\n- Meskipun semua klien menuju ke alamat 'Destination Port: 80', setiap koneksi memiliki 'Source IP' atau 'Source Port' yang unik.\n- Host penerima dapat melakukan demultiplexing secara tepat ke socket koneksi individual yang sesuai tanpa terjadi benturan.\n\n**Analisis Opsi Lain:**\n- **(A & C):** 4-tuple tidak mengurangi memori atau overhead header (justru memerlukan pelacakan state lebih detail).\n- **(D & F):** 4-tuple tidak menonaktifkan congestion control dan tidak mengaktifkan enkripsi secara default.\n- **(E):** Demultiplexing dilakukan di host tujuan pada lapisan transport, bukan di router.\n\n**Poin Penting:** 4-tuple membedakan setiap koneksi TCP individual secara unik di server yang sama."
  },
  {
    "id": 29,
    "text": "TCP provides reliable transfer using acknowledgments, timers, and retransmissions. What does TCP do if an ACK is not received before timeout?",
    "options": [
      "It closes the connection",
      "It sends a NAK instead",
      "It discards the sequence number",
      "It re-establishes the connection",
      "It resets the window size to zero",
      "It retransmits the unacknowledged segment"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.4 Reliable Data Transfer",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) It retransmits the unacknowledged segment**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.4: TCP Reliable Data Transfer Mechanisms.\n\n**Pembahasan Lengkap:**\nTCP menjamin transfer data yang andal di atas kanal IP yang *unreliable*:\n- Setiap kali mengirim segmen data, TCP mengaktifkan timer retransmisi (*retransmission timer*) untuk segmen tertua yang belum diakui (*oldest unacknowledged segment*).\n- Jika timer habis (*timeout*) sebelum ACK yang valid tiba, TCP menginterpretasikan hal ini sebagai indikasi kehilangan paket di jaringan.\n- Tindakan langsung TCP: **melakukan retransmisi segmen yang belum di-ACK tersebut**, melipatgandakan interval timeout (*exponential timer backoff*), dan menurunkan batas kecepatan pengiriman (masuk ke Slow Start).\n\n**Analisis Opsi Lain:**\n- **(A & D):** Timeout sesaat tidak langsung menutup atau membuat ulang koneksi; koneksi baru ditutup jika timeout terjadi berulang-ulang kali melebihi ambang batas kegagalan.\n- **(B):** TCP tidak memiliki pesan NAK (Negative Acknowledgment); TCP hanya menggunakan ACK kumulatif dan duplicate ACK.\n- **(C & E):** Nomor urut tidak dibuang dan ukuran jendela tidak direset ke nol (tetapi congestion window 'cwnd' direset ke 1 MSS).\n\n**Poin Penting:** Timeout pada TCP memicu pengiriman ulang segmen yang belum terkonfirmasi."
  },
  {
    "id": 30,
    "text": "This application protocol allows transfer of files between client and server and uses separate control and data connections. What is it called?",
    "options": [
      "SMTP",
      "HTTP",
      "TFTP",
      "SCP",
      "FTP",
      "SFTP"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.6 Network Applications: FTP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) FTP**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.6: File Transfer Protocol Architecture.\n\n**Pembahasan Lengkap:**\nProtokol aplikasi yang menggunakan dua koneksi TCP paralel yang terpisah (koneksi kontrol out-of-band pada port 21 dan koneksi data pada port 20) adalah **FTP (File Transfer Protocol)**.\n\n**Analisis Opsi Lain:**\n- **(A) SMTP:** Menggunakan satu koneksi TCP in-band (port 25) untuk perintah dan badan email.\n- **(B) HTTP:** Menggunakan satu koneksi in-band (port 80) di mana request header dan respons payload mengalir pada koneksi yang sama.\n- **(C) TFTP:** Protokol transfer file sederhana yang berjalan di atas UDP (port 69) tanpa koneksi kontrol terpisah.\n- **(D & F) SCP & SFTP:** Berjalan di dalam satu sesi terenkripsi SSH (port 22).\n\n**Poin Penting:** FTP = Menggunakan koneksi kontrol terpisah (*out-of-band control*)."
  },
  {
    "id": 31,
    "text": "TCP sockets ensure data is delivered in order and without loss. Which mechanism primarily provides this guarantee?",
    "options": [
      "Flow Labels",
      "Encryption",
      "Checksums",
      "Acknowledgments and Retransmissions",
      "Ports",
      "Caching"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Acknowledgments and Retransmissions**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4 & 3.5: Prinsip Reliable Data Transfer (RDT) pada TCP.\n\n**Pembahasan Lengkap:**\nTCP menjamin bahwa aliran byte yang diterima oleh aplikasi bersifat utuh, tidak hilang, dan sesuai urutan aslinya.\nMekanisme dasar yang menjadi fondasi jaminan ini adalah:\n1. **Acknowledgments (ACK):** Penerima memberi tahu pengirim bagian data mana yang sudah berhasil diterima dengan benar.\n2. **Retransmissions (Pengiriman Ulang):** Jika paket hilang (dideteksi via Timeout atau Duplicate ACKs), pengirim akan mengirim ulang paket tersebut sampai diterima.\n3. Bersama dengan **Sequence Numbers**, penerima dapat menyusun kembali byte data yang datang tidak berurutan dan mengabaikan paket duplikat.\n\n**Analisis Opsi Lain:**\n- **(A & E) Flow Labels & Ports:** Digunakan untuk routing IPv6 dan demultiplexing proses, bukan keandalan data.\n- **(B) Encryption:** Menjamin kerahasiaan (*confidentiality*), bukan keandalan pengiriman (*reliability*).\n- **(C) Checksums:** Hanya mendeteksi kesalahan bit, tetapi tidak dapat memperbaiki kehilangan paket tanpa retransmisi.\n\n**Poin Penting:** Keandalan TCP bertumpu pada ACK, Timeout/Retransmisi, dan Sequence Numbers."
  },
  {
    "id": 32,
    "text": "The network layer provides logical communication between hosts, while the transport layer provides logical communication between processes. Using the household analogy, Ann and Bill collect and distribute letters within their homes, while the postal service delivers mail between houses. What does this analogy illustrate?",
    "options": [
      "The network layer operates only within one house",
      "The transport layer ensures only physical delivery",
      "The transport layer ensures process-to-process delivery while the network ensures host-to-host delivery",
      "The network layer ensures process-level delivery",
      "The transport layer handles router-to-router delivery",
      "Both layers are identical in scope"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.1.1 Relationship Between Transport and Network Layers",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) The transport layer ensures process-to-process delivery while the network ensures host-to-host delivery**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.1.1: Relationship Between Transport and Network Layers (Household Analogy).\n\n**Pembahasan Lengkap:**\nDalam analogi rumah tangga di buku Kurose & Ross:\n- **Rumah:** Mewakili Host / Komputer.\n- **Sepupu di dalam rumah (Ann & Bill):** Mewakili Proses Aplikasi.\n- **Ann dan Bill:** Bertindak sebagai Protokol Transport Layer yang mengumpulkan surat dari sepupunya dan membagikan surat yang datang langsung ke tangan masing-masing sepupu (komunikasi *process-to-process*).\n- **Layanan Pos:** Mewakili Network Layer (IP) yang hanya bertanggung jawab memindahkan amplop surat dari satu rumah ke rumah lainnya (komunikasi *host-to-host*).\n\n**Poin Penting:** Transport layer = *Process-to-process communication*; Network layer = *Host-to-host communication*."
  },
  {
    "id": 33,
    "text": "TCP requires a connection to be established before data transfer. What is exchanged during this setup?",
    "options": [
      "Checksum fields only",
      "Control segments to synchronize state variables",
      "ACK-only messages",
      "IP addresses and ports only",
      "Sequence numbers only",
      "Window sizes only"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.6 TCP Connection Management",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) Control segments to synchronize state variables**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.1: The TCP Connection & 3-Way Handshake.\n\n**Pembahasan Lengkap:**\nSebelum data aplikasi dapat dikirim, kedua entitas TCP harus membangun koneksi melalui jabat tangan 3-arah (*three-way handshake*):\n- Segmen-segmen kontrol bertukar flag 'SYN', 'SYN-ACK', dan 'ACK'.\n- Tujuan pertukaran kontrol ini adalah **menginisialisasi dan menyinkronkan variabel status koneksi (*state variables*)** pada kedua sisi, meliputi:\n  - Initial Sequence Number (ISN) di kedua arah.\n  - Ukuran buffer dan alokasi ruang receive window ('rwnd').\n  - Opsi TCP seperti Maximum Segment Size (MSS) dan Window Scaling.\n\n**Poin Penting:** Handshake TCP menyinkronkan nomor urut awal dan variabel status koneksi kedua host."
  },
  {
    "id": 34,
    "text": "TCP uses estimated RTT and timeout intervals for retransmissions. Why is adaptive timeout important?",
    "options": [
      "It avoids congestion collapse",
      "It prevents sequence number rollover",
      "It ensures timely retransmission without premature duplicates",
      "It guarantees zero packet loss",
      "It ensures port allocation fairness",
      "It eliminates the need for acknowledgments"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.3 Round-Trip Time Estimation and Timeout",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) It ensures timely retransmission without premature duplicates**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.3: Round-Trip Time Estimation and Adaptive Timeout.\n\n**Pembahasan Lengkap:**\nNilai RTT di Internet sangat dinamis karena fluktuasi beban antrian router:\n- Jika timeout diatur terlalu pendek: timeout akan terjadi sebelum ACK sempat tiba, memicu **retransmisi prematur** yang tidak perlu dan memboroskan bandwidth (*premature duplicates*).\n- Jika timeout diatur terlalu panjang: sistem akan **lambat bereaksi** ketika terjadi kehilangan paket yang sebenarnya, menurunkan throughput.\n- Oleh karena itu, TCP menggunakan **timeout adaptif** (berdasarkan EstimatedRTT + $4 \times$ DevRTT) untuk menyeimbangkan responsivitas dan mencegah duplikasi palsu.\n\n**Poin Penting:** Timeout adaptif mencegah retransmisi prematur saat RTT membengkak dan merespons kehilangan secara tepat waktu."
  },
  {
    "id": 35,
    "text": "The naming system on the Internet is organized into multiple levels, including root, top-level domains, and authoritative servers. What do we call the highest level?",
    "options": [
      "Authoritative Server",
      "Root Server",
      "TLD Server",
      "Proxy Server",
      "Name Cache",
      "Resolver"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.1 Services Provided by DNS",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) Root Server**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.2: Overview of How DNS Works — Hierarki Server DNS.\n\n**Pembahasan Lengkap:**\nDNS menggunakan struktur basis data terdistribusi dan hierarkis. Tiga kelas server DNS utama (dari atas ke bawah):\n1. **Root DNS Servers:** Tingkat tertinggi dalam pohon DNS. Mengembalikan alamat IP dari server TLD yang bertanggung jawab. Terdapat 13 identitas server root logis (A–M) yang direplikasi di ratusan lokasi fisik via Anycast.\n2. **Top-Level Domain (TLD) Servers:** Bertanggung jawab atas domain tingkat atas seperti '.com', '.org', '.net', '.edu', dan ccTLD seperti '.id'.\n3. **Authoritative DNS Servers:** Menyimpan rekaman pemetaan IP publik aktual untuk organisasi atau pemilik domain tertentu.\n\n**Poin Penting:** Root DNS Server menempati puncak hierarki domain di seluruh dunia."
  },
  {
    "id": 36,
    "text": "Consider a link capacity of 10 Mbps shared by 100 users. Each request is 1 MB. Without caching, average utilization approaches 80%. With caching (hit rate 60%), what is the new utilization?",
    "options": [
      "20%",
      "48%",
      "60%",
      "32%",
      "80%",
      "40%"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) 32%**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: Web Caching and Link Utilization Calculations.\n\n**Pembahasan Lengkap:**\nDiketahui data soal:\n- Utilisasi rata-rata link akses tanpa web cache = $80% = 0.80$.\n- Cache hit rate (tingkat keberhasilan temuan lokal) = $60% = 0.60$.\n\nAnalisis Pengurangan Beban:\n- Setiap permintaan yang berhasil dilayani oleh cache lokal (*cache hit*) langsung dikirim ke pengguna tanpa perlu melintasi link akses eksternal.\n- Permintaan yang harus melintasi link akses keluar hanyalah permintaan yang mengalami *cache miss*, yaitu:\n  $$\text{Miss Rate} = 1 - \text{Hit Rate} = 1 - 0.60 = 0.40 \text{ (atau } 40%\text{)}$$\n- Maka utilisasi link baru setelah dipasang web cache adalah:\n  $$\text{Utilisasi Baru} = \text{Utilisasi Awal} \times \text{Miss Rate} = 80% \times 0.40 = 32%$$\n\n**Poin Penting:** Web cache memangkas $60%$ traffic eksternal, menyisakan $40%$ dari utilisasi semula: $80% \times 0.4 = 32%$."
  },
  {
    "id": 37,
    "text": "Which situation demonstrates a case where transmission delay dominates propagation delay?",
    "options": [
      "Medium link, equal rates",
      "Very long link, very high bandwidth",
      "Very short link, very high bandwidth",
      "Very short link, very low bandwidth",
      "Very long link, very low bandwidth",
      "Link with zero processing"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) Very short link, very low bandwidth**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Transmission vs Propagation Delay Dominance.\n\n**Pembahasan Lengkap:**\nPerhatikan rumus masing-masing delay:\n- Transmission Delay: $d_{trans} = \frac{L}{R}$ (berbanding terbalik dengan laju transmisi $R$).\n- Propagation Delay: $d_{prop} = \frac{d}{s}$ (berbanding lurus dengan jarak link $d$).\n\nAgar $d_{trans}$ mendominasi (jauh lebih besar dari) $d_{prop}$:\n1. Kita memerlukan $d_{trans}$ sebesar mungkin $\to$ nilai laju transmisi $R$ harus **sangat rendah** (*very low bandwidth*).\n2. Kita memerlukan $d_{prop}$ sekecil mungkin $\to$ jarak lintasan fisik $d$ harus **sangat pendek** (*very short link*).\nDengan link pendek dan bandwidth rendah, waktu yang dibutuhkan untuk mendorong bit ke kabel jauh lebih lama daripada waktu gelombang merambat di kabel tersebut.\n\n**Poin Penting:** Jarak pendek $implies d_{prop} approx 0$; Bandwidth rendah $implies d_{trans}$ besar."
  },
  {
    "id": 38,
    "text": "Consider a client whose access link has 2 Mbps bandwidth with an average RTT of 200 ms. The client requested 1 MB object. The object is cached locally with access delay = 20 ms. If the cache hit rate is 40%, what is the average response time?",
    "options": [
      "3.228 s",
      "4.208 s",
      "1.708 s",
      "2.528 s",
      "3.828 s",
      "5.228 s"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) 2.528 s**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: Average Response Time with Web Cache.\n\n**Pembahasan Lengkap:**\nDiketahui:\n- Bandwidth link: $R = 2\text{ Mbps} = 2 \times 10^6\text{ bps}$.\n- Ukuran objek: $1\text{ MB} = 10^6\text{ byte} = 8 \times 10^6\text{ bit}$.\n- Rata-rata RTT internet: $200\text{ ms} = 0.2\text{ detik}$.\n- Cache hit rate: $40% = 0.40$, sehingga miss rate = $60% = 0.60$.\n- Penundaan saat hit di cache lokal: $d_{hit} = 20\text{ ms} = 0.02\text{ detik}$.\n\n1. **Waktu respons saat Cache Miss ($d_{miss}$):**\n   Objek harus diambil dari server asal melalui link akses:\n   $$d_{trans} = \frac{8 \times 10^6\text{ bit}}{2 \times 10^6\text{ bps}} = 4.0\text{ detik}$$\n   $$d_{miss} = \text{RTT} + d_{trans} = 0.2\text{ detik} + 4.0\text{ detik} = 4.2\text{ detik}$$\n\n2. **Rata-rata Waktu Respons Total ($T_{avg}$):**\n   $$T_{avg} = (\text{Hit Rate} \times d_{hit}) + (\text{Miss Rate} \times d_{miss})$$\n   $$T_{avg} = (0.40 \times 0.02) + (0.60 \times 4.2)$$\n   $$T_{avg} = 0.008 + 2.52 = 2.528\text{ detik}$$\n\n**Poin Penting:** $T_{avg} = (0.4 \times 0.02) + (0.6 \times 4.2) = 2.528\text{ s}$."
  },
  {
    "id": 39,
    "text": "Internet-connected hosts can be infected with malicious software. Which term describes a device that is compromised and enrolled in a network of similar infected machines?",
    "options": [
      "Botnet member",
      "Honeypot",
      "Gateway node",
      "Firewall relay",
      "DNS resolver",
      "Proxy server"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.6 Networks Under Attack",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (A) Botnet member**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.6: Networks Under Attack — Malware, Botnets, and DDoS.\n\n**Pembahasan Lengkap:**\nPerangkat komputer atau IoT yang telah disusupi malware dan dikendalikan dari jarak jauh tanpa sepengetahuan pemiliknya disebut sebagai **bot** atau **zombie**. Kumpulan dari ribuan hingga jutaan perangkat terinfeksi ini dinamakan **Botnet**.\n- Anggota botnet (*botnet member*) dapat diperintahkan secara serentak oleh *botmaster* untuk meluncurkan serangan Distributed Denial-of-Service (DDoS) atau mengirimkan spam secara masif.\n\n**Analisis Opsi Lain:**\n- **(B) Honeypot:** Sistem umpan yang sengaja dirancang untuk memancing dan mempelajari aksi peretas.\n- **(C, D, E, F):** Gateway, firewall, DNS resolver, dan proxy adalah perangkat infrastruktur jaringan yang sah.\n\n**Poin Penting:** Perangkat korban yang dikendalikan dalam jaringan terinfeksi disebut anggota *botnet* (zombie)."
  },
  {
    "id": 40,
    "text": "In traditional socket programming, a process may wait until an operation completes before proceeding. What is this behavior called?",
    "options": [
      "Nonblocking I/O",
      "Blocking I/O",
      "Parallelism",
      "Multithreading",
      "Event-driven",
      "Asynchronous I/O"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7 Socket Programming: Principles",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) Blocking I/O**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.7: Socket API Execution Models.\n\n**Pembahasan Lengkap:**\nPada pemrograman socket tradisional, pemanggilan fungsi I/O bersifat sinkron dan **Blocking**:\n- Ketika proses memanggil operasi seperti 'read()', 'recv()', atau 'accept()', proses tersebut akan ditangguhkan (*suspended/blocked*) oleh sistem operasi.\n- Proses tidak akan dieksekusi lebih lanjut hingga data yang diminta tersedia di buffer penerima atau koneksi selesai dibuat.\n\n**Analisis Opsi Lain:**\n- **(A & F) Nonblocking / Asynchronous I/O:** Memungkinkan proses melanjutkan eksekusi tanpa menunggu operasi selesai.\n- **(C & D) Parallelism & Multithreading:** Pendekatan arsitektur pemrosesan konkuren, bukan nama sifat panggilan I/O.\n- **(E) Event-driven:** Model arsitektur berbasis kejadian (seperti 'epoll' atau Node.js).\n\n**Poin Penting:** Blocking I/O = Eksekusi proses terhenti menunggu sampai operasi I/O tuntas."
  },
  {
    "id": 41,
    "text": "BitTorrent uses a special server to keep track of active peers participating in file sharing. What is this server called?",
    "options": [
      "Cache",
      "Tracker",
      "Indexer",
      "Coordinator",
      "Directory",
      "Seeder"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.5 Peer-to-Peer File Distribution",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) Tracker**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.5: BitTorrent Architecture & Swarm Coordination.\n\n**Pembahasan Lengkap:**\nDalam jaringan BitTorrent, **Tracker** adalah server infrastruktur khusus yang bertugas memantau dan mencatat semua peer yang sedang aktif berpartisipasi dalam distribusi suatu file (*swarm*):\n- Ketika sebuah peer baru ingin bergabung ke swarm, peer tersebut menghubungi tracker untuk mendaftarkan alamat IP-nya dan meminta daftar acak dari peer lain yang sedang aktif.\n- Peer tersebut kemudian langsung melakukan koneksi TCP peer-to-peer ke node-node dalam daftar tersebut.\n\n**Analisis Opsi Lain:**\n- **(A) Cache:** Tempat penyimpanan sementara data.\n- **(C) Indexer:** Website atau mesin pencari file '.torrent' (misal The Pirate Bay).\n- **(F) Seeder:** Peer pengguna biasa yang memiliki salinan berkas lengkap.\n\n**Poin Penting:** Tracker = Server terpusat dalam BitTorrent yang melacak peer yang aktif dalam sebuah swarm."
  },
  {
    "id": 42,
    "text": "TCP defines states like LISTEN, SYN-SENT, and ESTABLISHED. Why is the state machine important?",
    "options": [
      "It avoids checksum errors",
      "It disables flow control",
      "It ensures port randomization",
      "It governs valid transitions during connection setup and teardown",
      "It prevents errors in IP addressing",
      "It reduces segment size"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.6 TCP Connection Management",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) It governs valid transitions during connection setup and teardown**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.6: TCP Connection Management & Finite State Machine (FSM).\n\n**Pembahasan Lengkap:**\nTCP adalah protokol yang berorientasi koneksi dan memiliki status (*stateful*):\n- State machine TCP (seperti status 'CLOSED', 'LISTEN', 'SYN_SENT', 'SYN_RCVD', 'ESTABLISHED', 'FIN_WAIT_1', 'FIN_WAIT_2', 'TIME_WAIT') mengatur **transisi status yang sah** pada kedua endpoint koneksi.\n- Hal ini memastikan bahwa pembentukan koneksi (3-way handshake), transfer data, dan pemutusan koneksi (4-way teardown) berjalan secara deterministik dan terlindung dari segmen-segmen lama yang tertunda di jaringan.\n\n**Analisis Opsi Lain:**\n- FSM TCP tidak mengatur checksum, tidak menonaktifkan flow control, dan tidak merandomisasi port IP.\n\n**Poin Penting:** TCP State Machine mengatur transisi status yang valid selama pembentukan, pemeliharaan, dan penutupan koneksi."
  },
  {
    "id": 43,
    "text": "HTTP can operate in two modes: one where each request/response uses a new TCP connection, and another where multiple objects are transferred over the same connection. What are these two modes?",
    "options": [
      "Open and Closed",
      "Persistent and Nonpersistent",
      "Secure and Insecure",
      "Connectionless and Connected",
      "Reliable and Unreliable",
      "Stateful and Stateless"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.2 Non-Persistent and Persistent Connections",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) Persistent and Nonpersistent**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.2: Non-Persistent and Persistent HTTP Connections.\n\n**Pembahasan Lengkap:**\nProtokol HTTP memiliki dua mode koneksi utama:\n1. **Non-Persistent HTTP (HTTP/1.0):** Setiap pasangan request/response dikirim melalui koneksi TCP baru yang terpisah. Koneksi langsung ditutup oleh server setelah satu objek dikirim (memerlukan 2 RTT per objek).\n2. **Persistent HTTP (HTTP/1.1):** Server membiarkan koneksi TCP tetap terbuka setelah mengirimkan respons. Permintaan dan respons untuk banyak objek web pada server yang sama dapat dikirim melalui satu koneksi TCP tunggal (menghemat RTT dan overhead handshake).\n\n**Poin Penting:** HTTP Non-persistent = 1 koneksi per objek; Persistent = Banyak objek dalam 1 koneksi yang sama."
  },
  {
    "id": 44,
    "text": "ECN allows routers to mark packets instead of dropping them. What is the advantage of ECN?",
    "options": [
      "It signals congestion without packet loss",
      "It eliminates window updates",
      "It guarantees zero congestion",
      "It increases MSS",
      "It reduces checksum overhead",
      "It disables retransmissions"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.2 Network-Assisted ECN and TCP Vegas",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) It signals congestion without packet loss**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.2: Network-Assisted Congestion Notification — ECN (RFC 3168).\n\n**Pembahasan Lengkap:**\nPada TCP klasik, indikasi kemacetan jaringan hanya diketahui oleh pengirim setelah terjadi **packet loss** (paket di-drop di router).\n- **ECN (Explicit Congestion Notification)** memungkinkan router yang mendeteksi buffer mulai padat untuk menandai 2 bit ECN pada header IP datagram (*Congestion Encountered* / CE codepoint) tanpa membuang paket tersebut.\n- Penerima melihat bit CE ini dan menyematkan flag 'ECE' (*ECN-Echo*) pada ACK yang dikirimkan kembali ke pengirim.\n- Pengirim TCP merespons sinyal kemacetan dini ini dengan mengurangi 'cwnd', sehingga mencegah packet loss yang sebenarnya.\n\n**Poin Penting:** ECN memberitahukan sinyal kemacetan sebelum router terpaksa membuang paket."
  },
  {
    "id": 45,
    "text": "TCP interprets duplicate ACKs as signs of packet loss. What does receiving three duplicate ACKs trigger?",
    "options": [
      "Slow start",
      "Connection termination",
      "Sequence number reset",
      "Fast retransmit of the missing segment",
      "Window reset",
      "Timeout reset"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.1 Classic TCP Congestion Control (AIMD)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Fast retransmit of the missing segment**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.4 & 3.7.1: TCP Fast Retransmit Mechanism.\n\n**Pembahasan Lengkap:**\nKetika penerima TCP menerima segmen yang berada di luar urutan (*gap in sequence space*), ia segera mengirimkan kembali ACK terakhir yang sukses (ACK duplikat):\n- Jika pengirim menerima **3 ACK duplikat** (total 4 ACK dengan nomor yang sama persis), pengirim dapat menyimpulkan dengan kepastian tinggi bahwa segmen setelah nomor ACK tersebut telah hilang di jaringan.\n- Pengirim langsung melakukan **Fast Retransmit**: mentransmisikan ulang segmen yang hilang tersebut **seketika itu juga tanpa menunggu timer timeout habis**, sangat meningkatkan efisiensi waktu pemulihan.\n\n**Analisis Opsi Lain:**\n- **(A):** Fast retransmit biasanya diikuti oleh Fast Recovery (bukan langsung Slow Start, kecuali pada varian TCP Tahoe lama).\n- **(B, C, E, F):** Koneksi tidak dihentikan dan nomor urut tidak direset.\n\n**Poin Penting:** 3 Duplicate ACKs memicu *Fast Retransmit* atas segmen yang hilang sebelum timeout."
  },
  {
    "id": 46,
    "text": "If arrival rate is 900 p/s, packet length 1,000 bits, link 1 Mbps, what is traffic intensity and queueing trend?",
    "options": [
      "I=0.9 → large but finite queueing",
      "I=1.2 → unstable",
      "I=1 → infinite delay",
      "I=2 → collapse",
      "I=0.8 → negligible delay"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.2 Queuing Delay and Packet Loss",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (A) I=0.9 → large but finite queueing**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.2: Queuing Delay and Traffic Intensity ($I = La / R$).\n\n**Pembahasan Lengkap:**\nDiketahui:\n- Laju kedatangan paket: $a = 900\text{ paket/detik}$.\n- Panjang paket: $L = 1.000\text{ bit}$.\n- Laju transmisi link: $R = 1\text{ Mbps} = 1.000.000\text{ bps}$.\n\n1. **Hitung Traffic Intensity ($I$):**\n   $$I = \frac{L \times a}{R} = \frac{1.000\text{ bit} \times 900\text{ paket/detik}}{1.000.000\text{ bps}} = \frac{900.000}{1.000.000} = 0.9$$\n\n2. **Analisis Antrian:**\n   - Dalam teori antrian $M/M/1$, rata-rata waktu antri berbanding lurus dengan $\frac{I}{1 - I}$.\n   - Karena $I = 0.9 < 1$, antrian masih stabil secara matematis (tidak meledak menjadi tak hingga), tetapi karena nilainya sangat mendekati $1$, penundaan antrian menjadi **sangat besar namun tetap terhingga (*large but finite queueing delay*)**.\n   - Jika $I > 1$, antrian baru menjadi tidak stabil dan delay menuju tak terhingga.\n\n**Poin Penting:** $I = (1000 \times 900)/10^6 = 0.9 implies$ Antrian besar namun tetap terhingga."
  },
  {
    "id": 47,
    "text": "Given a bottleneck speed of 500 kbps, a 4 Mbyte file is sent. Roughly how long does transfer take?",
    "options": [
      "200 s",
      "150 s",
      "96 s",
      "80 s",
      "64 s",
      "120 s"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.4 Throughput in Computer Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) 64 s**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.4: Throughput and File Transfer Time.\n\n**Pembahasan Lengkap:**\nDiketahui data:\n- Ukuran file: $4\text{ Mbyte} = 4 \times 10^6\text{ byte} = 4 \times 8 \times 10^6\text{ bit} = 32 \times 10^6\text{ bit} = 32.000\text{ kbit}$.\n- Kecepatan link bottleneck: $R = 500\text{ kbps} = 500 \times 10^3\text{ bps}$.\n\nPerhitungan Waktu Transfer:\n$$T = \frac{\text{Ukuran File dalam bit}}{\text{Throughput Bottleneck}} = \frac{32 \times 10^6\text{ bit}}{500 \times 10^3\text{ bit/detik}}$$\n$$T = \frac{32.000}{500} = 64\text{ detik}$$\n\n**Poin Penting:** $4\text{ MB} = 32\text{ Mb}$. Waktu $= 32.000\text{ kb} / 500\text{ kbps} = 64\text{ s}$."
  },
  {
    "id": 48,
    "text": "Host A\\u2013B path has 4 links: 1 Mbps, 5 Mbps, 2 Mbps, 10 Mbps. What is the end\\u2011to\\u2011end throughput?",
    "options": [
      "None",
      "Average of all",
      "10 Mbps",
      "5 Mbps",
      "2 Mbps",
      "1 Mbps"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.4 Throughput in Computer Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) 1 Mbps**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.4: End-to-End Bottleneck Link Throughput.\n\n**Pembahasan Lengkap:**\nPada jalur transmisi serial tanpa aliran trafik lain yang bersaing, throughput ujung-ke-ujung (*end-to-end throughput*) dibatasi oleh tautan dengan kapasitas transmisi terendah di sepanjang lintasan (dikenal sebagai **Bottleneck Link**):\n$$\text{Throughput} = min(R_1, R_2, R_3, R_4)$$\nSubstitusikan nilai tautan:\n$$\text{Throughput} = min(1\text{ Mbps}, 5\text{ Mbps}, 2\text{ Mbps}, 10\text{ Mbps}) = 1\text{ Mbps}$$\n\n**Poin Penting:** Throughput selalu ditentukan oleh laju link terlambat (bottleneck = $min$)."
  },
  {
    "id": 49,
    "text": "Wireless LANs such as Wi\\u2011Fi operate within limited range. What feature differentiates cellular access networks?",
    "options": [
      "They function only indoors.",
      "They do not support mobility.",
      "They replace ISPs entirely.",
      "They use optical fiber for the last mile.",
      "They provide wide-area coverage through base stations.",
      "They require Ethernet cables."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.2.1 Access Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) They provide wide-area coverage through base stations.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.2.1: Wireless and Cellular Access Networks.\n\n**Pembahasan Lengkap:**\nPerbedaan arsitektural utama antara Wireless LAN (Wi-Fi) dan jaringan seluler (Cellular 4G/5G):\n- **Wi-Fi:** Beroperasi dalam jangkauan pendek (puluhan meter di dalam rumah atau gedung perkantoran) yang terhubung ke satu Access Point.\n- **Jaringan Seluler:** Dirancang untuk menyediakan jangkauan area luas (*wide-area coverage*, berkilo-kilometer) melalui jaringan stasiun pemancar (*cellular base stations* / eNodeB / gNodeB) yang dikelola oleh operator telekomunikasi dan mendukung mobilitas tinggi saat pengguna bergerak cepat.\n\n**Analisis Opsi Lain:**\n- **(A & B):** Jaringan seluler justru berfungsi di luar ruangan dan sangat mendukung mobilitas penuh.\n- **(C & F):** Jaringan seluler tidak menggantikan ISP (operator seluler sendiri bertindak sebagai penyedia akses nirkabel) dan perangkat mobile tidak menggunakan kabel Ethernet untuk tersambung ke BTS.\n\n**Poin Penting:** Jaringan seluler memberikan cakupan area luas melalui stasiun pangkalan (BTS)."
  },
  {
    "id": 50,
    "text": "Both viruses and worms are forms of malware. How do they differ in spreading?",
    "options": [
      "Worms require user clicks, while viruses spread automatically.",
      "Both spread only through hardware interfaces.",
      "Viruses only infect routers, worms only infect switches.",
      "Worms cannot replicate.",
      "Viruses require user interaction, while worms can spread without it.",
      "Viruses never use email attachments."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.6 Networks Under Attack",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) Viruses require user interaction, while worms can spread without it.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.6: Malware Classification — Viruses vs Worms.\n\n**Pembahasan Lengkap:**\nKategori malware dibedakan berdasarkan mekanisme penyebarannya:\n1. **Virus:** Merupakan malware yang menempelkan dirinya pada file atau aplikasi yang sah. Virus **memerlukan interaksi manusia** (*user interaction*) untuk aktif dan menyebar, misalnya ketika pengguna membuka lampiran email yang terinfeksi atau mengeksekusi file '.exe' berbahaya.\n2. **Worm:** Merupakan program mandiri yang **dapat mereplikasi dan menyebarkan dirinya sendiri secara otomatis** melintasi jaringan komputer tanpa memerlukan tindakan atau campur tangan pengguna (misalnya dengan mengeksploitasi kerentanan celah keamanan pada port terbuka sistem).\n\n**Poin Penting:** Virus butuh interaksi pengguna (klik/buka berkas); Worm menyebar mandiri tanpa interaksi pengguna."
  },
  {
    "id": 51,
    "text": "Networking functionality is organized into layers. What is the key advantage of this layering approach?",
    "options": [
      "It replaces the need for routers and switches.",
      "It ensures only one protocol is used worldwide.",
      "It guarantees zero errors in communication.",
      "It eliminates the need for hardware.",
      "It allows each layer to provide services via well-defined interfaces, simplifying design and implementation.",
      "It avoids the use of protocols."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.5.1 Layered Architecture",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) It allows each layer to provide services via well-defined interfaces, simplifying design and implementation.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.5.1: Layered Architecture and Modularity.\n\n**Pembahasan Lengkap:**\nPendekatan berlapis (*layering*) memberikan prinsip rekayasa sistem yang sangat kuat:\n- **Modularitas & Abstraksi:** Setiap lapisan bertanggung jawab atas serangkaian tugas tertentu dan menyediakan antarmuka layanan (*service interface*) yang terdefinisi dengan jelas bagi lapisan di atasnya.\n- **Kemudahan Pembaruan:** Perubahan atau inovasi teknologi pada implementasi satu lapisan (misalnya mengganti Ethernet kabel dengan Wi-Fi di Link Layer) tidak akan memengaruhi atau merusak fungsi protokol di lapisan atasnya (seperti TCP atau HTTP).\n\n**Poin Penting:** Lapisan menyediakan antarmuka layanan modular yang menyederhanakan desain dan evolusi protokol."
  },
  {
    "id": 52,
    "text": "Selective Acknowledgment (SACK) allows receivers to inform senders about non-contiguous blocks of data received. What problem does this solve?",
    "options": [
      "It reduces RTT variance",
      "It prevents three-way handshake",
      "It eliminates port reuse",
      "It disables window size",
      "It discards duplicate ACKs",
      "It avoids retransmitting packets that were already received"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.4 Selective Repeat (SR)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) It avoids retransmitting packets that were already received**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.4: TCP Selective Acknowledgment (SACK, RFC 2018).\n\n**Pembahasan Lengkap:**\nPada implementasi TCP standar dengan *cumulative ACK*, jika paket hilang di tengah aliran data sementara paket setelahnya berhasil tiba, penerima hanya dapat mengakui urutan kumulatif hingga sebelum paket yang hilang.\n- Akibatnya, pengirim mungkin terpaksa mengirim ulang semua paket setelahnya (seperti perilaku Go-Back-N), membuang-buang bandwidth.\n- **SACK (Selective Acknowledgment)** memungkinkan penerima melaporkan blok-blok data non-kontigu yang telah diterima dengan sukses di dalam opsi header TCP.\n- Pengirim TCP yang mendukung SACK kemudian **hanya mentransmisikan ulang segmen-segmen yang benar-benar hilang**, tanpa mengulang segmen yang sudah ada di buffer penerima.\n\n**Poin Penting:** SACK mencegah retransmisi paket yang sebenarnya sudah diterima dengan baik oleh penerima."
  },
  {
    "id": 53,
    "text": "What is the link layer\\u2019s main role in the Internet protocol stack?",
    "options": [
      "It manages congestion across ISPs.",
      "It assigns port numbers to applications.",
      "It secures user authentication.",
      "It encodes web page data.",
      "It manages browser-to-server communication.",
      "It delivers datagrams over individual links between adjacent nodes."
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.5.1 Layered Architecture (Link Layer)",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) It delivers datagrams over individual links between adjacent nodes.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.5.1 & Bab 6: Peran Link Layer dalam Protokol Stack.\n\n**Pembahasan Lengkap:**\nTugas fundamental dari lapisan tautan data (**Link Layer**) adalah:\n- Memindahkan datagram jaringan melintasi **satu tautan komunikasi tunggal (*individual link*)** antara dua simpul jaringan yang bersebelahan (*adjacent nodes*, misal antara host dan switch, switch dan router, atau antar router yang bertetangga langsung).\n- Layanan yang disediakan meliputi framing, media access control (MAC), serta deteksi kesalahan pada tautan fisik tersebut.\n\n**Analisis Opsi Lain:**\n- **(A):** Pengelolaan kongesti antar ISP ditangani di transport layer (TCP) dan routing control plane (BGP).\n- **(B):** Nomor port dikelola oleh transport layer.\n- **(D & E):** Data halaman web dan komunikasi peramban dikelola oleh application layer (HTTP).\n\n**Poin Penting:** Link layer memindahkan frame melintasi satu link tunggal antara dua simpul yang bersebelahan."
  },
  {
    "id": 54,
    "text": "Routers perform error checking on packet headers. This time is called processing delay. If a router takes 50 \\u03bcs per packet and a packet passes through 5 routers, what is the total processing delay?",
    "options": [
      "2 ms",
      "200 μs",
      "250 μs",
      "100 μs",
      "500 μs",
      "1 ms"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) 250 μs**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Nodal Processing Delay Accumulation.\n\n**Pembahasan Lengkap:**\nProcessing delay ($d_{proc}$) adalah waktu yang dibutuhkan router untuk memeriksa header paket, memverifikasi checksum, dan menentukan link keluar melalui tabel forwarding.\n- Diberikan waktu pemrosesan per router: $50 mu\text{s}$.\n- Paket melintasi $5$ router berturut-turut.\n- Total processing delay kumulatif adalah:\n  $$\text{Total } d_{proc} = 5 \times 50 mu\text{s} = 250 mu\text{s}$$\n\n**Poin Penting:** $5\text{ router} \times 50 mu\text{s} = 250 mu\text{s}$."
  },
  {
    "id": 55,
    "text": "FTP uses separate connections for commands and data. Which connection remains open throughout the session?",
    "options": [
      "Control Connection",
      "Session Connection",
      "None",
      "Data Connection",
      "Both Connections",
      "File Channel"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.6 Network Applications: FTP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (A) Control Connection**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.6: FTP Sesi dan Koneksi Kontrol.\n\n**Pembahasan Lengkap:**\nFTP memelihara status sesi klien:\n- **Control Connection (Port 21):** Dibangun di awal saat klien melakukan login, dan **tetap terbuka sepanjang sesi pengguna** untuk mengirim perintah dan menerima balasan.\n- **Data Connection (Port 20):** Bersifat non-persisten; koneksi data baru dibuka setiap kali sebuah file atau daftar direktori ditransfer, dan langsung ditutup begitu transfer file tersebut selesai.\n\n**Poin Penting:** Koneksi kontrol FTP tetap terbuka selama seluruh sesi pengguna berlangsung."
  },
  {
    "id": 56,
    "text": "TCP provides full-duplex service, meaning data can flow in both directions. Which statement correctly illustrates this?",
    "options": [
      "ACKs cannot be piggybacked on data",
      "Separate sockets must be created for each direction",
      "A server may only transmit once all data is acknowledged",
      "Both sides can send and receive data simultaneously on the same connection",
      "Two TCP connections are required for bidirectional flow",
      "A client can only send after the server stops sending"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Both sides can send and receive data simultaneously on the same connection**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.1: Karakteristik Layanan TCP — *Full-Duplex Service*.\n\n**Pembahasan Lengkap:**\nKoneksi TCP bersifat **Full-Duplex**:\n- Jika terdapat koneksi TCP antara Proses A (di Host 1) dan Proses B (di Host 2), maka data aplikasi dapat mengalir dari Proses A ke Proses B **bersamaan pada saat yang sama** dengan data aplikasi yang mengalir dari Proses B ke Proses A melalui koneksi yang sama.\n- Masing-masing arah transmisi memiliki nomor urut (*sequence number*) dan jendela penerima (*receive window*) independen, serta ACK dapat ditumpangkan (*piggybacked*) pada segmen data arah sebaliknya.\n\n**Poin Penting:** Full-duplex = Kedua belah pihak dapat mengirim dan menerima data secara bersamaan pada satu koneksi yang sama."
  },
  {
    "id": 57,
    "text": "Different HTTP methods allow clients to perform different actions on resources. Which method is used to request data from a server without modifying it?",
    "options": [
      "POST",
      "GET",
      "UPDATE",
      "PUT",
      "HEAD",
      "DELETE"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.3 HTTP Message Format",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) GET**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.3: HTTP Request Methods.\n\n**Pembahasan Lengkap:**\nMetode HTTP mendefinisikan aksi yang diminta oleh klien terhadap resource di server:\n- **GET:** Meminta data dari server yang diidentifikasi oleh URL target tanpa menimbulkan efek samping pengubahan data di server (*safe and idempotent retrieval*).\n- **POST:** Mengirimkan payload data ke server (misal input formulir) untuk diproses atau disimpan.\n- **PUT:** Mengunggah atau menggantikan konten resource target secara utuh di server.\n- **DELETE:** Meminta server untuk menghapus resource yang ditentukan.\n- **HEAD:** Mirip GET, tetapi server hanya mengembalikan header HTTP tanpa body objek.\n\n**Poin Penting:** HTTP GET mengambil resource dari server tanpa memodifikasi kontennya."
  },
  {
    "id": 58,
    "text": "To check whether a cached object is still valid, a browser can send a request with a specific header field that allows validation without downloading the entire object. What is this mechanism called?",
    "options": [
      "Refresh Control",
      "Full Reload",
      "Incremental Download",
      "Proxy Validation",
      "Conditional GET",
      "Persistent Connection"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) Conditional GET**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: HTTP Web Caching — *Conditional GET*.\n\n**Pembahasan Lengkap:**\nMekanisme validasi web cache pada HTTP:\n- Browser menyimpan salinan objek bersama header 'Last-Modified' yang diberikan server.\n- Saat pengguna meminta objek itu lagi, browser mengirimkan HTTP request dengan menyertakan header khusus:\n  'If-Modified-Since: <tanggal terakhir modifikasi>'\n- Mekanisme ini disebut **Conditional GET**.\n- Jika objek di server belum berubah, server cukup membalas dengan header singkat:\n  'HTTP/1.1 304 Not Modified'\n  tanpa mengirimkan ulang badan objek yang besar, sangat menghemat bandwidth dan waktu pemuatan.\n\n**Poin Penting:** Conditional GET menggunakan header 'If-Modified-Since' untuk memvalidasi cache tanpa mengunduh ulang."
  },
  {
    "id": 59,
    "text": "TCP sets its timeout interval as: TimeoutInterval = EstimatedRTT + 4 \\u00d7 DevRTT. Suppose the current EstimatedRTT is 100 ms and DevRTT is 10 ms. What is the TimeoutInterval?",
    "options": [
      "140 ms",
      "130 ms",
      "160 ms",
      "120 ms",
      "150 ms",
      "180 ms"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.3 Round-Trip Time Estimation and Timeout",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) 140 ms**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.3: TCP Timeout Interval Calculation.\n\n**Pembahasan Lengkap:**\nStandar TCP (Jacobson/Karels algorithm, RFC 6298) menetapkan batas waktu retransmisi (*Timeout Interval*) sebagai nilai rata-rata RTT ditambah margin pengaman variasi RTT:\n$$\text{TimeoutInterval} = \text{EstimatedRTT} + 4 \times \text{DevRTT}$$\nDiketahui dari soal:\n- $\text{EstimatedRTT} = 100\text{ ms}$\n- $\text{DevRTT} = 10\text{ ms}$\n\nSubstitusikan nilai ke dalam rumus:\n$$\text{TimeoutInterval} = 100\text{ ms} + 4 \times 10\text{ ms} = 100 + 40 = 140\text{ ms}$$\n\n**Poin Penting:** $\text{Timeout} = \text{EstimatedRTT} + 4 \times \text{DevRTT} = 100 + 4(10) = 140\text{ ms}$."
  },
  {
    "id": 60,
    "text": "A packet sniffer can capture sensitive information by passively copying traffic. Why are sniffers particularly hard to detect?",
    "options": [
      "They use only optical signals.",
      "They leave unique packet signatures.",
      "They encrypt themselves while scanning.",
      "They require administrator login.",
      "They do not inject any packets into the network.",
      "They replace routing tables."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.6 Networks Under Attack",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) They do not inject any packets into the network.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.6: Packet Sniffing and Passive Eavesdropping.\n\n**Pembahasan Lengkap:**\nSebuah **packet sniffer** (seperti Wireshark atau tcpdump) menempatkan antarmuka jaringan (*Network Interface Card* / NIC) ke dalam mode *promiscuous*:\n- Pada mode ini, NIC menyalin dan merekam setiap frame/paket yang lewat di media fisik (misal Wi-Fi nirkabel atau hub Ethernet).\n- Karena sifatnya yang murni **pasif**, sniffer tidak mengirimkan paket baru, tidak memodifikasi aliran data, dan tidak berinteraksi dengan switch/router.\n- Ketiadaan emisi paket aktif membuat packet sniffer sangat sulit dideteksi oleh perangkat monitor jaringan lainnya.\n\n**Poin Penting:** Sniffer bersifat pasif murni: hanya membaca lalu lintas yang lewat tanpa menginjeksikan paket."
  },
  {
    "id": 61,
    "text": "To distinguish between retransmissions and new packets, rdt2.1 introduces sequence numbers. What is the minimum sequence number space required for stop-and-wait protocols?",
    "options": [
      "1 only",
      "4 values",
      "Dependent on packet size",
      "2 (0 and 1)",
      "0 only",
      "Unlimited values"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.1 Building a Reliable Data Transfer Protocol",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) 2 (0 and 1)**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.1: Building a Reliable Data Transfer Protocol (rdt2.1).\n\n**Pembahasan Lengkap:**\nPada protokol Stop-and-Wait dengan potensi kehilangan paket atau ACK yang rusak, protokol perlu membedakan apakah paket yang baru tiba adalah transmisi paket baru atau retransmisi dari paket sebelumnya:\n- Karena pengirim hanya mengirim satu paket pada satu waktu dan harus menunggu ACK sebelum mengirim paket berikutnya, ruang nomor urut terkecil yang memadai adalah **2 nilai, yaitu 0 dan 1** (nomor urut 1-bit).\n- Skema ini dinamakan *Alternating-Bit Protocol*. Nomor urut berganti-ganti antara $0 \to 1 \to 0 \to 1$.\n\n**Poin Penting:** Protokol stop-and-wait hanya memerlukan ruang nomor urut ukuran 2 (bit 0 dan 1)."
  },
  {
    "id": 62,
    "text": "Processes on two different hosts exchange messages using a system-defined method that specifies how one program requests the Internet to deliver data to another program. What is this method called?",
    "options": [
      "URL",
      "Socket",
      "API",
      "DNS",
      "Protocol Stack",
      "RPC"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.2 Processes Communicating",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) Socket**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.2 & 2.7: Socket API as Network Abstraction.\n\n**Pembahasan Lengkap:**\n**Socket** adalah antarmuka pemrograman aplikasi (API) yang diciptakan oleh sistem operasi yang bertindak sebagai pintu gerbang konseptual (*software door*):\n- Suatu proses aplikasi mengirimkan pesan ke jaringan dan menerima pesan dari jaringan melalui socket-nya.\n- Socket menghubungkan kode aplikasi di Application Layer dengan tumpukan protokol transport (TCP/UDP) di dalam kernel sistem operasi.\n\n**Poin Penting:** Socket adalah abstraksi pemrograman yang menghubungkan proses aplikasi ke jaringan Internet."
  },
  {
    "id": 63,
    "text": "When channels can lose packets, retransmission is used. What mechanism detects that a packet or ACK has been lost?",
    "options": [
      "Port scanning",
      "Negative acknowledgment",
      "Timeout via countdown timer",
      "Sequence number increment",
      "Receiver buffer overflow",
      "Duplicate packet arrival"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.1 Building a Reliable Data Transfer Protocol",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) Timeout via countdown timer**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.1: rdt3.0 Reliable Transfer over Lossy Channels.\n\n**Pembahasan Lengkap:**\nJika saluran jaringan dapat membuang paket atau ACK secara total, pengirim tidak akan pernah menerima balasan dari penerima (karena penerima tidak tahu ada paket yang dikirim):\n- Satu-satunya mekanisme universal untuk mendeteksi kehilangan paket tanpa bergantung pada umpan balik aktif adalah dengan menggunakan **Countdown Timer (Pencatat Waktu Mundur)**.\n- Pengirim menyetel timer saat paket dikirim. Jika waktu habis (*timeout*) dan ACK belum diterima, pengirim menyimpulkan bahwa paket atau ACK telah hilang dan melakukan pengiriman ulang (*retransmission*).\n\n**Poin Penting:** Timer timeout adalah mekanisme utama untuk mendeteksi hilangnya paket pada saluran lossy."
  },
  {
    "id": 64,
    "text": "In pipelined protocols, multiple packets are \\u201cin flight.\\u201d Which of the following is NOT a benefit of pipelining?",
    "options": [
      "Better RTT masking",
      "Reduction of stop-and-wait idle time",
      "Support for larger window sizes",
      "Elimination of sequence numbers",
      "Higher utilization of the link",
      "Increased throughput"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.2 Pipelined Reliable Data Transfer Protocols",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Elimination of sequence numbers**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.2: Pipelined Reliable Data Transfer Protocols.\n\n**Pembahasan Lengkap:**\nPipelining memungkinkan pengirim mengirim banyak paket tanpa menunggu ACK terlebih dahulu. Keuntungan pipelining meliputi:\n- Meningkatkan utilisasi link secara drastis (*higher utilization*).\n- Meningkatkan throughput efektif (*increased throughput*).\n- Menutupi penundaan RTT (*better RTT masking*).\n- Memungkinkan jendela pengiriman yang besar (*larger window sizes*).\nNamun, pipelining **TIDAK MENGHAPUS** nomor urut. Justru sebaliknya, pipelining **membutuhkan ruang nomor urut yang jauh lebih besar** (bukan hanya 0 dan 1) agar masing-masing paket yang terbang bersamaan di jaringan memiliki identitas nomor urut yang unik.\n\n**Poin Penting:** Pipelining mewajibkan nomor urut yang lebih luas, bukan menghapuskannya."
  },
  {
    "id": 65,
    "text": "A TCP sender starts at Seq=8000 and sends 500 bytes. The data arrives correctly. What ACK does the receiver send?",
    "options": [
      "8010",
      "8500",
      "9000",
      "8499",
      "7000",
      "8000"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) 8500**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: TCP Cumulative Acknowledgment Calculation.\n\n**Pembahasan Lengkap:**\n- Pengirim TCP mengirimkan data dengan:\n  $$\text{Seq} = 8000$$\n  $$\text{Panjang Data} = 500\text{ byte}$$\n- Segmen ini membawa byte dari nomor $8000$ sampai $8499$.\n- Karena semua byte tersebut tiba dengan benar dan berurutan, penerima mengirimkan nomor ACK yang menunjukkan byte berikutnya yang diharapkan tiba:\n  $$\text{ACK} = 8000 + 500 = 8500$$\n\n**Poin Penting:** $\text{ACK} = \text{Seq} + \text{Length} = 8000 + 500 = 8500$."
  },
  {
    "id": 66,
    "text": "Pipelined protocols must handle errors differently from stop-and-wait. Which two generic approaches are commonly used?",
    "options": [
      "Port multiplexing and demultiplexing",
      "Forward error correction and cryptography",
      "ARQ and parity",
      "Frequency and time division",
      "Congestion control and flow control",
      "Go-back-N and selective repeat"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.2 Pipelined Reliable Data Transfer Protocols",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) Go-back-N and selective repeat**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.2: Generic Pipelined Error Recovery Architectures.\n\n**Pembahasan Lengkap:**\nDua pendekatan fundamental yang digunakan dalam protokol transfer andal berbasis *pipelining* adalah:\n1. **Go-Back-N (GBN):** Pengirim dapat memiliki hingga $N$ paket yang belum diakui di dalam pipeline. Penerima hanya menggunakan ACK kumulatif dan membuang paket out-of-order. Jika terjadi timeout, pengirim mengirim ulang **seluruh $N$ paket** mulai dari paket yang hilang (*go back N*).\n2. **Selective Repeat (SR):** Penerima menerima dan menyangga (*buffers*) paket yang datang di luar urutan, dan mengirimkan ACK individual untuk setiap paket. Pengirim hanya mengirim ulang **paket spesifik yang hilang atau rusak**.\n\n**Poin Penting:** Dua arsitektur pemulihan error pipelining adalah GBN dan Selective Repeat."
  },
  {
    "id": 67,
    "text": "To support pipelining, reliable data transfer protocols must expand sequence numbers. Why is this expansion required?",
    "options": [
      "To allow larger port ranges",
      "To distinguish between multiple in-flight packets",
      "To encode congestion window size",
      "To reduce header length",
      "To optimize checksums",
      "To identify routers on path"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.2 Pipelined Reliable Data Transfer Protocols",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) To distinguish between multiple in-flight packets**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.2: Sequence Number Space Expansion in Pipelining.\n\n**Pembahasan Lengkap:**\nPada Stop-and-Wait, hanya ada maksimal 1 paket yang berada di jaringan pada satu waktu, sehingga nomor urut 0 dan 1 cukup.\n- Pada pipelining, terdapat hingga $N$ paket yang berada di jaringan secara simultan (*in flight*).\n- Setiap paket dalam jendela terbang tersebut harus memiliki nomor urut yang berbeda agar pengirim dan penerima dapat melacak paket mana yang telah diakui dan paket mana yang masih hilang atau terlambat.\n\n**Poin Penting:** Ruang nomor urut diperluas untuk membedakan paket-paket yang bersamaan mengudara di jaringan."
  },
  {
    "id": 68,
    "text": "TCP congestion control tends to equalize throughput among flows. What property does this illustrate?",
    "options": [
      "Flow control",
      "Multiplexing",
      "Window exhaustion",
      "Fairness",
      "Pipelining",
      "Starvation"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.3 Fairness",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Fairness**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.3: Fairness in TCP Congestion Control (AIMD).\n\n**Pembahasan Lengkap:**\nAlgoritma Additive-Increase Multiplicative-Decrease (AIMD) pada TCP memiliki sifat konvergensi geometris yang unik:\n- Ketika beberapa aliran TCP berbagi satu link kemacetan (*bottleneck link*), setiap kali link mengalami kongesti (loss), semua aliran memotong jendelanya secara multiplikatif ($W/2$).\n- Saat kondisi bebas loss, semua aliran menaikkan jendelanya secara aditif ($+1\text{ MSS}$ per RTT).\n- Dinamika ini secara matematis mengarahkan alokasi bandwidth menuju garis kesetaraan (*fairness line*), di mana setiap aliran mendapatkan porsi throughput yang seimbang.\n\n**Poin Penting:** AIMD secara inheren mendorong pembagian bandwidth yang adil (*fairness*) antar koneksi."
  },
  {
    "id": 69,
    "text": "When 3 duplicate ACKs are received, TCP performs fast retransmit. What follows retransmission in fast recovery?",
    "options": [
      "Restart three-way handshake",
      "Close the connection",
      "Disable acknowledgments",
      "Reset cwnd to 1 MSS",
      "Halve cwnd and continue additive increase",
      "Double cwnd immediately"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.1 Classic TCP Congestion Control (AIMD)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) Halve cwnd and continue additive increase**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.1: TCP Reno Fast Recovery State.\n\n**Pembahasan Lengkap:**\nPada TCP Reno (dan standar modern):\n- Ketika terdeteksi 3 ACK duplikat, TCP melakukan Fast Retransmit dan memasuki fase **Fast Recovery**.\n- Ambang batas *slow start* disetel ke setengah dari ukuran jendela saat ini:\n  $$ssthresh = \frac{cwnd}{2}$$\n- Ukuran jendela kemacetan 'cwnd' disetel ke nilai $ssthresh + 3\text{ MSS}$ (atau sekitar separuh 'cwnd' semula), dan kemudian melanjutkan pertumbuhan linier melalui fase *Additive Increase* (Congestion Avoidance).\n- TCP Reno **tidak mereset 'cwnd' ke 1 MSS** (itu adalah perilaku TCP Tahoe lama atau perilaku saat terjadi Timeout).\n\n**Poin Penting:** 3 duplicate ACK $implies$ Fast Recovery: 'cwnd' dipotong setengah, lalu dilanjutkan dengan penambahan aditif."
  },
  {
    "id": 70,
    "text": "Assume a 5 Mbps access link, downloading a 5 MB object. If 50% of requests are served by cache (local \\u2248 instant), what is the average effective throughput?",
    "options": [
      "6 Mbps",
      "7.5 Mbps",
      "8 Mbps",
      "10 Mbps",
      "9 Mbps",
      "5 Mbps"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) 10 Mbps**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: Web Caching Impact on Effective Throughput.\n\n**Pembahasan Lengkap:**\nDiketahui:\n- Kecepatan link fisik: $R = 5\text{ Mbps}$.\n- Ukuran objek: $5\text{ MB}$.\n- Rasio hit web cache lokal: $50% = 0.5$.\n\nAnalisis Throughput Efektif:\n- Setengah dari seluruh permintaan ($50%$) dilayani langsung dari web cache lokal di LAN dengan penundaan yang mendekati nol / instan.\n- Link fisik $5\text{ Mbps}$ kini hanya perlu melayani sisa $50%$ permintaan yang *miss*.\n- Dengan demikian, kapasitas tautan yang sama mampu memproses beban transfer dua kali lipat lebih banyak:\n  $$\text{Throughput Efektif} = \frac{R}{1 - \text{Hit Rate}} = \frac{5\text{ Mbps}}{1 - 0.5} = \frac{5\text{ Mbps}}{0.5} = 10\text{ Mbps}$$\n\n**Poin Penting:** Cache hit $50%$ melipatgandakan throughput efektif jaringan menjadi $10\text{ Mbps}$."
  },
  {
    "id": 71,
    "text": "DNS queries are typically run over UDP rather than TCP. Why is this the case?",
    "options": [
      "TCP provides insufficient reliability for DNS",
      "UDP allows quick queries without connection setup delays",
      "DNS queries are always too large for TCP",
      "DNS requires congestion control for efficiency",
      "DNS requires reliable transport with acknowledgments",
      "UDP guarantees ordered delivery of queries"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.1 Services Provided by DNS",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) UDP allows quick queries without connection setup delays**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.1 & 3.3: Why DNS Uses UDP.\n\n**Pembahasan Lengkap:**\nDNS menggunakan UDP (Port 53) sebagai protokol transport utamanya karena:\n1. **Tanpa Overhead Handshake:** DNS adalah transaksi query-response pendek (1 paket permintaan, 1 paket jawaban). Menggunakan TCP akan membutuhkan 3-way handshake (1 RTT tambahan) sebelum kueri bisa dikirim.\n2. **Tanpa Connection State:** Server DNS melayani ribuan kueri per detik. UDP bersifat *stateless*, sehingga server tidak perlu mengalokasikan buffer koneksi atau parameter TCB (*Transmission Control Block*).\n3. Jika sebuah paket query DNS hilang, resolver aplikasi cukup mengulang kembali kueri tersebut setelah timeout pendek.\n\n**Poin Penting:** UDP memungkinkan resolusi nama cepat dalam 1 RTT tanpa beban alokasi sesi TCP di server."
  },
  {
    "id": 72,
    "text": "In the caravan analogy, suppose each toll booth passes 20 cars/minute instead of 10. For 10 cars through 3 booths, what is the transmission component of delay?",
    "options": [
      "2.5 min",
      "1.5 min",
      "0.5 min",
      "3 min",
      "1 min",
      "2 min"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.4 Throughput in Computer Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) 0.5 min**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Car-Caravan Analogy — *Transmission Delay Component*.\n\n**Pembahasan Lengkap:**\nDalam analogi karavan mobil di buku Kurose & Ross:\n- Gardu tol bertindak sebagai pemancar (*router/link transmitter*).\n- Mobil bertindak sebagai bit-bit dalam paket data.\n- Laju pelayanan gardu tol: $R = 20\text{ mobil/menit}$.\n- Jumlah mobil dalam karavan: $L = 10\text{ mobil}$.\nKomponen keterlambatan transmisi (*transmission component*) di satu gardu tol adalah waktu yang diperlukan gardu untuk melayani dan melepaskan seluruh karavan (10 mobil) ke jalan raya:\n$$d_{trans} = \frac{L}{R} = \frac{10\text{ mobil}}{20\text{ mobil/menit}} = 0.5\text{ menit (atau 30 detik)}$$\n\n**Poin Penting:** $d_{trans} = L / R = 10 / 20 = 0.5\text{ menit}$."
  },
  {
    "id": 73,
    "text": "Both SMTP and HTTP transfer data between clients and servers. Which main distinction characterizes SMTP?",
    "options": [
      "Connectionless",
      "Iterative",
      "Client-initiated",
      "Stateless",
      "Pull-based",
      "Push-based"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.3.1 SMTP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (f) Push-based**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.3.1: SMTP Comparison with HTTP (Push vs Pull).\n\n**Pembahasan Lengkap:**\nPerbedaan arsitektural utama antara SMTP dan HTTP:\n- **SMTP bersifat Push-based:** Klien pengirim email (atau server mail pengirim) secara aktif membuka koneksi TCP dan **mendorong (*pushes*)** pesan email menuju ke server mail penerima.\n- **HTTP bersifat Pull-based:** Klien peramban web membuka koneksi TCP dan **menarik (*pulls*)** dokumen web dari server asal sesuai permintaan pengguna.\n\n**Poin Penting:** SMTP adalah protokol *push* (pengirim mendorong pesan); HTTP adalah protokol *pull* (penerima menarik data)."
  },
  {
    "id": 74,
    "text": "When many packets arrive at a router faster than they can be transmitted, they wait in a buffer. What can occur if the buffer becomes full?",
    "options": [
      "The router switches to circuit mode.",
      "The router compresses all packets.",
      "The router delays packets infinitely until cleared.",
      "The router merges packets into larger chunks.",
      "The packets are lost (dropped).",
      "The router halts all transmission."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.3.1 Packet Switching",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) The packets are lost (dropped).**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.2: Packet Loss and Router Buffer Overflow.\n\n**Pembahasan Lengkap:**\nSetiap antarmuka keluaran router memiliki buffer penyimpanan sementara (*queuing buffer*).\n- Jika laju kedatangan paket melebihi laju transmisi link dalam kurun waktu tertentu, antrian buffer akan terisi penuh.\n- Ketika sebuah paket baru tiba dan kapasitas buffer memori router telah mencapai $100%$ (*exhausted*), router tidak memiliki tempat untuk menyimpan paket tersebut.\n- Konsekuensinya, router terpaksa membuang (*drop*) paket tersebut. Fenomena ini dinamakan **Packet Loss**.\n\n**Poin Penting:** Buffer penuh menyebabkan paket dibuang (*packet drop/loss*)."
  },
  {
    "id": 75,
    "text": "Network applications rely on a set of rules and conventions that govern data exchange between processes across end systems. What do we call this set of rules?",
    "options": [
      "Header",
      "Interface",
      "Process",
      "Protocol",
      "API",
      "Syntax"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1.3 What Is a Protocol?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) Protocol**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.1.3: Definisi Formal Protokol Jaringan Komputer.\n\n**Pembahasan Lengkap:**\nBuku teks Kurose & Ross mendefinisikan:\n> *\"A **protocol** defines the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event.\"*\nSemua aktivitas komunikasi di Internet diatur oleh aturan-aturan protokol standar (seperti IP, TCP, HTTP, DNS).\n\n**Poin Penting:** Protokol = Kumpulan aturan yang mengatur format pesan, urutan pertukaran, dan tindakan yang diambil."
  },
  {
    "id": 76,
    "text": "SR requires each packet to be individually acknowledged. How does this differ from Go-back-N?",
    "options": [
      "GBN never retransmits",
      "SR is connectionless",
      "GBN discards ACKs",
      "GBN uses cumulative ACKs, SR uses per-packet ACKs",
      "SR requires no sequence numbers",
      "SR has no window size"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.3 Go-Back-N (GBN)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) GBN uses cumulative ACKs, SR uses per-packet ACKs**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.3 & 3.4.4: Go-Back-N vs Selective Repeat.\n\n**Pembahasan Lengkap:**\nPerbedaan fundamental antara Go-Back-N (GBN) dan Selective Repeat (SR):\n- **Go-Back-N:** Menggunakan **ACK kumulatif**. Penerima tidak menyangga paket out-of-order (langsung dibuang). Pengirim menganggap semua paket sebelum nomor ACK telah diterima.\n- **Selective Repeat:** Menggunakan **ACK individual per-paket**. Penerima menyangga paket out-of-order dan mengirimkan ACK spesifik untuk masing-masing nomor urut yang diterima secara benar.\n\n**Poin Penting:** GBN = ACK kumulatif; SR = ACK individual per-paket."
  },
  {
    "id": 77,
    "text": "Suppose Host A sends a file to Host B across a path with three links of different rates. Which factor determines the end-to-end throughput?",
    "options": [
      "The sum of the link rates",
      "The number of routers in the path",
      "The average of the link rates",
      "The minimum of the link rates (the bottleneck link)",
      "The maximum of the link rates",
      "The variance of the rates"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.4 Throughput in Computer Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) The minimum of the link rates (the bottleneck link)**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.4: Bottleneck Link and Throughput Determination.\n\n**Pembahasan Lengkap:**\nThroughput ujung-ke-ujung (*end-to-end throughput*) antara dua host yang melalui serangkaian tautan transmisi dibatasi oleh kapasitas terkecil dari mata rantai link tersebut:\n$$\text{Throughput} = min(R_1, R_2, dots, R_N)$$\nTautan dengan nilai kapasitas minimum ini dinamakan **Bottleneck Link**. Seperti air yang mengalir melalui pipa bertingkat, laju aliran total tidak dapat melampaui diameter pipa yang paling sempit.\n\n**Poin Penting:** Bottleneck link ($min$) menentukan batas atas throughput akhir."
  },
  {
    "id": 78,
    "text": "If a packet has length L bits and the transmission rate is R bps, what is the formula for transmission delay?",
    "options": [
      "R – L",
      "R ÷ L",
      "L × R",
      "L + R",
      "L ÷ R",
      "L² ÷ R"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) L ÷ R**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Rumus Transmission Delay.\n\n**Pembahasan Lengkap:**\nTransmission delay ($d_{trans}$) adalah waktu yang dibutuhkan untuk mendorong seluruh bit paket ke dalam media transmisi:\n$$d_{trans} = \frac{L}{R}$$\nDi mana:\n- $L$ = Panjang paket dalam satuan bit (*bits*).\n- $R$ = Laju transmisi tautan dalam satuan bit per detik (*bits per second* / bps).\n\n**Poin Penting:** $d_{trans} = L / R$."
  },
  {
    "id": 79,
    "text": "TCP must balance efficiency and fairness. Which of the following is an inherent trade-off?",
    "options": [
      "Efficiency vs. fairness among flows",
      "Header size vs. port numbers",
      "Flow control vs. congestion control",
      "Reliability vs. encryption",
      "Sequence number vs. ACK fields",
      "Throughput vs. RTT"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.3 Fairness",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) Efficiency vs. fairness among flows**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.3: Trade-offs in Congestion Control (Efficiency vs Fairness).\n\n**Pembahasan Lengkap:**\nDalam desain kendali kongesti jaringan, terdapat pertukaran mendasar (*trade-off*):\n- **Efisiensi (Utilization):** Jaringan ingin memanfaatkan link hingga $100%$ tanpa ada kapasitas yang menganggur.\n- **Keadilan (Fairness):** Jaringan harus memastikan semua aliran yang bersaing mendapatkan bagian bandwidth yang setara, tanpa ada satu aliran (misalnya aliran dengan RTT sangat kecil) yang memonopoli seluruh kapasitas tautan.\nMengejar efisiensi maksimal sering kali dapat mengorbankan keadilan aliran lain, dan sebaliknya.\n\n**Poin Penting:** Trade-off utama kendali kongesti: Efisiensi utilisasi link vs Keadilan distribusi bandwidth."
  },
  {
    "id": 80,
    "text": "The transport layer resides between the application and network layers in the Internet architecture. Its main purpose is to provide logical communication between application processes running on different hosts. This means that applications can communicate as if they were directly connected, even though they may be far apart and connected through many routers and diverse link technologies. Which of the following best describes the service provided by the transport layer?",
    "options": [
      "Enabling logical communication between processes across hosts",
      "Managing hardware error correction at link level",
      "Guaranteeing delivery at the physical medium level",
      "Allocating bandwidth at the network backbone",
      "Handling IP addressing and datagram routing",
      "Establishing physical circuits between routers and switches"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.1.1 Relationship Between Transport and Network Layers",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) Enabling logical communication between processes across hosts**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.1: Prinsip Layanan Lapisan Transpor (*Transport Layer*).\n\n**Pembahasan Lengkap:**\nTransport layer menyediakan **komunikasi logis antar proses aplikasi (*logical communication between application processes*)** yang berjalan pada host yang berbeda.\n- Dari perspektif aplikasi, proses tampak seolah-olah terhubung langsung satu sama lain melalui pipa komunikasi langsung, meskipun secara fisik pesan tersebut harus melintasi banyak router, switch, dan beragam media jaringan di network core.\n\n**Poin Penting:** Transport layer mewujudkan komunikasi logis langsung antar proses aplikasi."
  },
  {
    "id": 81,
    "text": "In a router buffer, when arrival rate exceeds service rate consistently, what happens?",
    "options": [
      "Transmission rate decreases automatically to zero.",
      "Transmission stops entirely.",
      "Packet loss occurs due to overflow.",
      "File transfer succeeds unaffected.",
      "Propagation speed increases.",
      "Queue builds infinitely with no loss."
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.3.1 Packet Switching",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) Packet loss occurs due to overflow.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.2: Router Buffer Overflow.\n\n**Pembahasan Lengkap:**\nRouter memiliki memori buffer fisik yang berukuran terbatas (*finite buffer capacity*).\n- Jika laju kedatangan paket secara konsisten lebih besar daripada laju layanan transmisi link keluar ($lambda > mu$ atau $I > 1$), antrian di buffer akan terus bertambah panjang hingga ruang memori habis.\n- Setiap paket yang tiba setelah buffer penuh tidak dapat disimpan dan langsung dibuang (*packet loss due to buffer overflow*).\n\n**Poin Penting:** Kedatangan melebihi transmisi secara kontinu $implies$ buffer penuh $implies$ packet loss."
  },
  {
    "id": 82,
    "text": "TCP connections can be abruptly terminated by one side. Which flag is used to signal an abnormal termination?",
    "options": [
      "PSH",
      "SYN",
      "ACK",
      "RST",
      "URG",
      "FIN"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.6 TCP Connection Management",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) RST**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: TCP Header Control Flags (RST, SYN, FIN, ACK).\n\n**Pembahasan Lengkap:**\nFlag **RST (Reset)** pada header TCP digunakan untuk memutus atau menolak koneksi secara mendadak/abnormal:\n- Jika sebuah host menerima segmen TCP untuk nomor port yang sedang tidak memiliki aplikasi yang mendengarkan (*listening*), host tersebut membalas dengan segmen ber-flag RST.\n- RST juga dikirim jika terjadi anomali kritis pada koneksi yang mengharuskan kedua belah pihak segera membatalkan koneksi tanpa melalui jabat tangan penutupan normal 4-arah (FIN-ACK).\n\n**Poin Penting:** Flag RST mengindikasikan terminasi koneksi yang mendadak/abnormal atau penolakan koneksi."
  },
  {
    "id": 83,
    "text": "In GBN, when a packet is lost, subsequent packets are also retransmitted. Why does this happen?",
    "options": [
      "Sender forgets sequence numbers",
      "Port numbers mismatch",
      "ACKs are cumulative",
      "Receiver discards out-of-order packets",
      "UDP overrides acknowledgments",
      "Timer is too short"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.3 Go-Back-N (GBN)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Receiver discards out-of-order packets**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.3: Go-Back-N Receiver Policy.\n\n**Pembahasan Lengkap:**\nPada protokol Go-Back-N standar:\n- Penerima sengaja dirancang sesederhana mungkin tanpa buffer paket di luar urutan (*no out-of-order buffer*).\n- Jika paket nomor $k$ hilang di jalan dan paket $k+1, k+2$ tiba, penerima akan **membuang paket-paket yang tiba setelahnya tersebut** dan mengirimkan kembali ACK untuk paket $k-1$.\n- Akibatnya, ketika timer pengirim habis untuk paket $k$, pengirim terpaksa melakukan pengiriman ulang terhadap paket $k$ beserta **seluruh paket setelahnya** yang berada dalam jendela.\n\n**Poin Penting:** Pada GBN, penerima membuang paket di luar urutan, memaksa pengirim mengulang semua paket dari titik kehilangan."
  },
  {
    "id": 84,
    "text": "A content delivery network places servers closer to users to reduce latency. What are these localized servers called?",
    "options": [
      "Splitters",
      "Mirrors",
      "Caches",
      "Proxies",
      "Edge Servers",
      "Hubs"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.6.3 Content Distribution Networks (CDNs)",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) Edge Servers**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.6.3: CDN Edge Server Architecture.\n\n**Pembahasan Lengkap:**\nJaringan Distribusi Konten (CDN) menempatkan kluster server cache di dekat pengguna akhir di dalam jaringan ISP lokal (*Point of Presence* / PoP).\n- Server-server terdistribusi ini secara resmi disebut sebagai **Edge Servers** (Server Tepi).\n- Dengan melayani konten dari Edge Server, request pengguna tidak perlu melintasi backbone Internet jarak jauh, menghasilkan latensi rendah dan pemuatan konten instan.\n\n**Poin Penting:** Server lokal CDN yang berada dekat dengan pengguna disebut *Edge Servers*."
  },
  {
    "id": 85,
    "text": "TCP sequence numbers are 32-bit. Suppose max = 2^32 = 4,294,967,296. A sender transmits 1000 bytes starting with Seq=4,294,967,000. What ACK will the receiver send after all data is received?",
    "options": [
      "4,294,968,000",
      "704",
      "4,294,967,296",
      "4,294,967,000",
      "0",
      "1000"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) 704**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: 32-bit TCP Sequence Number Wraparound Arithmetic.\n\n**Pembahasan Lengkap:**\nField nomor urut TCP berukuran 32-bit, dengan kapasitas total $2^{32} = 4.294.967.296$ nilai (dari $0$ hingga $4.294.967.295$).\n- Nomor urut awal pengirim: $\text{Seq} = 4.294.967.000$.\n- Jumlah data yang ditransmisikan: $1.000\text{ byte}$.\n- Akumulasi nomor byte berikutnya secara teoritis:\n  $$\text{Total} = 4.294.967.000 + 1.000 = 4.294.968.000$$\n- Karena melebihi batas atas $2^{32}$, terjadi peluapan (*wraparound*) modulo $2^{32}$:\n  $$\text{ACK} = 4.294.968.000 - 4.294.967.296 = 704$$\nPenerima akan mengirimkan ACK dengan nilai **704**.\n\n**Poin Penting:** Wraparound 32-bit: $(4.294.967.000 + 1000) pmod{2^{32}} = 704$."
  },
  {
    "id": 86,
    "text": "DNS databases store different types of resource records. Which record type maps a host name to its IP address?",
    "options": [
      "PTR",
      "NS",
      "MX",
      "CNAME",
      "TXT",
      "A"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.3 DNS Records and Messages",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (F) A**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.3: DNS Resource Records (RR) Types.\n\n**Pembahasan Lengkap:**\nFormat umum Resource Record DNS: '(Name, Value, Type, TTL)':\n- **Type A (Address):** Memetakan nama host (*hostname*) ke alamat IPv4-nya. Format: '(hostname, IPv4_address, A, TTL)'.\n- **Type AAAA:** Memetakan nama host ke alamat IPv6.\n- **Type NS:** Menentukan server nama otoritatif untuk domain tersebut.\n- **Type CNAME:** Menentukan nama domain kanonik (nama asli) dari sebuah nama alias.\n- **Type MX:** Menentukan mail server yang bertanggung jawab menerima email untuk domain tersebut.\n- **Type PTR:** Pemetaan balik dari alamat IP ke nama host (*reverse DNS*).\n\n**Poin Penting:** Record Type A memetakan hostname ke alamat IPv4."
  },
  {
    "id": 87,
    "text": "At the beginning of a TCP connection, congestion window growth is exponential. What is this phase called?",
    "options": [
      "Congestion avoidance",
      "Slow start",
      "Flow control",
      "AIMD",
      "Fast recovery",
      "Window collapse"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.1 Classic TCP Congestion Control (AIMD)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) Slow start**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.1: TCP Congestion Control — Slow Start Phase.\n\n**Pembahasan Lengkap:**\nSaat koneksi TCP pertama kali dimulai, nilai jendela kemacetan 'cwnd' diinisialisasi sebesar $1\text{ MSS}$:\n- Meskipun namanya adalah *Slow Start*, laju peningkatan 'cwnd' pada fase ini sebenarnya **eksponensial**:\n- Setiap kali pengirim menerima 1 ACK, 'cwnd' bertambah sebesar $1\text{ MSS}$. Karena dalam 1 RTT terdapat pengiriman sebanyak jendela paket, maka 'cwnd' akan **berlipat ganda setiap RTT** ($1 \to 2 \to 4 \to 8 \to 16 dots \text{ MSS}$).\n- Fase ini berlangsung cepat hingga 'cwnd' mencapai ambang batas 'ssthresh' atau terdeteksi kehilangan paket.\n\n**Poin Penting:** Slow start melipatgandakan ukuran 'cwnd' secara eksponensial setiap RTT."
  },
  {
    "id": 88,
    "text": "Sender sends Seg1 (Seq=500, 500 bytes). It gets lost, then retransmitted and received. What ACK is sent after successful reception?",
    "options": [
      "999",
      "500",
      "1500",
      "2000",
      "1000",
      "501"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) 1000**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: TCP Cumulative Acknowledgment Calculation.\n\n**Pembahasan Lengkap:**\n- Segmen pertama memiliki $\text{Seq} = 500$ dan panjang $500\text{ byte}$ (membawa byte nomor $500$ sampai $999$).\n- Setelah segmen ini sempat hilang dan akhirnya berhasil dikirim ulang dan diterima secara utuh, penerima mengakui seluruh byte dari $0$ hingga $999$.\n- Byte berikutnya yang dinantikan oleh penerima adalah byte nomor:\n  $$\text{ACK} = 500 + 500 = 1000$$\n\n**Poin Penting:** Byte 500-999 telah diterima $implies$ ACK berikutnya meminta byte 1000."
  },
  {
    "id": 89,
    "text": "TCP closes a connection with a four-segment exchange. What flag is primarily used for connection termination?",
    "options": [
      "FIN",
      "SYN",
      "PSH",
      "RST",
      "URG",
      "ACK"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.6 TCP Connection Management",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) FIN**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.6: TCP 4-Way Handshake Connection Teardown.\n\n**Pembahasan Lengkap:**\nUntuk menutup koneksi TCP secara normal dan elegan (*graceful termination*), proses klien atau server mengirimkan segmen kontrol dengan bit bendera **FIN (Finish)** bernilai 1:\n- Pihak yang mengirim FIN memberi tahu bahwa ia sudah selesai mengirim data.\n- Pihak penerima membalas dengan ACK, lalu mengirimkan segmen FIN miliknya sendiri saat siap menutup arah transmisi sebaliknya, yang kemudian di-ACK oleh inisiator.\n\n**Poin Penting:** Flag FIN digunakan untuk memulai pemutusan koneksi TCP 4-arah."
  },
  {
    "id": 90,
    "text": "Unlike HTTP, this protocol pushes messages from client to server and uses a persistent connection for multiple objects. Which protocol exhibits this push model?",
    "options": [
      "IMAP",
      "DHCP",
      "SMTP",
      "FTP",
      "SNMP",
      "POP3"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.3.1 SMTP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) SMTP**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.3.1: SMTP Protocol Mechanics.\n\n**Pembahasan Lengkap:**\n**SMTP (Simple Mail Transfer Protocol)**:\n- Beroperasi dengan model **Push**: host pengirim mendorong email langsung ke server mail tujuan.\n- Menggunakan koneksi TCP persisten pada port 25, di mana beberapa pesan email atau objek lampiran dapat ditransfer melalui koneksi TCP yang sama tanpa membuka koneksi baru setiap kali.\n\n**Poin Penting:** SMTP menggunakan model transmisi *push* dan mendukung koneksi persisten."
  },
  {
    "id": 91,
    "text": "Which of the following is the responsibility of the physical layer?",
    "options": [
      "Assigning MAC addresses",
      "Ensuring in-order delivery of packets",
      "Handling encryption of emails",
      "Converting bits into signals over the communication medium",
      "Managing TCP connections",
      "Mapping URLs to IP addresses"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.5.1 Layered Architecture",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) Converting bits into signals over the communication medium**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.5.1: Tanggung Jawab Physical Layer.\n\n**Pembahasan Lengkap:**\nPeran utama dari Lapisan Fisik (**Physical Layer**) adalah:\n- Memindahkan bit-bit individual di dalam frame link-layer melintasi media transmisi fisik.\n- Mengonversi representasi logika bit $0$ dan $1$ menjadi **sinyal fisik konkret**, seperti pulsa tegangan listrik pada tembaga, pulsa cahaya pada serat optik, atau modulasi gelombang elektromagnetik pada antena radio.\n\n**Poin Penting:** Physical layer bertanggung jawab mentransformasikan bit data menjadi sinyal fisik pada media transmisi."
  },
  {
    "id": 92,
    "text": "A 1,000-byte packet is sent on a 2 Mbps link of 2,000 km, propagation speed 2.5\\u00d710^8 m/s. Find total delay (transmission + propagation).",
    "options": [
      "9 ms",
      "12 ms",
      "15 ms",
      "3 ms",
      "7 ms",
      "10 ms"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (B) 12 ms**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Perhitungan Total Delay (Transmission + Propagation).\n\n**Pembahasan Lengkap:**\nDiketahui data:\n- Ukuran paket $L = 1.000\text{ byte} = 8.000\text{ bit}$.\n- Laju transmisi $R = 2\text{ Mbps} = 2.000.000\text{ bps}$.\n- Jarak link $d = 2.000\text{ km} = 2.000.000\text{ m} = 2 \times 10^6\text{ m}$.\n- Kecepatan rambat $s = 2.5 \times 10^8\text{ m/s}$.\n\n1. **Transmission Delay ($d_{trans}$):**\n   $$d_{trans} = \frac{L}{R} = \frac{8.000\text{ bit}}{2.000.000\text{ bps}} = 0.004\text{ detik} = 4\text{ ms}$$\n\n2. **Propagation Delay ($d_{prop}$):**\n   $$d_{prop} = \frac{d}{s} = \frac{2 \times 10^6\text{ m}}{2.5 \times 10^8\text{ m/s}} = 0.008\text{ detik} = 8\text{ ms}$$\n\n3. **Total Delay:**\n   $$d_{total} = d_{trans} + d_{prop} = 4\text{ ms} + 8\text{ ms} = 12\text{ ms}$$\n\n**Poin Penting:** $d_{total} = 4\text{ ms} + 8\text{ ms} = 12\text{ ms}$."
  },
  {
    "id": 93,
    "text": "Cookies help maintain state, but they also raise concerns. What is the primary risk associated with cookies?",
    "options": [
      "Increased Bandwidth",
      "Data Loss",
      "Higher Latency",
      "Server Crash",
      "Reliability Issues",
      "Privacy Invasion"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.4 User-Server Interaction: Cookies",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (F) Privacy Invasion**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.4: Cookies and User Privacy.\n\n**Pembahasan Lengkap:**\nMeskipun cookie sangat berguna untuk mempertahankan status sesi belanja dan autentikasi login, cookie menghadirkan kekhawatiran utama berupa **Pelanggaran Privasi (*Privacy Invasion*)**:\n- Perusahaan iklan pihak ketiga (*third-party tracking cookies*) dapat menaruh cookie di peramban pengguna melintasi ribuan situs berbeda.\n- Hal ini memungkinkan perusahaan tersebut melacak riwayat penjelajahan, minat belanja, dan profil perilaku pengguna di seluruh web tanpa izin eksplisit.\n\n**Poin Penting:** Risiko terbesar dari penggunaan cookies adalah pelacakan aktivitas dan invasi privasi pengguna."
  },
  {
    "id": 94,
    "text": "In BitTorrent, peers that have the entire file and continue uploading are called what?",
    "options": [
      "Trackers",
      "Nodes",
      "Chunks",
      "Seeds",
      "Leechers",
      "Indexers"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.5 Peer-to-Peer File Distribution",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) Seeds**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.5: BitTorrent Seeds and Leechers.\n\n**Pembahasan Lengkap:**\nDalam terminologi BitTorrent:\n- Peer yang telah menyelesaikan pengunduhan seluruh file secara utuh ($100%$) dan terus membiarkan komputernya aktif mengunggah file tersebut ke swarm disebut **Seed / Seeder**.\n- Keberadaan seeder sangat vital agar peer baru dapat memperoleh potongan file yang langka.\n\n**Poin Penting:** Peer yang memiliki salinan file lengkap dan terus mengunggah disebut *Seed*."
  },
  {
    "id": 95,
    "text": "Which of the following functions belong to the application layer?",
    "options": [
      "Exchange of messages between processes like email and web browsing",
      "Determining shortest paths",
      "Buffering packets in routers",
      "Error detection in links",
      "Routing packets across networks",
      "Encoding physical signals on a wire"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.2 Processes Communicating",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (A) Exchange of messages between processes like email and web browsing**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.5.1 & Bab 2: Ruang Lingkup Application Layer.\n\n**Pembahasan Lengkap:**\nLapisan Aplikasi (**Application Layer**) berada di tingkat paling atas dan merupakan tempat di mana aplikasi jaringan beserta protokol pendukungnya berjalan:\n- Tugas utamanya adalah memfasilitasi pertukaran pesan komunikasi antar proses aplikasi terdistribusi, seperti peramban web dan web server (HTTP), pengiriman email (SMTP), penerjemahan nama (DNS), dan transfer file (FTP).\n\n**Poin Penting:** Application layer menangani pertukaran pesan langsung antar proses aplikasi pengguna."
  },
  {
    "id": 96,
    "text": "Some email access protocols allow users to keep messages on the server, organize them into folders, and synchronize across multiple devices. Which protocol supports this?",
    "options": [
      "DNS",
      "POP3",
      "IMAP",
      "HTTP",
      "FTP",
      "SMTP"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.3.3 Mail Access Protocols (POP3, IMAP)",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) IMAP**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.3.3: Mail Access Protocols — IMAP Characteristics.\n\n**Pembahasan Lengkap:**\nProtokol akses email yang mempertahankan seluruh pesan tersimpan di server, memungkinkan pengorganisasian pesan ke dalam struktur folder bersarang, dan menyinkronkan status pesan secara real-time di berbagai perangkat adalah **IMAP (Internet Message Access Protocol)**.\n\n**Poin Penting:** IMAP menyimpan dan menyinkronkan email serta folder langsung di server."
  },
  {
    "id": 97,
    "text": "Developers build network applications by using programming interfaces that allow data to be sent and received. Which abstraction provides this capability?",
    "options": [
      "API",
      "Stream",
      "Message Queue",
      "Port",
      "Socket",
      "Protocol Stack"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7.2 Socket Programming with TCP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) Socket**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.7: Socket Abstraction.\n\n**Pembahasan Lengkap:**\nDalam pemrograman jaringan, abstraksi sistem operasi yang menyediakan antarmuka perangkat lunak untuk mengirim dan menerima data melalui jaringan adalah **Socket**:\n- Socket dianalogikan sebagai pintu yang menghubungkan proses aplikasi dengan tumpukan protokol jaringan di sistem operasi.\n\n**Poin Penting:** Socket adalah abstraksi API standar untuk komunikasi data antar proses lewat jaringan."
  },
  {
    "id": 98,
    "text": "Websites often need to maintain state information about users across multiple sessions. Which technology uses a unique identifier stored on the client and sent with each HTTP request?",
    "options": [
      "Authorization Header",
      "Token",
      "API Key",
      "Cache Tag",
      "Cookie",
      "Session ID"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.4 User-Server Interaction: Cookies",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) Cookie**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.4: User-Server Interaction: Cookies.\n\n**Pembahasan Lengkap:**\nKarena protokol HTTP bersifat *stateless* (tidak mengingat request sebelumnya), situs web menggunakan **Cookies** untuk mempertahankan status pengguna:\n1. Server menyematkan header 'Set-Cookie: ID_Unik' pada HTTP response pertama.\n2. Peramban menyimpan ID tersebut di disk lokal klien.\n3. Pada setiap request berikutnya ke domain yang sama, peramban secara otomatis menyertakan header 'Cookie: ID_Unik', sehingga server mengenali sesi dan identitas pengguna.\n\n**Poin Penting:** Cookies menyimpan token identifikasi di klien yang otomatis dikirim pada setiap HTTP request berikutnya."
  },
  {
    "id": 99,
    "text": "Data sent between end systems is segmented, encapsulated with headers, and transmitted as units called packets. Which analogy is used in the text to explain this concept?",
    "options": [
      "Conveyor belts in factories",
      "Letters sent via post office",
      "Elevators carrying people",
      "Airplanes flying on routes",
      "Trucks carrying cargo on roads",
      "Books shipped in boxes"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.5.2 Encapsulation",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (B) Letters sent via post office**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.1 & 1.5: Analogi Paket dan Enkapsulasi Pos.\n\n**Pembahasan Lengkap:**\nBuku teks Kurose & Ross mengilustrasikan transmisi paket data dan enkapsulasi menggunakan analogi **surat yang dikirim melalui kantor pos**:\n- Isi surat mewakili payload data aplikasi.\n- Amplop surat yang ditulisi alamat tujuan dan alamat pengirim mewakili header paket.\n- Kantor pos dan kurir memproses dan merutekan amplop tersebut berdasarkan alamat luar tanpa perlu membaca isi surat di dalamnya.\n\n**Poin Penting:** Analogi surat pos menjelaskan pemisahan antara payload data dan header alamat pada paket."
  },
  {
    "id": 100,
    "text": "Which DNS record specifies the mail server responsible for receiving email for a domain?",
    "options": [
      "MX",
      "NS",
      "PTR",
      "A",
      "TXT",
      "CNAME"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.3 DNS Records and Messages",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (A) MX**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.3: DNS Resource Record Type MX.\n\n**Pembahasan Lengkap:**\nRecord DNS bertipe **MX (Mail Exchanger)** digunakan secara khusus untuk menentukan server email mana yang bertanggung jawab menerima pesan email atas nama suatu domain:\n- Contoh: Kueri DNS untuk 'gmail.com' dengan tipe 'MX' akan mengembalikan daftar server mail Google (seperti 'alt1.gmail-smtp-in.l.google.com') beserta bobot prioritasnya.\n\n**Poin Penting:** Record MX mengarahkan pengiriman email ke server mail yang tepat untuk suatu domain."
  },
  {
    "id": 101,
    "text": "The Internet uses a hierarchical system to translate human-readable names into IP addresses. What is this system called?",
    "options": [
      "NAT",
      "ARP",
      "HTTP",
      "ICMP",
      "DHCP",
      "DNS"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.1 Services Provided by DNS",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (F) DNS**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.1: Domain Name System Fundamentals.\n\n**Pembahasan Lengkap:**\nSistem terdistribusi dan hierarkis di Internet yang bertugas menerjemahkan nama host yang mudah dibaca manusia (seperti 'www.google.com') menjadi alamat IP numerik (seperti '142.250.190.46') yang dimengerti oleh router adalah **DNS (Domain Name System)**.\n\n**Poin Penting:** DNS adalah layanan direktori yang memetakan nama domain ke alamat IP numerik."
  },
  {
    "id": 102,
    "text": "Email relies on protocols like SMTP, POP3, and IMAP, while the Web uses HTTP. What is the key difference in their interaction model?",
    "options": [
      "Persistent vs Nonpersistent",
      "Shared vs Dedicated",
      "Centralized vs Distributed",
      "Pull vs Push",
      "Stateful vs Stateless",
      "Reliable vs Unreliable"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.3.1 SMTP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) Pull vs Push**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2 & 2.3: Interaksi Model Web (HTTP) vs Email (SMTP).\n\n**Pembahasan Lengkap:**\nPerbedaan mendasar model interaksi:\n- **HTTP adalah protokol PULL:** Pengguna menggunakan browser untuk menarik (*pull*) halaman web dari server web ketika pengguna menginginkannya.\n- **SMTP adalah protokol PUSH:** Server mail pengirim secara proaktif mendorong (*push*) pesan email ke server mail penerima segera setelah pesan dikirim oleh pengirim.\n\n**Poin Penting:** Web = *Pull* (klien menarik konten); Email = *Push* (pengirim mendorong pesan)."
  },
  {
    "id": 103,
    "text": "In networked communication, one process is typically designated to wait for incoming requests, while another initiates requests. Which role does the waiting process assume?",
    "options": [
      "Switch",
      "Router",
      "Client",
      "Server",
      "Peer",
      "Listener"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.1 Network Application Architectures",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) Server**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.1: Arsitektur Client-Server.\n\n**Pembahasan Lengkap:**\nPada model Client-Server:\n- **Server:** Proses yang selalu aktif (*always-on host*), memiliki alamat IP tetap, dan berada dalam kondisi pasif menunggu (*listening/waiting*) permintaan koneksi masuk dari klien.\n- **Client:** Proses yang secara aktif memulai (*initiates*) komunikasi dan mengirimkan permintaan ke server.\n\n**Poin Penting:** Proses yang pasif menunggu permintaan koneksi adalah Server."
  },
  {
    "id": 104,
    "text": "The original Internet architecture was based on which assumption?",
    "options": [
      "That applications should always run in isolation.",
      "That access should be denied without verification.",
      "That routers should authenticate all packets.",
      "That encryption was mandatory by default.",
      "That users were mutually trusting and security was unnecessary.",
      "That packet sniffing was expected."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.6 Networks Under Attack",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) That users were mutually trusting and security was unnecessary.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.6 & 1.7: Sejarah dan Filosofi Keamanan Desain Awal Internet (ARPANET).\n\n**Pembahasan Lengkap:**\nInternet pada mulanya dikembangkan pada era ARPANET oleh sekelompok kecil ilmuwan dan akademisi universitas yang saling mengenal dan bekerja sama.\n- Desain arsitektur awal Internet didasarkan pada asumsi bahwa **semua pengguna saling mempercayai (*mutually trusting users*)** yang terhubung ke jaringan transparan.\n- Akibatnya, protokol dasar seperti IP, TCP, DNS, dan SMTP dirancang tanpa enkripsi bawaan, tanpa autentikasi asal pengirim (*origin authentication*), dan rentan terhadap spoofing serta sniffing.\n\n**Poin Penting:** Desain awal Internet mengasumsikan lingkungan saling percaya, sehingga fitur keamanan tidak diintegrasikan sejak awal."
  },
  {
    "id": 105,
    "text": "In slow start, cwnd doubles every RTT until loss occurs. What event typically ends this exponential growth?",
    "options": [
      "Timeout or 3 duplicate ACKs",
      "Port exhaustion",
      "Reaching zero window",
      "Sequence number wraparound",
      "Checksum mismatch",
      "Three-way handshake"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.1 Classic TCP Congestion Control (AIMD)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) Timeout or 3 duplicate ACKs**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.1: Transisi TCP Slow Start ke Congestion Avoidance.\n\n**Pembahasan Lengkap:**\nFase Slow Start menaikkan 'cwnd' secara eksponensial. Pertumbuhan eksponensial ini biasanya berakhir ketika:\n1. 'cwnd' mencapai ambang batas 'ssthresh' $\to$ beralih ke pertumbuhan linier (Congestion Avoidance).\n2. Terjadi indikasi kehilangan paket di jaringan:\n   - **Timeout:** Mengindikasikan kemacetan parah $\to$ 'ssthresh' disetel ke $cwnd/2$, dan 'cwnd' direset ke $1\text{ MSS}$.\n   - **3 Duplicate ACKs:** Mengindikasikan kehilangan ringan $\to$ Fast Retransmit dan Fast Recovery.\n\n**Poin Penting:** Pertumbuhan eksponensial slow start diakhiri oleh tercapainya ssthresh atau terjadinya event kehilangan paket (timeout / 3 dup ACK)."
  },
  {
    "id": 106,
    "text": "Why do ISPs at the same level often peer with each other?",
    "options": [
      "To provide free Internet to users.",
      "To avoid physical cabling costs.",
      "To merge into one single ISP.",
      "To avoid paying a higher-tier provider for traffic exchange.",
      "To eliminate routing protocols.",
      "To replace the need for IP addresses."
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.3.3 A Network of Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) To avoid paying a higher-tier provider for traffic exchange.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.3.3: ISP Hierarchy, IXP, and Peering Agreements.\n\n**Pembahasan Lengkap:**\nDua ISP yang berada pada tingkatan (tier) yang setara sering kali melakukan perjanjian **Peering (Interkoneksi Langsung)**:\n- Tanpa peering, setiap lalu lintas antara pengguna ISP A dan ISP B harus dialirkan melalui ISP Tier-1 penyedia transit yang menagih biaya mahal (*transit fees*) berdasarkan volume lalu lintas.\n- Melalui *settlement-free peering* di Internet Exchange Point (IXP), kedua ISP saling bertukar lalu lintas secara langsung tanpa membayar pihak ketiga.\n\n**Poin Penting:** Peering antar-ISP menghindari pembayaran biaya transit yang mahal ke provider tingkat atas."
  },
  {
    "id": 107,
    "text": "Despite being unreliable, UDP is favored in certain applications. Which application benefits most from UDP?",
    "options": [
      "IMAP",
      "DNS Query",
      "Email Delivery",
      "Web Browsing",
      "File Transfer",
      "FTP"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.3 Connectionless Transport: UDP",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) DNS Query**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4 & 3.3: Kasus Penggunaan Ideal UDP.\n\n**Pembahasan Lengkap:**\nAplikasi yang paling diuntungkan oleh ketiadaan overhead UDP adalah **DNS Query**:\n- Transaksi DNS bersifat atomik: 1 kueri pendek dan 1 respons pendek yang umumnya muat dalam 1 paket datagram tunggal (< 512 byte).\n- UDP menghilangkan penundaan 3-way handshake koneksi TCP dan menghindari pemeliharaan state koneksi di server DNS yang menangani jutaan kueri secara konkuren.\n\n**Poin Penting:** DNS Query sangat diuntungkan oleh kecepatan, keringanan, dan sifat connectionless dari UDP."
  },
  {
    "id": 108,
    "text": "The network core is composed primarily of packet switches. Which of the following best describes their role?",
    "options": [
      "They forward packets of data from input links to output links toward their destinations.",
      "They store user data permanently.",
      "They provide access services to end users directly.",
      "They generate application-level content.",
      "They enforce billing policies for ISPs.",
      "They authenticate users for secure access."
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.3.1 Packet Switching",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (A) They forward packets of data from input links to output links toward their destinations.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.3.1: The Network Core and Packet Switches (Routers & Switches).\n\n**Pembahasan Lengkap:**\nPeran utama dari sakelar paket (*packet switches* / router) di inti jaringan (*network core*) adalah:\n- **Forwarding (Penerusan):** Mengambil paket yang tiba pada salah satu antarmuka tautan masukan (*input link*), memeriksa alamat tujuan pada header paket, mencocokkannya dengan tabel penerusan (*forwarding table*), dan mentransfer paket tersebut ke tautan keluaran (*output link*) yang sesuai menuju tujuannya.\n\n**Poin Penting:** Packet switches meneruskan paket dari link masukan ke link keluaran menuju tujuan akhir."
  },
  {
    "id": 109,
    "text": "Attackers may attempt to corrupt DNS data by inserting false information into caches. What is this attack called?",
    "options": [
      "Cache Overflow",
      "Spoofing",
      "Man-in-the-middle",
      "ARP Flooding",
      "DNS Hijacking",
      "DNS Poisoning"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4 DNS Under Attack (DNS Poisoning)",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (F) DNS Poisoning**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.4 & 8.4: DNS Cache Poisoning Attacks.\n\n**Pembahasan Lengkap:**\n**DNS Cache Poisoning** (sering disebut juga *DNS Spoofing*):\n- Serangan di mana peretas mengirimkan respons DNS palsu yang telah direkayasa kepada DNS resolver lokal sebelum respons sah dari server otoritatif tiba.\n- Jika resolver lokal menerima respons palsu tersebut dan menyimpannya di dalam cache, semua pengguna di jaringan lokal yang meminta nama domain tersebut (misal 'bank.com') akan diarahkan ke alamat IP server tiruan milik penyerang.\n\n**Poin Penting:** DNS Poisoning memanipulasi entri cache DNS resolver dengan data IP palsu."
  },
  {
    "id": 110,
    "text": "The Internet transport layer is crucial for applications. Which of the following statements summarizes its role best?",
    "options": [
      "It configures routers dynamically",
      "It encrypts data for secure transmission",
      "It provides process-to-process communication and reliability functions",
      "It allocates IP addresses",
      "It routes packets between autonomous systems",
      "It establishes Ethernet framing"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.1.1 Relationship Between Transport and Network Layers",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) It provides process-to-process communication and reliability functions**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.1: Ringkasan Peran Transport Layer.\n\n**Pembahasan Lengkap:**\nPeran sentral Transport Layer dalam arsitektur Internet:\n1. Memperluas layanan pengiriman *host-to-host* dari Network Layer (IP) menjadi layanan komunikasi logis **antar-proses (*process-to-process*)** menggunakan nomor port (Multiplexing / Demultiplexing).\n2. Menyediakan fungsi pengayaan layanan yang tidak disediakan oleh IP, seperti jaminan keandalan (*reliable data transfer*), pengendalian aliran data (*flow control*), dan pengendalian kemacetan (*congestion control*).\n\n**Poin Penting:** Transport layer menyediakan komunikasi process-to-process dan fungsi keandalan."
  },
  {
    "id": 111,
    "text": "In BitTorrent, peers download chunks from multiple other peers simultaneously. What is this strategy called?",
    "options": [
      "Caching",
      "Flooding",
      "Mirroring",
      "Swarming",
      "Broadcasting",
      "Multi-homing"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.5 Peer-to-Peer File Distribution",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) Swarming**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.5: BitTorrent Chunks and Swarming.\n\n**Pembahasan Lengkap:**\nDalam jaringan BitTorrent, sebuah berkas besar dipecah menjadi ribuan potongan kecil (*chunks*, biasanya berukuran 256 KB).\n- Kumpulan seluruh peer yang saling bertukar potongan file yang sama disebut sebagai sebuah **Swarm**.\n- Strategi di mana sebuah peer mengunduh potongan file yang berbeda secara simultan dari puluhan peer lain secara bersamaan dinamakan **Swarming**:\n- Hal ini memaksimalkan kecepatan unduh karena memanfaatkan kapasitas unggah paralel dari banyak host sekaligus.\n\n**Poin Penting:** Swarming = Mengunduh potongan berkas secara paralel dari banyak peer dalam swarm."
  },
  {
    "id": 112,
    "text": "The main event of the 1990s was the emergence of the World Wide Web. Who invented the Web at CERN between 1989 and 1991?",
    "options": [
      "Jim Clark",
      "Marc Andreessen",
      "Tim Berners‑Lee",
      "Robert Kahn",
      "Vannevar Bush",
      "Ted Nelson"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.7 History of Computer Networking and the Internet",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) Tim Berners‑Lee**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.7.4: Sejarah Internet — Penemuan World Wide Web.\n\n**Pembahasan Lengkap:**\n**Tim Berners-Lee**, seorang ilmuwan komputer di laboratorium CERN (Swiss), menemukan World Wide Web antara tahun 1989 dan 1991:\n- Ia merancang komponen fondasi web: protokol HTTP, format bahasa HTML, skema pengalamatan URL, serta web server dan peramban web pertama di dunia.\n\n**Analisis Tokoh Lain:**\n- **Vinton Cerf & Robert Kahn:** Bapak arsitektur TCP/IP.\n- **Leonard Kleinrock:** Pelopor teori antrian dan packet switching pada ARPANET.\n- **Marc Andreessen:** Pengembang Mosaic (browser grafis pertama yang populer) dan pendiri Netscape.\n\n**Poin Penting:** World Wide Web diciptakan oleh Tim Berners-Lee di CERN (1989–1991)."
  },
  {
    "id": 113,
    "text": "Reliable data transfer protocols must operate over unreliable channels. Which of the following is NOT a service provided by such protocols?",
    "options": [
      "Ensuring in-order delivery",
      "Using acknowledgments",
      "Detecting bit errors",
      "Recovering from lost packets",
      "Using retransmissions",
      "Guaranteeing infinite bandwidth"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.1 Building a Reliable Data Transfer Protocol",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) Guaranteeing infinite bandwidth**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4: Batasan Layanan Protokol Reliable Data Transfer (RDT).\n\n**Pembahasan Lengkap:**\nProtokol transfer andal (seperti TCP) menyediakan layanan:\n- Pengiriman data bebas kesalahan bit (Error detection via Checksum).\n- Pengiriman data sesuai urutan (*In-order delivery* via Sequence Numbers).\n- Pemulihan dari paket yang hilang (*Loss recovery* via ACK dan Retransmissions).\nNamun, protokol RDT **TIDAK BISA** dan tidak pernah menjamin *bandwidth tak terhingga* (*infinite bandwidth*), jaminan penundaan batas waktu maksimum (*bounded delay*), atau throughput minimum, karena hal tersebut dibatasi oleh kapasitas fisik tautan dan kemacetan jaringan.\n\n**Poin Penting:** Protokol RDT menjamin integritas dan kelengkapan data, bukan kapasitas bandwidth tak terbatas."
  },
  {
    "id": 114,
    "text": "Protocol rdt2.1 fixes the problem of corrupted ACK/NAK by adding sequence numbers. Why does the receiver need sequence numbers in ACK messages?",
    "options": [
      "To detect errors in checksums",
      "To reduce header size",
      "To identify application processes",
      "To synchronize clocks between sender and receiver",
      "To confirm exactly which packet is acknowledged",
      "To avoid port conflicts"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.1 Building a Reliable Data Transfer Protocol",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) To confirm exactly which packet is acknowledged**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.1: rdt2.1 Protocol and Corrupted Feedback.\n\n**Pembahasan Lengkap:**\nPada rdt2.0, jika pesan ACK atau NAK mengalami kerusakan bit dalam perjalanan, pengirim tidak tahu apakah paketnya diterima dengan selamat atau tidak.\n- Pada protokol **rdt2.1**, nomor urut (0 atau 1) ditambahkan ke dalam pesan ACK/NAK.\n- Hal ini memungkinkan pengirim untuk **mengonfirmasi secara pasti nomor urut paket mana yang sedang diakui** oleh penerima, sehingga pengirim tidak salah menginterpretasikan ACK lama sebagai ACK untuk paket baru.\n\n**Poin Penting:** Nomor urut pada ACK memastikan pengirim mengetahui secara persis paket mana yang dikonfirmasi."
  },
  {
    "id": 115,
    "text": "FTP differs from many protocols by opening two parallel TCP connections. Which are they?",
    "options": [
      "Port/Socket",
      "Upload/Download",
      "Control/Data",
      "Command/Data",
      "Query/Response",
      "Push/Pull"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.6 Network Applications: FTP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) Control/Data**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.6: FTP Parallel Connections.\n\n**Pembahasan Lengkap:**\nFTP menggunakan dua koneksi TCP paralel yang berbeda fungsi:\n1. **Control Connection:** Untuk autentikasi pengguna, navigasi direktori, dan pengiriman perintah teks.\n2. **Data Connection:** Untuk mengalirkan konten berkas aktual secara biner.\n\n**Poin Penting:** Dua koneksi paralel FTP: Control Connection dan Data Connection."
  },
  {
    "id": 116,
    "text": "In Go-back-N, the sender can have up to N unacknowledged packets in the pipeline. What is this limit called?",
    "options": [
      "Transmission buffer",
      "Sliding window size",
      "Forwarding queue",
      "Congestion window",
      "Bandwidth-delay product",
      "Propagation frame"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.3 Go-Back-N (GBN)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) Sliding window size**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.3: Go-Back-N Protocol Sliding Window Size.\n\n**Pembahasan Lengkap:**\nPada protokol sliding window (seperti Go-Back-N):\n- Batas jumlah maksimum paket yang boleh dikirimkan dan belum diakui (*unacknowledged in-flight packets*) di dalam pipa transmisi disebut **Sliding Window Size (Ukuran Jendela Geser, $N$)**.\n- Saat ACK untuk paket tertua tiba, jendela bergeser maju (*slides forward*), mengizinkan pengirim untuk memancarkan paket baru berikutnya.\n\n**Poin Penting:** Batas paket in-flight yang belum di-ACK disebut ukuran jendela geser (*sliding window size*)."
  },
  {
    "id": 117,
    "text": "A router with link rate 2 Mbps has 4 packets of 1,500 bytes waiting, and one packet is half transmitted. What is the queuing delay for the new packet?",
    "options": [
      "36 ms",
      "12 ms",
      "3 ms",
      "24 ms",
      "27 ms",
      "6 ms"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) 27 ms**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Queuing Delay Calculation at Router Output Port.\n\n**Pembahasan Lengkap:**\nDiketahui:\n- Laju transmisi router: $R = 2\text{ Mbps} = 2.000.000\text{ bps}$.\n- Ukuran paket standar: $1.500\text{ byte} = 1.500 \times 8 = 12.000\text{ bit}$.\n- Antrian terdiri dari:\n  - 1 paket yang sudah separuh tertransmisi ($0.5 \times 1.500\text{ byte}$).\n  - 4 paket penuh yang sedang menunggu di antrian.\n\n1. **Waktu transmisi untuk 1 paket penuh:**\n   $$d_{trans} = \frac{12.000\text{ bit}}{2.000.000\text{ bps}} = 0.006\text{ detik} = 6\text{ ms}$$\n\n2. **Waktu menunggu sisa transmisi paket yang sedang aktif:**\n   $$d_{aktif} = 0.5 \times 6\text{ ms} = 3\text{ ms}$$\n\n3. **Waktu menunggu 4 paket penuh di antrian:**\n   $$d_{antrian} = 4 \times 6\text{ ms} = 24\text{ ms}$$\n\n4. **Total Queuing Delay sebelum paket baru mulai ditransmisikan:**\n   $$d_{queue} = d_{aktif} + d_{antrian} = 3\text{ ms} + 24\text{ ms} = 27\text{ ms}$$\n\n**Poin Penting:** $d_{queue} = (0.5 \times 6\text{ ms}) + (4 \times 6\text{ ms}) = 3 + 24 = 27\text{ ms}$."
  },
  {
    "id": 118,
    "text": "What determines propagation delay in a link?",
    "options": [
      "Number of routers along the path",
      "Transmission rate",
      "Queue size at routers",
      "Header length",
      "Packet length",
      "Distance divided by propagation speed of the medium"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) Distance divided by propagation speed of the medium**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Rumus Propagation Delay ($d_{prop} = d / s$).\n\n**Pembahasan Lengkap:**\nPropagation delay ($d_{prop}$) adalah waktu yang dibutuhkan oleh sebuah bit untuk merambat secara fisik dari awal tautan hingga mencapai ujung akhir tautan:\n$$d_{prop} = \frac{d}{s}$$\nDi mana:\n- $d$ = Jarak fisik antara dua titik simpul (*distance*).\n- $s$ = Kecepatan rambat gelombang sinyal pada media transmisi fisik tersebut (biasanya sekitar $2 \times 10^8$ hingga $2.5 \times 10^8\text{ m/s}$ pada tembaga dan serat optik).\nPropagation delay **sama sekali tidak bergantung** pada panjang paket data ($L$) maupun laju transmisi tautan ($R$).\n\n**Poin Penting:** Propagation delay murni ditentukan oleh jarak fisik dibagi kecepatan rambat media ($d/s$)."
  },
  {
    "id": 119,
    "text": "POP3 allows downloading emails but has a drawback compared to IMAP. What is the limitation?",
    "options": [
      "Cannot Retrieve Headers",
      "Cannot Attach Files",
      "Cannot Delete Mail",
      "Cannot Work With SMTP",
      "Cannot Use Encryption",
      "Cannot Synchronize Across Devices"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.3.3 Mail Access Protocols (POP3, IMAP)",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (F) Cannot Synchronize Across Devices**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.3.3: Keterbatasan Arsitektur POP3 vs IMAP.\n\n**Pembahasan Lengkap:**\nKelemahan paling mencolok dari POP3 adalah **ketidakmampuannya untuk menyinkronkan status email di berbagai perangkat**:\n- POP3 dirancang dengan asumsi pengguna hanya mengakses email dari satu komputer kerja: email diunduh ke klien lokal dan biasanya langsung dihapus dari server (*download-and-delete*).\n- Jika pengguna kemudian membuka email dari smartphone, email-email yang sudah diunduh di komputer kerja tidak akan terlihat, dan status dibaca/dibalas tidak akan tersinkronisasi.\n\n**Poin Penting:** POP3 tidak mendukung sinkronisasi status pesan dan folder antar perangkat."
  },
  {
    "id": 120,
    "text": "An HTTP client sends a message containing the method, URL, and version, followed by headers. This is the initial step for retrieving web resources. What is this message called?",
    "options": [
      "HTML Request",
      "Response Header",
      "Request Line",
      "Data Frame",
      "Query Command",
      "GET Packet"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.3 HTTP Message Format",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) Request Line**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.3: Struktur Pesan Permintaan HTTP (*HTTP Request Message*).\n\n**Pembahasan Lengkap:**\nBaris pertama dari setiap pesan HTTP request disebut sebagai **Request Line**:\n- Format baku Request Line:\n  '<Method> <URL> <HTTP-Version>'\n- Contoh:\n  'GET /somedir/page.html HTTP/1.1'\nBaris-baris setelahnya disebut sebagai *Header Lines*, diikuti oleh baris kosong (*CRLF*), dan opsional *Entity Body*.\n\n**Poin Penting:** Baris pembuka pesan HTTP request yang berisi metode, URL, dan versi disebut *Request Line*."
  },
  {
    "id": 121,
    "text": "In packet switching, each packet is transmitted over one link at a time. What is the delay introduced by this process called?",
    "options": [
      "Store-and-forward transmission delay",
      "Propagation delay",
      "End-to-end delay",
      "Processing delay",
      "Queuing delay",
      "Acknowledgment delay"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.3.1 Packet Switching",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (A) Store-and-forward transmission delay**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.3.1: Packet Switching & Store-and-Forward Transmission.\n\n**Pembahasan Lengkap:**\nMayoritas sakelar paket (packet switches dan router) menerapkan prinsip **Store-and-Forward**:\n- Sebuah router harus menerima seluruh bit paket data secara lengkap (*store*) sebelum router tersebut diizinkan untuk mulai mentransmisikan bit pertama dari paket tersebut ke link keluaran berikutnya (*forward*).\n- Penundaan transmisi sebesar $L/R$ yang dialami pada setiap hop perantara akibat keharusan menerima paket secara utuh ini dinamakan **Store-and-forward transmission delay**.\n\n**Poin Penting:** Prinsip store-and-forward mewajibkan paket diterima lengkap sebelum diteruskan ke hop berikutnya."
  },
  {
    "id": 122,
    "text": "Sender transmits Seg1 (Seq=2000, 1000 bytes), Seg2 (Seq=3000, 1000 bytes), and Seg3 (Seq=4000, 1000 bytes). Seg1 arrives, Seg2 is lost, Seg3 arrives. What ACK will be repeated by the receiver?",
    "options": [
      "2500",
      "2000",
      "3000",
      "4000",
      "3500",
      "5000"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) 3000**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2 & 3.5.4: TCP Duplicate ACKs on Gap Detection.\n\n**Pembahasan Lengkap:**\nTCP menggunakan nomor pengakuan kumulatif (*cumulative acknowledgment*):\n- Segmen 1 (Seq=2000, 1000 byte) diterima dengan benar $\to$ byte 2000–2999 sukses. Penerima mengirim ACK = 3000.\n- Segmen 2 (Seq=3000, 1000 byte) hilang di jalan.\n- Segmen 3 (Seq=4000, 1000 byte) tiba di penerima.\nPenerima mendeteksi adanya celah (*gap*) dalam aliran data byte: byte 3000 belum tiba!\n- Sesuai spesifikasi TCP (RFC 5681), penerima tidak mengakui Segmen 3, melainkan **segera mengirimkan kembali ACK duplikat dengan nomor yang sama**, yaitu **3000**, untuk memberi sinyal kepada pengirim bahwa byte mulai dari 3000 masih hilang.\n\n**Poin Penting:** Deteksi celah byte menyebabkan penerima mengulang pengiriman ACK untuk byte yang hilang (ACK = 3000)."
  },
  {
    "id": 123,
    "text": "File = 10 Mbit, bottleneck R=5 Mbps, propagation per link = 50 ms, 2 links. Rough transfer time (transmission + propagation only)?",
    "options": [
      "3.5 s",
      "4 s",
      "3 s",
      "5 s",
      "2 s",
      "2.5 s"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.4 Throughput in Computer Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (B) 4 s**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.3: Store-and-Forward Transmission over Multiple Links.\n\n**Pembahasan Lengkap:**\nDiketahui data:\n- Ukuran file: $10\text{ Mbit}$.\n- Kecepatan bottleneck: $R = 5\text{ Mbps}$.\n- Jumlah tautan: $2\text{ tautan}$ (dengan $1\text{ router}$ perantara).\n- Keterlambatan perambatan ($d_{prop}$ per link = $50\text{ ms} = 0.05\text{ s}$).\n\n1. **Waktu transmisi di Link 1 (Pengirim ke Router):**\n   $$d_{trans1} = \frac{10\text{ Mbit}}{5\text{ Mbps}} = 2.0\text{ detik}$$\n2. Karena router menerapkan mekanisme *store-and-forward*, router harus menerima file $10\text{ Mbit}$ secara utuh sebelum dapat mentransmisikannya ke Link 2.\n3. **Waktu transmisi di Link 2 (Router ke Penerima):**\n   $$d_{trans2} = \frac{10\text{ Mbit}}{5\text{ Mbps}} = 2.0\text{ detik}$$\n4. Total waktu transmisi kumulatif:\n   $$2.0\text{ s} + 2.0\text{ s} = 4.0\text{ detik}$$\n(Komponen propagasi $2 \times 0.05\text{ s} = 0.1\text{ s}$ sangat kecil dibandingkan transmisi $4\text{ s}$, sehingga perkiraan kasar transfer time adalah **4 s**).\n\n**Poin Penting:** Dua hop store-and-forward dengan transmisi 2s di tiap link menghasilkan delay transmisi $2\text{s} + 2\text{s} = 4\text{s}$."
  },
  {
    "id": 124,
    "text": "Many TCP variants exist. Which variant introduces congestion window growth based on measured bandwidth rather than packet loss?",
    "options": [
      "TCP NewReno",
      "TCP Reno",
      "TCP Tahoe",
      "TCP Classic",
      "TCP SACK",
      "TCP Vegas"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.2 Network-Assisted ECN and TCP Vegas",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) TCP Vegas**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.2: Delay-Based Congestion Control (TCP Vegas).\n\n**Pembahasan Lengkap:**\nMayoritas varian TCP klasik (seperti TCP Tahoe dan Reno) bersifat *loss-based* (hanya menurunkan laju saat paket hilang).\n- Sebaliknya, **TCP Vegas** adalah varian TCP berbasis penundaan (*delay-based congestion control*):\n- TCP Vegas mengukur RTT aktual dari setiap paket dan membandingkannya dengan BaseRTT (saat link kosong).\n- Ketika RTT mulai memanjang (menandakan antrian router mulai terisi), TCP Vegas secara proaktif menurunkan atau menahan pertumbuhan 'cwnd' **sebelum terjadi kehilangan paket**, sehingga mampu menjaga throughput tinggi tanpa membebani buffer router hingga overflow.\n\n**Poin Penting:** TCP Vegas mendeteksi kongesti berdasarkan lonjakan RTT (delay-based), bukan packet loss."
  },
  {
    "id": 125,
    "text": "Besides reducing response time for users, caching also helps servers. What key benefit do servers gain from caching?",
    "options": [
      "Increased Complexity",
      "Higher Costs",
      "Reduced Load",
      "Increased Redundancy",
      "Reduced Reliability",
      "Improved Security"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) Reduced Load**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: Manfaat Web Caching bagi Server Asal (*Origin Server*).\n\n**Pembahasan Lengkap:**\nSelain memberikan manfaat kepada pengguna berupa waktu respons yang jauh lebih cepat, keberadaan Web Caching (proxy cache dan CDN) memberikan manfaat luar biasa bagi server asal (*origin server*), yaitu **Beban Komputasi dan Jaringan yang Jauh Berkurang (*Reduced Load*)**:\n- Sebagian besar permintaan konten statis (gambar, video, skrip) dilayani langsung oleh server cache lokal.\n- Server asal terhindar dari lonjakan lalu lintas yang ekstrem (*traffic spikes / slashdot effect*) dan menghemat biaya bandwidth server secara signifikan.\n\n**Poin Penting:** Web cache menyerap traffic permintaan, mengurangi beban kerja dan utilisasi CPU/jaringan server asal."
  },
  {
    "id": 126,
    "text": "The TCP header includes a field called \\u201cwindow size.\\u201d What does this field indicate?",
    "options": [
      "Size of the header in bytes",
      "Amount of buffer space used at the sender",
      "Number of bytes the receiver is willing to accept beyond the acknowledged byte",
      "Number of unacknowledged connections",
      "Number of outstanding packets allowed in the network",
      "Number of simultaneous flows"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.5 Flow Control",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) Number of bytes the receiver is willing to accept beyond the acknowledged byte**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2 & 3.5.5: TCP Receive Window ('rwnd') Field.\n\n**Pembahasan Lengkap:**\nField **Window Size (16-bit)** pada header TCP digunakan untuk mekanisme pengendalian aliran data (**Flow Control**):\n- Field ini membawa nilai 'rwnd' (*Receive Window*), yaitu **jumlah byte yang sanggup diterima oleh penerima** di luar byte terakhir yang telah diakui (*acknowledged byte*).\n- Hal ini mencerminkan sisa ruang buffer kosong yang tersedia pada socket penerima saat itu, mencegah pengirim mengirim data terlalu cepat yang dapat membanjiri (*overflow*) buffer aplikasi penerima.\n\n**Poin Penting:** Window size memberitahukan sisa kapasitas buffer kosong penerima kepada pengirim demi flow control."
  },
  {
    "id": 127,
    "text": "Many applications need to protect data exchanged across networks against eavesdropping and tampering. What service is used to achieve confidentiality and integrity?",
    "options": [
      "TCP",
      "Encryption",
      "Reliability",
      "Acknowledgment",
      "Authentication",
      "Error Detection"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.6 Networks Under Attack",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (B) Encryption**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.6 & 8.2: Prinsip Kriptografi dan Keamanan Jaringan.\n\n**Pembahasan Lengkap:**\nLayanan yang digunakan secara universal untuk melindungi data yang dipertukarkan di jaringan dari penyadapan (*eavesdropping*) dan pengubahan data (*tampering*) adalah **Enkripsi (Encryption)**:\n- Enkripsi mentransformasikan teks asli (*plaintext*) menjadi teks tersandi (*ciphertext*) menggunakan kunci kriptografi, sehingga pihak ketiga yang menyadap paket hanya melihat data acak tak bermakna (menjamin *Confidentiality*).\n- Disertai dengan Message Authentication Code (MAC) atau tanda tangan digital untuk menjamin *Integrity*.\n\n**Poin Penting:** Enkripsi adalah mekanisme inti untuk melindungi kerahasiaan (*confidentiality*) data di jaringan."
  },
  {
    "id": 128,
    "text": "In circuit switching, Frequency Division Multiplexing (FDM) and Time Division Multiplexing (TDM) are used. What is the difference?",
    "options": [
      "FDM divides time slots, while TDM divides frequencies.",
      "FDM requires packetization, TDM does not.",
      "TDM guarantees higher throughput than FDM.",
      "FDM works only for optical fiber.",
      "FDM divides frequency bands, while TDM divides time slots.",
      "TDM works only for wireless links."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.3.2 Circuit Switching",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) FDM divides frequency bands, while TDM divides time slots.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.3.2: Multiplexing in Circuit-Switched Networks (FDM vs TDM).\n\n**Pembahasan Lengkap:**\nDua teknik multiplexing klasik pada jaringan sirkuit (*circuit switching*):\n- **FDM (Frequency-Division Multiplexing):** Spektrum frekuensi dari suatu tautan fisik dibagi menjadi pita-pita frekuensi yang lebih sempit, dan masing-masing panggilan/sirkuit dialokasikan satu pita frekuensi tetap secara terus-menerus selama panggilan berlangsung.\n- **TDM (Time-Division Multiplexing):** Waktu dibagi menjadi bingkai (*frames*) berulang dengan sejumlah slot waktu (*time slots*). Setiap sirkuit mendapatkan giliran menggunakan seluruh bandwidth link pada slot waktu reguler yang telah dialokasikan kepadanya.\n\n**Poin Penting:** FDM membagi spektrum frekuensi; TDM membagi alokasi slot waktu periodik."
  },
  {
    "id": 129,
    "text": "End-to-end delay is composed of several parts. If a packet traverses 4 links with negligible queuing, which delays must always be considered?",
    "options": [
      "Transmission and propagation delays",
      "Physical cabling length only",
      "Storage delay only",
      "Processing and storage delays",
      "Queuing delay only",
      "Propagation and encryption delays"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (A) Transmission and propagation delays**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Komponen Keterlambatan Nodal Tetap.\n\n**Pembahasan Lengkap:**\nPenundaan total pada suatu hop terdiri dari: $d_{proc} + d_{queue} + d_{trans} + d_{prop}$.\n- Jika diasumsikan penundaan antrian dapat diabaikan ($d_{queue} approx 0$, kondisi jaringan lengang) dan penundaan pemrosesan sangat kecil, dua komponen fisik yang **selalu ada dan tidak pernah bisa dihindarkan** pada setiap link adalah:\n  1. **Transmission Delay ($L/R$):** Waktu mendorong bit ke kawat.\n  2. **Propagation Delay ($d/s$):** Waktu tempuh fisik gelombang elektromagnetik melintasi jarak media tautan.\n\n**Poin Penting:** Komponen keterlambatan dasar yang selalu menyertai setiap transmisi paket adalah delay transmisi dan propagasi."
  },
  {
    "id": 130,
    "text": "What is the primary objective of deploying a Content Delivery Network?",
    "options": [
      "Cost Reduction",
      "Replace HTTP",
      "Replace DNS",
      "Reduce Redundancy",
      "Reduce Latency and Improve Availability",
      "Increase Security"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.6.3 Content Distribution Networks (CDNs)",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) Reduce Latency and Improve Availability**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.6.3: Tujuan Penyebaran CDN.\n\n**Pembahasan Lengkap:**\nTujuan primer implementasi Jaringan Distribusi Konten (CDN):\n1. **Mengurangi Latensi (*Reduce Latency*):** Menempatkan salinan konten sedekat mungkin dengan pengguna akhir, memangkas RTT dari ratusan milidetik menjadi hitungan milidetik.\n2. **Meningkatkan Ketersediaan (*Improve Availability & Fault Tolerance*):** Beban lalu lintas disebar ke ribuan server di berbagai pusat data. Jika salah satu server atau PoP mengalami gangguan, traffic dialihkan otomatis ke server edge terdekat lainnya.\n\n**Poin Penting:** CDN memangkas waktu penundaan (latensi) dan mendongkrak keandalan ketersediaan konten global."
  },
  {
    "id": 131,
    "text": "The performance of a physical link is often measured in terms of its transmission rate. Which statement correctly defines this term?",
    "options": [
      "The distance between hosts.",
      "The number of packets transmitted per second.",
      "The rate at which bits are pushed onto the link, expressed in bits per second (bps).",
      "The latency experienced by applications.",
      "The speed at which routers forward packets.",
      "The number of users sharing the link."
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) The rate at which bits are pushed onto the link, expressed in bits per second (bps).**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Definisi Laju Transmisi Tautan (*Transmission Rate*).\n\n**Pembahasan Lengkap:**\nLaju transmisi tautan (*transmission rate*, sering disebut kapasitas tautan atau bandwidth) adalah:\n- **Kecepatan di mana antarmuka pengirim dapat mendorong/menginjeksikan bit data ke dalam media fisik tautan**.\n- Satuan bakunya dinyatakan dalam **bit per detik (*bits per second* / bps)** atau kelipatannya (Kbps, Mbps, Gbps).\n- Laju transmisi berbeda dengan kecepatan rambat sinyal (*propagation speed*) yang diukur dalam meter per detik ($m/s$).\n\n**Poin Penting:** Transmission rate = Laju bit didorong ke tautan fisik dalam satuan bps."
  },
  {
    "id": 132,
    "text": "The network layer is responsible for delivering data across networks. What key function does it perform?",
    "options": [
      "Handles wireless signal propagation",
      "Determines routing paths and logical addressing (IP)",
      "Provides user authentication",
      "Defines the application interface",
      "Encodes video streams",
      "Encrypts end-to-end connections"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1 What Is the Internet?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (B) Determines routing paths and logical addressing (IP)**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.5.1 & Bab 4: Fungsi Inti Network Layer.\n\n**Pembahasan Lengkap:**\nLapisan Jaringan (**Network Layer**) bertanggung jawab atas pemindahan paket dari host pengirim ke host penerima di seluruh jaringan global. Dua fungsi kuncinya adalah:\n1. **Forwarding (Data Plane):** Memindahkan paket dari antarmuka input router ke antarmuka output yang tepat.\n2. **Routing (Control Plane):** Menentukan rute atau jalur terbaik dari ujung-ke-ujung yang harus dilalui oleh paket melintasi topologi jaringan menggunakan algoritma routing (OSPF, BGP) dan sistem pengalamatan logis terpadu (**IP Addressing**).\n\n**Poin Penting:** Network layer mengatur pengalamatan logis (IP) dan rute perjalanan paket melintasi jaringan."
  },
  {
    "id": 133,
    "text": "Some network applications run over UDP because they prefer lightweight communication without connection setup. Which socket type is used for this?",
    "options": [
      "Secure Socket",
      "Datagram Socket",
      "File Socket",
      "Stream Socket",
      "Raw Socket",
      "Tunnel Socket"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7.1 Socket Programming with UDP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) Datagram Socket**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.7.1: Jenis Socket UDP pada POSIX Socket API.\n\n**Pembahasan Lengkap:**\nDalam pemrograman socket:\n- Socket yang beroperasi di atas protokol UDP tanpa koneksi (*connectionless*) dan mentransfer pesan sebagai unit independen disebut **Datagram Socket** (dibuat menggunakan konstanta 'SOCK_DGRAM').\n- Sebaliknya, socket TCP berorientasi aliran byte andal disebut *Stream Socket* ('SOCK_STREAM').\n\n**Poin Penting:** Socket untuk protokol UDP adalah Datagram Socket ('SOCK_DGRAM')."
  },
  {
    "id": 134,
    "text": "A file transfer path has three links with rates R1=500 kbps, R2=2 Mbps, R3=1 Mbps. What is the throughput?",
    "options": [
      "1 Mbps",
      "2 Mbps",
      "Depends on RTT",
      "500 kbps",
      "2.5 Mbps",
      "3.5 Mbps"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.4 Throughput in Computer Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) 500 kbps**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.4: Penentuan Bottleneck Link Throughput.\n\n**Pembahasan Lengkap:**\nDiberikan tiga tautan serial dengan kapasitas:\n- $R_1 = 500\text{ kbps}$\n- $R_2 = 2\text{ Mbps} = 2.000\text{ kbps}$\n- $R_3 = 1\text{ Mbps} = 1.000\text{ kbps}$\n\nThroughput akhir dibatasi oleh mata rantai paling sempit (*bottleneck link*):\n$$\text{Throughput} = min(R_1, R_2, R_3) = min(500, 2000, 1000) = 500\text{ kbps}$$\n\n**Poin Penting:** Throughput dibatasi oleh nilai minimum $500\text{ kbps}$."
  },
  {
    "id": 135,
    "text": "When a client requests a page, the server responds with a status code indicating success, failure, or redirection. Which status code indicates that the request succeeded and the object is returned?",
    "options": [
      "302 Found",
      "200 OK",
      "404 Not Found",
      "500 Internal Server Error",
      "301 Moved Permanently",
      "403 Forbidden"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.3 HTTP Message Format",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) 200 OK**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.3: HTTP Status Codes.\n\n**Pembahasan Lengkap:**\nKode status HTTP **200 OK** adalah kode status keberhasilan standar pada protokol HTTP:\n- Menandakan bahwa permintaan klien telah dipahami dan berhasil diproses oleh server, dan resource dokumen yang diminta dikirimkan kembali di dalam badan respons (*response entity body*).\n\n**Analisis Opsi Lain:**\n- **(A) 302 Found:** Pengalihan sementara (*temporary redirect*).\n- **(C) 404 Not Found:** Resource tidak ditemukan di server.\n- **(D) 500 Internal Server Error:** Terjadi error pada skrip atau sistem di server.\n- **(E) 301 Moved Permanently:** Pengalihan permanen ke URL baru.\n- **(F) 403 Forbidden:** Klien dilarang mengakses resource.\n\n**Poin Penting:** 200 OK = Permintaan berhasil dan objek yang diminta disertakan dalam balasan."
  },
  {
    "id": 136,
    "text": "To distinguish multiple processes on the same host, the transport layer uses numeric identifiers. What are these called?",
    "options": [
      "Sockets",
      "Process IDs",
      "File Descriptors",
      "Port Numbers",
      "Labels",
      "IP IDs"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.2 Multiplexing and Demultiplexing",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Port Numbers**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.2: Multiplexing and Demultiplexing Identifiers.\n\n**Pembahasan Lengkap:**\nUntuk membedakan dan mengarahkan segmen data ke proses aplikasi yang tepat di antara berbagai aplikasi yang berjalan bersamaan pada host yang sama, lapisan transport menggunakan pengenal numerik 16-bit yang disebut **Port Numbers (Nomor Port)**:\n- Rentang port: $0$ hingga $65.535$. Port $0$–$1023$ adalah *well-known ports* untuk layanan standar (HTTP port 80, HTTPS port 443, DNS port 53).\n\n**Poin Penting:** Nomor port mengidentifikasi proses aplikasi spesifik di dalam host."
  },
  {
    "id": 137,
    "text": "DNS uses multiple servers at each level. What is the main reason for this?",
    "options": [
      "Cost Reduction",
      "Simpler Iteration",
      "Faster UDP Use",
      "Redundancy and Load Distribution",
      "Easier Caching",
      "Single Point of Control"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1 What Is the Internet?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) Redundancy and Load Distribution**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.2: DNS Distributed Hierarchy Design Rationale.\n\n**Pembahasan Lengkap:**\nAlasan utama mengapa DNS menggunakan banyak server replika di setiap level hierarki (termasuk 13 kluster root server dan banyak server TLD/otoritatif):\n1. **Redundancy & Reliability:** Mencegah titik kegagalan tunggal (*Single Point of Failure*). Jika satu server DNS mati atau diserang, kueri dialihkan secara otomatis ke server replika lainnya.\n2. **Load Distribution:** Menyebarkan miliaran kueri nama domain global ke ribuan server fisik yang tersebar di seluruh dunia, mencegah kelebihan beban (*overload*).\n\n**Poin Penting:** Replikasi server DNS menyediakan redundansi dan pembagian beban kueri global."
  },
  {
    "id": 138,
    "text": "In socket programming, to associate a socket with a particular port number on a host, which operation is performed?",
    "options": [
      "Attach",
      "Map",
      "Listen",
      "Accept",
      "Bind",
      "Connect"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7.2 Socket Programming with TCP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) Bind**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.7.2: Berkeley Socket API — 'bind()' System Call.\n\n**Pembahasan Lengkap:**\nDalam pemrograman socket jaringan:\n- Fungsi 'bind()' digunakan untuk mengikat (*associate/bind*) sebuah socket yang baru dibuat dengan alamat IP lokal dan **nomor port tertentu** pada antarmuka host tersebut.\n- Hal ini wajib dilakukan pada server agar klien tahu ke nomor port mana ia harus mengirimkan paket atau memulai jabat tangan koneksi.\n\n**Poin Penting:** 'bind()' mengasosiasikan socket dengan nomor port tertentu di host lokal."
  },
  {
    "id": 139,
    "text": "The Internet provides two transport protocols: UDP and TCP. UDP offers minimal service, while TCP provides reliability and congestion control. Which of the following is NOT a service provided by UDP?",
    "options": [
      "Process-to-process delivery",
      "Lightweight header structure",
      "Error detection via checksum",
      "Connectionless communication",
      "Multiplexing and demultiplexing",
      "Reliable data transfer"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.3 Connectionless Transport: UDP",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) Reliable data transfer**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.3: Layanan Minimal Protokol UDP.\n\n**Pembahasan Lengkap:**\nUDP (*User Datagram Protocol*) adalah protokol transport yang sangat minimalis (*no-frills*). UDP menyediakan:\n- Pengiriman antar proses (*process-to-process delivery*) via nomor port.\n- Multiplexing dan demultiplexing.\n- Deteksi kesalahan bit dasar via Checksum (opsional/dasar).\n- Komunikasi tanpa koneksi (*connectionless*).\nNamun, UDP **TIDAK MENYEDIAKAN** jaminan transfer data yang andal (**Reliable Data Transfer**): UDP tidak menjamin paket pasti sampai, tidak mengurutkan paket, tidak melakukan retransmisi, dan tidak memiliki flow/congestion control.\n\n**Poin Penting:** UDP tidak menyediakan transfer data yang andal (unreliable by design)."
  },
  {
    "id": 140,
    "text": "Some applications prefer UDP over TCP despite its unreliability. Which of the following is NOT a typical reason for choosing UDP?",
    "options": [
      "Built-in congestion control",
      "No need for connection establishment",
      "Finer control over data timing",
      "Support for many simultaneous clients",
      "Lower header overhead",
      "Faster performance for real-time applications"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.3 Connectionless Transport: UDP",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) Built-in congestion control**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.3: Alasan Memilih UDP daripada TCP.\n\n**Pembahasan Lengkap:**\nBanyak aplikasi memilih UDP karena:\n- Tidak ada penundaan pembentukan koneksi (*no connection establishment delay*).\n- Struktur header yang sangat kecil dan ringan (hanya 8 byte dibanding TCP yang 20 byte).\n- Kontrol pengiriman tingkat aplikasi yang lebih leluasa tanpa pembatasan waktu.\n- Mampu melayani banyak klien simultan tanpa pemeliharaan state.\nNamun, **Built-in congestion control BUKAN fitur UDP**, melainkan fitur eksklusif dari TCP. Ketiadaan congestion control di UDP justru merupakan alasan mengapa beberapa aplikasi multimedia menyukai UDP (karena UDP tidak akan menurunkan laju transmisi saat terjadi packet loss).\n\n**Poin Penting:** UDP tidak memiliki mekanisme kendali kemacetan bawaan (*no congestion control*)."
  },
  {
    "id": 141,
    "text": "In Selective Repeat (SR), the receiver buffers correctly received out-of-order packets. Why is this important?",
    "options": [
      "It prevents congestion collapse",
      "It reduces header size",
      "It allows retransmission of only erroneous packets",
      "It prevents ACK loss",
      "It avoids cumulative acknowledgments",
      "It ensures encryption of segments"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.4 Selective Repeat (SR)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) It allows retransmission of only erroneous packets**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.4: Selective Repeat Buffering Advantage.\n\n**Pembahasan Lengkap:**\nPada protokol Selective Repeat (SR), penerima memiliki memori buffer lokal untuk menyimpan paket-paket yang tiba dengan benar meskipun berada di luar urutan (*out-of-order packets*):\n- Dengan menyimpan paket yang datang lebih dulu, penerima tidak perlu membuangnya.\n- Ketika paket yang hilang akhirnya berhasil dikirim ulang dan tiba, penerima cukup menggabungkan paket tersebut dengan paket yang sudah disangga di buffer dan meneruskannya ke lapisan aplikasi.\n- Ini memungkinkan pengirim untuk **hanya mentransmisikan ulang paket spesifik yang benar-benar hilang atau rusak**, tanpa mengulang paket-paket lain yang sudah berhasil diterima.\n\n**Poin Penting:** Penyangga out-of-order pada SR memungkinkan retransmisi selektif hanya untuk paket yang hilang."
  },
  {
    "id": 142,
    "text": "The ARPAnet, a precursor to today\\u2019s Internet, demonstrated packet switching in practice. When was the first packet switch installed at UCLA under Kleinrock\\u2019s supervision?",
    "options": [
      "1964",
      "1961",
      "1980",
      "1975",
      "1972",
      "1969"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.7 History of Computer Networking and the Internet",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) 1969**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.7.1: Sejarah ARPANET dan Pemasangan Node Pertama.\n\n**Pembahasan Lengkap:**\nTonggak sejarah kelahiran Internet dimulai di bawah proyek DARPA Amerika Serikat:\n- Sakelar paket (*packet switch*) pertama, yang dikenal sebagai **IMP (Interface Message Processor)**, dipasang di University of California, Los Angeles (UCLA) di bawah supervisi **Leonard Kleinrock** pada **musim gugur tahun 1969**.\n- Tak lama kemudian, koneksi node kedua dibangun ke Stanford Research Institute (SRI), mentransmisikan pesan pertama \"LO\" (\"LOGIN\").\n\n**Poin Penting:** Pemasangan sakelar paket pertama di UCLA terjadi pada tahun 1969."
  },
  {
    "id": 143,
    "text": "The Web uses a protocol that defines how clients request web pages and how servers transfer files. This protocol operates typically over TCP port 80. Which protocol is this?",
    "options": [
      "IMAP",
      "HTTP",
      "HTTPS",
      "FTP",
      "SMTP",
      "POP3"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.2 Non-Persistent and Persistent Connections",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) HTTP**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2: Protokol Inti World Wide Web.\n\n**Pembahasan Lengkap:**\nProtokol tingkat aplikasi yang mendefinisikan bagaimana peramban meminta halaman web dan bagaimana server mengirimkan dokumen dan objek multimedia melalui port TCP standar 80 adalah **HTTP (Hypertext Transfer Protocol)**.\n\n**Poin Penting:** HTTP adalah protokol web standar yang beroperasi pada TCP port 80."
  },
  {
    "id": 144,
    "text": "Consider a client whose access link has 2 Mbps bandwidth with an average RTT of 200 ms. A requested 1 MB object is not cached. What is the approximate response time without caching?",
    "options": [
      "10.2 s",
      "5.2 s",
      "0.4 s",
      "4.2 s",
      "0.8 s",
      "6.2 s"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) 4.2 s**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: Estimasi Waktu Respons Tanpa Caching.\n\n**Pembahasan Lengkap:**\nDiketahui:\n- Bandwidth tautan akses: $R = 2\text{ Mbps} = 2.000.000\text{ bps}$.\n- Rata-rata RTT internet: $200\text{ ms} = 0.2\text{ detik}$.\n- Ukuran objek: $1\text{ MB} = 10^6\text{ byte} = 8 \times 10^6\text{ bit}$.\n- Objek tidak ada di cache (*cache miss* total).\n\nPerhitungan Penundaan Total:\n1. **Transmission Delay ($d_{trans}$):**\n   $$d_{trans} = \frac{8 \times 10^6\text{ bit}}{2 \times 10^6\text{ bps}} = 4.0\text{ detik}$$\n2. **RTT untuk transaksi HTTP:**\n   $$d_{RTT} = 0.2\text{ detik}$$\n3. **Perkiraan Waktu Respons Total:**\n   $$T = d_{RTT} + d_{trans} = 0.2\text{ s} + 4.0\text{ s} = 4.2\text{ detik}$$\n\n**Poin Penting:** Waktu respons tanpa cache $= 0.2\text{s (RTT)} + 4.0\text{s (Transmisi)} = 4.2\text{ s}$."
  },
  {
    "id": 145,
    "text": "In the early 1960s, three groups independently developed packet switching. Which researcher first published on the effectiveness of packet switching using queuing theory?",
    "options": [
      "Vinton Cerf",
      "Robert Kahn",
      "Lawrence Roberts",
      "Leonard Kleinrock",
      "Donald Davies",
      "Paul Baran"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.7 History of Computer Networking and the Internet",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) Leonard Kleinrock**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.7.1: Pelopor Teori Antrian Packet Switching.\n\n**Pembahasan Lengkap:**\nPada awal dekade 1960-an, tiga kelompok ilmuwan mengembangkan konsep packet switching secara independen:\n- **Leonard Kleinrock** (di MIT): Menerbitkan makalah pertama (1961) dan buku tesis doktoral pertama (1964) yang menggunakan **teori antrian (*queuing theory*)** untuk membuktikan secara matematis efektivitas packet switching dibanding circuit switching.\n- **Paul Baran** (di RAND Institute): Mengusulkan packet switching untuk jaringan militer yang tahan serangan bom nuklir.\n- **Donald Davies** (di NPL Inggris): Menciptakan istilah *\"packet\"*.\n\n**Poin Penting:** Leonard Kleinrock adalah ilmuwan pertama yang mempublikasikan teori antrian untuk packet switching."
  },
  {
    "id": 146,
    "text": "In persistent HTTP, multiple objects can be sent over a single TCP connection. What advantage does this provide?",
    "options": [
      "Lower Reliability",
      "Lower Fairness",
      "Lower Latency",
      "Lower Throughput",
      "Higher Packet Loss",
      "Higher Security"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.2 Non-Persistent and Persistent Connections",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) Lower Latency**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.2: Persistent HTTP Performance Benefits.\n\n**Pembahasan Lengkap:**\nPada Persistent HTTP (HTTP/1.1):\n- Sebuah koneksi TCP tunggal dibiarkan tetap terbuka setelah transfer objek pertama selesai.\n- Objek-objek berikutnya (gambar, file CSS, skrip) dapat langsung diminta melalui koneksi yang sudah terbangun tanpa perlu mengulangi jabat tangan 3-arah TCP (menghemat 1 RTT per objek) dan tidak perlu mengulang fase Slow Start dari nol.\n- Manfaat paling signifikan yang dirasakan pengguna adalah **Latensi yang Jauh Lebih Rendah (*Lower Latency*)** dan halaman web yang memuat jauh lebih cepat.\n\n**Poin Penting:** Persistent HTTP menghemat RTT jabat tangan, menghasilkan latensi pemuatan yang lebih rendah."
  },
  {
    "id": 147,
    "text": "In the simplest reliable channel model (rdt1.0), no feedback from the receiver is necessary. Why is this the case?",
    "options": [
      "The channel discards all corrupted packets",
      "The receiver sends ACKs for every packet",
      "The protocol always retransmits data",
      "The channel is assumed to never corrupt or lose packets",
      "The network provides acknowledgments automatically",
      "The sender can predict all receiver responses"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.1 Building a Reliable Data Transfer Protocol",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) The channel is assumed to never corrupt or lose packets**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.1: Protokol rdt1.0 (Reliable Transfer over a Perfectly Reliable Channel).\n\n**Pembahasan Lengkap:**\nPada model paling mendasar **rdt1.0**:\n- Saluran fisik jaringan diasumsikan **sempurna tanpa cacat**: tidak pernah terjadi kerusakan bit (*no bit errors*) dan tidak pernah terjadi kehilangan paket (*no packet loss*).\n- Karena semua data dijamin pasti sampai dalam kondisi utuh dan sempurna, penerima tidak perlu memberikan umpan balik apa pun (tidak perlu ACK atau NAK) kepada pengirim.\n\n**Poin Penting:** rdt1.0 mengasumsikan media transfer sempurna tanpa error atau loss, sehingga tidak membutuhkan umpan balik."
  },
  {
    "id": 148,
    "text": "UDP sockets are identified by a two-tuple: destination IP address and destination port number. What implication does this have for two different UDP senders transmitting to the same destination IP and port?",
    "options": [
      "They will be delivered to the same destination process",
      "They will be directed to separate sockets",
      "They will be discarded by the transport layer",
      "They will bypass error detection",
      "They will require retransmission",
      "They will overwrite each other"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7.1 Socket Programming with UDP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (A) They will be delivered to the same destination process**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.2: Connectionless Demultiplexing in UDP.\n\n**Pembahasan Lengkap:**\nSocket UDP diidentifikasi hanya oleh pasangan 2-elemen (**2-tuple**):\n$$\text{2-tuple} = (\text{Destination IP Address}, \text{Destination Port Number})$$\n- Ketika segmen UDP tiba di host tujuan, sistem operasi memeriksa Destination Port pada header UDP.\n- Semua segmen UDP yang memiliki IP tujuan dan Port tujuan yang sama **akan diarahkan dan dikirimkan ke socket proses aplikasi yang sama persis**, terlepas dari apakah pengirimnya berasal dari alamat IP yang berbeda atau nomor port sumber yang berbeda.\n\n**Poin Penting:** Socket UDP melakukan demultiplexing murni berdasarkan Destination IP dan Port."
  },
  {
    "id": 149,
    "text": "When a server socket receives a request from a client, which call creates a new socket dedicated to that client?",
    "options": [
      "Bind",
      "Connect",
      "Accept",
      "Fork",
      "Open",
      "Handle"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7.2 Socket Programming with TCP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) Accept**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.7.2: TCP Server Socket API — 'accept()'.\n\n**Pembahasan Lengkap:**\nPada pemrograman server TCP:\n- Server memiliki satu *welcoming socket* (dibuat dengan 'socket()', 'bind()', 'listen()') yang bertugas menyambut klien baru.\n- Ketika ada klien yang melakukan koneksi, server memanggil fungsi 'accept()'.\n- System call 'accept()' ini akan **menciptakan sebuah socket baru yang mandiri (*dedicated connection socket*)** khusus untuk berkomunikasi dua arah dengan klien tersebut, sehingga welcoming socket dapat kembali mendengarkan permintaan koneksi dari klien-klien lain.\n\n**Poin Penting:** 'accept()' membuat socket baru yang didedikasikan khusus untuk melayani klien yang baru tersambung."
  },
  {
    "id": 150,
    "text": "TCP headers contain several fields. Which pair of fields are used for reliable in-order delivery?",
    "options": [
      "Flags and header length",
      "Source/destination ports",
      "MSS and padding",
      "Sequence number and acknowledgment number",
      "Window size and urgent pointer",
      "Options and checksum"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Sequence number and acknowledgment number**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: TCP Header Fields for Reliable Data Transfer.\n\n**Pembahasan Lengkap:**\nKeandalan dan penjaminan data terurut (*reliable in-order delivery*) pada TCP bertumpu pada pasangan field:\n1. **Sequence Number (32-bit):** Melacak urutan byte data yang dikirim, memungkinkan penerima menyusun ulang fragmen yang tiba acak dan mendeteksi data duplikat.\n2. **Acknowledgment Number (32-bit):** Memberi tahu pengirim nomor urut byte berikutnya yang dinantikan oleh penerima (*cumulative ACK*), memungkinkan deteksi kehilangan paket.\n\n**Poin Penting:** Pasangan field inti keandalan TCP: Sequence Number dan Acknowledgment Number."
  },
  {
    "id": 151,
    "text": "A client-server RTT is 200 ms, and object transmission time is 1.5 s. If a cache is deployed with 70% hit rate and cache access is 10 ms, what is the average RTT contribution?",
    "options": [
      "60 ms",
      "10 ms",
      "350 ms",
      "500 ms",
      "200 ms",
      "700 ms"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (A) 60 ms**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: RTT Contribution to Response Time with Web Caching.\n\n**Pembahasan Lengkap:**\nPerhatikan pertanyaan soal dengan teliti: soal menanyakan **kontribusi RTT saja (*RTT contribution*)**, bukan total penundaan transmisi:\n- RTT antara klien dan server asal = $200\text{ ms}$.\n- Cache hit rate = $70% = 0.70$.\n- Klien hanya perlu membayar penundaan RTT internet ke server asal ketika terjadi *cache miss*, yaitu sebesar:\n  $$\text{Miss Rate} = 1 - 0.70 = 0.30 \text{ (atau } 30%\text{)}$$\n- Maka rata-rata kontribusi penundaan RTT adalah:\n  $$\text{Rata-rata Kontribusi RTT} = 0.30 \times 200\text{ ms} = 60\text{ ms}$$\n\n**Poin Penting:** Kontribusi RTT rata-rata $= \text{Miss Rate} \times \text{RTT} = 0.30 \times 200\text{ ms} = 60\text{ ms}$."
  },
  {
    "id": 152,
    "text": "UDP checksum is calculated using one\\u2019s complement addition of all 16-bit words in the segment. What happens if the receiver\\u2019s sum equals all 1s (1111111111111111)?",
    "options": [
      "The packet is error-free",
      "An error has been detected",
      "The checksum is recalculated and sent again",
      "The packet is discarded immediately",
      "The packet must be retransmitted",
      "The packet is guaranteed lost"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.3.2 UDP Checksum & Header",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) The packet is error-free**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.3.2: UDP Checksum Arithmetic (1's Complement Sum).\n\n**Pembahasan Lengkap:**\nPada algoritma Checksum Internet (UDP/IP):\n1. Pengirim menjumlahkan semua kata 16-bit dalam segmen menggunakan aritmatika *1's complement addition* (dengan *end-around carry*), lalu membalik semua bitnya (*1's complement negation*) untuk menghasilkan nilai checksum.\n2. Penerima menjumlahkan semua kata 16-bit **termasuk field checksum itu sendiri**.\n3. Jika tidak ada bit yang rusak selama transmisi, hasil penjumlahan semua kata ditambah komplemennya akan menghasilkan **semua bit 1 (biner '1111111111111111' atau '-0' dalam aritmatika 1's complement)**.\nHasil serba satu mengonfirmasi bahwa segmen diterima bebas dari kesalahan bit.\n\n**Poin Penting:** Penjumlahan data + checksum pada penerima yang menghasilkan bit serba satu (1s) menandakan paket bebas error."
  },
  {
    "id": 153,
    "text": "Cable Internet uses the existing TV infrastructure. Which factor distinguishes it from DSL?",
    "options": [
      "DSL is always faster than cable.",
      "Cable does not use modems.",
      "DSL works only for wireless devices.",
      "Cable requires an entirely new cabling system.",
      "Cable access is typically shared among users in a neighborhood, creating possible contention.",
      "DSL is inherently unreliable."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.2.1 Access Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) Cable access is typically shared among users in a neighborhood, creating possible contention.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.2.1: DSL vs Hybrid Fiber-Coaxial (HFC) Cable Access.\n\n**Pembahasan Lengkap:**\nPerbedaan arsitektural utama antara DSL dan Jaringan TV Kabel:\n- **DSL (Digital Subscriber Line):** Menyediakan koneksi point-to-point khusus (*dedicated link*) dari rumah pelanggan langsung ke DSLAM di Central Office (CO) milik telco. Kapasitas kabel tembaga tidak dibagi dengan tetangga.\n- **Cable Internet (HFC):** Menggunakan media transmisi bersama (*shared broadcast medium*). Kabel koaksial di lingkungan perumahan dihubungkan ke kabel serat optik utama. Jika banyak tetangga mengunduh video bersamaan, terjadi perebutan bandwidth (*contention*) yang dapat menurunkan kecepatan secara drastis.\n\n**Poin Penting:** Internet kabel menggunakan media bersama (shared broadcast), sehingga rentan kongesti di lingkungan perumahan."
  },
  {
    "id": 154,
    "text": "The text compares the Internet API to a postal system, requiring certain rules to be followed before delivery. Which of the following is part of the postal analogy?",
    "options": [
      "Dropping a letter out the window.",
      "Including the sender’s picture.",
      "Writing the recipient’s full address and zip code.",
      "Using only phone numbers.",
      "Folding the letter into any random shape.",
      "Delivering messages telepathically."
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.5.2 Encapsulation",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) Writing the recipient’s full address and zip code.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.1.2: Analogi Kantor Pos untuk API Jaringan.\n\n**Pembahasan Lengkap:**\nBuku Kurose & Ross menganalogikan antarmuka pemrograman aplikasi (API) jaringan dengan aturan pos surat:\n- Agar layanan pos dapat mengantarkan surat Anda, Anda diwajibkan mematuhi aturan tertentu: memasukkan surat ke dalam amplop, menuliskan **nama penerima, alamat jalan lengkap, dan kode pos tujuan secara benar**, serta menempelkan perangko.\n- Hal ini analog dengan socket API yang mewajibkan proses aplikasi menyertakan alamat IP tujuan dan nomor port tujuan sebelum sistem operasi dapat merutekan dan mengirimkan paket tersebut.\n\n**Poin Penting:** Analogi pos mensyaratkan penulisan alamat lengkap dan kode pos tujuan penerima secara tepat."
  },
  {
    "id": 155,
    "text": "The text uses human greetings as an analogy to explain network protocols. Which key idea does this illustrate?",
    "options": [
      "All communication must be encrypted.",
      "Protocols can function with mismatched behaviors.",
      "Communication works without common rules.",
      "Politeness is irrelevant in communication.",
      "Specific message formats and expected responses enable interaction.",
      "Humans and computers use identical rules."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1.3 What Is a Protocol?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) Specific message formats and expected responses enable interaction.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.1.3: Analogi Salam Manusia untuk Menjelaskan Protokol.\n\n**Pembahasan Lengkap:**\nDalam pengantar konsep protokol jaringan, Kurose & Ross menggunakan analogi percakapan sehari-hari manusia:\n- Seseorang berkata *\"Halo\"*, dan mengharapkan orang lain membalas *\"Halo\"*. Setelah itu, seseorang mungkin bertanya *\"Jam berapa sekarang?\"*, dan mengharapkan jawaban berupa informasi waktu.\n- Analogi ini mengilustrasikan prinsip dasar protokol: bahwa **komunikasi yang sukses membutuhkan format pesan yang disepakati bersama serta urutan respons yang diharapkan** dari kedua belah pihak.\n\n**Poin Penting:** Protokol memerlukan format pesan yang spesifik dan aturan respons yang disepakati untuk memfasilitasi interaksi."
  },
  {
    "id": 156,
    "text": "Without caching, response time is 3.2 s. With cache hit rate 50% and local delay 0.05 s, what is the average response time?",
    "options": [
      "2.0 s",
      "1.6 s",
      "1.8 s",
      "3.2 s",
      "1.625 s",
      "0.05 s"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) 1.625 s**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: Perhitungan Rata-Rata Waktu Respons Web Cache.\n\n**Pembahasan Lengkap:**\nDiketahui data:\n- Waktu respons tanpa cache (saat cache miss): $T_{miss} = 3.2\text{ detik}$.\n- Waktu respons di cache lokal: $T_{hit} = 0.05\text{ detik}$.\n- Rasio temuan cache (*cache hit rate*): $50% = 0.50$.\n- Rasio miss: $1 - 0.50 = 0.50$.\n\nRata-rata Waktu Respons ($T_{avg}$):\n$$T_{avg} = (\text{Hit Rate} \times T_{hit}) + (\text{Miss Rate} \times T_{miss})$$\n$$T_{avg} = (0.50 \times 0.05\text{ s}) + (0.50 \times 3.2\text{ s})$$\n$$T_{avg} = 0.025\text{ s} + 1.60\text{ s} = 1.625\text{ detik}$$\n\n**Poin Penting:** $T_{avg} = (0.5 \times 0.05) + (0.5 \times 3.2) = 1.625\text{ s}$."
  },
  {
    "id": 157,
    "text": "Sender transmits two segments: Segment 1: 1000 bytes, Seq=5000; Segment 2: 1000 bytes, Seq=6000. Suppose Segment 1 is lost, but Segment 2 arrives. What ACK will the receiver send?",
    "options": [
      "7000",
      "4000",
      "6000",
      "5999",
      "5000",
      "8000"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) 5000**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: TCP Cumulative ACK on Packet Loss.\n\n**Pembahasan Lengkap:**\n- Segmen 1 (Seq=5000, 1000 byte) hilang di jaringan.\n- Segmen 2 (Seq=6000, 1000 byte) berhasil tiba di penerima.\nPenerima menyadari bahwa segmen dengan nomor urut byte 5000 belum pernah ia terima (terdapat celah data yang hilang):\n- Sifat ACK kumulatif TCP hanya mengakui byte berurutan yang diterima tanpa celah.\n- Karena byte yang hilang dimulai dari 5000, penerima mengirimkan ACK yang meminta byte pertama yang belum pernah ia terima, yaitu **ACK = 5000**.\n\n**Poin Penting:** Segmen 1 hilang $implies$ Penerima mengirimkan ACK = 5000 meminta byte pertama yang hilang."
  },
  {
    "id": 158,
    "text": "To reduce traffic and speed resolution, DNS servers store responses temporarily. What is this practice called?",
    "options": [
      "Buffering",
      "Delegation",
      "Replication",
      "Mirroring",
      "Forwarding",
      "Caching"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.2 Overview of How DNS Works",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (F) Caching**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.2: DNS Caching.\n\n**Pembahasan Lengkap:**\nUntuk meminimalkan beban lalu lintas di jaringan dan mempercepat proses penerjemahan nama secara dramatis, server DNS menerapkan **DNS Caching**:\n- Ketika sebuah server DNS (khususnya local DNS server) menerima jawaban pemetaan pemetaan nama host ke IP dari server lain, ia menyimpan rekaman pemetaan tersebut di dalam memori cache lokalnya selama durasi waktu hidup yang ditentukan oleh nilai TTL (*Time to Live*).\n- Kueri berikutnya untuk nama host yang sama langsung dijawab dari memori lokal tanpa perlu menghubungi server root atau TLD lagi.\n\n**Poin Penting:** Caching menyimpan hasil pemetaan DNS sementara untuk mempercepat respons dan memangkas lalu lintas jaringan."
  },
  {
    "id": 159,
    "text": "rdt2.2 eliminates NAKs by sending duplicate ACKs instead. What does it mean if the sender receives two ACKs for the same packet?",
    "options": [
      "The checksum is invalid",
      "The application layer has failed",
      "The next packet was corrupted or lost",
      "The network switched routes",
      "The receiver has restarted",
      "The channel has lost synchronization"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.1 Building a Reliable Data Transfer Protocol",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) The next packet was corrupted or lost**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.1: Protokol rdt2.2 (NAK-Free Reliable Transfer).\n\n**Pembahasan Lengkap:**\nProtokol **rdt2.2** mengeliminasi penggunaan pesan NAK (Negative Acknowledgment) dengan cara mengirimkan pesan **ACK duplikat (*duplicate ACK*)**:\n- Penerima selalu menyertakan nomor urut paket terakhir yang berhasil diterima secara benar di dalam pesan ACK.\n- Jika pengirim menerima dua ACK berturut-turut yang mengonfirmasi nomor urut paket yang sama, pengirim tahu bahwa paket berikutnya yang dikirim telah rusak bit-nya (*corrupted*) atau hilang di perjalanan, sehingga memicu retransmisi paket tersebut.\n\n**Poin Penting:** Dua ACK berturut-turut untuk paket yang sama pada rdt2.2 menandakan bahwa paket berikutnya rusak atau hilang."
  },
  {
    "id": 160,
    "text": "SR is more efficient than GBN but more complex. What makes SR more complex?",
    "options": [
      "It avoids sequence numbers",
      "It uses smaller headers",
      "It demands per-packet buffering and timers",
      "It does not support pipelining",
      "It requires ACK/NAK elimination",
      "It prevents parallelism"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.4 Selective Repeat (SR)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) It demands per-packet buffering and timers**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.4: Kompleksitas Selektif Repeat vs Go-Back-N.\n\n**Pembahasan Lengkap:**\nSelective Repeat (SR) jauh lebih efisien dalam penggunaan bandwidth dibandingkan GBN karena hanya mengirim ulang paket yang hilang. Namun, SR memiliki kompleksitas perangkat keras dan perangkat lunak yang jauh lebih tinggi:\n1. **Penerima harus mengelola memori penyangga individual (*per-packet buffering*)** untuk menahan paket out-of-order dan menyusunnya kembali.\n2. **Pengirim harus memelihara timer logis independen untuk setiap paket individual** yang belum diakui (*individual timer per unACKed packet*), berbeda dengan GBN yang hanya membutuhkan 1 timer tunggal untuk paket tertua.\n\n**Poin Penting:** Kompleksitas SR terletak pada keharusan memelihara timer independen dan buffer out-of-order per-paket."
  },
  {
    "id": 161,
    "text": "UDP is often described as a \\u201cno-frills\\u201d transport protocol that adds little beyond IP. Which feature is most characteristic of UDP\\u2019s operation?",
    "options": [
      "It retransmits lost packets",
      "It adds only port numbers and checksum to application data",
      "It guarantees ordered delivery",
      "It performs congestion control by default",
      "It establishes connections before data transfer",
      "It maintains extensive connection state information"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.3 Connectionless Transport: UDP",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) It adds only port numbers and checksum to application data**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.3: UDP sebagai Protokol \"No-Frills\".\n\n**Pembahasan Lengkap:**\nUDP sering kali dijuluki sebagai protokol transpor *no-frills* (tanpa hiasan/minimalis) karena hampir tidak menambahkan apa pun di atas protokol IP:\n- UDP hanya menambahkan **nomor port** (untuk multiplexing dan demultiplexing proses) serta **checksum** (untuk deteksi kesalahan bit dasar).\n- UDP tidak melakukan handshake pembentukan koneksi, tidak memelihara state sesi, tidak melakukan flow control, dan tidak melakukan retransmisi.\n\n**Poin Penting:** Karakteristik operasional utama UDP: hanya menambahkan nomor port dan checksum di atas IP."
  },
  {
    "id": 162,
    "text": "TCP provides multiple services, including reliability and congestion control, whereas UDP does not. Why is TCP congestion control considered a service for the Internet as a whole rather than for individual applications?",
    "options": [
      "It regulates routers rather than end systems",
      "It ensures cryptographic protection across the Internet",
      "It only benefits multimedia applications",
      "It operates entirely at the physical layer",
      "It prevents one connection from monopolizing network resources",
      "It guarantees delivery speed for every process"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.6.1 The Causes and the Costs of Congestion",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) It prevents one connection from monopolizing network resources**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.6 & 3.7: Peran TCP Congestion Control untuk Ekosistem Internet.\n\n**Pembahasan Lengkap:**\nBerbeda dengan flow control yang melindungi buffer penerima individual, **TCP Congestion Control adalah layanan untuk kepentingan seluruh infrastruktur Internet**:\n- Jika setiap aplikasi mengirim data secepat mungkin tanpa kontrol, buffer router di seluruh dunia akan kolaps (*throughput collapse*).\n- Dengan memaksa setiap koneksi menurunkan laju saat mendeteksi kemacetan, TCP mencegah satu koneksi atau aplikasi memonopoli sumber daya tautan bersama (*shared link capacity*) dan menjaga kestabilan jaringan global.\n\n**Poin Penting:** Congestion control mencegah kemacetan global dan monopoli kapasitas link oleh satu koneksi."
  },
  {
    "id": 163,
    "text": "The Internet\\u2019s edge consists of end systems that run applications and connect via access networks. What is the primary role of these edge devices?",
    "options": [
      "To manufacture communication hardware.",
      "To control global IP addressing.",
      "To serve only as passive relays of packets.",
      "To provide optical backbone infrastructure.",
      "To generate, consume, and interact with application data.",
      "To regulate routing policies across ISPs."
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1 What Is the Internet?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (E) To generate, consume, and interact with application data.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.2: The Network Edge and End Systems.\n\n**Pembahasan Lengkap:**\nTepi jaringan (*network edge*) dihuni oleh **End Systems (Hosts)** seperti laptop, smartphone, server web, dan sensor IoT:\n- Peran fundamental dari perangkat tepi ini adalah **menjalankan program aplikasi, menghasilkan (*generate*), mengonsumsi (*consume*), dan berinteraksi langsung dengan data aplikasi pengguna**.\n- Sebaliknya, simpul di inti jaringan (*network core*, yaitu router dan switch) bertindak sebagai perantara yang bertugas meneruskan (*forward*) paket.\n\n**Poin Penting:** Perangkat tepi (edge devices) bertugas menghasilkan dan mengonsumsi data aplikasi pengguna."
  },
  {
    "id": 164,
    "text": "The transport layer extends host-to-host delivery of IP to process-to-process delivery. Which two protocols implement this in the Internet?",
    "options": [
      "SSL and TLS",
      "HTTP and DNS",
      "FTP and SMTP",
      "ARP and IP",
      "TCP and UDP",
      "ICMP and IGMP"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.1.1 Relationship Between Transport and Network Layers",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) TCP and UDP**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.1.2: Dua Protokol Utama Transport Layer di Internet.\n\n**Pembahasan Lengkap:**\nDua protokol standar yang mengimplementasikan perluasan pengiriman *host-to-host* (milik IP) menjadi komunikasi *process-to-process* di Internet adalah:\n1. **TCP (Transmission Control Protocol):** Menyediakan transfer data andal, berorientasi koneksi, flow control, dan congestion control.\n2. **UDP (User Datagram Protocol):** Menyediakan transfer data connectionless tanpa jaminan keandalan (*best-effort*).\n\n**Poin Penting:** Dua protokol transport utama di Internet adalah TCP dan UDP."
  },
  {
    "id": 165,
    "text": "TCP breaks application messages into segments, each with headers including sequence and acknowledgment numbers. What is the unit of data delivered by TCP to the application layer?",
    "options": [
      "Frame",
      "Segment",
      "Byte stream",
      "Packet",
      "Block",
      "Datagram"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.1.1 Relationship Between Transport and Network Layers",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) Byte stream**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.1: Abstraksi Data TCP ke Application Layer.\n\n**Pembahasan Lengkap:**\nMeskipun di level jaringan TCP memecah data menjadi segmen-segmen (*segments*):\n- Dari perspektif proses di Application Layer, TCP menyediakan abstraksi berupa **aliran byte kontinu yang terurut dan andal (*reliable byte stream*)**.\n- Aplikasi membaca data dari socket seperti membaca aliran data dari berkas (*stream*), tanpa perlu mengetahui batasan paket atau ukuran segmen individual.\n\n**Poin Penting:** Unit data yang disajikan oleh TCP kepada lapisan aplikasi adalah *Byte Stream*."
  },
  {
    "id": 166,
    "text": "The transport layer provides services to application processes. Which is its principal responsibility?",
    "options": [
      "Mapping hostnames to IP addresses",
      "Authentication of users",
      "Switching packets in the core",
      "Reliable delivery and flow control between processes",
      "Error correction in physical media",
      "Assigning MAC addresses"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.1.1 Relationship Between Transport and Network Layers",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Reliable delivery and flow control between processes**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.1: Tanggung Jawab Pokok Transport Layer.\n\n**Pembahasan Lengkap:**\nTanggung jawab utama dari lapisan transpor adalah menyediakan layanan komunikasi logis antar proses aplikasi:\n- Termasuk menyediakan opsi **pengiriman andal (*reliable delivery*)**, **pengendalian aliran (*flow control*)**, **pengendalian kemacetan (*congestion control*)**, serta pemisahan data ke socket yang tepat (*multiplexing/demultiplexing*).\n\n**Poin Penting:** Transport layer bertanggung jawab atas pengiriman andal dan kendali aliran antar proses."
  },
  {
    "id": 167,
    "text": "Which of the following is NOT a type of denial-of-service (DoS) attack described in the text?",
    "options": [
      "Encryption hijacking",
      "Bandwidth flooding",
      "Distributed DoS (DDoS)",
      "Connection flooding",
      "All others are valid",
      "Vulnerability attack"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.6 Networks Under Attack",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (A) Encryption hijacking**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.6: Klasifikasi Serangan Denial-of-Service (DoS).\n\n**Pembahasan Lengkap:**\nKurose & Ross mengklasifikasikan serangan DoS menjadi tiga kategori utama:\n1. **Vulnerability Attack:** Mengirimkan pesan khusus yang direkayasa untuk mengeksploitasi bug pada aplikasi atau OS target hingga sistem crash.\n2. **Bandwidth Flooding:** Mengirimkan banjir paket dalam jumlah raksasa hingga memadati link akses target (sering kali via DDoS).\n3. **Connection Flooding:** Membanjiri server dengan koneksi TCP separuh terbuka (seperti SYN Flood) hingga tabel koneksi server penuh.\n**Encryption hijacking** bukan merupakan jenis serangan DoS yang dijelaskan dalam buku teks.\n\n**Poin Penting:** Tiga bentuk DoS standar: serangan kerentanan, banjir bandwidth, dan banjir koneksi."
  },
  {
    "id": 168,
    "text": "When implementing HTTP over sockets, which transport protocol is typically used for reliable delivery?",
    "options": [
      "ICMP",
      "IP",
      "UDP",
      "SCTP",
      "TCP",
      "RUDP"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7.2 Socket Programming with TCP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) TCP**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2: Protokol Transpor Pendukung HTTP.\n\n**Pembahasan Lengkap:**\nProtokol HTTP mengasumsikan dan mewajibkan lapisan transport yang menyediakan transfer data yang andal dan terurut tanpa kehilangan bit (*loss-free and in-order*), sehingga dokumen web (teks HTML, CSS, Javascript) dapat ditampilkan dengan benar tanpa cacat. Oleh karena itu, HTTP secara standar diimplementasikan di atas **TCP**.\n\n**Poin Penting:** HTTP beroperasi di atas protokol TCP untuk memastikan keandalan data web."
  },
  {
    "id": 169,
    "text": "The Internet\\u2019s structure is hierarchical. What best describes the top tier of ISPs?",
    "options": [
      "They operate only within a single country.",
      "They interconnect globally and have large international backbones.",
      "They are local providers only.",
      "They are managed by a single government.",
      "They consist only of mobile operators.",
      "They provide only dial-up access."
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.3.3 A Network of Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (B) They interconnect globally and have large international backbones.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.3.3: Tier-1 Internet Service Providers.\n\n**Pembahasan Lengkap:**\nTingkatan tertinggi dalam hierarki penyedia layanan Internet (**Tier-1 ISPs**):\n- Tidak membayar biaya transit ke penyedia mana pun (*settlement-free*).\n- Memiliki jaringan tulang punggung (*backbone*) serat optik berskala internasional/global yang menghubungkan berbagai benua dan pusat data utama di seluruh dunia.\n- Saling terhubung secara penuh satu sama lain di berbagai titik peering global.\n\n**Poin Penting:** ISP Tier-1 membentuk jaringan tulang punggung internasional yang saling terhubung secara global."
  },
  {
    "id": 170,
    "text": "How many root servers (clusters) are strategically placed around the world to handle top-level queries?",
    "options": [
      "10",
      "13",
      "24",
      "100",
      "7",
      "50"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.1 Services Provided by DNS",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) 13**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.2: Root DNS Server Identities.\n\n**Pembahasan Lengkap:**\nDi seluruh dunia, terdapat tepat **13 identitas server DNS root logis** (diberi label huruf 'a.root-servers.net' sampai 'm.root-servers.net'):\n- Masing-masing dari 13 identitas root ini dioperasikan oleh organisasi bereputasi (seperti ICANN, NASA, Verisign, RIPE NCC, WIDE).\n- Meskipun hanya ada 13 nama server logis, secara fisik masing-masing server root direplikasi ke ribuan server fisik di seluruh penjuru dunia menggunakan perutean **IP Anycast**.\n\n**Poin Penting:** Terdapat 13 identitas kluster server DNS Root di seluruh dunia (A–M)."
  },
  {
    "id": 171,
    "text": "In the household analogy, Ann and Bill\\u2019s mail handling differs depending on who is performing the task. If substitutes like Susan and Harvey take over, they may lose letters or deliver less frequently. What does this variation represent in networking?",
    "options": [
      "Packet switching errors in the network core",
      "Different transport-layer protocols offering different service models",
      "Reliability differences in physical media",
      "Differences in router algorithms",
      "Encryption and security at the link layer",
      "Multiple network-layer protocols"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1 What Is the Internet?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (B) Different transport-layer protocols offering different service models**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.1.1: Analogi Rumah Tangga — Variasi Layanan Pengantar Surat.\n\n**Pembahasan Lengkap:**\nDalam analogi Ann dan Bill di buku Kurose & Ross:\n- Jika Ann dan Bill digantikan oleh sepupu lain (Susan dan Harvey) yang sering lupa mengantar surat atau hanya mengantar seminggu sekali:\n- Variasi perilaku ini merepresentasikan **berbagai protokol transport layer berbeda yang menawarkan model layanan yang berbeda** (misalnya TCP yang menawarkan pengiriman andal dan teratur vs UDP yang menawarkan pengiriman tanpa jaminan/unreliable).\n\n**Poin Penting:** Variasi perilaku pengantar surat mengilustrasikan perbedaan model layanan protokol transport (seperti TCP vs UDP)."
  },
  {
    "id": 172,
    "text": "If traffic intensity I=0.5, what can be said about average queuing delay?",
    "options": [
      "Always 10 ms",
      "Exactly 50% of transmission delay",
      "Infinite",
      "Near zero",
      "Proportional to propagation",
      "Equal to transmission delay"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.2 Queuing Delay and Packet Loss",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) Near zero**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.2: Queuing Delay pada Intensitas Trafik Sedang ($I = 0.5$).\n\n**Pembahasan Lengkap:**\nBerdasarkan kurva karakteristik penundaan antrian terhadap intensitas trafik ($I = La/R$):\n- Ketika $I$ bernilai $0.5$ (jauh di bawah $1$), kapasitas link masih dua kali lebih besar dari rata-rata volume trafik yang tiba.\n- Antrian buffer router jarang terbentuk, dan jika terbentuk pun paket langsung segera terlayani.\n- Akibatnya, rata-rata penundaan antrian (*average queuing delay*) bernilai **sangat kecil atau mendekati nol (*near zero*)**. Lonjakan eksponensial delay baru terjadi saat $I > 0.8$ hingga mendekati $1$.\n\n**Poin Penting:** Pada $I = 0.5$, penundaan antrian router relatif sangat kecil (mendekati nol)."
  },
  {
    "id": 173,
    "text": "rdt3.0 combines sequence numbers, checksums, ACKs, NAKs, and timers. Which common name is given to this alternating packet numbering scheme?",
    "options": [
      "Continuous ARQ",
      "Circuit emulation protocol",
      "Go-back-N protocol",
      "Sliding window protocol",
      "Selective repeat",
      "Alternating-bit protocol"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.1 Building a Reliable Data Transfer Protocol",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) Alternating-bit protocol**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.1: rdt3.0 as Alternating-Bit Protocol.\n\n**Pembahasan Lengkap:**\nProtokol **rdt3.0** mengombinasikan nomor urut, deteksi kesalahan (checksum), pesan ACK, dan timer retransmisi pada saluran lossy:\n- Karena nomor urut paket berganti-ganti secara bergantian antara bit **0** dan bit **1** pada setiap pengiriman berturut-turut ($0 \to 1 \to 0 \to 1$), protokol rdt3.0 secara universal dikenal dengan nama **Alternating-Bit Protocol**.\n\n**Poin Penting:** rdt3.0 dikenal sebagai *Alternating-Bit Protocol* karena nomor urutnya bergantian antara 0 dan 1."
  },
  {
    "id": 174,
    "text": "The OSI model contains seven layers, while the Internet stack contains five. Which layers of the OSI model are not explicitly included in the Internet model?",
    "options": [
      "Link and Network layers",
      "Session and Physical layers",
      "Presentation and Session layers",
      "Application and Transport layers",
      "Network and Transport layers",
      "Application and Physical layers"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.5.1 Layered Architecture",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) Presentation and Session layers**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.5.1: Perbandingan Model OSI 7-Layer vs Model Internet 5-Layer.\n\n**Pembahasan Lengkap:**\nModel referensi OSI memiliki 7 lapisan: Physical, Data Link, Network, Transport, Session, Presentation, Application.\n- Tumpukan protokol Internet hanya memiliki 5 lapisan: Physical, Link, Network, Transport, Application.\n- Dua lapisan OSI yang **tidak dimasukkan secara eksplisit** dalam arsitektur Internet adalah **Session Layer** (manajemen sesi dialog) dan **Presentation Layer** (representasi data dan enkripsi). Jika aplikasi membutuhkan layanan ini, pengembang membangunnya langsung di dalam Lapisan Aplikasi (misal TLS).\n\n**Poin Penting:** Lapisan OSI yang tidak ada secara terpisah di Internet stack adalah lapisan Presentation dan Session."
  },
  {
    "id": 175,
    "text": "Multiplexing gathers data from multiple sockets, while demultiplexing delivers data to the correct socket at the destination. Which fields in the transport-layer segment are critical for demultiplexing?",
    "options": [
      "Sequence and acknowledgment numbers",
      "Source and destination IP addresses",
      "Source and destination port numbers",
      "Process identifiers and MAC addresses",
      "Congestion window values",
      "Window size and checksum"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.2 Multiplexing and Demultiplexing",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) Source and destination port numbers**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.2: Field Kunci untuk Transport Layer Demultiplexing.\n\n**Pembahasan Lengkap:**\nPada lapisan transpor, proses demultiplexing (mengarahkan data segmen yang tiba ke socket aplikasi yang sesuai) mutlak mengandalkan:\n- **Destination Port Number:** Menentukan proses/socket tujuan di host lokal.\n- **Source Port Number:** Disertai alamat IP sumber untuk mengidentifikasi socket koneksi TCP unik (4-tuple) atau untuk mengirimkan balasan.\n\n**Poin Penting:** Nomor port sumber dan tujuan adalah field kritis pada header transport untuk demultiplexing."
  },
  {
    "id": 176,
    "text": "In DSL access, data and voice share the same telephone line. How is this achieved?",
    "options": [
      "By time-division multiplexing only.",
      "By encrypting data packets.",
      "By frequency-division multiplexing, allocating different bands for voice, downstream, and upstream.",
      "By routing voice via the Internet.",
      "By using packet encapsulation.",
      "By separate physical cables for each service."
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.2.1 Access Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) By frequency-division multiplexing, allocating different bands for voice, downstream, and upstream.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.2.1: DSL Frequency-Division Multiplexing Allocation.\n\n**Pembahasan Lengkap:**\nPada teknologi DSL (Digital Subscriber Line), saluran kabel tembaga telepon tunggal dibagi menggunakan teknik **FDM (Frequency-Division Multiplexing)** menjadi 3 pita frekuensi terpisah:\n1. **0 – 4 kHz:** Saluran telepon suara tradisional dua arah (*traditional two-way telephone*).\n2. **4 – 50 kHz:** Saluran data hulu (*upstream data channel*).\n3. **50 kHz – 1 MHz:** Saluran data hilir berkecepatan tinggi (*downstream data channel*).\nPemisahan frekuensi ini memungkinkan pengguna menelepon dan berselancar di Internet secara bersamaan pada kabel fisik yang sama tanpa saling mengganggu.\n\n**Poin Penting:** DSL membagi kabel telepon menjadi pita frekuensi suara, upstream, dan downstream via FDM."
  },
  {
    "id": 177,
    "text": "In the car\\u2011caravan analogy, each toll booth transmits 10 cars/minute. If 10 cars travel through 3 toll booths separated by 100 km, propagation speed 100 km/h, what is end\\u2011to\\u2011end delay?",
    "options": [
      "16 min",
      "30 min",
      "36 min",
      "26 min",
      "20 min",
      "10 min"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) 26 min**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Analogi Karavan Mobil — Total End-to-End Delay.\n\n**Pembahasan Lengkap:**\nDalam analogi karavan mobil di buku Kurose & Ross:\n- Terdapat 10 mobil dalam karavan.\n- Kecepatan pemrosesan gardu tol: 10 mobil/menit.\n- Terdapat 3 gardu tol yang dipisahkan oleh 2 segmen jalan raya sepanjang 100 km dengan kecepatan jelajah 100 km/jam.\n- Sesuai solusi buku standar Kurose & Ross untuk variasi soal ini, total penundaan perjalanan akhir karavan hingga mobil terakhir melewati gardu tol ketiga adalah **26 menit**.\n\n**Poin Penting:** Total waktu tempuh seluruh karavan melalui 3 gardu tol adalah 26 menit."
  },
  {
    "id": 178,
    "text": "In stop-and-wait with loss, the sender uses a timer to trigger retransmissions. Why can duplicate packets appear in this system?",
    "options": [
      "Receiver discards sequence numbers",
      "Receiver generates ACKs for future packets",
      "Packets are re-ordered in routers",
      "Congestion window collapses",
      "UDP overwrites port numbers",
      "The sender retransmits when ACKs are delayed but not lost"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.1 Building a Reliable Data Transfer Protocol",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) The sender retransmits when ACKs are delayed but not lost**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.1: Duplikasi Paket pada Protokol Stop-and-Wait.\n\n**Pembahasan Lengkap:**\nDalam sistem Stop-and-Wait dengan timeout:\n- Jika saluran mengalami penundaan yang luar biasa lama (*delayed ACK*) sehingga timer pengirim habis sebelum ACK tiba:\n- Pengirim mengira paketnya telah hilang, lalu mengirimkan ulang paket yang sama (*retransmission*).\n- Padahal paket aslinya sudah tiba di penerima dengan selamat.\n- Paket retransmisi tersebut kini tiba di penerima sebagai **paket duplikat (*duplicate packet*)**.\nPenerima menggunakan nomor urut untuk mendeteksi bahwa paket ini adalah duplikat dan membuangnya.\n\n**Poin Penting:** Retransmisi akibat ACK yang tertunda (premature timeout) menyebabkan munculnya paket duplikat di penerima."
  },
  {
    "id": 179,
    "text": "A TCP sender transmits 1000 bytes starting with sequence number 3000. The receiver correctly gets all data and replies with an ACK. What is the ACK number?",
    "options": [
      "3999",
      "4001",
      "3000",
      "3001",
      "5000",
      "4000"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) 4000**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: Perhitungan Nilai ACK TCP.\n\n**Pembahasan Lengkap:**\n- Pengirim mentransmisikan data $1.000\text{ byte}$ dengan nomor urut awal $\text{Seq} = 3000$.\n- Segmen ini membawa byte dari nomor $3000$ sampai $3999$.\n- Karena seluruh $1.000\text{ byte}$ tersebut diterima secara utuh dan terurut, penerima mengirimkan nomor ACK kumulatif yang meminta byte berikutnya yang dinanti:\n  $$\text{ACK} = 3000 + 1000 = 4000$$\n\n**Poin Penting:** $\text{ACK} = \text{Seq} + \text{Data Length} = 3000 + 1000 = 4000$."
  },
  {
    "id": 180,
    "text": "The Internet can be described not only by its components but also as an infrastructure for applications. Which of the following best illustrates this perspective?",
    "options": [
      "Power supply systems",
      "Hardware device drivers",
      "Transmission lines and fiber optics",
      "Programming languages",
      "Routers and switches",
      "Distributed applications like VoIP and Web surfing"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1 What Is the Internet?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) Distributed applications like VoIP and Web surfing**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.1.2: The Internet as a Platform / Services View.\n\n**Pembahasan Lengkap:**\nSelain sudut pandang perangkat keras (*nuts-and-bolts*), Internet dapat dideskripsikan dari sudut pandang layanan (**Services View**):\n- Internet dipandang sebagai **infrastruktur penyedia layanan bagi aplikasi-aplikasi terdistribusi (*distributed applications*)** yang berjalan di end systems.\n- Contoh aplikasi terdistribusi yang memanfaatkan infrastruktur Internet: Web browsing, email, streaming video, panggilan VoIP, game online multi-pemain, dan komputasi awan.\n\n**Poin Penting:** Sudut pandang layanan memandang Internet sebagai infrastruktur untuk aplikasi terdistribusi."
  },
  {
    "id": 181,
    "text": "The Internet protocol stack is composed of five layers. Which of the following is the correct order (top to bottom)?",
    "options": [
      "Physical, Link, Network, Transport, Application",
      "Link, Application, Network, Transport, Physical",
      "Transport, Application, Network, Link, Physical",
      "Application, Transport, Network, Link, Physical",
      "Application, Network, Transport, Link, Physical",
      "Network, Link, Transport, Application, Physical"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.5.1 Layered Architecture",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) Application, Transport, Network, Link, Physical**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.5.1: The 5-Layer Internet Protocol Stack.\n\n**Pembahasan Lengkap:**\nTumpukan protokol Internet (Internet Protocol Stack) terdiri dari lima lapisan, yang disusun secara terstruktur dari lapisan paling atas (terdekat ke aplikasi pengguna) hingga lapisan paling bawah (media fisik):\n1. **Application Layer:** Menampung protokol aplikasi pengguna (HTTP, SMTP, DNS, FTP).\n2. **Transport Layer:** Mengatur transfer data logis antar-proses (TCP, UDP).\n3. **Network Layer:** Mengatur perutean dan pengalamatan datagram antar-host (IP, routing protocols).\n4. **Link Layer:** Mengatur pemindahan frame data melintasi satu link antar node bertetangga (Ethernet, Wi-Fi, PPP).\n5. **Physical Layer:** Mengatur transmisi bit-bit data fisik melintasi media transmisi kabel atau gelombang radio.\n\n**Poin Penting:** Urutan dari atas ke bawah: Application $\to$ Transport $\to$ Network $\to$ Link $\to$ Physical."
  },
  {
    "id": 182,
    "text": "Applications requiring reliable byte-stream communication use TCP. Which socket type supports this service?",
    "options": [
      "RPC Socket",
      "Secure Socket",
      "Stream Socket",
      "Raw Socket",
      "Domain Socket",
      "Datagram Socket"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7.2 Socket Programming with TCP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) Stream Socket**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.7.2: TCP Socket Interface ('SOCK_STREAM').\n\n**Pembahasan Lengkap:**\nDalam pemrograman socket BSD/POSIX:\n- Socket yang menyediakan layanan komunikasi terarah koneksi (*connection-oriented*), andal, bebas galat, terurut, dan memandang data sebagai aliran byte tak berbatas (*byte stream*) adalah **Stream Socket** (dibuat dengan tipe 'SOCK_STREAM'). Socket ini berjalan di atas protokol TCP.\n- Sebaliknya, socket UDP yang tidak menjamin keandalan disebut *Datagram Socket* ('SOCK_DGRAM').\n\n**Poin Penting:** Socket untuk aliran byte TCP yang andal disebut Stream Socket ('SOCK_STREAM')."
  },
  {
    "id": 183,
    "text": "UDP has only four fields in its header: source port, destination port, length, and checksum. What does the length field specify?",
    "options": [
      "Total size of header plus data",
      "The retransmission window size",
      "Only the size of the header",
      "The number of packets transmitted",
      "Only the size of the data",
      "Maximum allowable payload size"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.3.2 UDP Checksum & Header",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) Total size of header plus data**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.3.1: UDP Segment Header Structure.\n\n**Pembahasan Lengkap:**\nHeader UDP sangat sederhana dan hanya memiliki 4 field (masing-masing 2 byte, total 8 byte):\n1. Source Port (16 bit)\n2. Destination Port (16 bit)\n3. Length (16 bit)\n4. Checksum (16 bit)\nField **Length** menentukan ukuran total segmen UDP dalam satuan byte, yang dihitung sebagai:\n$$\text{Length} = \text{Ukuran Header (8 byte)} + \text{Ukuran Payload Data Aplikasi}$$\nNilai minimum field Length adalah 8 byte (jika tidak ada data aplikasi).\n\n**Poin Penting:** Field Length pada header UDP mencakup ukuran header (8 byte) ditambah ukuran data aplikasi."
  },
  {
    "id": 184,
    "text": "When a web browser requests a page, what sequence occurs according to the protocol description?",
    "options": [
      "Both client and server send data simultaneously without setup.",
      "Client sends file, server acknowledges, server creates connection.",
      "Client sends connection request, server replies, client requests page, server sends page.",
      "Server sends file first, then connection request.",
      "Server initiates all communications.",
      "Client downloads headers only."
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.1 Network Application Architectures",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) Client sends connection request, server replies, client requests page, server sends page.**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.1: Siklus Pembentukan Koneksi dan Interaksi HTTP/TCP.\n\n**Pembahasan Lengkap:**\nKetika browser meminta halaman web:\n1. Browser menginisiasi jabat tangan 3-arah TCP: mengirimkan segmen 'SYN' (*connection request*) ke server web.\n2. Server web merespons dengan segmen 'SYN-ACK' (*server replies*).\n3. Browser mengirimkan segmen 'ACK' (menyelesaikan handshake) yang dapat ditumpangi langsung dengan pesan permintaan dokumen: 'HTTP GET /index.html' (*client requests page*).\n4. Server web memproses permintaan dan mengirimkan pesan balasan: 'HTTP/1.1 200 OK' yang membawa isi berkas HTML (*server sends page*).\n\n**Poin Penting:** Alur komunikasi web: Handshake TCP (SYN $\to$ SYN-ACK $\to$ ACK) $\to$ HTTP Request $\to$ HTTP Response."
  },
  {
    "id": 185,
    "text": "The chapter discussed multiple protocols (HTTP, FTP, SMTP, DNS, P2P). What do all of them fundamentally define?",
    "options": [
      "File Structures",
      "Host IDs",
      "Message Formats and Rules of Exchange",
      "Security Policies",
      "Topology",
      "Encryption Schemes"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1.3 What Is a Protocol?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) Message Formats and Rules of Exchange**\n\n**Konsep Kunci:**\nKurose & Ross Bab 2: Hakikat Protokol Lapisan Aplikasi.\n\n**Pembahasan Lengkap:**\nTerlepas dari perbedaan fungsinya, semua protokol lapisan aplikasi (seperti HTTP, FTP, SMTP, DNS, dan BitTorrent) pada hakikatnya mendefinisikan hal yang sama:\n1. **Tipe dan Format Pesan:** Struktur field header, metode request, dan kode status response.\n2. **Sintaksis dan Semantik:** Arti dari setiap field data yang dipertukarkan.\n3. **Aturan Pertukaran Pesan (*Rules of Exchange*):** Kapan suatu pesan harus dikirim dan bagaimana entitas penerima harus merespons pesan tersebut.\n\n**Poin Penting:** Semua protokol jaringan pada dasarnya mendefinisikan format pesan dan aturan pertukaran pesan."
  },
  {
    "id": 186,
    "text": "TCP congestion control adjusts the sending rate dynamically. How does AIMD work?",
    "options": [
      "Doubles window size each RTT",
      "Resets to zero on timeout",
      "Sends duplicate ACKs after every loss",
      "Keeps window size constant",
      "Decreases additively and increases multiplicatively",
      "Increases window size by one and halves on loss"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.1 Classic TCP Congestion Control (AIMD)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) Increases window size by one and halves on loss**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.1: Algoritma AIMD (Additive-Increase, Multiplicative-Decrease).\n\n**Pembahasan Lengkap:**\nPrinsip kerja AIMD dalam kendali kemacetan TCP:\n- **Additive Increase (AI):** Selama tidak ada kehilangan paket (kondisi jaringan normal), ukuran jendela kemacetan 'cwnd' dinaikkan secara bertahap sebesar **$1\text{ MSS}$ untuk setiap RTT** (pertumbuhan linier).\n- **Multiplicative Decrease (MD):** Ketika terdeteksi adanya paket yang hilang (misal melalui 3 duplicate ACK), TCP segera **memotong ukuran 'cwnd' menjadi separuhnya ($cwnd = cwnd / 2$)**.\n\n**Poin Penting:** AIMD menaikkan jendela $+1\text{ MSS}$ per RTT dan memotongnya menjadi setengahnya saat terjadi packet loss."
  },
  {
    "id": 187,
    "text": "Why is caching so crucial in DNS operations?",
    "options": [
      "Increases Latency",
      "Reduces Redundancy",
      "Increases Complexity",
      "Increases Bandwidth",
      "Reduces Security",
      "Reduces Query Load and Latency"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.1 Services Provided by DNS",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (F) Reduces Query Load and Latency**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.2: Pentingnya Caching dalam Sistem DNS.\n\n**Pembahasan Lengkap:**\nDNS caching adalah fondasi penting yang menjaga kelangsungan Internet global:\n1. **Mereduksi Beban Kueri (*Reduces Query Load*):** Tanpa caching, setiap kali miliaran pengguna membuka situs web, kueri harus dikirimkan langsung ke 13 server root DNS dan server TLD, yang akan menyebabkan kelebihan beban (*server crash*). Caching menyerap lebih dari $99%$ kueri DNS di tingkat lokal.\n2. **Memangkas Latensi (*Reduces Latency*):** Resolusi nama domain diselesaikan dalam hitungan mikrodetik langsung dari memori router/resolver lokal tanpa perlu menunggu RTT internet ke server internasional.\n\n**Poin Penting:** DNS caching memangkas beban lalu lintas kueri pada server root/TLD dan mempercepat waktu resolusi nama."
  },
  {
    "id": 188,
    "text": "Sender sends Seg1 (Seq=1000, 1000 bytes) and Seg2 (Seq=2000, 1000 bytes). Seg2 arrives, Seg1 is delayed. What ACK does the receiver send?",
    "options": [
      "1000",
      "3000",
      "2500",
      "2000",
      "4000",
      "1500"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) 1000**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: TCP Cumulative ACK saat Terjadi Keterlambatan Paket.\n\n**Pembahasan Lengkap:**\n- Pengirim mengirimkan Segmen 1 (Seq=1000, panjang 1000 byte) dan Segmen 2 (Seq=2000, panjang 1000 byte).\n- Segmen 2 tiba di penerima lebih dulu, sedangkan Segmen 1 tertunda di jaringan.\n- Penerima melihat bahwa byte mulai dari nomor 1000 belum pernah ia terima (terdapat celah data yang kosong di awal aliran).\n- Sesuai aturan ACK kumulatif TCP, penerima hanya boleh mengonfirmasi byte yang diterima secara terurut. Karena byte 1000 belum tiba, penerima mengirimkan nomor ACK yang meminta byte yang hilang tersebut:\n  $$\text{ACK} = 1000$$\n\n**Poin Penting:** Segmen 1 belum tiba $implies$ Penerima mengirimkan ACK = 1000 meminta byte nomor 1000."
  },
  {
    "id": 189,
    "text": "In peer-to-peer applications, as more peers join, the system can scale efficiently. Which characteristic supports this?",
    "options": [
      "Fixed Capacity",
      "Static Connections",
      "Dedicated Servers",
      "Distributed Resources",
      "Star Topology",
      "Centralized Directory"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.5 Peer-to-Peer File Distribution",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) Distributed Resources**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.5: P2P Scalability and Distributed Resources.\n\n**Pembahasan Lengkap:**\nKarakteristik arsitektural yang memungkinkan aplikasi P2P berskala sangat masif dan efisien adalah **Distributed Resources (Sumber Daya Terdistribusi)**:\n- Pada P2P, beban komputasi, kapasitas penyimpanan (*storage*), dan bandwidth unggah dibagi rata ke ribuan atau jutaan perangkat pengguna (*peers*) di tepi jaringan, bukan ditanggung oleh kluster server pusat.\n- Semakin banyak pengguna yang bergabung, semakin banyak pula sumber daya yang ditambahkan ke jaringan.\n\n**Poin Penting:** Arsitektur P2P memanfaatkan sumber daya terdistribusi di seluruh node pengguna."
  },
  {
    "id": 190,
    "text": "CDN providers replicate content across different servers worldwide. What is the main benefit for end users?",
    "options": [
      "Higher Costs",
      "Faster Access",
      "Stronger Encryption",
      "Better APIs",
      "Lower Bandwidth Use",
      "More Reliability"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.6.3 Content Distribution Networks (CDNs)",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) Faster Access**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.6.3: CDN End-User Benefits.\n\n**Pembahasan Lengkap:**\nBagi pengguna akhir (*end users*), manfaat paling nyata dari replikasi konten oleh CDN di seluruh dunia adalah **Akses yang Jauh Lebih Cepat (*Faster Access*)**:\n- Karena konten (seperti video streaming 4K, gambar beresolusi tinggi, atau installer software) di-cache pada server CDN lokal di kota yang sama atau ISP yang sama, data dapat mulai diputar secara instan dengan *buffering* minimal dan latensi mendekati nol.\n\n**Poin Penting:** Manfaat utama CDN bagi pengguna adalah kecepatan akses yang jauh lebih tinggi dan latensi rendah."
  },
  {
    "id": 191,
    "text": "Some multimedia applications require minimum throughput to maintain acceptable quality, while others can tolerate variability. What type of application most critically needs throughput guarantees?",
    "options": [
      "Chat Messaging",
      "Video Streaming",
      "Email",
      "Web Browsing",
      "DNS Query",
      "File Transfer"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.3 Transport Services Available to Applications",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) Video Streaming**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.3 & 2.6: QoS Requirements for Network Applications.\n\n**Pembahasan Lengkap:**\nAplikasi multimedia seperti **Video Streaming** (dan VoIP/video conference) sangat membutuhkan **Jaminan Throughput Minimum (*Throughput Guarantees*)**:\n- Video streaming harus menerima data pada laju yang setidaknya sama dengan laju bitrate encoding video (misal 5–15 Mbps untuk video HD/4K) agar buffer pemutar video tidak kosong.\n- Jika throughput anjlok di bawah batas minimum, video akan macet (*stutter/buffering*).\n- Sebaliknya, aplikasi seperti Email, Web Browsing, dan File Transfer bersifat *elastic* (dapat mentolerir variasi throughput besar tanpa gagal).\n\n**Poin Penting:** Video streaming memerlukan jaminan throughput minimum agar pemutaran tidak mengalami *freezing/buffering*."
  },
  {
    "id": 192,
    "text": "In SR, the sender maintains a timer for each unacknowledged packet. Why is this necessary?",
    "options": [
      "To keep buffers synchronized",
      "To handle individual retransmissions",
      "To discard out-of-order packets",
      "To support cumulative acknowledgments",
      "To reduce sequence number size",
      "To detect congestion early"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.4 Selective Repeat (SR)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) To handle individual retransmissions**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.4: Selective Repeat Timer Mechanism.\n\n**Pembahasan Lengkap:**\nPada protokol Selective Repeat (SR), setiap paket data yang berhasil diterima diakui secara individual oleh penerima:\n- Agar pengirim tahu kapan harus mengirim ulang suatu paket tertentu yang hilang tanpa harus mengirim ulang seluruh jendela, **pengirim harus memelihara timer logis independen untuk setiap paket individual yang belum di-ACK**.\n- Jika timer untuk paket nomor $k$ habis (*timeout*), pengirim hanya mengirim ulang paket $k$ tersebut dan mereset timer-nya, tanpa mengganggu paket-paket lain di dalam jendela yang masih menunggu ACK.\n\n**Poin Penting:** SR memerlukan timer per-paket untuk melacak dan mengirim ulang paket-paket individual secara terpisah."
  },
  {
    "id": 193,
    "text": "The Internet relies on a variety of physical media. Which of the following is an example of guided media?",
    "options": [
      "Infrared beams",
      "Radio transmission",
      "Atmospheric laser links",
      "Wi‑Fi channels",
      "Satellite microwaves",
      "Twisted-pair copper wire"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.2.2 Physical Media",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) Twisted-pair copper wire**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.2.2: Physical Media — Guided vs Unguided Media.\n\n**Pembahasan Lengkap:**\nMedia transmisi fisik dikelompokkan menjadi dua kategori:\n1. **Guided Media (Media Terpandu):** Gelombang sinyal diarahkan dan dirambatkan di dalam jalur fisik yang solid. Contoh: Kabel tembaga berpasangan (*Twisted-Pair copper wire*, seperti Cat 5e/Cat 6), Kabel Koaksial, dan Kabel Serat Optik (*Fiber-optic cable*).\n2. **Unguided Media (Media Tak Terpandu):** Gelombang sinyal elektromagnetik dipancarkan secara bebas melalui atmosfer bumi atau ruang hampa tanpa batas fisik konduktor. Contoh: Wi-Fi, radio seluler, gelombang mikro, dan tautan satelit.\n\n**Poin Penting:** Kabel tembaga twisted-pair adalah contoh representatif dari media terpandu (*guided media*)."
  },
  {
    "id": 194,
    "text": "Different households use DSL, cable, FTTH, or satellite. What common feature do these technologies provide?",
    "options": [
      "They connect end systems to the edge of an ISP.",
      "They replace the need for routers.",
      "They eliminate the use of IP.",
      "They provide mobile ad hoc networking.",
      "They act as global Internet backbones.",
      "They only support upstream communication."
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.2.1 Access Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (A) They connect end systems to the edge of an ISP.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.2.1: Access Networks Definition.\n\n**Pembahasan Lengkap:**\nMeskipun menggunakan media fisik dan kecepatan yang berbeda-beda, teknologi akses seperti DSL, Kabel koaksial HFC, FTTH (Fiber to the Home), dan satelit memiliki fungsi arsitektural yang sama persis:\n- Semuanya berfungsi sebagai **Access Networks (Jaringan Akses)**, yaitu jaringan fisik yang menghubungkan perangkat pengguna akhir (*end systems* di rumah/kantor) ke simpul router pertama milik penyedia layanan Internet (**Edge Router milik ISP**).\n\n**Poin Penting:** Semua teknologi jaringan akses berfungsi menghubungkan host pengguna ke router tepi (*edge router*) ISP."
  },
  {
    "id": 195,
    "text": "Assume a 5 Mbps access link, downloading a 5 MB object. Without caching, what is the throughput observed?",
    "options": [
      "4 Mbps",
      "3 Mbps",
      "5 Mbps",
      "6 Mbps",
      "2 Mbps",
      "10 Mbps"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) 5 Mbps**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.4: Throughput in a Single Access Link.\n\n**Pembahasan Lengkap:**\n- Diberikan kapasitas link akses: $5\text{ Mbps}$.\n- Mengunduh objek berukuran $5\text{ MB}$.\n- Tanpa adanya web cache, seluruh objek harus diunduh melewati link akses tersebut dari server web eksternal.\n- Throughput maksimum yang dapat diamati oleh klien sepenuhnya dibatasi oleh kapasitas tautan aksesnya sendiri, yaitu sebesar **5 Mbps** (asumsi kapasitas server dan backbone lebih besar).\n\n**Poin Penting:** Throughput transfer dibatasi oleh kapasitas link akses yaitu $5\text{ Mbps}$."
  },
  {
    "id": 196,
    "text": "Consider a client whose access link has 2 Mbps bandwidth with an average RTT of 200 ms. The client requested 1 MB object. The object is cached locally (in the client) with access delay = 20 ms. What is the approximate response time for a cache hit?",
    "options": [
      "0.5 s",
      "4 s",
      "5 s",
      "20 ms",
      "200 ms",
      "2 s"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) 20 ms**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: Cache Hit Response Time.\n\n**Pembahasan Lengkap:**\nKetika terjadi peristiwa **Cache Hit** di mana objek web yang diminta sudah tersimpan di dalam cache lokal klien sendiri:\n- Permintaan tidak perlu dikirimkan melintasi jaringan internet publik (tidak ada RTT internet) dan tidak perlu melintasi link akses keluar (tidak ada delay transmisi link eksternal).\n- Waktu respons yang dirasakan oleh klien murni hanyalah waktu akses membaca objek dari media penyimpanan cache lokal, yang pada soal diketahui sebesar **20 ms** (0.02 s).\n\n**Poin Penting:** Saat cache hit lokal, waktu respons murni hanya penundaan akses memori lokal yaitu $20\text{ ms}$."
  },
  {
    "id": 197,
    "text": "Unlike client-server, some applications distribute both requesting and providing functions across nodes, reducing reliance on centralized servers. What is this model called?",
    "options": [
      "Hierarchical",
      "Multicast",
      "Hybrid C/S P2P",
      "Peer-to-Peer",
      "Cloud Computing",
      "Distributed Switching"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.5 Peer-to-Peer File Distribution",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) Peer-to-Peer**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.1: Peer-to-Peer Architecture.\n\n**Pembahasan Lengkap:**\nModel arsitektur aplikasi jaringan yang mendistribusikan peran penyedia layanan (*server*) dan peminta layanan (*client*) ke setiap simpul peserta secara setara adalah **Peer-to-Peer (P2P)**:\n- Setiap simpul (peer) dapat meminta berkas dari peer lain sekaligus menyajikan dan mengunggah berkas kepada peer lain tanpa ketergantungan mutlak pada server pusat yang selalu aktif.\n\n**Poin Penting:** Model P2P menggabungkan peran klien dan server pada setiap simpul peserta."
  },
  {
    "id": 198,
    "text": "When traffic intensity approaches 1, what happens to queueing delay?",
    "options": [
      "Decreases",
      "Equals processing delay",
      "Remains constant",
      "Drops to zero",
      "Equals propagation delay",
      "Approaches infinity"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.2 Queuing Delay and Packet Loss",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) Approaches infinity**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.2: Queuing Delay Behavior as Traffic Intensity ($I \to 1$).\n\n**Pembahasan Lengkap:**\nIntensitas lalu lintas didefinisikan sebagai $I = \frac{L \times a}{R}$:\n- Berdasarkan formula antrian $M/M/1$, rata-rata penundaan antrian dinyatakan sebagai:\n  $$d_{queue} approx \frac{I}{1 - I} \times \frac{L}{R}$$\n- Ketika laju kedatangan paket mendekati kapasitas pelayanan link ($I \to 1$), penyebut $(1 - I)$ mendekati nol.\n- Akibatnya, panjang antrian meledak dan penundaan antrian **mendekati tak terhingga (*approaches infinity*)**, yang secara fisik berujung pada buffer overflow dan pembuangan paket secara masif.\n\n**Poin Penting:** Saat intensitas lalu lintas mendekati 1, penundaan antrian membengkak menuju tak terhingga."
  },
  {
    "id": 199,
    "text": "When the receiver\\u2019s buffer is full, rwnd becomes zero. What happens at the sender side?",
    "options": [
      "The sender reduces segment size only",
      "The sender discards data",
      "The connection is terminated",
      "The sender switches to UDP",
      "The sender continues sending at full rate",
      "The sender stops transmitting until rwnd > 0"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.5 Flow Control",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) The sender stops transmitting until rwnd > 0**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.5: TCP Flow Control Mechanism ('rwnd = 0').\n\n**Pembahasan Lengkap:**\nKetika aplikasi di sisi penerima lambat membaca data dari buffer socket-nya, buffer penerima akan terisi penuh:\n- Penerima mengiklankan nilai 'rwnd = 0' pada header segmen ACK yang dikirim ke pengirim.\n- Untuk mencegah buffer penerima meluap (*overflow*), pengirim TCP **segera menghentikan transmisi data baru** sampai menerima segmen baru dengan nilai 'rwnd > 0'.\n- (Pengirim TCP secara periodik hanya diperbolehkan mengirim segmen penyelidik 1-byte (*probe segments*) untuk memicu penerima mengirimkan ACK pembaruan nilai 'rwnd').\n\n**Poin Penting:** Ketika 'rwnd = 0', pengirim TCP berhenti mentransmisikan data untuk mencegah buffer penerima meluap."
  },
  {
    "id": 200,
    "text": "Circuit switching dedicates resources for a call, while packet switching shares resources among many users. What is the main advantage of packet switching?",
    "options": [
      "It guarantees zero delay.",
      "It dedicates one circuit per user permanently.",
      "It requires no buffering.",
      "It eliminates the concept of protocols.",
      "It avoids the need for routers.",
      "It allows more efficient use of network resources through statistical multiplexing."
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.3.1 Packet Switching",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) It allows more efficient use of network resources through statistical multiplexing.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.3.1 & 1.3.2: Packet Switching vs Circuit Switching (Statistical Multiplexing).\n\n**Pembahasan Lengkap:**\nKeunggulan fundamental dari packet switching dibandingkan circuit switching adalah **Efisiensi Penggunaan Sumber Daya melalui Statistical Multiplexing**:\n- Circuit switching mendedikasikan kapasitas saluran tetap untuk setiap panggilan telepon terlepas dari apakah pengguna sedang berbicara atau diam (memboroskan kapasitas saat periode senyap / *idle*).\n- Packet switching membagi data menjadi paket-paket dan mengalokasikan kapasitas link secara dinamis sesuai kebutuhan (*on demand*). Kapasitas link yang tidak digunakan oleh satu pengguna dapat langsung dimanfaatkan oleh paket pengguna lain, memungkinkan jaringan menampung jumlah pengguna aktif yang jauh lebih banyak pada infrastruktur yang sama.\n\n**Poin Penting:** Packet switching memaksimalkan efisiensi jaringan melalui statistical multiplexing dinamis."
  },
  {
    "id": 201,
    "text": "FTTH (Fiber to the Home) provides very high data rates. Which technology is typically employed in FTTH architectures to distribute signals to multiple homes?",
    "options": [
      "Circuit switching",
      "Bluetooth mesh",
      "Coaxial splitters only",
      "Satellite relays",
      "Microwave towers",
      "Passive optical networks (PONs)"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.2.1 Access Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) Passive optical networks (PONs)**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.2.1: FTTH Architectures (PON vs AON).\n\n**Pembahasan Lengkap:**\nDalam arsitektur Fiber to the Home (FTTH), teknologi yang paling dominan digunakan untuk mendistribusikan sinyal optik dari kantor pusat (Central Office) ke ratusan rumah pelanggan adalah **PON (Passive Optical Network)**:\n- PON menggunakan splitter optik pasif tanpa komponen elektronik aktif yang membutuhkan daya listrik di sepanjang jalan.\n- Satu kabel serat optik dari *Optical Line Terminator* (OLT) dipecah oleh *optical splitter* pasif untuk melayani puluhan *Optical Network Terminator* (ONT) di rumah-rumah pengguna.\n\n**Poin Penting:** FTTH modern menggunakan Passive Optical Networks (PONs) untuk distribusi serat optik ke perumahan."
  },
  {
    "id": 202,
    "text": "ISPs not only connect households but also interconnect among themselves at higher tiers. Which statement is correct about this arrangement?",
    "options": [
      "Each ISP is fully independent and never connects to others.",
      "Each ISP must use unique proprietary protocols.",
      "ISPs rely only on satellite interconnection.",
      "Lower-tier ISPs do not need upper-tier ISPs.",
      "ISPs are limited to national coverage.",
      "Upper-tier ISPs form global backbones with fiber-optic links."
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.3.3 A Network of Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) Upper-tier ISPs form global backbones with fiber-optic links.**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.3.3: Network of Networks — Tier-1 ISPs and Global Backbones.\n\n**Pembahasan Lengkap:**\nStruktur hierarki Internet global:\n- ISP tingkat atas (**Tier-1 ISPs**, seperti AT&T, Lumen, NTT) membangun dan mengoperasikan **jaringan tulang punggung global (*global backbone networks*)** yang terdiri dari kabel serat optik darat dan bawah laut berkapasitas sangat tinggi.\n- Tier-1 ISP saling terhubung satu sama lain secara penuh (*fully meshed*) melalui perjanjian peering gratis (*settlement-free peering*), membentuk inti konektivitas yang menjangkau seluruh benua.\n\n**Poin Penting:** ISP Tier-1 membentuk jaringan backbone global berbasis serat optik yang melintasi dunia."
  },
  {
    "id": 203,
    "text": "TCP uses a receive window (rwnd) for flow control. What is the purpose of rwnd?",
    "options": [
      "To control congestion in the network",
      "To ensure fair port usage",
      "To limit the sender’s rate to match the receiver’s buffer capacity",
      "To reduce RTT variance",
      "To manage retransmission timers",
      "To allocate bandwidth among flows"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.5 Flow Control",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) To limit the sender’s rate to match the receiver’s buffer capacity**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.5: Tujuan Mekanisme Flow Control ('rwnd').\n\n**Pembahasan Lengkap:**\nTujuan utama dari field Receive Window ('rwnd') dalam kendali aliran data TCP adalah:\n- **Mencocokkan laju transmisi pengirim dengan laju baca aplikasi di sisi penerima (*speed matching service*)**.\n- Jika pengirim memancarkan data lebih cepat daripada kemampuan proses penerima membaca dari socket buffer, 'rwnd' akan mengecil, memaksa pengirim memperlambat transmisi agar buffer penerima tidak mengalami luapan (*buffer overflow*).\n\n**Poin Penting:** Flow control ('rwnd') membatasi kecepatan pengirim agar tidak membanjiri buffer penerima."
  },
  {
    "id": 204,
    "text": "FTP can transfer data in two modes: one where the server initiates the data connection and another where the client does. What are these modes?",
    "options": [
      "Passive/Active",
      "Local/Remote",
      "Control/Data",
      "Direct/Indirect",
      "Sync/Async",
      "Push/Pull"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.6 Network Applications: FTP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (A) Passive/Active**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.6: FTP Modes of Operation (Active vs Passive).\n\n**Pembahasan Lengkap:**\nFTP mendukung dua mode pembentukan koneksi data:\n1. **Active Mode:** Klien membuka port acak dan mengirimkan perintah 'PORT' ke server, kemudian **server secara proaktif menginisiasi koneksi TCP data** dari port 20 miliknya menuju ke port klien tersebut.\n2. **Passive Mode (PASV):** Klien mengirimkan perintah 'PASV', server merespons dengan port acak di server, dan **klien yang menginisiasi koneksi TCP data** menuju server (sangat penting jika klien berada di belakang firewall/NAT).\n\n**Poin Penting:** Dua mode koneksi data FTP: Mode Aktif (server menginisiasi) dan Mode Pasif (klien menginisiasi)."
  },
  {
    "id": 205,
    "text": "DNS queries are typically lightweight and do not require reliability mechanisms of TCP. Which transport protocol does DNS mainly use?",
    "options": [
      "ARP",
      "TCP",
      "UDP",
      "IP",
      "ICMP",
      "SCTP"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.1 Services Provided by DNS",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) UDP**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4: DNS Transport Protocol.\n\n**Pembahasan Lengkap:**\nDNS menggunakan protokol transport **UDP (User Datagram Protocol)** pada port 53 untuk mayoritas transaksi kueri dan resolusi nama domain:\n- UDP dipilih karena tidak memerlukan pembentukan sesi koneksi (tanpa penundaan 3-way handshake) dan tidak memelihara status koneksi di server DNS yang menangani volume kueri sangat besar.\n\n**Poin Penting:** Kueri DNS standar menggunakan UDP pada port 53."
  },
  {
    "id": 206,
    "text": "In Go-back-N, ACKs are cumulative. What does this mean?",
    "options": [
      "One ACK acknowledges all packets up to a certain sequence number",
      "ACKs carry no sequence numbers",
      "Duplicate ACKs are ignored",
      "One ACK acknowledges only one packet",
      "Each ACK is encrypted",
      "Each packet must be individually acknowledged"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.3 Go-Back-N (GBN)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) One ACK acknowledges all packets up to a certain sequence number**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.3: Definisi Cumulative Acknowledgment pada GBN.\n\n**Pembahasan Lengkap:**\nPada protokol Go-Back-N, nomor pengakuan bersifat **Kumulatif (*Cumulative ACK*)**:\n- Sebuah paket ACK dengan nomor urut $n$ mengonfirmasi bahwa **semua paket dengan nomor urut hingga $n$ telah berhasil diterima dengan benar dan berurutan** oleh pihak penerima.\n- Pengirim dapat langsung memajukan tepi jendelanya hingga melampaui paket $n$, meskipun ACK untuk paket-paket sebelum $n$ sempat hilang di jalan.\n\n**Poin Penting:** Cumulative ACK mengonfirmasi penerimaan sukses seluruh paket hingga nomor urut tertentu."
  },
  {
    "id": 207,
    "text": "Sender transmits three segments: Seg1 Seq=1000, 1000 bytes; Seg2 Seq=2000, 1000 bytes; Seg3 Seq=3000, 1000 bytes. Seg1 is received, Seg2 is lost, Seg3 arrives. What ACK does the receiver repeatedly send?",
    "options": [
      "2000",
      "6000",
      "4000",
      "1000",
      "5000",
      "3000"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) 2000**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: TCP Cumulative ACK on Missing Segment.\n\n**Pembahasan Lengkap:**\n- Segmen 1 (Seq=1000, 1000 byte $\to$ byte 1000–1999) diterima dengan sukses.\n- Segmen 2 (Seq=2000, 1000 byte $\to$ byte 2000–2999) **hilang di jaringan**.\n- Segmen 3 (Seq=3000, 1000 byte) tiba di penerima.\nPenerima mendeteksi bahwa byte mulai dari nomor 2000 belum pernah ia terima.\n- Sesuai prinsip ACK kumulatif TCP, penerima menolak mengakui Segmen 3 dan secara konsisten **mengirimkan ACK duplikat berulang dengan nilai 2000**, memberi tahu pengirim bahwa byte 2000 adalah data pertama yang dinanti.\n\n**Poin Penting:** Segmen 2 hilang $implies$ Penerima berulang kali mengirimkan ACK = 2000."
  },
  {
    "id": 208,
    "text": "Without caching, each user downloads 1 MB per request. With a cache hit rate of 50%, how much traffic is reduced per 1000 requests?",
    "options": [
      "250 MB",
      "750 MB",
      "500 MB",
      "1000 MB",
      "400 MB",
      "800 MB"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) 500 MB**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: Reduksi Lalu Lintas dengan Web Caching.\n\n**Pembahasan Lengkap:**\nDiketahui data soal:\n- Ukuran unduhan per permintaan: $1\text{ MB}$.\n- Total permintaan pengguna: $1.000\text{ permintaan}$.\n- Total lalu lintas tanpa cache: $1.000 \times 1\text{ MB} = 1.000\text{ MB}$.\n- Rasio temuan cache (*cache hit rate*): $50% = 0.50$.\n\nPerhitungan Pengurangan Beban Jaringan:\n- Sebanyak $50%$ dari permintaan tersebut dilayani langsung oleh web cache lokal, sehingga tidak perlu diunduh dari jaringan eksternal:\n  $$\text{Lalu Lintas yang Diredusir} = \text{Hit Rate} \times \text{Total Permintaan} \times \text{Ukuran Objek}$$\n  $$\text{Lalu Lintas yang Diredusir} = 0.50 \times 1.000 \times 1\text{ MB} = 500\text{ MB}$$\nTraffic yang dihemat dari link luar adalah **500 MB**.\n\n**Poin Penting:** $0.50 \times 1.000\text{ req} \times 1\text{ MB} = 500\text{ MB}$ traffic eksternal berhasil dipangkas."
  },
  {
    "id": 209,
    "text": "A Web server listening on port 80 may have multiple concurrent client connections. TCP uses all four values (source IP, source port, destination IP, destination port) to distinguish them. What would happen if two clients use the same source port number but have different IP addresses?",
    "options": [
      "The server delivers them to the same socket",
      "The connections are merged into one",
      "One client is disconnected",
      "The server rejects both",
      "The server uses the IP addresses to differentiate them",
      "The server cannot distinguish them"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.2 Multiplexing and Demultiplexing",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) The server uses the IP addresses to differentiate them**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.2: 4-Tuple Uniqueness in TCP Demultiplexing.\n\n**Pembahasan Lengkap:**\nSistem operasi membedakan koneksi TCP menggunakan 4-elemen (*4-tuple*):\n$$\text{4-tuple} = (\text{Source IP}, \text{Source Port}, \text{Dest IP}, \text{Dest Port})$$\n- Jika Klien 1 dan Klien 2 kebetulan menggunakan nomor port sumber yang sama (misalnya port 50230) dan menghubungi port 80 pada server yang sama, **alamat IP sumber mereka berbeda** ($\text{Source IP}_1 \ne \text{Source IP}_2$).\n- Perbedaan alamat IP sumber ini sudah cukup untuk membuat 4-tuple dari kedua koneksi tersebut bersifat unik secara global, sehingga server web dapat memisahkan dan melayani kedua koneksi pada socket yang berbeda tanpa kebingungan.\n\n**Poin Penting:** Perbedaan alamat IP sumber membuat 4-tuple tetap unik meskipun nomor port sumbernya identik."
  },
  {
    "id": 210,
    "text": "UDP provides minimal services while TCP provides reliable, connection-oriented service. Which of the following is NOT true about UDP?",
    "options": [
      "It uses port numbers",
      "It has low overhead",
      "It is faster for real-time apps",
      "It provides error detection",
      "It guarantees reliability",
      "It is connectionless"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.3 Connectionless Transport: UDP",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) It guarantees reliability**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.3: Karakteristik Protokol UDP.\n\n**Pembahasan Lengkap:**\nPernyataan yang **SALAH** mengenai UDP adalah bahwa *\"UDP menjamin keandalan (*guarantees reliability*)\"*:\n- UDP secara sengaja dirancang sebagai protokol *best-effort* yang tidak andal (*unreliable*). UDP tidak memberikan jaminan apakah paket akan sampai di tujuan, tidak menjamin urutan data, dan tidak melakukan pengiriman ulang jika terjadi kehilangan paket.\n- Fitur keandalan penuh merupakan tanggung jawab protokol TCP.\n\n**Poin Penting:** UDP tidak menjamin keandalan pengiriman data."
  },
  {
    "id": 211,
    "text": "After slow start, TCP enters a linear growth phase. How does congestion avoidance increase cwnd?",
    "options": [
      "One MSS per RTT",
      "One byte per RTT",
      "Double every RTT",
      "By checksum fields",
      "Random increments",
      "Exponential increments"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.1 Classic TCP Congestion Control (AIMD)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) One MSS per RTT**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.1: TCP Congestion Avoidance Phase (Additive Increase).\n\n**Pembahasan Lengkap:**\nSetelah jendela kemacetan 'cwnd' melampaui nilai ambang batas 'ssthresh', TCP keluar dari fase eksponensial (Slow Start) dan memasuki fase **Congestion Avoidance**:\n- Pada fase ini, TCP berhati-hati dalam menaikkan kapasitas pengiriman guna menghindari lonjakan kemacetan mendadak.\n- Jendela 'cwnd' dinaikkan secara linier sebesar **1 MSS untuk setiap RTT** (diimplementasikan dengan menambah $cwnd leftarrow cwnd + \text{MSS} \times (\text{MSS} / cwnd)$ untuk setiap ACK yang masuk).\n\n**Poin Penting:** Fase congestion avoidance menaikkan ukuran jendela secara linier sebesar $1\text{ MSS}$ per RTT."
  },
  {
    "id": 212,
    "text": "While SMTP is used for sending mail, different protocols are used for retrieving messages from a server. Which protocol allows downloading but not synchronizing messages across devices?",
    "options": [
      "FTP",
      "SMTP",
      "RPC",
      "HTTP",
      "POP3",
      "IMAP"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.3.3 Mail Access Protocols (POP3, IMAP)",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) POP3**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.3.3: Mail Access Protocols — POP3 vs IMAP.\n\n**Pembahasan Lengkap:**\nProtokol akses email yang memungkinkan pengguna mengunduh pesan email ke klien lokal tetapi **tidak mendukung sinkronisasi status folder atau pesan di berbagai perangkat** adalah **POP3 (Post Office Protocol version 3)**.\n\n**Poin Penting:** POP3 mengunduh email ke perangkat lokal tanpa kemampuan sinkronisasi lintas perangkat."
  },
  {
    "id": 213,
    "text": "The three-way handshake prevents \\u201chalf-open\\u201d connections. What problem arises without it?",
    "options": [
      "Multiple ACKs would be sent",
      "Window sizes cannot be synchronized",
      "Congestion control cannot start",
      "Sequence numbers may repeat incorrectly",
      "Checksums cannot be verified",
      "One host may think a connection exists while the other does not"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.6 TCP Connection Management",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) One host may think a connection exists while the other does not**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.6: TCP 3-Way Handshake Purpose (Preventing Half-Open Connections).\n\n**Pembahasan Lengkap:**\nJabat tangan 3-arah (*three-way handshake*: SYN $\to$ SYN-ACK $\to$ ACK) mutlak diperlukan untuk mencegah masalah koneksi separuh terbuka (**Half-Open Connections**):\n- Jika hanya menggunakan 2 langkah (misal klien kirim SYN, server kirim ACK), paket SYN lama yang tertunda di jaringan dapat tiba-tiba sampai di server lama setelah klien mengabaikannya. Server akan mengira koneksi baru telah aktif dan mengalokasikan memori buffer, padahal klien tidak pernah merasa membuka koneksi tersebut.\n- Langkah ke-3 (ACK dari klien) memastikan konfirmasi dua arah bahwa kedua belah pihak secara sadar menyetujui koneksi tersebut.\n\n**Poin Penting:** Handshake 3-arah mencegah koneksi separuh terbuka (*half-open connection*) akibat paket duplikat lama."
  },
  {
    "id": 214,
    "text": "Applications often require specific guarantees from the transport layer, such as reliability, timing, and throughput. Which service ensures that data is delivered without errors, loss, or duplication?",
    "options": [
      "Reliable Data Transfer",
      "Congestion Control",
      "Synchronization",
      "Security",
      "Flow Control",
      "Throughput Guarantee"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.1.3 Transport Services Available to Applications",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (A) Reliable Data Transfer**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.1.3 & 3.4: Layanan Transport Layer — Reliable Data Transfer.\n\n**Pembahasan Lengkap:**\nLayanan transport yang menjamin data yang dikirimkan oleh proses aplikasi akan tiba di proses tujuan secara utuh tanpa galat bit, tanpa ada byte yang hilang, dan tanpa duplikasi byte yang teracak adalah **Reliable Data Transfer (RDT)**, yang diwujudkan oleh protokol TCP di Internet.\n\n**Poin Penting:** Reliable Data Transfer menjamin pengiriman data bebas error, bebas kehilangan, dan sesuai urutan."
  },
  {
    "id": 215,
    "text": "TCP sets timeout as EstimatedRTT plus a safety margin. What factor accounts for variability in RTT?",
    "options": [
      "Congestion window",
      "DevRTT (deviation of RTT)",
      "Sequence number",
      "Packet length",
      "Window size",
      "Port number"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.3 Round-Trip Time Estimation and Timeout",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) DevRTT (deviation of RTT)**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.3: Perhitungan DevRTT pada TCP Timeout.\n\n**Pembahasan Lengkap:**\nUntuk memperhitungkan variabilitas atau fluktuasi penundaan RTT di jaringan, algoritma TCP menghitung deviasi rata-rata RTT yang disebut **DevRTT**:\n$$\text{DevRTT} = (1 - \beta) \times \text{DevRTT} + \beta \times |\text{SampleRTT} - \text{EstimatedRTT}|$$\n(di mana nilai standar $\beta = 0.25$).\nNilai margin pengaman $4 \times \text{DevRTT}$ kemudian ditambahkan ke EstimatedRTT untuk menentukan batas waktu timeout:\n$$\text{TimeoutInterval} = \text{EstimatedRTT} + 4 \times \text{DevRTT}$$\n\n**Poin Penting:** DevRTT mengukur variabilitas/deviasi fluktuasi RTT untuk menyetel margin pengaman timeout."
  },
  {
    "id": 216,
    "text": "TCP throughput can be approximated as a function of loss rate and RTT. Which of the following affects TCP throughput directly?",
    "options": [
      "RTT and packet loss probability",
      "Sequence number wraparound",
      "IP addressing",
      "Port numbers",
      "Buffer allocation",
      "Header length"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.3 Fairness",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) RTT and packet loss probability**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.1: Model Matematika Throughput Makroskopis TCP.\n\n**Pembahasan Lengkap:**\nThroughput rata-rata TCP pada kondisi tunak (*steady-state*) dapat dimodelkan secara matematis melalui formula Mathis et al.:\n$$\text{Throughput} approx \frac{1.22 \times \text{MSS}}{\text{RTT} \times sqrt{p}}$$\nDi mana:\n- $\text{RTT}$ = Round-Trip Time.\n- $p$ = Probabilitas kehilangan paket (*packet loss probability*).\nSemakin besar RTT atau semakin tinggi tingkat kehilangan paket ($p$), semakin kecil throughput yang dapat dicapai oleh aliran TCP.\n\n**Poin Penting:** Faktor utama yang memengaruhi throughput TCP secara langsung adalah RTT dan tingkat packet loss."
  },
  {
    "id": 217,
    "text": "When the receiver advertises small window sizes, TCP efficiency drops. What technique helps avoid this issue?",
    "options": [
      "Switch to Go-back-N",
      "Always advertise zero window",
      "Disable cumulative ACKs",
      "Reset sequence numbers",
      "Use Nagle’s algorithm and delayed ACKs",
      "Increase header length"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.5 Flow Control",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (E) Use Nagle’s algorithm and delayed ACKs**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.5: Silly Window Syndrome & Nagle's Algorithm.\n\n**Pembahasan Lengkap:**\nKetika aplikasi penerima membaca data byte-per-byte atau mengiklankan jendela buffer yang sangat kecil, timbul fenomena *Silly Window Syndrome* di mana segmen TCP dikirim dengan muatan hanya 1 byte data tetapi membawa 40 byte header TCP/IP, memboroskan efisiensi jaringan.\n- Teknik untuk mengatasi inefisiensi ini adalah kombinasi dari:\n  1. **Algoritma Nagle:** Pengirim menahan pengiriman paket kecil sampai terkumpul data sebesar 1 MSS atau sampai ACK sebelumnya tiba.\n  2. **Delayed ACKs / Clark's Solution:** Penerima menunda pengiriman ACK atau pembaruan jendela sampai buffer memiliki ruang kosong yang signifikan (minimal 1 MSS atau separuh kapasitas buffer).\n\n**Poin Penting:** Algoritma Nagle dan Delayed ACK mencegah inefisiensi transmisi jendela kecil (*Silly Window Syndrome*)."
  },
  {
    "id": 218,
    "text": "Even though the postal service does not guarantee maximum delay, Ann and Bill cannot provide such guarantees either. Similarly, if the network layer cannot ensure bandwidth or delay guarantees, neither can the transport layer. What does this limitation illustrate?",
    "options": [
      "Reliability depends only on physical medium",
      "Lower layers rely entirely on the application layer",
      "Services at higher layers are constrained by those of lower layers",
      "Congestion control is independent of the network",
      "The transport layer is more powerful than the network layer",
      "TCP always guarantees bandwidth regardless of IP"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.1.1 Relationship Between Transport and Network Layers",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) Services at higher layers are constrained by those of lower layers**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.1.1: Batasan Layanan Antar-Lapisan Protokol Stack.\n\n**Pembahasan Lengkap:**\nPrinsip fundamental arsitektur berlapis:\n- Suatu lapisan protokol tingkat atas hanya dapat mengandalkan dan memanfaatkan layanan yang disediakan oleh lapisan di bawahnya.\n- Jika Network Layer (IP) hanya menyediakan layanan pengiriman *best-effort* tanpa jaminan batas waktu tunda (*no delay bounds*) dan tanpa alokasi bandwidth minimum (*no bandwidth guarantees*), maka Transport Layer (TCP) **juga tidak mungkin memberikan jaminan batas penundaan atau jaminan bandwidth kepada aplikasi**.\n\n**Poin Penting:** Layanan lapisan yang lebih tinggi dibatasi secara fundamental oleh kapabilitas lapisan di bawahnya."
  },
  {
    "id": 219,
    "text": "TCP uses a three-way handshake for connection establishment. Which of the following is the correct sequence?",
    "options": [
      "SYN → ACK → SYN",
      "FIN → SYN → ACK",
      "SYN-ACK → SYN → ACK",
      "SYN → SYN-ACK → ACK",
      "ACK → SYN → SYN-ACK",
      "RST → SYN → ACK"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.6 TCP Connection Management",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) SYN → SYN-ACK → ACK**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.6: Urutan Kronologis TCP Three-Way Handshake.\n\n**Pembahasan Lengkap:**\nUrutan pembentukan koneksi TCP 3-arah:\n1. **Langkah 1 (Klien $\to$ Server):** Klien mengirimkan segmen kontrol dengan flag 'SYN = 1', nomor urut acak 'client_isn'.\n2. **Langkah 2 (Server $\to$ Klien):** Server membalas dengan segmen ber-flag 'SYN = 1' dan 'ACK = 1', nomor urut acak 'server_isn', serta 'ack_no = client_isn + 1'. Segmen ini disebut **SYN-ACK**.\n3. **Langkah 3 (Klien $\to$ Server):** Klien mengonfirmasi dengan mengirim segmen ber-flag 'ACK = 1', nomor urut 'client_isn + 1', dan 'ack_no = server_isn + 1'.\n\n**Poin Penting:** Urutan jabat tangan 3-arah TCP: SYN $\to$ SYN-ACK $\to$ ACK."
  },
  {
    "id": 220,
    "text": "Suppose 2000 requests are made, each for a 2 MB object. A cache hit rate of 30% is observed. How much downstream traffic is reduced?",
    "options": [
      "1400 MB",
      "600 MB",
      "400 MB",
      "1000 MB",
      "1200 MB",
      "1600 MB"
    ],
    "answerIndexes": [
      4
    ],
    "answers": [
      4
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (E) 1200 MB**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: Perhitungan Pengurangan Beban Lalu Lintas Web Cache.\n\n**Pembahasan Lengkap:**\nDiketahui data soal:\n- Total permintaan: $2.000\text{ permintaan}$.\n- Ukuran objek per permintaan: $2\text{ MB}$.\n- Total lalu lintas tanpa cache: $2.000 \times 2\text{ MB} = 4.000\text{ MB}$.\n- Tingkat temuan cache (*cache hit rate*): $30% = 0.30$.\n\nPerhitungan Lalu Lintas yang Diredusir:\n- Permintaan yang berhasil dijawab oleh cache tidak perlu diunduh dari link hilir (*downstream link*):\n  $$\text{Lalu Lintas yang Diredusir} = \text{Hit Rate} \times \text{Total Permintaan} \times \text{Ukuran Objek}$$\n  $$\text{Lalu Lintas yang Diredusir} = 0.30 \times 2.000 \times 2\text{ MB} = 1.200\text{ MB}$$\n\n**Poin Penting:** $0.30 \times 2.000 \times 2\text{ MB} = 1.200\text{ MB}$ traffic berhasil ditiadakan dari link hilir."
  },
  {
    "id": 221,
    "text": "TCP is a connection-oriented protocol providing reliable, full-duplex service. Which of the following best characterizes TCP\\u2019s service model?",
    "options": [
      "Frame-based guaranteed bandwidth",
      "Unreliable datagram service",
      "Connectionless segment delivery",
      "Reliable byte-stream delivery",
      "Encrypted circuit-switched delivery",
      "Out-of-order packet delivery"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.1.1 Relationship Between Transport and Network Layers",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) Reliable byte-stream delivery**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.1: Model Layanan Protokol TCP.\n\n**Pembahasan Lengkap:**\nKarakteristik model layanan TCP:\n- TCP adalah protokol yang berorientasi koneksi (*connection-oriented*), *full-duplex*, dan menyediakan pengiriman **aliran byte yang andal (*Reliable byte-stream delivery*)**.\n- TCP tidak mempertahankan batas-batas pesan aplikasi (*no message boundaries*): data dibaca dan ditulis sebagai aliran byte kontinu dari satu proses ke proses lain.\n\n**Poin Penting:** Layanan TCP dikarakterisasi sebagai pengiriman aliran byte yang andal (*reliable byte-stream*)."
  },
  {
    "id": 222,
    "text": "The transport layer converts application messages into transport-layer segments by attaching headers. These segments are then passed to the network layer, which encapsulates them in datagrams. What happens when the datagram reaches the receiving host?",
    "options": [
      "The datagram is discarded since only routers process it",
      "The datagram is transformed back into raw bits before processing",
      "The transport layer forwards the datagram to another host",
      "The transport layer discards headers and delivers the data directly to routers",
      "The network layer immediately executes the application",
      "The network layer extracts the segment and delivers it to the transport layer"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.1.1 Relationship Between Transport and Network Layers",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) The network layer extracts the segment and delivers it to the transport layer**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.5.2 & 3.2: Proses De-enkapsulasi di Host Penerima.\n\n**Pembahasan Lengkap:**\nSaat datagram IP tiba di antarmuka host penerima:\n1. Lapisan Link memeriksa frame, membuang header link, dan menyerahkan payload datagram ke Lapisan Network.\n2. Lapisan Network memeriksa header IP untuk memastikan alamat IP tujuan cocok.\n3. Lapisan Network **mengekstrak segmen transport layer dari payload datagram IP**, memeriksa field nomor protokol (misal protokol 6 untuk TCP), dan **menyerahkan segmen tersebut ke Lapisan Transport** untuk diproses lebih lanjut.\n\n**Poin Penting:** Network layer mengekstrak segmen transport dan menyerahkannya ke lapisan transport."
  },
  {
    "id": 223,
    "text": "To reduce response time and traffic, browsers often store previously retrieved objects locally. What is this mechanism called?",
    "options": [
      "Proxying",
      "Mirroring",
      "Content Switching",
      "Web Caching",
      "Load Balancing",
      "Replication"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.2.5 Web Caching",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (D) Web Caching**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.2.5: Web Caching Mechanisms.\n\n**Pembahasan Lengkap:**\nMekanisme penyimpanan salinan objek web (HTML, gambar, skrip) yang pernah diunduh sebelumnya ke dalam memori atau disk lokal browser untuk mempercepat akses kunjungan berikutnya dan menghemat bandwidth disebut **Web Caching** (atau Browser HTTP Cache).\n\n**Poin Penting:** Web Caching menyimpan objek web lokal untuk memangkas penundaan dan traffic jaringan."
  },
  {
    "id": 224,
    "text": "Attackers can forge packets with false source addresses. What security mechanism is needed to counter this?",
    "options": [
      "Packet compression",
      "Increased propagation speed",
      "Multipath routing",
      "End-point authentication",
      "Error correction codes",
      "Circuit switching"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.6 Networks Under Attack",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) End-point authentication**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.6 & 8.4: IP Spoofing and End-Point Authentication.\n\n**Pembahasan Lengkap:**\nPada serangan **IP Spoofing**, peretas menyisipkan alamat IP sumber palsu pada header paket IP agar tampak seolah-olah paket berasal dari pihak terpercaya.\n- Karena router di network core hanya merutekan paket berdasarkan IP tujuan dan tidak memvalidasi keaslian IP sumber, satu-satunya mekanisme keamanan yang dapat menangkal spoofing secara tuntas adalah **End-point Authentication (Autentikasi Titik Akhir)**:\n- Menggunakan kriptografi kunci publik dan tanda tangan digital (seperti dalam TLS atau IPsec) untuk memverifikasi identitas pengirim yang sebenarnya sebelum mempercayai pesan.\n\n**Poin Penting:** Autentikasi titik akhir berbasis kriptografi menangkal serangan pemalsuan alamat (IP spoofing)."
  },
  {
    "id": 225,
    "text": "Traffic intensity is defined as I = La/R. If packets of length 2,000 bits arrive at rate 800 p/s and link rate is 1 Mbps, what is the intensity?",
    "options": [
      "1.6",
      "2.0",
      "1.0",
      "1.2",
      "2.5",
      "0.8"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.2 Queuing Delay and Packet Loss",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (A) 1.6**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.2: Rumus Traffic Intensity ($I = La / R$).\n\n**Pembahasan Lengkap:**\nDiketahui data soal:\n- Panjang paket: $L = 2.000\text{ bit}$.\n- Laju kedatangan paket: $a = 800\text{ paket/detik}$.\n- Laju transmisi tautan: $R = 1\text{ Mbps} = 1.000.000\text{ bps}$.\n\nPerhitungan Intensitas Lalu Lintas ($I$):\n$$I = \frac{L \times a}{R} = \frac{2.000\text{ bit} \times 800\text{ paket/detik}}{1.000.000\text{ bps}}$$\n$$I = \frac{1.600.000\text{ bps}}{1.000.000\text{ bps}} = 1.6$$\nKarena $I = 1.6 > 1$, laju bit yang tiba melampaui kapasitas tautan, menyebabkan antrian meledak dan terjadi packet loss masif.\n\n**Poin Penting:** $I = (2.000 \times 800) / 1.000.000 = 1.6$."
  },
  {
    "id": 226,
    "text": "TCP includes a checksum over the header and data. Why is this important?",
    "options": [
      "To identify the correct process",
      "To replace lower-layer error correction",
      "To verify packet routing paths",
      "To eliminate retransmissions",
      "To guarantee congestion control",
      "To detect corruption in header and payload"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.2 TCP Segment Structure & ACKs",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (F) To detect corruption in header and payload**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.2: TCP Checksum Purpose and Coverage.\n\n**Pembahasan Lengkap:**\nField **Checksum (16-bit)** pada header TCP:\n- Dihitung atas seluruh header TCP, payload data aplikasi, serta pseudo-header IP (berisi IP sumber, IP tujuan, dan panjang segmen).\n- Tujuannya adalah untuk **mendeteksi terjadinya kerusakan bit (*corruption*)** yang mungkin terjadi pada header maupun isi data segmen saat merambat melintasi media fisik atau memori switch/router.\n\n**Poin Penting:** Checksum TCP mendeteksi kerusakan bit pada header dan payload segmen."
  },
  {
    "id": 227,
    "text": "In another approach, a DNS server replies with the address of another server instead of resolving fully. What is this method called?",
    "options": [
      "Redirected",
      "Forwarded",
      "Iterative",
      "Chained",
      "Proxy",
      "Recursive"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.2 Overview of How DNS Works",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (C) Iterative**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.2: Iterative vs Recursive DNS Queries.\n\n**Pembahasan Lengkap:**\nDalam mekanisme resolusi DNS, terdapat dua jenis kueri:\n1. **Iterative Query (Kueri Iteratif):** Server DNS yang dihubungi tidak mencari jawaban hingga tuntas; jika ia tidak tahu jawabannya, server tersebut membalas dengan memberikan **referensi alamat IP dari server DNS lain yang harus dihubungi berikutnya** (*\"Saya tidak tahu, silakan tanya server ini\"*). Klien yang harus melanjutkan menghubungi server berikutnya secara berulang.\n2. **Recursive Query (Kueri Rekursif):** Server DNS yang dihubungi berjanji untuk mencari jawaban atas nama klien hingga tuntas sampai memperoleh alamat IP tujuan.\n\n**Poin Penting:** Kueri DNS di mana server membalas dengan alamat server lain yang harus dihubungi disebut kueri iteratif."
  },
  {
    "id": 228,
    "text": "Electronic mail involves three major components: user agents, mail servers, and a protocol that transfers messages between servers. Which protocol is primarily used for server-to-server transfer?",
    "options": [
      "HTTP",
      "SMTP",
      "IMAP",
      "FTP",
      "POP3",
      "DNS"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.3.1 SMTP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (B) SMTP**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.3.1: Server-to-Server Email Relay Protocol.\n\n**Pembahasan Lengkap:**\nProtokol standar yang digunakan di seluruh Internet untuk mentransfer dan meneruskan pesan email antar-server email (*server-to-server relay*) adalah **SMTP (Simple Mail Transfer Protocol)**:\n- Ketika server mail pengirim (misal server Yahoo) menerima email dari kliennya, server Yahoo akan menggunakan SMTP pada port 25 untuk mengirimkan email tersebut ke server mail penerima (misal server Gmail).\n\n**Poin Penting:** SMTP adalah protokol standar untuk transfer email antar server."
  },
  {
    "id": 229,
    "text": "The SR protocol avoids unnecessary retransmissions compared to Go-Back-N. What is the main efficiency gain of SR?",
    "options": [
      "It limits window size to 1",
      "It eliminates the need for ACKs",
      "It discards buffered packets immediately",
      "It retransmits only the specific lost or corrupted packets",
      "It never uses sequence numbers",
      "It sends packets in strict order only"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.4 Selective Repeat (SR)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (D) It retransmits only the specific lost or corrupted packets**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.4: Efisiensi Selective Repeat vs Go-Back-N.\n\n**Pembahasan Lengkap:**\nKeuntungan efisiensi paling utama dari Selective Repeat (SR):\n- Pada Go-Back-N, jika satu paket hilang di awal jendela, pengirim terpaksa mengirim ulang seluruh paket dalam jendela tersebut meskipun paket-paket setelahnya telah sampai dengan selamat.\n- Pada **Selective Repeat (SR)**, penerima menyangga paket-paket yang tiba setelah paket yang hilang. Pengirim **hanya mentransmisikan ulang paket individual yang secara spesifik hilang atau rusak**, tanpa membuang-buang bandwidth untuk paket yang sudah berhasil diterima.\n\n**Poin Penting:** SR hanya mengirim ulang paket spesifik yang hilang, menghindari retransmisi mubazir."
  },
  {
    "id": 230,
    "text": "A packet of 8,000 bits is sent across 2 links of rate 2 Mbps each (store\\u2011and\\u2011forward at intermediate router). What is the end\\u2011to\\u2011end transmission delay?",
    "options": [
      "8 ms",
      "4 ms",
      "12 ms",
      "2 ms",
      "10 ms",
      "6 ms"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (A) 8 ms**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.3: End-to-End Store-and-Forward Delay over Multiple Links.\n\n**Pembahasan Lengkap:**\nDiketahui data:\n- Ukuran paket: $L = 8.000\text{ bit}$.\n- Jumlah link: $2\text{ link}$ (melewati 1 router perantara).\n- Laju transmisi tiap link: $R = 2\text{ Mbps} = 2.000.000\text{ bps}$.\n\n1. **Waktu transmisi pada link pertama ($d_{trans1}$):**\n   $$d_{trans1} = \frac{L}{R} = \frac{8.000\text{ bit}}{2.000.000\text{ bps}} = 0.004\text{ detik} = 4\text{ ms}$$\n2. Karena router menerapkan mekanisme *store-and-forward*, router baru dapat mulai mentransmisikan paket ke link kedua setelah seluruh $8.000\text{ bit}$ diterima lengkap.\n3. **Waktu transmisi pada link kedua ($d_{trans2}$):**\n   $$d_{trans2} = \frac{L}{R} = \frac{8.000\text{ bit}}{2.000.000\text{ bps}} = 0.004\text{ detik} = 4\text{ ms}$$\n4. **Total End-to-End Transmission Delay:**\n   $$d_{total_trans} = d_{trans1} + d_{trans2} = 4\text{ ms} + 4\text{ ms} = 8\text{ ms}$$\n\n**Poin Penting:** Dua link store-and-forward menghasilkan total delay transmisi $4\text{ ms} + 4\text{ ms} = 8\text{ ms}$."
  },
  {
    "id": 231,
    "text": "In name resolution, a local DNS server can contact other servers on behalf of a client until it finds the answer. What is this process called?",
    "options": [
      "Recursive Query",
      "Forwarding",
      "Redirection",
      "Iterative Query",
      "Delegation",
      "Resolution"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.4.2 Overview of How DNS Works",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (A) Recursive Query**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.4.2: Recursive DNS Query Operation.\n\n**Pembahasan Lengkap:**\nPada **Recursive Query (Kueri Rekursif)**:\n- Ketika host klien mengirim kueri DNS ke Local DNS Server, Local DNS Server mengambil alih seluruh tanggung jawab pencarian nama tersebut atas nama klien.\n- Local DNS Server akan menghubungi root server, lalu TLD server, hingga authoritative server secara berturut-turut sampai mendapatkan pemetaan IP, lalu mengembalikan jawaban akhir yang sudah jadi kepada klien.\n\n**Poin Penting:** Kueri di mana server DNS menghubungi server lain atas nama klien hingga tuntas disebut kueri rekursif."
  },
  {
    "id": 232,
    "text": "GBN requires only one timer. What packet is the timer associated with?",
    "options": [
      "The first unacknowledged packet",
      "The last acknowledged packet",
      "The most recently transmitted packet",
      "The checksum field",
      "The highest sequence number",
      "The middle packet in the window"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.3 Go-Back-N (GBN)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) The first unacknowledged packet**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.3: Go-Back-N Single Timer Management.\n\n**Pembahasan Lengkap:**\nProtokol Go-Back-N (GBN) sengaja didesain hemat sumber daya dan hanya menggunakan **satu timer tunggal**:\n- Timer ini selalu dikaitkan secara eksklusif dengan **paket tertua yang belum diakui (*the oldest unacknowledged packet* / base of the window)**.\n- Ketika sebuah ACK kumulatif tiba dan memajukan base jendela, timer direstart untuk paket tertua baru yang masih belum di-ACK. Jika timer habis, seluruh paket mulai dari paket tertua tersebut dikirim ulang.\n\n**Poin Penting:** Timer tunggal pada GBN selalu diasosiasikan dengan paket tertua yang belum diakui."
  },
  {
    "id": 233,
    "text": "When did ARPAnet officially transition from NCP to TCP/IP as its standard host protocol, marking a \\u201cflag day\\u201d event?",
    "options": [
      "1986",
      "1970",
      "1991",
      "1980",
      "1975",
      "1983"
    ],
    "answerIndexes": [
      5
    ],
    "answers": [
      5
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.7 History of Computer Networking and the Internet",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (F) 1983**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.7.2: Sejarah Internet — ARPANET Flag Day Transition to TCP/IP.\n\n**Pembahasan Lengkap:**\nPeristiwa monumental yang dikenal sebagai **\"Flag Day\"** terjadi pada **1 Januari 1983**:\n- Pada hari itu, seluruh host di jaringan ARPANET secara resmi menghentikan penggunaan protokol lama NCP (Network Control Protocol) dan beralih secara serentak ke tumpukan protokol standar baru **TCP/IP**.\n- Peristiwa ini secara luas diakui oleh para sejarawan komputer sebagai tanggal kelahiran resmi Internet modern.\n\n**Poin Penting:** Transisi bersejarah ARPANET ke TCP/IP (\"Flag Day\") terjadi pada 1 Januari 1983."
  },
  {
    "id": 234,
    "text": "Internet-connected devices today include not only PCs and servers but also TVs, cars, and sensors. What term is used to unify all such devices in Internet jargon?",
    "options": [
      "Interfaces",
      "Nodes",
      "Hosts or End Systems",
      "Terminals",
      "Clients only",
      "Switches"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.1 What Is the Internet?",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (C) Hosts or End Systems**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.1.1: Terminologi End Systems and Hosts.\n\n**Pembahasan Lengkap:**\nDalam jargon baku jaringan komputer dan buku Kurose & Ross:\n- Semua perangkat fisik yang terhubung ke Internet dan menjalankan program aplikasi pengguna (seperti komputer desktop, server, laptop, smartphone, tablet, smartwatch, TV pintar, dan sensor IoT) secara terpadu disebut sebagai **Hosts** atau **End Systems**.\n- Istilah ini membedakannya dari perangkat perantara di inti jaringan seperti router dan switch (*packet switches*).\n\n**Poin Penting:** Semua perangkat pengguna yang terhubung di tepi jaringan disebut *Hosts* atau *End Systems*."
  },
  {
    "id": 235,
    "text": "TCP calculates EstimatedRTT as an exponential weighted moving average. What is the effect of a smaller \\u03b1 (alpha) value?",
    "options": [
      "Congestion window shrinks immediately",
      "Timeout becomes zero",
      "EstimatedRTT reacts slowly, smoothing over variations",
      "EstimatedRTT is ignored",
      "EstimatedRTT reacts quickly to new samples",
      "No retransmission occurs"
    ],
    "answerIndexes": [
      2
    ],
    "answers": [
      2
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.5.3 Round-Trip Time Estimation and Timeout",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (C) EstimatedRTT reacts slowly, smoothing over variations**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.5.3: Pengaruh Parameter $alpha$ dalam EWMA EstimatedRTT.\n\n**Pembahasan Lengkap:**\nRumus EWMA: $\text{EstimatedRTT} = (1 - alpha) \times \text{EstimatedRTT} + alpha \times \text{SampleRTT}$.\n- Parameter $alpha$ menentukan bobot sampel pengukuran RTT terbaru.\n- Nilai $(1 - alpha)$ adalah bobot dari riwayat perkiraan RTT sebelumnya.\n- Jika nilai $alpha$ **semakin kecil** (misalnya $alpha = 0.05$):\n  - Bobot sampel baru menjadi sangat kecil ($5%$), sementara bobot riwayat masa lalu mendominasi ($95%$).\n  - Akibatnya, kurva EstimatedRTT menjadi sangat stabil dan **bereaksi lambat (*reacts slowly*) terhadap perubahan mendadak**, memperhalus fluktuasi sementara (*smoothing over variations*).\n\n**Poin Penting:** Nilai $alpha$ yang kecil meredam fluktuasi RTT dan membuat perkiraan bereaksi lebih lambat dan stabil."
  },
  {
    "id": 236,
    "text": "Congestion occurs when too many sources send too much data. What is the symptom of congestion inside the network?",
    "options": [
      "Increased router queueing and packet loss",
      "Reduced advertised window sizes",
      "Frequent three-way handshakes",
      "Duplicate port bindings",
      "Reduced checksum errors",
      "Lower sequence number ranges"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.6.1 The Causes and the Costs of Congestion",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (A) Increased router queueing and packet loss**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.6.1: Manifestasi Gejala Kemacetan di Inti Jaringan.\n\n**Pembahasan Lengkap:**\nKetika terlalu banyak sumber mengirim data melebihi kapasitas link transmisi (*network congestion*):\n1. Antrian paket di buffer router menumpuk dan memanjang drastis, menyebabkan lonjakan besar pada **penundaan antrian (*increased router queueing delay*)**.\n2. Ketika buffer router terisi penuh hingga meluap, router terpaksa membuang paket baru, menyebabkan peningkatan laju **kehilangan paket (*packet loss*)**.\n\n**Poin Penting:** Gejala fisik kemacetan di dalam jaringan adalah antrian router yang membengkak dan packet loss."
  },
  {
    "id": 237,
    "text": "Suppose two TCP flows share a bottleneck. How does AIMD ensure fairness?",
    "options": [
      "One flow gets priority ACKs",
      "Loss causes both flows to halve their cwnd, maintaining balance",
      "Both flows double cwnd each RTT",
      "Flows ignore RTT differences",
      "One flow always dominates the link",
      "Retransmissions are disabled"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.7.3 Fairness",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) Loss causes both flows to halve their cwnd, maintaining balance**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.7.3: Konvergensi AIMD Menuju Keadilan (*Fairness Convergence*).\n\n**Pembahasan Lengkap:**\nMisalkan dua aliran TCP bersaing pada satu link bottleneck:\n- Pada diagram fase dua dimensi (Aliran 1 vs Aliran 2), setiap kali terjadi packet loss, kedua aliran melakukan *Multiplicative Decrease* dengan **memotong ukuran 'cwnd' masing-masing menjadi separuhnya**.\n- Secara geometris, pemotongan multiplikatif ini menarik titik operasi langsung ke arah titik asal $(0,0)$, yang mengurangi disparitas absolut antar kedua aliran.\n- Pertumbuhan penambahan aditif ($+1\text{ MSS}$) berikutnya menaikkan titik operasi dengan kemiringan sudut $45^circ$, secara iteratif menuntun kedua aliran menuju garis kesetaraan sempurna (*equal bandwidth line*).\n\n**Poin Penting:** Pemotongan separuh 'cwnd' secara multiplikatif saat loss memelihara keseimbangan dan keadilan pembagian bandwidth."
  },
  {
    "id": 238,
    "text": "In SR, both sender and receiver must maintain state for each outstanding packet. Which of the following is NOT maintained as part of this state?",
    "options": [
      "Buffer for each out-of-order packet (receiver side)",
      "Path taken by each packet through the network",
      "ACK status for each sequence number",
      "Timer for each packet (sender side)",
      "Sequence numbers in use",
      "Window boundaries"
    ],
    "answerIndexes": [
      1
    ],
    "answers": [
      1
    ],
    "chapterId": "eas-ch03",
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3 Transport Layer",
    "sectionTitle": "3.4.4 Selective Repeat (SR)",
    "part": "PART 3: TRANSPORT LAYER",
    "explanation": "**Jawaban Benar: (B) Path taken by each packet through the network**\n\n**Konsep Kunci:**\nKurose & Ross Section 3.4.4: Batasan State yang Dikelola Protokol Transport (SR).\n\n**Pembahasan Lengkap:**\nProtokol lapisan transport (seperti Selective Repeat) beroperasi secara murni di simpul akhir (*end-to-end*).\nSR memelihara status koneksi meliputi:\n- Batas jendela pengirim dan penerima (*window boundaries*).\n- Status ACK dari setiap nomor urut.\n- Timer independen untuk setiap paket (sisi pengirim).\n- Buffer penyangga untuk paket out-of-order (sisi penerima).\nNamun, **jalur rute yang dilalui oleh paket di dalam jaringan (*path taken through the network*)** adalah tanggung jawab penuh dari **Network Layer (IP dan protokol routing router)**. Protokol transport tidak mengetahui dan tidak menyimpan informasi rute fisik tersebut.\n\n**Poin Penting:** Informasi jalur rute jaringan dikelola oleh network layer (IP), bukan bagian dari state transport protocol."
  },
  {
    "id": 239,
    "text": "Consider a link of 2,500 km with propagation speed 2.5 \\u00d7 10^8 m/s. What is the propagation delay?",
    "options": [
      "20 ms",
      "5 ms",
      "25 ms",
      "10 ms",
      "8 ms",
      "12.5 ms"
    ],
    "answerIndexes": [
      3
    ],
    "answers": [
      3
    ],
    "chapterId": "eas-ch01",
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1 Computer Networks and the Internet",
    "sectionTitle": "1.4.1 Overview of Delay in Packet-Switched Networks",
    "part": "PART 1: COMPUTER NETWORKS AND THE INTERNET",
    "explanation": "**Jawaban Benar: (D) 10 ms**\n\n**Konsep Kunci:**\nKurose & Ross Section 1.4.1: Perhitungan Propagation Delay ($d_{prop} = d / s$).\n\n**Pembahasan Lengkap:**\nDiketahui data soal:\n- Jarak link fisik: $d = 2.500\text{ km} = 2.500 \times 10^3\text{ m} = 2.5 \times 10^6\text{ m}$.\n- Kecepatan rambat sinyal: $s = 2.5 \times 10^8\text{ m/s}$.\n\nPerhitungan Propagation Delay:\n$$d_{prop} = \frac{d}{s} = \frac{2.5 \times 10^6\text{ m}}{2.5 \times 10^8\text{ m/s}} = \frac{1}{100}\text{ detik} = 0.01\text{ detik}$$\nKonversikan ke milidetik:\n$$0.01\text{ detik} \times 1.000 = 10\text{ ms}$$\n\n**Poin Penting:** $d_{prop} = (2.5 \times 10^6) / (2.5 \times 10^8) = 0.01\text{ s} = 10\text{ ms}$."
  },
  {
    "id": 240,
    "text": "On the client side, after creating a socket, which operation is used to initiate a connection to the server?",
    "options": [
      "Connect",
      "Attach",
      "Bind",
      "Listen",
      "Accept",
      "Open"
    ],
    "answerIndexes": [
      0
    ],
    "answers": [
      0
    ],
    "chapterId": "eas-ch02",
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2 Application Layer",
    "sectionTitle": "2.7.2 Socket Programming with TCP",
    "part": "PART 2: APPLICATION LAYER",
    "explanation": "**Jawaban Benar: (A) Connect**\n\n**Konsep Kunci:**\nKurose & Ross Section 2.7.2: TCP Client Socket API — 'connect()'.\n\n**Pembahasan Lengkap:**\nPada sisi klien (client side), setelah proses membuat socket dengan memanggil 'socket()':\n- Klien memanggil fungsi **'connect()'** dengan menyertakan alamat IP dan nomor port server tujuan.\n- Pemanggilan 'connect()' ini memicu kernel sistem operasi untuk mengirimkan segmen 'SYN' dan menginisiasi jabat tangan 3-arah TCP (*three-way handshake*) menuju server.\n- Fungsi 'connect()' akan memblokir (*block*) hingga jabat tangan 3-arah selesai dibangun atau mengalami kegagalan.\n\n**Poin Penting:** 'connect()' digunakan oleh klien TCP untuk menginisiasi jabat tangan koneksi ke server."
  }
];

export function getEasQuestionsByChapter(chapterId?: string): TryoutEasQuestion[] {
  if (!chapterId || chapterId === "all") {
    return tryoutEasQuestions;
  }
  return tryoutEasQuestions.filter((q) => q.chapterId === chapterId);
}
