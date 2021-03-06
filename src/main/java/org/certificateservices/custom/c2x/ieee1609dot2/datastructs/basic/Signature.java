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
package org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic;

import java.io.IOException;

import org.certificateservices.custom.c2x.asn1.coer.COERChoice;
import org.certificateservices.custom.c2x.asn1.coer.COERChoiceEnumeration;
import org.certificateservices.custom.c2x.asn1.coer.COEREncodable;
import org.certificateservices.custom.c2x.common.crypto.Algorithm;
import org.certificateservices.custom.c2x.common.crypto.Algorithm.Hash;
import org.certificateservices.custom.c2x.common.crypto.AlgorithmIndicator;

/**
 * This structure represents a signature for a supported public key algorithm. 
 * It may be contained within one of a number of data structures: SignedData, Certificate.
 * 
 * @author Philip Vendil, p.vendil@cgi.com
 *
 */
public class Signature extends COERChoice {
	
	
	private static final long serialVersionUID = 1L;


	public enum SignatureChoices implements COERChoiceEnumeration, AlgorithmIndicator{
		ecdsaNistP256Signature(EcdsaP256Signature.class, false),
		ecdsaBrainpoolP256r1Signature(EcdsaP256Signature.class, false),
		ecdsaBrainpoolP384r1Signature(EcdsaP384Signature.class, true);

		private Class<COEREncodable> emptyEncodableClass;
		private boolean isExtension;

		SignatureChoices(Class<?> emptyEncodableClass, boolean isExtension){
			this.emptyEncodableClass = (Class<COEREncodable>) emptyEncodableClass;
			this.isExtension = isExtension;
		}

		@Override
		public COEREncodable getEmptyCOEREncodable() throws IOException {
			try {
				return emptyEncodableClass.newInstance();
			}catch (Exception e){
				throw new IOException("Problems generating new instance of " + emptyEncodableClass.getName() + ", message: " + e.getMessage(),e);
			}
		}

		/**
		 * @return true if this entry is an extension or false if  regular choice
		 */
		@Override
		public boolean isExtension() {
			return isExtension;
		}

		@Override
		public Algorithm getAlgorithm() {
			switch (this) {
				case ecdsaNistP256Signature:
					return new Algorithm(null,Algorithm.Signature.ecdsaNistP256, null,Hash.sha256);
				case ecdsaBrainpoolP256r1Signature:
					return new Algorithm(null,Algorithm.Signature.ecdsaBrainpoolP256r1, null,Hash.sha256);
				case ecdsaBrainpoolP384r1Signature:
				default:
					return new Algorithm(null,Algorithm.Signature.ecdsaBrainpoolP384r1, null,Hash.sha384);
			}	
		}
	}
	
	/**
	 * Constructor used when encoding.
	 */
	public Signature(SignatureChoices choice, EcdsaP256Signature value) {
		super(choice, value);
	}

	/**
	 * Constructor used when encoding.
	 */
	public Signature(SignatureChoices choice, EcdsaP384Signature value) {
		super(choice, value);
	}


	/**
	 * Constructor used when decoding.
	 */
	public Signature() {
		super(SignatureChoices.class);
	}
		
	/**
	 * Returns the type of signature.
	 */
	public SignatureChoices getType(){
		return (SignatureChoices) choice;
	}

	@Override
	public String toString() {
		return "Signature [" + choice + "=" +  value + "]";
	}
	
}
