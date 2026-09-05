import re

with open("scripts/raw_user_eas.txt") as f:
    raw = f.read().replace("\xa0", " ")

ans_pos = raw.find("itu soal EAS nya")
a_raw = raw[ans_pos:]

a_matches = list(re.finditer(r"\*\*Question\s+(\d+)\*\*", a_raw))
a_dict = {}
for i in range(len(a_matches)):
    a_num = int(a_matches[i].group(1))
    start = a_matches[i].end()
    end = a_matches[i+1].start() if i+1 < len(a_matches) else len(a_raw)
    content = a_raw[start:end].strip()
    if a_num not in a_dict or len(content) > len(a_dict[a_num]):
        a_dict[a_num] = content

for num in [1, 2, 8, 9, 13, 85, 177, 208]:
    txt = a_dict[num]
    lines = [l.strip() for l in txt.split("\n") if l.strip()]
    first = lines[0]
    rest = "\n".join(lines[1:])
    print(f"Q{num} First: {first}")
    print(f"Q{num} Rest: {rest[:100]}...")
    print("-" * 40)
