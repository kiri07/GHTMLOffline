package com.generation.ghtml.bl;

import java.io.File;
import java.io.StringWriter;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;

public class HTMLRender {

	private static HTMLRender instance = null;
	
	private HTMLRender()
	{
		
	}
	
	public static HTMLRender getInstance() {
		if (instance == null) instance = new HTMLRender();
		return instance;
	}

	public String render(String path) throws Exception

		    {
		        DocumentBuilderFactory dbFactory =DocumentBuilderFactory.newInstance();
		        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
		        Document xmlDocument = dBuilder.parse(new File(path));
		        TransformerFactory tf = TransformerFactory.newInstance();
		        Transformer transformer;
		        String xmlString="error";
		        try {
		            transformer = tf.newTransformer();

		            // Uncomment if you do not require XML declaration
		            // transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "yes");

		            //A character stream that collects its output in a string buffer, 
		            //which can then be used to construct a string.
		            StringWriter writer = new StringWriter();

		            //transform document to string 
		            transformer.transform(new DOMSource(xmlDocument), new StreamResult(writer));

		            xmlString = writer.getBuffer().toString();
		            System.out.println(xmlString);                      //Print to console or logs
		        } 
		        catch (TransformerException e) 
		        {
		            e.printStackTrace();
		        }
		        catch (Exception e) 
		        {
		            e.printStackTrace();
		        }
		        return xmlString;
		    }
		
	}

