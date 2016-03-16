var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":116,"id":4627,"methods":[{"el":50,"sc":2,"sl":47},{"el":65,"sc":2,"sl":55},{"el":73,"sc":2,"sl":71},{"el":81,"sc":2,"sl":79},{"el":89,"sc":2,"sl":87},{"el":97,"sc":2,"sl":95},{"el":104,"sc":2,"sl":99},{"el":114,"sc":2,"sl":106}],"name":"SignedData","sl":34}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_249":{"methods":[{"sl":47},{"sl":79},{"sl":99}],"name":"Verify that constructor contains Ieee1609Dot2Data  if content  fullfill requirements","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":80},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_257":{"methods":[{"sl":55},{"sl":99}],"name":"Verify that IllegalArgumentException is thrown if both data and exthash is null","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_35":{"methods":[{"sl":47},{"sl":55},{"sl":79},{"sl":87},{"sl":95},{"sl":99}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":88},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_381":{"methods":[{"sl":71},{"sl":79},{"sl":87},{"sl":95},{"sl":106}],"name":"Verify toString","pass":true,"statements":[{"sl":72},{"sl":80},{"sl":88},{"sl":96},{"sl":108}]},"test_385":{"methods":[{"sl":55},{"sl":79},{"sl":87},{"sl":95},{"sl":99}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":88},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_406":{"methods":[{"sl":55},{"sl":79},{"sl":87},{"sl":95},{"sl":99}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":88},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_413":{"methods":[{"sl":55},{"sl":79},{"sl":99}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_482":{"methods":[{"sl":55},{"sl":79},{"sl":87},{"sl":95},{"sl":99}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":88},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_485":{"methods":[{"sl":55},{"sl":79},{"sl":99}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_542":{"methods":[{"sl":71},{"sl":79},{"sl":87},{"sl":95},{"sl":106}],"name":"Verify toString","pass":true,"statements":[{"sl":72},{"sl":80},{"sl":88},{"sl":96},{"sl":108}]},"test_547":{"methods":[{"sl":55},{"sl":99}],"name":"Verify that buildRecieverStore generates a correct HashedId8 to Receiver Map","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_563":{"methods":[{"sl":71},{"sl":79},{"sl":87},{"sl":95},{"sl":106}],"name":"Verify toString","pass":true,"statements":[{"sl":72},{"sl":80},{"sl":88},{"sl":96},{"sl":108}]},"test_608":{"methods":[{"sl":55},{"sl":79},{"sl":99}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_616":{"methods":[{"sl":47},{"sl":71},{"sl":79},{"sl":87},{"sl":95},{"sl":99},{"sl":106}],"name":"Verify that reference structure from D.5.2.2 of P1909.2_D12 is parsed and regenerated correctly","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":72},{"sl":80},{"sl":88},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":108}]},"test_686":{"methods":[{"sl":55},{"sl":79},{"sl":87},{"sl":95},{"sl":99}],"name":"Verify that signed SecuredCrl with signed data is generated correctly","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":88},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_693":{"methods":[{"sl":55},{"sl":79},{"sl":99}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_746":{"methods":[{"sl":55},{"sl":71},{"sl":79},{"sl":87},{"sl":95},{"sl":99},{"sl":106}],"name":"Verify toString","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":72},{"sl":80},{"sl":88},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":108}]},"test_75":{"methods":[{"sl":55},{"sl":79},{"sl":87},{"sl":95},{"sl":99}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":88},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_774":{"methods":[{"sl":47},{"sl":55},{"sl":79},{"sl":87},{"sl":95},{"sl":99}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":80},{"sl":88},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_942":{"methods":[{"sl":47},{"sl":79},{"sl":99}],"name":"Verify that constructor contains Ieee1609Dot2Data  if content  fullfill requirements","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":80},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_955":{"methods":[{"sl":47},{"sl":99}],"name":"Verify that  Ieee1609Dot2Content is correctly encoded for type signedData","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]},"test_974":{"methods":[{"sl":47},{"sl":55},{"sl":71},{"sl":79},{"sl":87},{"sl":95},{"sl":99}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":56},{"sl":57},{"sl":58},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":72},{"sl":80},{"sl":88},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":103}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [35, 974, 942, 249, 774, 616, 955], [35, 974, 942, 249, 774, 616, 955], [35, 974, 942, 249, 774, 616, 955], [], [], [], [], [], [35, 686, 547, 974, 746, 385, 413, 406, 75, 774, 257, 608, 693, 485, 482], [35, 686, 547, 974, 746, 385, 413, 406, 75, 774, 257, 608, 693, 485, 482], [35, 686, 547, 974, 746, 385, 413, 406, 75, 774, 257, 608, 693, 485, 482], [35, 686, 547, 974, 746, 385, 413, 406, 75, 774, 257, 608, 693, 485, 482], [257], [], [35, 686, 547, 974, 746, 385, 413, 406, 75, 774, 257, 608, 693, 485, 482], [35, 686, 547, 974, 746, 385, 413, 406, 75, 774, 257, 608, 693, 485, 482], [35, 686, 547, 974, 746, 385, 413, 406, 75, 774, 257, 608, 693, 485, 482], [35, 686, 547, 974, 746, 385, 413, 406, 75, 774, 257, 608, 693, 485, 482], [], [], [], [], [], [], [974, 746, 542, 563, 381, 616], [974, 746, 542, 563, 381, 616], [], [], [], [], [], [], [35, 686, 974, 746, 542, 385, 942, 249, 413, 406, 75, 774, 608, 563, 381, 693, 616, 485, 482], [35, 686, 974, 746, 542, 385, 942, 249, 413, 406, 75, 774, 608, 563, 381, 693, 616, 485, 482], [], [], [], [], [], [], [35, 686, 974, 746, 542, 385, 406, 75, 774, 563, 381, 616, 482], [35, 686, 974, 746, 542, 385, 406, 75, 774, 563, 381, 616, 482], [], [], [], [], [], [], [35, 686, 974, 746, 542, 385, 406, 75, 774, 563, 381, 616, 482], [35, 686, 974, 746, 542, 385, 406, 75, 774, 563, 381, 616, 482], [], [], [35, 686, 547, 974, 746, 385, 942, 249, 413, 406, 75, 774, 257, 608, 693, 616, 485, 955, 482], [35, 686, 547, 974, 746, 385, 942, 249, 413, 406, 75, 774, 257, 608, 693, 616, 485, 955, 482], [35, 686, 547, 974, 746, 385, 942, 249, 413, 406, 75, 774, 257, 608, 693, 616, 485, 955, 482], [35, 686, 547, 974, 746, 385, 942, 249, 413, 406, 75, 774, 257, 608, 693, 616, 485, 955, 482], [35, 686, 547, 974, 746, 385, 942, 249, 413, 406, 75, 774, 257, 608, 693, 616, 485, 955, 482], [], [], [746, 542, 563, 381, 616], [], [746, 542, 563, 381, 616], [], [], [], [], [], [], [], []]