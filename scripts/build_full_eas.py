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

print("Total raw questions:", len(q_dict))
print("Total raw answers:", len(a_dict))
