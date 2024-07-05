//package in.cdac.portal.configuration;
//
//
//import java.io.BufferedReader;
//import java.io.BufferedWriter;
//import java.io.CharArrayWriter;
//import java.io.File;
//import java.io.FileReader;
//import java.io.FileWriter;
//import java.io.IOException;
//import java.io.PrintWriter;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.ServletContext;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.annotation.WebFilter;
//import javax.servlet.http.HttpServletResponse;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.env.Environment;
//
//@WebFilter("/*")
//public class HitCounterFilter implements Filter {
//	
//	@Autowired
//	Environment env;
//	
//	
//	@Override
//	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
//			throws IOException, ServletException {
//		String Url = env.getProperty("hitpath");
//		ServletContext context = request.getServletContext(); 
//		String realWebAppPath = context.getRealPath("");
//		String hitFilePath = realWebAppPath.concat(Url);
//		File hitFile = new File(Url);
//		
//		long currentHit = readHitCounterFromFile(hitFile);
//
//		updateHitCounterFile(++currentHit, hitFile);
//		
//		CharResponseWrapper wrapper = new CharResponseWrapper((HttpServletResponse) response);	
//		
//		chain.doFilter(request, wrapper);
//		
//		int onlineUsers = (Integer) context.getAttribute(UserSessionListener.ONLINE_USERS);
//		displayHitCounter(wrapper, response, currentHit, onlineUsers);
//	}
//
//	public long readHitCounterFromFile(File hitFile) throws NumberFormatException, IOException {
//		if (!hitFile.exists()) {
//			return 0;
//		}
//		
//		try (BufferedReader reader = new BufferedReader(new FileReader(hitFile));) {
//			
//			long hit = Integer.parseInt(reader.readLine());
//			
//			return hit;
//		}
//		
//	}
//	
//	private void updateHitCounterFile(long hit, File hitFile) throws IOException {
//		try (BufferedWriter writer = new BufferedWriter(new FileWriter(hitFile));) {
//			writer.write(String.valueOf(hit));
//		}
//	}
//	
//	private void displayHitCounter(CharResponseWrapper wrapper, ServletResponse response, 
//			long currentHit, int onlineUsers) throws IOException {
//		PrintWriter writer = response.getWriter();
//		
//		if (wrapper.getContentType().contains("text/html")) {
//			CharArrayWriter caw = new CharArrayWriter();
//			String originalContent = wrapper.toString();
//			int indexOfCloseBodyTag = originalContent.indexOf("</body>") - 1;
//			
//			caw.write(originalContent.substring(0, indexOfCloseBodyTag));
//			
//			String hitCounterContent = "<p>Online Users: " + onlineUsers
//					+ " - Pageviews: " + currentHit + "</p>";
//			caw.write(hitCounterContent);
//			caw.write("\n</body></html>");
//			
//			String alteredContent = caw.toString();
//			response.setContentLength(alteredContent.length());
//			writer.write(alteredContent);
//			
//		} else {
//			writer.write(wrapper.toString());
//		}
//		
//		writer.close();		
//	}
//}
