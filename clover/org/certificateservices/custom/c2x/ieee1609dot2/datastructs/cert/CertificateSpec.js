var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":318,"id":9411,"methods":[{"el":300,"sc":2,"sl":268},{"el":111,"sc":2,"sl":86},{"el":139,"sc":2,"sl":114},{"el":160,"sc":2,"sl":142},{"el":171,"sc":2,"sl":162},{"el":178,"sc":2,"sl":173},{"el":210,"sc":2,"sl":183},{"el":265,"sc":2,"sl":261}],"name":"CertificateSpec","sl":78}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_16":{"methods":[{"sl":114}],"name":"Verify that constructor and getters are correct and it is correctly encoded for implicit certificates","pass":true,"statements":[{"sl":117},{"sl":119},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":131},{"sl":134},{"sl":136},{"sl":138}]},"test_172":{"methods":[{"sl":261}],"name":"Verify toString","pass":true,"statements":[{"sl":263},{"sl":264}]},"test_437":{"methods":[{"sl":86}],"name":"Verify that constructor and getters are correct and it is correctly encoded for explicit certificates","pass":true,"statements":[{"sl":89},{"sl":91},{"sl":93},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":104},{"sl":106},{"sl":108},{"sl":110}]},"test_54":{"methods":[{"sl":173}],"name":"Verify that IllegalArgumentException is thrown if none of required premissions doesn't exists for implicit certificate","pass":true,"statements":[{"sl":175},{"sl":177}]},"test_55":{"methods":[{"sl":162}],"name":"Verify that IllegalArgumentException is thrown if none of required premissions doesn't exists for explicit certificate","pass":true,"statements":[{"sl":164},{"sl":166},{"sl":168},{"sl":170}]},"test_685":{"methods":[{"sl":183}],"name":"Verify that it is possible to parse the reference implicit certificate","pass":true,"statements":[{"sl":185},{"sl":187},{"sl":208}]},"test_939":{"methods":[{"sl":142}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":145},{"sl":147},{"sl":149},{"sl":151},{"sl":153},{"sl":155},{"sl":157},{"sl":159}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [437], [], [], [437], [], [437], [], [437], [], [437], [437], [437], [437], [437], [], [], [], [], [437], [], [437], [], [437], [], [437], [], [], [], [16], [], [], [16], [], [16], [], [16], [], [16], [16], [16], [16], [16], [], [], [], [16], [], [], [16], [], [16], [], [16], [], [], [], [939], [], [], [939], [], [939], [], [939], [], [939], [], [939], [], [939], [], [939], [], [939], [], [], [55], [], [55], [], [55], [], [55], [], [55], [], [], [54], [], [54], [], [54], [], [], [], [], [], [685], [], [685], [], [685], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [685], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [172], [], [172], [172], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]