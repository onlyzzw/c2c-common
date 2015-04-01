var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":66,"id":2480,"methods":[{"el":48,"sc":2,"sl":46},{"el":52,"sc":2,"sl":50},{"el":64,"sc":2,"sl":57}],"name":"SubjectAttributeType","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":50}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":51}]},"test_102":{"methods":[{"sl":50}],"name":"Verify that its_aid_list has bytevalue 32","pass":true,"statements":[{"sl":51}]},"test_104":{"methods":[{"sl":57}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_106":{"methods":[{"sl":50}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":51}]},"test_108":{"methods":[{"sl":57}],"name":"Verify deserialization","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_112":{"methods":[{"sl":50},{"sl":57}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":51},{"sl":58},{"sl":59},{"sl":60}]},"test_116":{"methods":[{"sl":50}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":51}]},"test_125":{"methods":[{"sl":50},{"sl":57}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":51},{"sl":58},{"sl":59},{"sl":60}]},"test_13":{"methods":[{"sl":50}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":51}]},"test_148":{"methods":[{"sl":50},{"sl":57}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":51},{"sl":58},{"sl":59},{"sl":60}]},"test_151":{"methods":[{"sl":50},{"sl":57}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":51},{"sl":58},{"sl":59},{"sl":60}]},"test_155":{"methods":[{"sl":57}],"name":"Verify that SubjectAttributeType.getByValue returns its_aid_list for 32","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_16":{"methods":[{"sl":57}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_162":{"methods":[{"sl":50}],"name":"Verify that reconstruction_value has bytevalue 3","pass":true,"statements":[{"sl":51}]},"test_173":{"methods":[{"sl":57}],"name":"Verify that SubjectAttributeType.getByValue returns priority_its_aid_list for 34","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_175":{"methods":[{"sl":57}],"name":"Verify deserialization","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_182":{"methods":[{"sl":50}],"name":"Verify serialization","pass":true,"statements":[{"sl":51}]},"test_183":{"methods":[{"sl":57}],"name":"Verify deserialization","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_188":{"methods":[{"sl":50}],"name":"Verify that its_aid_ssp_list has bytevalue 33","pass":true,"statements":[{"sl":51}]},"test_206":{"methods":[{"sl":50}],"name":"Verify that priority_ssp_list has bytevalue 35","pass":true,"statements":[{"sl":51}]},"test_210":{"methods":[{"sl":57}],"name":"Verify that SubjectAttributeType.getByValue returns reconstruction_value for 3","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_214":{"methods":[{"sl":57}],"name":"Verify that SubjectAttributeType.getByValue returns priority_ssp_list for 35","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_231":{"methods":[{"sl":50}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":51}]},"test_232":{"methods":[{"sl":50},{"sl":57}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":51},{"sl":58},{"sl":59},{"sl":60}]},"test_233":{"methods":[{"sl":50}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":51}]},"test_239":{"methods":[{"sl":50},{"sl":57}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":51},{"sl":58},{"sl":59},{"sl":60}]},"test_246":{"methods":[{"sl":57}],"name":"Verify that SubjectAttributeType.getByValue returns encryption_key for 1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_257":{"methods":[{"sl":50}],"name":"Verify that priority_its_aid_list has bytevalue 34","pass":true,"statements":[{"sl":51}]},"test_26":{"methods":[{"sl":50}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":51}]},"test_263":{"methods":[{"sl":50}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":51}]},"test_27":{"methods":[{"sl":50},{"sl":57}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":51},{"sl":58},{"sl":59},{"sl":60}]},"test_277":{"methods":[{"sl":50}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":51}]},"test_285":{"methods":[{"sl":50}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":51}]},"test_294":{"methods":[{"sl":57}],"name":"Verify that SubjectAttributeType.getByValue returns assurance_level for 2","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_306":{"methods":[{"sl":50}],"name":"Verify that assurance_level has bytevalue 2","pass":true,"statements":[{"sl":51}]},"test_307":{"methods":[{"sl":50}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":51}]},"test_312":{"methods":[{"sl":50}],"name":"Verify serialization","pass":true,"statements":[{"sl":51}]},"test_313":{"methods":[{"sl":50}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":51}]},"test_336":{"methods":[{"sl":50}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":51}]},"test_357":{"methods":[{"sl":50}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":51}]},"test_366":{"methods":[{"sl":50}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":51}]},"test_37":{"methods":[{"sl":50}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":51}]},"test_372":{"methods":[{"sl":50}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":51}]},"test_376":{"methods":[{"sl":50},{"sl":57}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":51},{"sl":58},{"sl":59},{"sl":60}]},"test_377":{"methods":[{"sl":57}],"name":"Verify that SubjectAttributeType.getByValue returns verification_key for 0","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_404":{"methods":[{"sl":50}],"name":"Verify that encryption_key has bytevalue 1","pass":true,"statements":[{"sl":51}]},"test_405":{"methods":[{"sl":57}],"name":"Verify that SubjectAttributeType.getByValue returns its_aid_ssp_list for 33","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_6":{"methods":[{"sl":57}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60}]},"test_61":{"methods":[{"sl":50}],"name":"Verify that verification_key has bytevalue 0","pass":true,"statements":[{"sl":51}]},"test_89":{"methods":[{"sl":50}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":51}]},"test_98":{"methods":[{"sl":50}],"name":"Verify serialization","pass":true,"statements":[{"sl":51}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [277, 357, 239, 257, 26, 231, 232, 98, 306, 162, 13, 106, 206, 116, 102, 151, 89, 182, 233, 61, 37, 307, 312, 372, 336, 1, 27, 125, 404, 263, 112, 313, 148, 366, 188, 376, 285], [277, 357, 239, 257, 26, 231, 232, 98, 306, 162, 13, 106, 206, 116, 102, 151, 89, 182, 233, 61, 37, 307, 312, 372, 336, 1, 27, 125, 404, 263, 112, 313, 148, 366, 188, 376, 285], [], [], [], [], [], [155, 239, 232, 183, 104, 214, 108, 151, 294, 6, 246, 405, 377, 16, 210, 27, 125, 112, 175, 148, 376, 173], [155, 239, 232, 183, 104, 214, 108, 151, 294, 6, 246, 405, 377, 16, 210, 27, 125, 112, 175, 148, 376, 173], [155, 239, 232, 183, 104, 214, 108, 151, 294, 6, 246, 405, 377, 16, 210, 27, 125, 112, 175, 148, 376, 173], [155, 239, 232, 183, 104, 214, 108, 151, 294, 6, 246, 405, 377, 16, 210, 27, 125, 112, 175, 148, 376, 173], [], [], [], [], [], [], []]