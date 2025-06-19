// Model Numbers
var brandByCategory = {
    // Apple
    A: [{
        name: "iPhone",
        model: "A1203"
    }, {
        name: "iPhone 3G",
        model: "A1241"
    }, {
        name: "iPhone 3GS",
        model: "A1303"
    }, {
        name: "iPhone 4",
        model: "A1332, A1349"
    }, {
        name: "iPhone 4S",
        model: "A1387"
    }, {
        name: "iPhone 5",
        model: "A1428, A1429"
    }, {
        name: "iPhone 5C",
        model: "A1456, A1507, A1516, A1529, A1532"
    }, {
        name: "iPhone 5S",
        model: "A1533, A1453"
    }, {
        name: "iPhone 6",
        model: "A1549, A1586, A1589"
    }, {
        name: "iPhone 6 Plus",
        model: "A1522, A1524, A1593"
    }, {
        name: "iPhone 6S",
        model: "A1633, A1688"
    }, {
        name: "iPhone 6S Plus",
        model: "A1634, A1687"
    }, {
        name: "iPhone SE",
        model: "A1662, A1723"
    }, {
        name: "iPhone 7",
        model: "A1660, A1778"
    }, {
        name: "iPhone 7 Plus",
        model: "A1661, A1784"
    }, {
        name: "iPhone 8",
        model: "A1863, A1905"
    }, {
        name: "iPhone 8 Plus",
        model: "A1864, A1897"
    }, {
        name: "iPhone X",
        model: "A1865, A1901"
    }, {
        name: "iPhone XS",
        model: "A1920, A2097"
    }, {
        name: "iPhone XS Max",
        model: "A1921, A2101"
    }, {
        name: "iPhone XR",
        model: "A1984, A2105"
    }, {
        name: "iPhone 11",
        model: "A2111, A2221, A2223"
    }, {
        name: "iPhone 11 Pro",
        model: "A2160, A2215, A2217"
    }, {
        name: "iPhone 11 Pro Max",
        model: "A2161, A2218, A2220"
    }, {
        name: "iPhone SE (2020)",
        model: "A2296, A2275, A2298"
    }, {
        name: "iPhone 12 Mini",
        model: "A2176, A2398, A2400, A2399"
    }, {
        name: "iPhone 12",
        model: "A2172, A2402, A2404, A2403"
    }, {
        name: "iPhone 12 Pro",
        model: "A2341, A2406, A2408, A2407"
    }, {
        name: "iPhone 12 Pro Max",
        model: "A2342, A2410, A2412, A2411"
    }, {
        name: "iPhone 13 Mini",
        model: "A2481, A2626, A2629, A2630, A2628"
    }, {
        name: "iPhone 13",
        model: "A2482, A2631, A2634, A2635, A2633"
    }, {
        name: "iPhone 13 Pro",
        model: "A2483, A2636, A2639, A2640, A2638"
    }, {
        name: "iPhone 13 Pro Max",
        model: "A2484, A2641, A2644, A2645, A2643"
    }, {
        name: "iPhone 14",
        model: "A2882, A2649, A2881, A2884, A2883"
    }, {
        name: "iPhone 14 Plus",
        model: "A2886, A2632, A2885, A2896, A2887"
    }, {
        name: "iPhone 14 Pro",
        model: "A2890, A2650, A2889, A2892"
    }, {
        name: "iPhone 14 Pro Max",
        model: "A2894, A2651, A2893, A2895"
    }, {
        name: "iPhone 15",
        model: "A3090, A2846, A3089, A3092, iPhone15,4"
    }, {
        name: "iPhone 15 Plus",
        model: "A3094, A2847, A3093, A3096, iPhone15,5"
    }, {
        name: "iPhone 15 Pro",
        model: "A2848, A3101, A3102, A3104, iPhone16,1"
    }, {
        name: "iPhone 15 Pro Max",
        model: "A2849, A3105, A3106, A3108, iPhone16,2"
    }, {
        name: "iPhone 16",
        model: ""
    }, {
        name: "iPhone 16 Plus",
        model: ""
    }, {
        name: "iPhone 16 Pro",
        model: ""
    }, {
        name: "iPhone 16 Pro Max",
        model: ""
    }, {
        name: "iPad 1st Gen (2010)",
        model: "A1219, A1337"
    }, {
        name: "iPad 2nd Gen (2011)",
        model: "A1395, A1396, A1397"
    }, {
        name: "iPad 3rd Gen (2012)",
        model: "A1416, A1430, A1403"
    }, {
        name: "iPad 4th Gen (2012)",
        model: "A1458, A1459, A1460"
    }, {
        name: "iPad 5th Gen (2017)",
        model: "A1822, A1823"
    }, {
        name: "iPad 6th Gen (2018)",
        model: "A1893, A1954"
    }, {
        name: "iPad 7th Gen (2019)",
        model: "A2197, A2198, A2200"
    }, {
        name: "iPad 8th Gen (2020)",
        model: "A2270, A2428, A2429, A2430"
    }, {
        name: "iPad 9th Gen (2021)",
        model: "A2603, A2604"
    }, {
        name: "iPad 10th Gen (2022)",
        model: "A2757, A2777"
    }, {
        name: "iPad mini (2012)",
        model: "A1432, A1454, A1455"
    }, {
        name: "iPad mini 2 (2013)",
        model: "A1489, A1490, A1491"
    }, {
        name: "iPad mini 3 (2014)",
        model: "A1599, A1600"
    }, {
        name: "iPad mini 4 (2015)",
        model: "A1538, A1550"
    }, {
        name: "iPad mini 5 (2019)",
        model: "A2133, A2124, A2126, A2125"
    }, {
        name: "iPad mini 6 (2021)",
        model: "A2567, A2568, A2569"
    }, {
        name: "iPad Air (2013)",
        model: "A1474, A1475, A1476"
    }, {
        name: "iPad Air 2 (2014)",
        model: "A1566, A1567"
    }, {
        name: "iPad Air 3 (2019)",
        model: "A2152, A2123, A2153, A2154"
    }, {
        name: "iPad Air 4 (2020)",
        model: "A2316, A2324, A2325, A2072"
    }, {
        name: "iPad Air 5 (2022)",
        model: "A2589, A2591"
    }, {
        name: "iPad Pro 9.7-inch (2016)",
        model: "A1673, A1674, A1675"
    }, {
        name: "iPad Pro 10.5-inch (2017)",
        model: "A1701, A1709"
    }, {
        name: "iPad Pro 11-inch 1st Gen (2018)",
        model: "A1980, A1934, A2013, A1979"
    }, {
        name: "iPad Pro 11-inch 2nd Gen (2020)",
        model: "A2228, A2068, A2230, A2231"
    }, {
        name: "iPad Pro 11-inch 3rd Gen (2021)",
        model: "A2377, A2459, A2301, A2460"
    }, {
        name: "iPad Pro 11-inch 4th Gen (2022)",
        model: "A2435, A2761, A2762"
    }, {
        name: "iPad Pro 12.9-inch 1st Gen (2015)",
        model: "A1584, A1652"
    }, {
        name: "iPad Pro 12.9-inch 2nd Gen (2017)",
        model: "A1670, A1671"
    }, {
        name: "iPad Pro 12.9-inch 3rd Gen (2018)",
        model: "A1876, A1895, A2014, A1983"
    }, {
        name: "iPad Pro 12.9-inch 4th Gen (2020)",
        model: "A2069, A2232"
    }, {
        name: "iPad Pro 12.9-inch 5th Gen (2021)",
        model: "A2378, A2431, A2379, A2462"
    }, {
        name: "iPad Pro 12.9-inch 6th Gen (2022)",
        model: "A2764, A2437, A2766"
    }],
    // Blackberry
    B: [{
        name: "Priv",
        model: "STV100-4, STV100-3, STV100-1, V100, STV100-2"
    }, {
        name: "DTEK50",
        model: "STH100-2, STH100-1"
    }, {
        name: "DTEK60",
        model: "BBA100-2, BBA100-1"
    }, {
        name: "Keyone",
        model: "BBB100-2, BBB100-7, BBB100-1, BBB100-5, BBB100-3"
    }, {
        name: "Key2",
        model: "BBF100-2, BBF100-1, BBF100-4, BBF100-6"
    }, {
        name: "Key2 LE",
        model: "BBE100-4, BBE100-5, BBE100-1, BBE100-2"
    }],
    // Google
    G: [{
        name: "Pixel",
        model: "G-2PW4100, G-2PW4200"
    }, {
        name: "Pixel XL",
        model: "G-2PW2100, G-2PW2200"
    }, {
        name: "Pixel 2",
        model: "G011A"
    }, {
        name: "Pixel 2 XL",
        model: "G011C"
    }, {
        name: "Pixel 3",
        model: "G013A"
    }, {
        name: "Pixel 3 XL",
        model: "G013C"
    }, {
        name: "Pixel 3A",
        model: "G020E, G020F, G020G, G020H"
    }, {
        name: "Pixel 3A XL",
        model: "G020A, G020B, G020C, G020D"
    }, {
        name: "Pixel 4",
        model: "G020I, GA01188-US, GA01187-US, GA01189-US, GA01191-US, GA01189-US"
    }, {
        name: "Pixel 4 XL",
        model: "G020J, GA01181-US, GA01182-US, GA01180-US"
    }, {
        name: "Pixel 4A",
        model: "G025J, G025N, G025M"
    }, {
        name: "Pixel 4A 5G",
        model: "GD1YQ, G025I"
    }, {
        name: "Pixel 5",
        model: "GD1YQ, GTT9Q, G5NZ6"
    }, {
        name: "Pixel 5A 5G",
        model: "G1F8F, G4S1M"
    }, {
        name: "Pixel 6",
        model: "GB7N6, G9S9B16"
    }, {
        name: "Pixel 6 Pro",
        model: "GLUOG, G8VOU"
    }, {
        name: "Pixel 6A",
        model: "GX7AS, GB62Z, G1AZG"
    }, {
        name: "Pixel 7",
        model: "GVU6C, GQML3"
    }, {
        name: "Pixel 7 Pro",
        model: "GP4BC, GE2AE"
    }, {
        name: "Pixel 7A",
        model: "GWKK3, GHL1X, G0DZQ, G82U8"
    }, {
        name: "Pixel 8",
        model: "GKWS6, G9BQD, GA04851-US, GZPFO, GPJ41"
    }, {
        name: "Pixel 8 Pro",
        model: "GC3VE, G1MNW"
    }, {
        name: "Pixel 9",
        model: ""
    }, {
        name: "Pixel 9 Pro",
        model: ""
    }, {
        name: "Pixel 9 Pro XL",
        model: ""
    }, {
        name: "Pixel 9 Pro Fold",
        model: ""
    }],
    // Huawei
    H: [{
        name: "P10 Lite",
        model: "WAS-L03T"
    }, {
        name: "P10",
        model: "VTR-L09, VTR-L29"
    }, {
        name: "P10 Plus",
        model: "VKY-L09, VKY-L29"
    }, {
        name: "P20 Lite",
        model: "ANE-LX1, ANE-LX2"
    }, {
        name: "P20",
        model: "EML-L09C, EML-L29C"
    }, {
        name: "P20 Pro",
        model: "CLT-L09, CLT-L29"
    }, {
        name: "P30 Lite",
        model: "MAR-LAX3A"
    }, {
        name: "P30",
        model: "ELE-L29, ELE-L09, ELE-L04"
    }, {
        name: "P30 Pro",
        model: "VOG-L29, VOG-L09, VOG-L04"
    }, {
        name: "P40",
        model: "ANA-AN00, ANA-TN00, ANA-NX9"
    }, {
        name: "P40 Pro",
        model: "ELS-NX9, ELS-N04, ELS-AN00, ELS-TN00"
    }, {
        name: "Mate 10",
        model: "ALP-L09, ALP-L29"
    }, {
        name: "Mate 10 Pro",
        model: "BLA-L09, BLA-L29"
    }, {
        name: "Mate 20",
        model: "HMA-L09, HMA-L29"
    }, {
        name: "Mate 20 Pro",
        model: "LYA-L09, LYA-L29"
    }, {
        name: "Mate 30",
        model: "TAS-L09, TAS-L29"
    }, {
        name: "Mate 30 Pro",
        model: "LIO-L09, LIO-L29"
    }, {
        name: "Mate 30 Pro 5G",
        model: "LIO-N29"
    }],
    // LG
    L: [{
        name: "G3",
        model: "LGD852"
    }, {
        name: "G4",
        model: "LGH812"
    }, {
        name: "G5",
        model: "LGH831"
    }, {
        name: "G6",
        model: "LGH873"
    }, {
        name: "G6 Plus",
        model: "LGH873U"
    }, {
        name: "G7",
        model: "LMG710AWM"
    }, {
        name: "G7 One",
        model: "LMQ910UM2"
    }, {
        name: "G8",
        model: "LMG820UM2"
    }, {
        name: "G8X",
        model: "LMG850UM2X"
    }, {
        name: "G8X Dual Screen",
        model: "LMV515N"
    }, {
        name: "Velvet 5G",
        model: "LMG900UM2"
    }, {
        name: "Wing",
        model: "LMF100N"
    }, {
        name: "K4",
        model: "LGK121"
    }, {
        name: "K4 (Europe)",
        model: "LGK120E"
    }, {
        name: "K4 (2017)",
        model: "LGK121"
    }, {
        name: "K9",
        model: "LMX210WM"
    }, {
        name: "K20",
        model: "LMX120WM"
    }, {
        name: "K30",
        model: "LMX320WM"
    }, {
        name: "K31",
        model: "LMK300WM"
    }, {
        name: "K32",
        model: "LMK200WM"
    }, {
        name: "K41S",
        model: "LMK410WM"
    }, {
        name: "K61",
        model: "LMQ630UM"
    }, {
        name: "X Power",
        model: "LGK210"
    }, {
        name: "X Power 2",
        model: "LGM320G"
    }, {
        name: "X Power 3",
        model: "LMX510WM"
    }, {
        name: "Nexus 4",
        model: "LGE960"
    }, {
        name: "Nexus 5X",
        model: "LGH790"
    }, {
        name: "Q Stylo Plus",
        model: "LMQ710WA"
    }, {
        name: "Q6",
        model: "LGM703"
    }, {
        name: "Q60",
        model: "LMX525WA"
    }, {
        name: "Q70",
        model: "LMQ620WA"
    }, {
        name: "Stylo",
        model: "LGH636"
    }, {
        name: "Stylo 2 Plus",
        model: "LGK557"
    }, {
        name: "Stylo 3 Plus",
        model: "LGM470"
    }, {
        name: "Stylo 4 Plus",
        model: "LMQ710WA"
    }, {
        name: "V20",
        model: "LGH915"
    }, {
        name: "V30",
        model: "LGH933"
    }, {
        name: "V60",
        model: "LMV600TM2X"
    }, {
        name: "V60 Dual Screen",
        model: "LMV605N"
    }, {
        name: "F4NR Freedom + Videotron",
        model: "LGA448"
    }, {
        name: "F4NR Rogers",
        model: "LGC441"
    }, {
        name: "G Pad II",
        model: "LGV497"
    }, {
        name: "G Pad IV",
        model: "LGV533"
    }, {
        name: "G Pad™ III 8.0 FHD",
        model: "LGV522"
    }],
    // Motorola
    M: [{
        name: "Moto G",
        model: "XT1031"
    }, {
        name: "Moto G2",
        model: "XT1068"
    }, {
        name: "Moto G3",
        model: "XT1540"
    }, {
        name: "Moto G4",
        model: "XT1625"
    }, {
        name: "Moto G4 Play",
        model: "XT1607"
    }, {
        name: "Moto G4 Plus",
        model: "XT1644"
    }, {
        name: "Moto G5",
        model: "XT1670"
    }, {
        name: "Moto G5 Plus",
        model: "XT1687"
    }, {
        name: "Moto G5S",
        model: "XT1793"
    }, {
        name: "Moto G5S Plus",
        model: "XT1806"
    }, {
        name: "Moto G6",
        model: "XT1925"
    }, {
        name: "Moto G6 Play",
        model: "XT1922"
    }, {
        name: "Moto G6 Plus",
        model: "XT1926"
    }, {
        name: "Moto G7",
        model: "XT1962"
    }, {
        name: "Moto G7 Power",
        model: "XT1955"
    }, {
        name: "Moto G7 Play",
        model: "XT1952"
    }, {
        name: "Moto G7 Plus",
        model: "XT1965"
    }, {
        name: "Moto G8 Plus",
        model: "XT2019"
    }
    ],
    // Samsung
    S: [{
        name: "Galaxy S3",
        model: "SGH-I747M"
    }, {
        name: "Galaxy S4",
        model: "SGH-I337M, SGH-I747M"
    }, {
        name: "Galaxy S4 Mini",
        model: "SGH-I257M"
    }, {
        name: "Galaxy S5",
        model: "SM-G900W"
    }, {
        name: "Galaxy S5 Neo",
        model: "SM-G903W"
    }, {
        name: "Galaxy S5 Active",
        model: "SM-G870W"
    }, {
        name: "Galaxy S6",
        model: "SM-G920W"
    }, {
        name: "Galaxy S6 Edge",
        model: "SM-G925W8"
    }, {
        name: "Galaxy S6 Edge Plus",
        model: "SM-G928W8"
    }, {
        name: "Galaxy S7",
        model: "SM-G930W8"
    }, {
        name: "Galaxy S7 Edge",
        model: "SM-G935W8"
    }, {
        name: "Galaxy S8",
        model: "SM-G950W"
    }, {
        name: "Galaxy S8 Plus",
        model: "SM-G955W"
    }, {
        name: "Galaxy S9",
        model: "SM-G960W"
    }, {
        name: "Galaxy S9 Plus",
        model: "SM-G965W"
    }, {
        name: "Galaxy 10e",
        model: "SM-G970W"
    }, {
        name: "Galaxy S10",
        model: "SM-G973W"
    }, {
        name: "Galaxy S10 Plus",
        model: "SM-G975W"
    }, {
        name: "Galaxy S20",
        model: "SM-G981W"
    }, {
        name: "Galaxy S20 Plus",
        model: "SM-G986W"
    }, {
        name: "Galaxy S20 Ultra",
        model: "SM-G988W"
    }, { 
        name: "Galaxy S20 FE",
        model: "SM-G781W"
    }, {
        name: "Galaxy S21",
        model: "SM-G991W"
    }, {
        name: "Galaxy S21 Plus",
        model: "SM-G996W"
    }, {
        name: "Galaxy S21 Ultra",
        model: "SM-G998W"
    }, { 
        name: "Galaxy S21 FE",
        model: "SM-G990W"
    }, {
        name: "Galaxy S22",
        model: "SM-S901W"
    }, {
        name: "Galaxy S22 Plus",
        model: "SM-S906W"
    }, {
        name: "Galaxy S22 Ultra",
        model: "SM-S908W"
    }, {
        name: "Galaxy S23",
        model: "SM-S911W"
    }, {
        name: "Galaxy S23 Plus",
        model: "SM-S916W"
    }, {
        name: "Galaxy S23 Ultra",
        model: "SM-S918W"
    }, {
        name: "Galaxy S23 FE",
        model: "SM-S711W"
    }, {
        name: "Galaxy S24",
        model: "SM-S921W"
    }, {
        name: "Galaxy S24 Plus",
        model: "SM-S926W"
    }, {
        name: "Galaxy S24 Ultra",
        model: "SM-S928W"
    }, {
        name: "Galaxy Note 2",
        model: "SGH-I317M"
    }, {
        name: "Galaxy Note 3",
        model: "SM-N900W8"
    }, {
        name: "Galaxy Note 4",
        model: "SM-N910W8"
    }, {
        name: "Galaxy Note 5",
        model: "SM-N920W8"
    }, {
        name: "Galaxy Note 8",
        model: "SM-N950W"
    }, {
        name: "Galaxy Note 9",
        model: "SM-N960W"
    }, {
        name: "Galaxy Note 10 Plus",
        model: "SM-N975W"
    }, {
        name: "Galaxy Note 20",
        model: "SM-N981W"
    }, {
        name: "Galaxy Note 20 Ultra",
        model: "SM-N986W"
    }, {
        name: "Galaxy A03",
        model: "SM-A037W"
    }, {
        name: "Galaxy A5 (2015)",
        model: "SM-A500W"
    }, {
        name: "Galaxy A5 (2017)",
        model: "SM-A520W"
    }, {
        name: "Galaxy A8",
        model: "SM-A530W"
    }, {
        name: "Galaxy A10e",
        model: "SM-A102W"
    }, {
        name: "Galaxy A11",
        model: "SM-A155W"
    }, {
        name: "Galaxy A12",
        model: "SM-A125W"
    }, {
        name: "Galaxy A13",
        model: "SM-A136W"
    }, {
        name: "Galaxy A14",
        model: "SM-A146W"
    }, {
        name: "Galaxy A20",
        model: "SM-A205W"
    }, {
        name: "Galaxy A21",
        model: "SM-A215W"
    }, {
        name: "Galaxy A32",
        model: "SM-A326W"
    }, {
        name: "Galaxy A33",
        model: "SM-A336W"
    }, {
        name: "Galaxy A50",
        model: "SM-A505W"
    }, {
        name: "Galaxy A51",
        model: "SM-A515W"
    }, {
        name: "Galaxy A52",
        model: "SM-A526W"
    }, {
        name: "Galaxy A53",
        model: "SM-A536W"
    }, {
        name: "Galaxy A54",
        model: "SM-A546W"
    }, {
        name: "Galaxy A70",
        model: "SM-A705W"
    }, {
        name: "Galaxy A71",
        model: "SM-A715W"
    }, {
        name: "Galaxy A32",
        model: "SM-A326W"
    }, {
        name: "Galaxy A35",
        model: "SM-A356W"
    }, {
        name: "Galaxy J1",
        model: "SM-J120W"
    }, {
        name: "Galaxy J3",
        model: "SM-J320W8"
    }, {
        name: "Galaxy J3 Prime",
        model: "SM-J327W"
    }, {
        name: "Galaxy J3 (2018)",
        model: "SM-J337W"
    }, {  
        name: "Galaxy Z-Flip",
        model: "SM-F700W"
    }, {  
        name: "Galaxy Z-Flip 5G",
        model: "SM-F707W"
    }, {  
        name: "Galaxy Z-Flip 3 5G",
        model: "SM-F711W"
    }, {  
        name: "Galaxy Z-Flip 4 5G",
        model: "SM-F721W"
    }, {  
        name: "Galaxy Z-Flip 5 5G",
        model: "SM-F731W"
    }, {  
        name: "Galaxy Z-Fold",
        model: "SM-F900W"
    }, {  
        name: "Galaxy Z-Fold 2",
        model: "SM-F916W"
    }, {  
        name: "Galaxy Z-Fold 3",
        model: "SM-F926W"
    }, {  
        name: "Galaxy Z-Fold 4",
        model: "SM-F936W"
    }, {  
        name: "Galaxy Z-Fold 5",
        model: "SM-F946W"
    }, {  
        name: "Galaxy XCover Pro",
        model: "SM-G715W"
    }, {
        name: "Galaxy Tab 3 Lite 7.0",
        model: "SM-T110"
    }, {
        name: "Galaxy Tab 3 7.0",
        model: "SM-T210R"
    }, {
        name: "Galaxy Tab 3 8.0",
        model: "SM-T310"
    }, {
        name: "Galaxy Tab 4 7.0",
        model: "SM-T230NU"
    }, {
        name: "Galaxy Tab 4 8.0",
        model: "SM-T330NU"
    }, {
        name: "Galaxy Tab 4 10.1",
        model: "SM-T530NU"
    }, {
        name: "Galaxy Tab Pro 8.4",
        model: "SM-T320"
    }, {
        name: "Galaxy Tab Pro 10.1",
        model: "SM-T520"
    }, {
        name: "Galaxy Tab Pro 12.2",
        model: "SM-T900"
    }, {
        name: "Galaxy Tab E Lite 7.0",
        model: "SM-T113"
    }, {
        name: "Galaxy Tab E 8.0",
        model: "SM-T377W"
    }, {
        name: "Galaxy Tab A 7.0",
        model: "SM-T280"
    }, {
        name: "Galaxy Tab A 8.0",
        model: "SM-T350"
    }, {
        name: "Galaxy Tab A 8.0 LTE",
        model: "SM-T357W"
    }, {
        name: "Galaxy Tab A 8.0 (2017)",
        model: "SM-T380"
    }, {
        name: "Galaxy Tab A 8.0 (2018)",
        model: "SM-T387W"
    }, {
        name: "Galaxy Tab A 8.0 (2019)",
        model: "SM-T290"
    }, {
        name: "Galaxy Tab A 8.4 (2020)",
        model: "SM-T307U"
    }, {
        name: "Galaxy Tab A 10.1 (2016)",
        model: "SM-T580"
    }, {
        name: "Galaxy Tab A 10.1 (2019)",
        model: "SM-T510"
    }, {
        name: "Galaxy Tab A 10.5 (2018)",
        model: "SM-T590"
    }, {
        name: "Galaxy Tab A 10.5 LTE (2018)",
        model: "SM-T597W"
    }, {
        name: "Galaxy Tab S 8.4",
        model: "SM-T700"
    }, {
        name: "Galaxy Tab S 8.4 LTE",
        model: "SM-T705W"
    }, {
        name: "Galaxy Tab S 10.5 (2014)",
        model: "SM-T800"
    }, {
        name: "Galaxy Tab S 10.5 (2014)",
        model: "SM-T805W"
    }, {
        name: "Galaxy Tab S2 8.0",
        model: "SM-T710, SM-T713"
    }, {
        name: "Galaxy Tab S2 9.7",
        model: "SM-T810"
    }, {
        name: "Galaxy Tab S2 VE 9.7",
        model: "SM-T710, SM-T813"
    }, {
        name: "Galaxy Tab S2 9.7 LTE",
        model: "SM-T817W, SM-T818W"
    }, {
        name: "Galaxy Tab S3 9.7",
        model: "SM-T820"
    }, {
        name: "Galaxy Tab S4 10.5",
        model: "SM-T830"
    }, {
        name: "Galaxy Tab S5e 10.5",
        model: "SM-T720"
    }, {
        name: "Galaxy Tab S6 10.1",
        model: "SM-T860"
    }, {
        name: "Galaxy View 18.4 (2015)",
        model: "SM-T670"
    }, {
        name: "Galaxy View 2 18.4 (2019)",
        model: "SM-T927"
    }]

}

function changecat(value) {
    if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
    else {
        var catOptions = "";
        for (var categoryId in brandByCategory[value]) {
            catOptions += `<option value = "${brandByCategory[value][categoryId].model}">${brandByCategory[value][categoryId].name}</option>`;
        }
        document.getElementById("category").innerHTML = catOptions;
    }
}
var input = document.getElementById("modelNumber")

function populateValue(val) {
    input.value = val;
}