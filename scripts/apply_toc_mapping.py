import json, re

with open("src/lib/tryout-eas.ts") as f:
    text = f.read()

m = re.search(r"export const tryoutEasQuestions: TryoutEasQuestion\[\] = (\[.*?\]);\n\nexport function", text, re.DOTALL)
qs = json.loads(m.group(1))

import scripts.map_sections as ms

ch_counts = {"eas-ch01": 0, "eas-ch02": 0, "eas-ch03": 0}

for q in qs:
    c_num, c_id, c_title, s_title = ms.get_exact_section(q)
    q["chapterNumber"] = c_num
    q["chapterId"] = c_id
    q["chapterTitle"] = c_title
    q["sectionTitle"] = s_title
    q["part"] = f"PART {c_num}: {c_title.split(' ', 2)[-1].upper()}"
    ch_counts[c_id] += 1

chapters_meta = [
    {
        "id": "eas-ch01",
        "number": 1,
        "part": "PART 1: COMPUTER NETWORKS & THE INTERNET",
        "title": "Chapter 1 Computer Networks and the Internet",
        "description": "1.1 What Is the Internet? (Nuts-and-bolts, services, protocols) • 1.2 The Network Edge (Access networks DSL/Cable/FTTH, media) • 1.3 The Network Core (Packet switching, circuit switching, ISP hierarchy) • 1.4 Delay, Loss, and Throughput (Transmission, propagation, queuing delay, bottleneck) • 1.5 Protocol Layers and Their Service Models • 1.6 Networks Under Attack (Malware, sniffing, spoofing, DoS) • 1.7 History (Kleinrock, ARPANET, TCP/IP transition, Web).",
        "topics": [
            "1.1 What Is the Internet?",
            "1.2 The Network Edge",
            "1.3 The Network Core",
            "1.4 Delay, Loss, and Throughput in Packet-Switched Networks",
            "1.5 Protocol Layers and Their Service Models",
            "1.6 Networks Under Attack",
            "1.7 History of Computer Networking and the Internet"
        ],
        "questionCount": ch_counts["eas-ch01"]
    },
    {
        "id": "eas-ch02",
        "number": 2,
        "part": "PART 2: APPLICATION LAYER",
        "title": "Chapter 2 Application Layer",
        "description": "2.1 Principles of Network Applications (C/S vs P2P, FTP) • 2.2 The Web and HTTP (persistent/non-persistent, status codes, cookies, web caching) • 2.3 Electronic Mail (SMTP, POP3, IMAP) • 2.4 DNS—The Internet's Directory Service (Hierarchical servers, records, queries) • 2.5 Peer-to-Peer File Distribution (BitTorrent swarming) • 2.6 Video Streaming and Content Distribution Networks (CDNs) • 2.7 Socket Programming (UDP & TCP).",
        "topics": [
            "2.1 Principles of Network Applications",
            "2.2 The Web and HTTP",
            "2.3 Electronic Mail in the Internet",
            "2.4 DNS—The Internet’s Directory Service",
            "2.5 Peer-to-Peer File Distribution",
            "2.6 Video Streaming and Content Distribution Networks",
            "2.7 Socket Programming: Creating Network Applications"
        ],
        "questionCount": ch_counts["eas-ch02"]
    },
    {
        "id": "eas-ch03",
        "number": 3,
        "part": "PART 3: TRANSPORT LAYER",
        "title": "Chapter 3 Transport Layer",
        "description": "3.1 Transport-Layer Services (Process-to-process vs host-to-host) • 3.2 Multiplexing and Demultiplexing (Port numbers, 2-tuple vs 4-tuple) • 3.3 Connectionless Transport: UDP (Checksum, headers) • 3.4 Principles of Reliable Data Transfer (rdt, pipelining, Go-Back-N, Selective Repeat) • 3.5 Connection-Oriented Transport: TCP (Segment structure, RTT estimation, flow control, 3-way handshake) • 3.6 Principles of Congestion Control • 3.7 TCP Congestion Control (AIMD, Slow Start, Fast Recovery).",
        "topics": [
            "3.1 Introduction and Transport-Layer Services",
            "3.2 Multiplexing and Demultiplexing",
            "3.3 Connectionless Transport: UDP",
            "3.4 Principles of Reliable Data Transfer",
            "3.5 Connection-Oriented Transport: TCP",
            "3.6 Principles of Congestion Control",
            "3.7 TCP Congestion Control"
        ],
        "questionCount": ch_counts["eas-ch03"]
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

export const tryoutEasQuestions: TryoutEasQuestion[] = {json.dumps(qs, indent=2)};

export function getEasQuestionsByChapter(chapterId?: string): TryoutEasQuestion[] {{
  if (!chapterId || chapterId === "all") {{
    return tryoutEasQuestions;
  }}
  return tryoutEasQuestions.filter((q) => q.chapterId === chapterId);
}}
"""

with open("src/lib/tryout-eas.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Updated src/lib/tryout-eas.ts with exact Kurose & Ross TOC mapping!")
print("Chapter counts:", ch_counts)
