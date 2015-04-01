var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":124,"id":2491,"methods":[{"el":53,"sc":2,"sl":43},{"el":58,"sc":2,"sl":58},{"el":66,"sc":2,"sl":64},{"el":75,"sc":2,"sl":73},{"el":82,"sc":2,"sl":77},{"el":90,"sc":2,"sl":84},{"el":100,"sc":2,"sl":92},{"el":116,"sc":2,"sl":102},{"el":122,"sc":2,"sl":118}],"name":"SubjectInfo","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":58},{"sl":77},{"sl":84}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_103":{"methods":[{"sl":58},{"sl":77},{"sl":84}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_106":{"methods":[{"sl":118}],"name":"Verify toString","pass":true,"statements":[{"sl":120}]},"test_108":{"methods":[{"sl":77}],"name":"Verify serialization","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81}]},"test_110":{"methods":[{"sl":118}],"name":"Verify toString","pass":true,"statements":[{"sl":120}]},"test_127":{"methods":[{"sl":77}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81}]},"test_132":{"methods":[{"sl":77}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81}]},"test_150":{"methods":[{"sl":58},{"sl":64},{"sl":73},{"sl":84}],"name":"Verify deserialization ofSignature","pass":true,"statements":[{"sl":65},{"sl":74},{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_174":{"methods":[{"sl":43},{"sl":64},{"sl":73},{"sl":77}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":51},{"sl":65},{"sl":74},{"sl":79},{"sl":80},{"sl":81}]},"test_178":{"methods":[{"sl":77}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81}]},"test_181":{"methods":[{"sl":77}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81}]},"test_182":{"methods":[{"sl":43},{"sl":64},{"sl":73},{"sl":77}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":46},{"sl":65},{"sl":74},{"sl":79},{"sl":80},{"sl":81}]},"test_183":{"methods":[{"sl":58},{"sl":77},{"sl":84}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_184":{"methods":[{"sl":77}],"name":"Verify serialization","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81}]},"test_20":{"methods":[{"sl":58},{"sl":77},{"sl":84}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_24":{"methods":[{"sl":58},{"sl":84}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_256":{"methods":[{"sl":58},{"sl":84}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_26":{"methods":[{"sl":58},{"sl":77},{"sl":84}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_265":{"methods":[{"sl":43},{"sl":64},{"sl":73}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":49},{"sl":65},{"sl":74}]},"test_310":{"methods":[{"sl":64}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":65}]},"test_313":{"methods":[{"sl":43},{"sl":64},{"sl":73},{"sl":77}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":51},{"sl":65},{"sl":74},{"sl":79},{"sl":80},{"sl":81}]},"test_320":{"methods":[{"sl":58},{"sl":84}],"name":"Verify deserialization","pass":true,"statements":[{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_342":{"methods":[{"sl":43},{"sl":77}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":51},{"sl":79},{"sl":80},{"sl":81}]},"test_36":{"methods":[{"sl":58},{"sl":77},{"sl":84}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_365":{"methods":[{"sl":43},{"sl":64},{"sl":73},{"sl":77}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":46},{"sl":65},{"sl":74},{"sl":79},{"sl":80},{"sl":81}]},"test_38":{"methods":[{"sl":43},{"sl":64},{"sl":73},{"sl":77}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":51},{"sl":65},{"sl":74},{"sl":79},{"sl":80},{"sl":81}]},"test_392":{"methods":[{"sl":43},{"sl":77}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":46},{"sl":79},{"sl":80},{"sl":81}]},"test_398":{"methods":[{"sl":58},{"sl":84}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_406":{"methods":[{"sl":43},{"sl":64},{"sl":73},{"sl":77}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":51},{"sl":65},{"sl":74},{"sl":79},{"sl":80},{"sl":81}]},"test_57":{"methods":[{"sl":77}],"name":"Verify serialization of SubjectInfo","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81}]},"test_6":{"methods":[{"sl":43},{"sl":92},{"sl":102}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":51},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":99},{"sl":104},{"sl":106},{"sl":108},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_79":{"methods":[{"sl":43},{"sl":64},{"sl":73},{"sl":77}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":51},{"sl":65},{"sl":74},{"sl":79},{"sl":80},{"sl":81}]},"test_8":{"methods":[{"sl":58},{"sl":64},{"sl":84}],"name":"Verify deserialization","pass":true,"statements":[{"sl":65},{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_82":{"methods":[{"sl":43},{"sl":77}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":51},{"sl":79},{"sl":80},{"sl":81}]},"test_90":{"methods":[{"sl":43},{"sl":64},{"sl":73},{"sl":77}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":46},{"sl":65},{"sl":74},{"sl":79},{"sl":80},{"sl":81}]},"test_92":{"methods":[{"sl":58},{"sl":77},{"sl":84}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_93":{"methods":[{"sl":43},{"sl":64},{"sl":73},{"sl":77}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":51},{"sl":65},{"sl":74},{"sl":79},{"sl":80},{"sl":81}]},"test_94":{"methods":[{"sl":77}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81}]},"test_97":{"methods":[{"sl":58},{"sl":77},{"sl":84}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":86},{"sl":87},{"sl":88},{"sl":89}]},"test_99":{"methods":[{"sl":43},{"sl":64},{"sl":73},{"sl":77}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":48},{"sl":51},{"sl":65},{"sl":74},{"sl":79},{"sl":80},{"sl":81}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [174, 265, 365, 79, 342, 182, 6, 392, 406, 93, 38, 99, 313, 90, 82], [174, 265, 365, 79, 342, 182, 6, 392, 406, 93, 38, 99, 313, 90, 82], [174, 265, 365, 79, 342, 182, 6, 392, 406, 93, 38, 99, 313, 90, 82], [365, 182, 392, 90], [], [174, 265, 79, 342, 6, 406, 93, 38, 99, 313, 82], [265], [], [174, 79, 342, 6, 406, 93, 38, 99, 313, 82], [], [], [], [], [], [], [26, 8, 103, 92, 150, 256, 398, 183, 36, 1, 320, 97, 24, 20], [], [], [], [], [], [174, 8, 310, 265, 365, 150, 79, 182, 406, 93, 38, 99, 313, 90], [174, 8, 310, 265, 365, 150, 79, 182, 406, 93, 38, 99, 313, 90], [], [], [], [], [], [], [], [174, 265, 365, 150, 79, 182, 406, 93, 38, 99, 313, 90], [174, 265, 365, 150, 79, 182, 406, 93, 38, 99, 313, 90], [], [], [127, 26, 174, 57, 108, 103, 92, 365, 183, 79, 342, 182, 36, 1, 97, 392, 184, 20, 406, 181, 93, 38, 99, 178, 313, 90, 94, 132, 82], [], [127, 26, 174, 57, 108, 103, 92, 365, 183, 79, 342, 182, 36, 1, 97, 392, 184, 20, 406, 181, 93, 38, 99, 178, 313, 90, 94, 132, 82], [127, 26, 174, 57, 108, 103, 92, 365, 183, 79, 342, 182, 36, 1, 97, 392, 184, 20, 406, 181, 93, 38, 99, 178, 313, 90, 94, 132, 82], [127, 26, 174, 57, 108, 103, 92, 365, 183, 79, 342, 182, 36, 1, 97, 392, 184, 20, 406, 181, 93, 38, 99, 178, 313, 90, 94, 132, 82], [], [], [26, 8, 103, 92, 150, 256, 398, 183, 36, 1, 320, 97, 24, 20], [], [26, 8, 103, 92, 150, 256, 398, 183, 36, 1, 320, 97, 24, 20], [26, 8, 103, 92, 150, 256, 398, 183, 36, 1, 320, 97, 24, 20], [26, 8, 103, 92, 150, 256, 398, 183, 36, 1, 320, 97, 24, 20], [26, 8, 103, 92, 150, 256, 398, 183, 36, 1, 320, 97, 24, 20], [], [], [6], [], [6], [6], [6], [6], [], [6], [], [], [6], [], [6], [], [6], [], [6], [], [6], [6], [6], [6], [6], [6], [], [], [110, 106], [], [110, 106], [], [], [], []]