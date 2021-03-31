package com.generation.ghtml.bl;

import com.generation.common.*;

public class GHTML {
	
	private static String XSDPATH = "C:\\Users\\User\\eclipse-workspace\\GHTMLOffline\\validator.xsd";
	
	//private static String XSDPATH = "validator.xsd";
	
	private static GenerationXMLValidator valid;
	
	private static XMLDocument document;
	
	private static GHTML instance = null;
	
	private GHTML() {
		valid = GenerationXMLValidator.getInstance();
	};
	
	public static synchronized GHTML getInstance() {
		if (instance == null) instance = new GHTML();
		return instance;
	}

	public boolean validate(String filename) {
		return valid.validate(XSDPATH, filename);
	}

	public XMLDocument XMLfromFile(String filename) throws Exception {
		return document = new BasicXMLDocument(filename);
	}

	public String getCSS() {
		String res = "<head><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script><script src='js/dbDiagramRender.js'></script><script src='js/ucDiagramRender.js'></script><script src='js/codeRender.js'></script><script src='js/classdiagramRender.js'></script><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' ><link rel='stylesheet' href='css/codeRender.css'><link rel='stylesheet' href='css/bookRender.css'><link rel='stylesheet' href='css/numberline.css'><link rel='stylesheet' href='css/dbDiagramRender.css'><link rel='stylesheet' href='css/ucDiagramRender.css'><link rel='stylesheet' href='css/classdiagramRender.css'><link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css%22%3E'><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==' crossorigin='anonymous' /><script src='js/starter.js'></script><script  src='js/util/arrowDraw.js'></script><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' ><link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css%22%3E'><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==' crossorigin='anonymous' /></head>";
		return res;
	}

}
