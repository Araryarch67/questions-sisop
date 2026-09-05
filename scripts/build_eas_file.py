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

# Load custom explanations from generate_eas_data.py
import scripts.generate_eas_data as g_data
custom_exp = g_data.custom_exp

def classify_question(num, text):
    t = text.lower()
    # Ch 1 markers
    ch1_keys = [
        "nuts-and-bolts", "enterprise or campus networks", "internet standards",
        "single 10 mbps link, distance = 100 km", "delay includes several components",
        "largest engineered system", "each layer has its own unit of data",
        "as data travels down the protocol stack, headers are added", "without caching, average utilization",
        "transmission delay dominates", "botnet", "arrival rate is 900 p/s",
        "bottleneck speed of 500 kbps", "host a–b path has 4 links", "wireless lans such as wi‑fi",
        "viruses and worms", "layering approach", "link layer’s main role",
        "router takes 50 μs", "packet sniffer", "caravan analogy",
        "arrival rate exceeds service rate", "physical layer", "2,000 km, propagation speed",
        "letters sent via post office", "human greetings", "delivers datagrams over individual links",
        "denial-of-service", "top tier of isps", "traffic intensity", "osi model",
        "dsl access", "car‑caravan analogy", "infrastructure for applications",
        "five layers", "guided media", "different households use dsl",
        "circuit switching dedicates", "fiber to the home", "isps not only connect",
        "end-point authentication", "traffic intensity is defined as", "store‑and‑forward",
        "transition from ncp to tcp/ip", "hosts or end systems", "2,500 km with propagation speed",
        "kleinrock", "toll booth", "transmission rate", "network core", "peering", "fdm", "tdm",
        "arpanet", "berners-lee", "path with three links", "formula for transmission delay"
    ]
    for k in ch1_keys:
        if k in t:
            return 1, "eas-ch01", "Computer Networks and the Internet", "PART 1: COMPUTER NETWORKS & THE INTERNET", "1.4 Delay, Loss, and Throughput" if "delay" in t or "throughput" in t or "rate" in t else "1.1 What Is the Internet?"

    # Ch 2: Application Layer markers
    ch2_keys = [
        "imap", "pop3", "status code", "404 not found", "peer-to-peer", "p2p",
        "ftp", "root server", "tld", "authoritative server", "cached locally",
        "bittorrent", "http", "conditional get", "dns", "smtp", "cookie",
        "mail server", "web browser", "web caching", "swarming", "leechers",
        "seeds", "caching", "cache", "nonblocking i/o", "blocking i/o",
        "content delivery network", "cdn", "socket programming", "bind", "listen",
        "accept", "connect"
    ]
    if "two-tuple" in t or "four-tuple" in t or ("multiplexing" in t and "demultiplexing" in t):
        return 3, "eas-ch03", "Transport Layer", "PART 3: TRANSPORT LAYER", "3.2 Multiplexing and Demultiplexing"
    if "rdt" in t or "tcp" in t or "udp" in t or "gbn" in t or "selective repeat" in t or "go-back-n" in t or ("sr" in t and "window" in t):
        return 3, "eas-ch03", "Transport Layer", "PART 3: TRANSPORT LAYER", "3.4 Principles of Reliable Data Transfer" if "rdt" in t or "gbn" in t or "sr" in t else "3.5 Connection-Oriented Transport: TCP"
    if "aimd" in t or "cwnd" in t or "rwnd" in t or "three-way handshake" in t or "fast retransmit" in t:
        return 3, "eas-ch03", "Transport Layer", "PART 3: TRANSPORT LAYER", "3.7 TCP Congestion Control" if "aimd" in t or "cwnd" in t else "3.5 Connection-Oriented Transport: TCP"
    if "estimatedrtt" in t or "samplertt" in t or "devrtt" in t or ("timeout" in t and "rtt" in t):
        return 3, "eas-ch03", "Transport Layer", "PART 3: TRANSPORT LAYER", "3.5 Connection-Oriented Transport: TCP"

    for k in ch2_keys:
        if k in t:
            sec = "2.2 The Web and HTTP" if "http" in t or "cache" in t or "cookie" in t else ("2.4 DNS—The Internet's Directory Service" if "dns" in t else "2.1 Principles of Network Applications")
            return 2, "eas-ch02", "Application Layer", "PART 2: APPLICATION LAYER", sec

    if any(w in t for w in ["segment", "port", "congestion", "handshake", "window", "sequence number", "transport"]):
        return 3, "eas-ch03", "Transport Layer", "PART 3: TRANSPORT LAYER", "3.1 Transport-Layer Services"

    return 1, "eas-ch01", "Computer Networks and the Internet", "PART 1: COMPUTER NETWORKS & THE INTERNET", "1.1 What Is the Internet?"

