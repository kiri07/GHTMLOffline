package com.generation.ghtml.main;

import java.awt.Desktop;
import java.io.File;
import java.io.FileWriter;
import java.net.URI;
import java.util.concurrent.TimeUnit;

import com.generation.ghtml.bl.*;

public class GhtmlRenderer {

	public static void main(String[] args) throws Exception 
	{
		//file name di input
		//String filename = "C:\\Users\\User\\eclipse-workspace\\GHTMLOffline\\page.xml"; 
		String filename = args[0];
		if(!GHTML.getInstance().validate(filename)) 
		{
			System.out.println("BAD FORMAT FOR GHTML FILE. REFER TO XSD"); 
			return; 
		}
		//Questo render è l'equivalente del vostro attuale $(document).ready in jQuery
		//prende i nodi e li trasforma in tag HTML
		//e restituisce una stringa
		System.out.println("Page is valid."); 
		String HTML = HTMLRender.getInstance().render(filename);
		FileWriter writer = new FileWriter("C:\\Users\\User\\eclipse-workspace\\GHTMLOffline\\WebContent\\temp.html");
		writer.write(GHTML.getInstance().getCSS());
        writer.write("\n <body>");
        writer.write(HTML.replaceAll("<documentindex/>", "<documentindex></documentindex>"));
        writer.write("<script type='text/javascript'>"+
                "setTimeout(function(){$(document).ready(function(){"+
                    "window.print();"+
                    "return false;" + 
               "})},2000);"+
               "</script>");
        writer.write("</body>");
        writer.close();
        if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
            Desktop.getDesktop().browse(new URI("C:/Users/User/eclipse-workspace/GHTMLOffline/WebContent/temp.html"));
        };

//		Process process = new
//				ProcessBuilder("C:\\Users\\User\\Desktop\\wkhtmltopdf\\bin\\wkhtmltopdf.exe",
//						"http://localhost:8080/GHTML/tmp.html", "ciao.pdf").start();
//		InputStream is = process.getInputStream(); InputStreamReader isr = new
//				InputStreamReader(is); BufferedReader br = new BufferedReader(isr); String
//				line;
//
//				System.out.printf("Output of running %s is:", Arrays.toString(args));
//
//				while ((line = br.readLine()) != null) { System.out.println(line); }
        TimeUnit.SECONDS.sleep(3);
        File myObj = new File("C:\\Users\\User\\eclipse-workspace\\GHTMLOffline\\WebContent\\temp.html"); 
        if (myObj.delete()) { 
          System.out.println("Deleted the file: " + myObj.getName());
        } else {
          System.out.println("Failed to delete the file.");
        } 

	}

}
