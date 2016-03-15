/************************************************************************
 *                                                                       *
 *  Certificate Service -  Car2Car Core                                  *
 *                                                                       *
 *  This software is free software; you can redistribute it and/or       *
 *  modify it under the terms of the GNU Affero General Public License   *
 *  License as published by the Free Software Foundation; either         *
 *  version 3   of the License, or any later version.                    *
 *                                                                       *
 *  See terms of license at gnu.org.                                     *
 *                                                                       *
 *************************************************************************/
package org.certificateservices.custom.c2x.its.datastructs.basic


import org.bouncycastle.util.encoders.Hex;
import org.certificateservices.custom.c2x.common.BaseStructSpec;
import org.certificateservices.custom.c2x.its.datastructs.cert.Certificate
import org.certificateservices.custom.c2x.its.datastructs.cert.SubjectType;
import org.certificateservices.custom.c2x.its.datastructs.basic.HashedId8;
import org.certificateservices.custom.c2x.its.datastructs.basic.PublicKeyAlgorithm;
import org.certificateservices.custom.c2x.its.datastructs.basic.SignerInfo;

import spock.lang.IgnoreRest;
import spock.lang.Specification;
import spock.lang.Unroll;
import static org.certificateservices.custom.c2x.its.datastructs.basic.SignerInfoType.*;

/**
 *
 * @author Philip Vendil, p.vendil@cgi.com
 *
 */
class SignerInfoSpec extends BaseStructSpec {
	
	SignerInfo sis = new SignerInfo();
	SignerInfo sid = new SignerInfo(new HashedId8(Hex.decode("998877665544332222")));
	

	Certificate authCa = genCertificate(SubjectType.authorization_authority,"TestCA")
	SignerInfo sic = new SignerInfo(authCa);
	SignerInfo sicc = new SignerInfo([genCertificate(SubjectType.authorization_authority,"TestCA",authCa),authCa]);

	SignerInfo sipd = new SignerInfo(PublicKeyAlgorithm.ecdsa_nistp256_with_sha256, new HashedId8(Hex.decode("998877665544332111")));

	
	def "Verify the constructors and getters"(){
		expect:
		sis.signerInfoType == self
		
		sid.signerInfoType == certificate_digest_with_ecdsap256
		sid.digest.hashedId.length == 8
			
		sic.signerInfoType == certificate
		sic.certificate != null
		
		sicc.signerInfoType == certificate_chain
		sicc.certificateChain.size() == 2
		
		sipd.signerInfoType == certificate_digest_with_other_algorithm
		sipd.publicKeyAlgorithm == PublicKeyAlgorithm.ecdsa_nistp256_with_sha256
		sipd.digest.hashedId.length == 8

	}

	
	def "Verify serialization"(){
		expect:
		serializeToHex(sis) == "00"
		serializeToHex(sid) == "018877665544332222"
		serializeToHex(sic) == "0201010002065465737443412b000000000000000000000000000000000000000000000000000000000000000000000102822104010200000e000932180501093217fb09321805000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000"
		serializeToHex(sicc) == "0381990180890201010002065465737443412b000000000000000000000000000000000000000000000000000000000000000000000102822104010200000e000932180501093217fb0932180500000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000002065465737443412b000000000000000000000000000000000000000000000000000000000000000000000102822104010200000e000932180501093217fb0932180500000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001010002065465737443412b000000000000000000000000000000000000000000000000000000000000000000000102822104010200000e000932180501093217fb09321805000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000"
		serializeToHex(sipd) == "04008877665544332111"		
	}
	
	def "Verify deserialization"(){
		setup:
	    SignerInfo sis2 = deserializeFromHex(new SignerInfo(),"00");
	    SignerInfo sid2 = deserializeFromHex(new SignerInfo(),"018877665544332222");
		SignerInfo sic2 = deserializeFromHex(new SignerInfo(),"0201010002065465737443412b000000000000000000000000000000000000000000000000000000000000000000000102822104010200000e000932180501093217fb09321805000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000");
		SignerInfo sicc2 = deserializeFromHex(new SignerInfo(),"0381990180890201010002065465737443412b000000000000000000000000000000000000000000000000000000000000000000000102822104010200000e000932180501093217fb0932180500000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000002065465737443412b000000000000000000000000000000000000000000000000000000000000000000000102822104010200000e000932180501093217fb0932180500000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001010002065465737443412b000000000000000000000000000000000000000000000000000000000000000000000102822104010200000e000932180501093217fb09321805000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000");
	    SignerInfo sipd2 = deserializeFromHex(new SignerInfo(),"04008877665544332111");
		expect:
		sis2.signerInfoType == self
		
		sid2.signerInfoType == certificate_digest_with_ecdsap256
		new String(Hex.encode(sid2.digest.hashedId)) == "8877665544332222"

		sic2.signerInfoType == certificate
		sic2.certificate != null
		
		sicc2.signerInfoType == certificate_chain
		sicc2.certificateChain.size() == 2
		
		
		sipd2.signerInfoType == certificate_digest_with_other_algorithm
		sipd2.publicKeyAlgorithm == PublicKeyAlgorithm.ecdsa_nistp256_with_sha256
		new String(Hex.encode(sipd2.digest.hashedId)) == "8877665544332111"
	}

	def "Verify hashCode and equals"(){
		setup:
		SignerInfo sid2 = new SignerInfo(new HashedId8(Hex.decode("998877665544332222")));	
		expect:
		sid == sid2
		sid != sis
		sid != sic
		sid != sicc
		sid != sipd
		
		sid.hashCode() == sid2.hashCode()
		sid.hashCode() != sis.hashCode()
		sid.hashCode() != sic.hashCode()
		sid.hashCode() != sicc.hashCode()
		sid.hashCode() != sipd.hashCode()
	}
	
	def "Verify toString"(){
		expect:
		sis.toString() == "SignerInfo [signerInfoType=self]"
		sid.toString() == "SignerInfo [signerInfoType=certificate_digest_with_ecdsap256, digest=HashedId8 [hashedId=[-120, 119, 102, 85, 68, 51, 34, 34]]]"
		// TOOD sic
		// TOOD sicc
		sipd.toString() == "SignerInfo [signerInfoType=certificate_digest_with_other_algorithm, digest=HashedId8 [hashedId=[-120, 119, 102, 85, 68, 51, 33, 17]], publicKeyAlgorithm=ecdsa_nistp256_with_sha256]"
	}
}