questions_out = []
chapter_counts = {"eas-ch01": 0, "eas-ch02": 0, "eas-ch03": 0}

for num in range(1, 241):
    q_text = q_dict[num]
    a_text = a_dict[num]

    # Clean question text
    if "Select one:" in q_text:
        parts = q_text.split("Select one:")
        prompt = parts[0].strip()
        opt_text = parts[1].strip()
    else:
        prompt = q_text.strip()
        opt_text = ""

    # Clean prompt from any unwanted markers
    prompt = prompt.replace("//5 soal", "").strip()

    options = []
    for om in re.finditer(r"^[a-z]\.\s*(.*?)$", opt_text, flags=re.MULTILINE):
        options.append(om.group(1).strip())

    ans_match = re.search(r"\*\*([a-f])\.", a_text, re.IGNORECASE)
    if not ans_match:
        ans_match = re.search(r"^([a-f])\.", a_text, re.MULTILINE | re.IGNORECASE)
    letter = ans_match.group(1).lower()
    ans_idx = ord(letter) - ord('a')

    # Extract explanation
    lines = [l.strip() for l in a_text.split("\n") if l.strip()]
    first_line = lines[0]
    raw_exp = "\n".join(lines[1:]).strip()

    # Format explanation cleanly
    correct_opt_text = options[ans_idx] if ans_idx < len(options) else ""
    header_str = f"**Jawaban Benar: ({letter.upper()}) {correct_opt_text}**\n\n"

    if raw_exp:
        # User already provided explanation
        # Clean up leading/trailing * ( ) if whole string is wrapped
        clean_user_exp = raw_exp
        if clean_user_exp.startswith("*(") and clean_user_exp.endswith(")*"):
            clean_user_exp = clean_user_exp[2:-2].strip()
        elif clean_user_exp.startswith("(") and clean_user_exp.endswith(")"):
            clean_user_exp = clean_user_exp[1:-1].strip()
        clean_user_exp = clean_user_exp.replace("*(", "").replace(")*", "")
        explanation = f"{header_str}**Pembahasan:**\n{clean_user_exp}"
    elif num in custom_exp:
        explanation = f"{header_str}**Pembahasan:**\n{custom_exp[num]}"
    else:
        explanation = f"{header_str}**Pembahasan:**\nPilihan ({letter.upper()}) adalah jawaban yang tepat sesuai prinsip dan standar protokol jaringan dalam buku *Computer Networking: A Top-Down Approach* (Kurose & Ross)."

    ch_num, ch_id, ch_title, part_str, sec_title = classify_question(num, prompt)
    chapter_counts[ch_id] += 1

    questions_out.append({
        "id": num,
        "text": prompt,
        "options": options,
        "answerIndexes": [ans_idx],
        "answers": [ans_idx],
        "chapterId": ch_id,
        "chapterNumber": ch_num,
        "chapterTitle": ch_title,
        "sectionTitle": sec_title,
        "part": part_str,
        "explanation": explanation
    })

print(f"Generated {len(questions_out)} questions successfully!")
print("Chapter counts:", chapter_counts)

