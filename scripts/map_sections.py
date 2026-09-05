import json, re

with open("src/lib/tryout-eas.ts") as f:
    text = f.read()

m = re.search(r"export const tryoutEasQuestions: TryoutEasQuestion\[\] = (\[.*?\]);\n\nexport function", text, re.DOTALL)
qs = json.loads(m.group(1))

# Let us define section mapping rules based on Kurose & Ross TOC:
def get_exact_section(q):
    t = (q["text"] + " " + " ".join(q["options"])).lower()
    qid = q["id"]
    
    # Specific question IDs for precise mapping
    # Chapter 1
    if qid in [1]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.1.1 A Nuts-and-Bolts Description"
    if qid in [7, 75, 155, 185]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.1.3 What Is a Protocol?"
    if qid in [16, 180, 234]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.1 What Is the Internet?"
    if qid in [3, 49, 153, 176, 194, 201]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.2.1 Access Networks"
    if qid in [193]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.2.2 Physical Media"
    if qid in [74, 81, 108, 121, 200]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.3.1 Packet Switching"
    if qid in [128]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.3.2 Circuit Switching"
    if qid in [106, 169, 202]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.3.3 A Network of Networks"
    if qid in [9, 14, 19, 37, 54, 78, 92, 117, 118, 129, 131, 177, 230, 239]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.4.1 Overview of Delay in Packet-Switched Networks"
    if qid in [46, 172, 198, 225]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.4.2 Queuing Delay and Packet Loss"
    if qid in [47, 48, 72, 77, 123, 134]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.4.4 Throughput in Computer Networks"
    if qid in [20, 51, 91, 174, 181]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.5.1 Layered Architecture"
    if qid in [24, 99, 154]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.5.2 Encapsulation"
    if qid in [39, 50, 60, 104, 127, 167, 224]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.6 Networks Under Attack"
    if qid in [112, 142, 145, 233]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.7 History of Computer Networking and the Internet"
    if qid in [53]: return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.5.1 Layered Architecture (Link Layer)"
    
    # Chapter 2
    if qid in [103, 184]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.1.1 Network Application Architectures"
    if qid in [62, 95]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.1.2 Processes Communicating"
    if qid in [191, 214]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.1.3 Transport Services Available to Applications"
    if qid in [15, 22, 30, 55, 115, 204]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.1.6 Network Applications: FTP"
    if qid in [43, 143, 146]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.2.2 Non-Persistent and Persistent Connections"
    if qid in [5, 57, 120, 135]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.2.3 HTTP Message Format"
    if qid in [93, 98]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.2.4 User-Server Interaction: Cookies"
    if qid in [36, 38, 58, 70, 125, 144, 151, 156, 195, 196, 208, 220, 223]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.2.5 Web Caching"
    if qid in [73, 90, 102, 228]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.3.1 SMTP"
    if qid in [2, 96, 119, 212]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.3.3 Mail Access Protocols (POP3, IMAP)"
    if qid in [35, 71, 101, 170, 187, 205]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.4.1 Services Provided by DNS"
    if qid in [158, 227, 231]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.4.2 Overview of How DNS Works"
    if qid in [86, 100]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.4.3 DNS Records and Messages"
    if qid in [109]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.4 DNS Under Attack (DNS Poisoning)"
    if qid in [12, 26, 41, 94, 111, 189, 197]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.5 Peer-to-Peer File Distribution"
    if qid in [27, 84, 130, 190]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.6.3 Content Distribution Networks (CDNs)"
    if qid in [11, 40]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.7 Socket Programming: Principles"
    if qid in [133, 148]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.7.1 Socket Programming with UDP"
    if qid in [10, 21, 97, 138, 149, 168, 182, 240]: return 2, "eas-ch02", "Chapter 2 Application Layer", "2.7.2 Socket Programming with TCP"
    
    # Chapter 3
    if qid in [32, 80, 110, 164, 165, 166, 218, 221, 222]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.1.1 Relationship Between Transport and Network Layers"
    if qid in [28, 136, 175, 209]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.2 Multiplexing and Demultiplexing"
    if qid in [107, 139, 140, 161, 210]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.3 Connectionless Transport: UDP"
    if qid in [152, 183]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.3.2 UDP Checksum & Header"
    if qid in [17, 61, 63, 113, 114, 147, 159, 173, 178]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.4.1 Building a Reliable Data Transfer Protocol"
    if qid in [23, 64, 66, 67]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.4.2 Pipelined Reliable Data Transfer Protocols"
    if qid in [76, 83, 116, 206, 232]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.4.3 Go-Back-N (GBN)"
    if qid in [6, 8, 52, 141, 160, 192, 229, 238]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.4.4 Selective Repeat (SR)"
    if qid in [18, 25, 31, 56, 65, 85, 88, 122, 150, 157, 179, 188, 207, 226]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.5.2 TCP Segment Structure & ACKs"
    if qid in [13, 34, 59, 215, 235]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.5.3 Round-Trip Time Estimation and Timeout"
    if qid in [29]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.5.4 Reliable Data Transfer"
    if qid in [126, 199, 203, 217]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.5.5 Flow Control"
    if qid in [33, 42, 82, 89, 213, 219]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.5.6 TCP Connection Management"
    if qid in [4, 162, 236]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.6.1 The Causes and the Costs of Congestion"
    if qid in [45, 69, 87, 105, 186, 211]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.7.1 Classic TCP Congestion Control (AIMD)"
    if qid in [44, 124]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.7.2 Network-Assisted ECN and TCP Vegas"
    if qid in [68, 79, 216, 237]: return 3, "eas-ch03", "Chapter 3 Transport Layer", "3.7.3 Fairness"

    return 1, "eas-ch01", "Chapter 1 Computer Networks and the Internet", "1.1 What Is the Internet?"

mapped = {}
for q in qs:
    c_num, c_id, c_title, s_title = get_exact_section(q)
    mapped[q["id"]] = (c_num, c_id, c_title, s_title)

print(f"Mapped all {len(mapped)} questions.")
from collections import Counter
counts = Counter([c_id for _, c_id, _, _ in mapped.values()])
print("Counts by chapter:", counts)
