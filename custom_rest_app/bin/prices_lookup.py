#!/usr/bin/env python

import csv
import sys
import time
import random

table = {
    "A": ["DB-SG-G01", "Mediocre Kingdoms"],
    "B": ["DC-SG-G02", "Dream Crusher"],
    "C": ["FS-SG-G03", "Final Sequel"],
    "D": ["WC-SH-G04", "World of Cheese"],
    "E": ["WC-SH-T02", "World of Cheese Tee"],
    "F": ["PZ-SG-G05", "Puppies vs. Zombies"],
    "G": ["CU-PG-G06", "Curling 2014"],
    "K": ["MB-AG-G07", "Manganiello Bros."],
}


class MyLookup:
    def __init__(self):
        self.event_id = random.randint(0, 1000)

    def rlookup(self, code):
        if code not in table:
            return []

        return [name + " " + str(self.event_id) for name in table.get(code, [])]


def main():
    if len(sys.argv) != 2:
        print("Usage: python external_lookup.py [host field] [ip field]")
        sys.exit(1)

    codeField = sys.argv[1]

    infile = sys.stdin
    outfile = sys.stdout

    r = csv.DictReader(infile)
    header = r.fieldnames

    w = csv.DictWriter(outfile, fieldnames=r.fieldnames)
    w.writeheader()

    for result in r:
        if result[codeField]:
            spam = MyLookup()
            for name in spam.rlookup(result[codeField]):
                result["users"] = name
                w.writerow(result)


main()