# Now write src/lib/tryout-eas.ts
chapters_meta = [
    {
        "id": "eas-ch01",
        "number": 1,
        "part": "PART 1: COMPUTER NETWORKS & THE INTERNET",
        "title": "Computer Networks and the Internet",
        "description": "Konsep dasar jaringan, nuts-and-bolts view, transmisi & propagasi delay, packet switching vs circuit switching, hierarki ISP, protocol layering (5-layer stack vs OSI), keamanan jaringan (malware, sniffing, spoofing, DoS), dan sejarah Internet.",
        "topics": [
            "1.1 What Is the Internet?",
            "1.2 The Network Edge",
            "1.3 The Network Core",
            "1.4 Delay, Loss, and Throughput in Packet-Switched Networks",
            "1.5 Protocol Layers and Their Service Models",
            "1.6 Networks Under Attack: Security",
            "1.7 History of Computer Networking and the Internet"
        ],
        "questionCount": chapter_counts["eas-ch01"]
    },
    {
        "id": "eas-ch02",
        "number": 2,
        "part": "PART 2: APPLICATION LAYER",
        "title": "Application Layer",
        "description": "Prinsip arsitektur aplikasi jaringan (Client-Server & P2P), protokol Web dan HTTP (persistent/nonpersistent, cookies, caching), email (SMTP, POP3, IMAP), Domain Name System (DNS), BitTorrent, Video streaming & Content Delivery Networks (CDN), serta pemrograman socket (Stream & Datagram).",
        "topics": [
            "2.1 Principles of Network Applications",
            "2.2 The Web and HTTP",
            "2.3 Electronic Mail in the Internet (SMTP, POP3, IMAP)",
            "2.4 DNS—The Internet's Directory Service",
            "2.5 Peer-to-Peer Applications (BitTorrent)",
            "2.6 Video Streaming and Content Distribution Networks (CDNs)",
            "2.7 Socket Programming: Creating Network Applications"
        ],
        "questionCount": chapter_counts["eas-ch02"]
    },
    {
        "id": "eas-ch03",
        "number": 3,
        "part": "PART 3: TRANSPORT LAYER",
        "title": "Transport Layer",
        "description": "Layanan lapisan transport, multiplexing & demultiplexing, Connectionless transport (UDP), prinsip transfer data andal (rdt 1.0 - 3.0, Go-Back-N, Selective Repeat), Connection-oriented transport (TCP segment, 3-way handshake, RTT estimation, Flow Control), dan TCP Congestion Control (AIMD, Slow Start, Fast Retransmit, Fast Recovery).",
        "topics": [
            "3.1 Transport-Layer Services and Relationship to Network Layer",
            "3.2 Multiplexing and Demultiplexing",
            "3.3 Connectionless Transport: UDP",
            "3.4 Principles of Reliable Data Transfer (rdt, GBN, SR)",
            "3.5 Connection-Oriented Transport: TCP",
            "3.6 Principles of Congestion Control",
            "3.7 TCP Congestion Control (AIMD, Slow Start, Fast Recovery)"
        ],
        "questionCount": chapter_counts["eas-ch03"]
    }
]

ts_content = f"""import {{ TryoutChapter }} from "./tryout-ets";

export interface TryoutEasQuestion {{
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
}}

export const tryoutEasChapters: TryoutChapter[] = {json.dumps(chapters_meta, indent=2)};

export const tryoutEasQuestions: TryoutEasQuestion[] = {json.dumps(questions_out, indent=2)};

export function getEasQuestionsByChapter(chapterId?: string): TryoutEasQuestion[] {{
  if (!chapterId || chapterId === "all") {{
    return tryoutEasQuestions;
  }}
  return tryoutEasQuestions.filter((q) => q.chapterId === chapterId);
}}
"""

with open("src/lib/tryout-eas.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Saved src/lib/tryout-eas.ts successfully! File size:", len(ts_content))
