package in.cdac.portal.controller;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import in.cdac.portal.pojo.ChartData;
import in.cdac.portal.service.UserService;

@EnableAsync
@Controller
@RequestMapping("/")
@CrossOrigin("*")
public class HomeController {

	@Autowired
	Environment env;

//	@Autowired
//	ReadIgniteService readSer;

	@Autowired
	UserService readSer;

//	private final static Logger logger = Logger.getLogger(HomeController.class);
	private final static Logger logger = LogManager.getLogger(HomeController.class);

	@RequestMapping(value = "/dashboard", method = RequestMethod.GET)
	public ModelAndView getDashBoard(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			ModelMap map) {
		try {
			List<String> workshopList = new ArrayList<>();
			String data = readFileAsString(env.getProperty("workshopfilepath"));
			if (data.isEmpty()) {
				map.addAttribute("workshopdata", "");
				return new ModelAndView("dashboard");
			}
			String[] arrOfStr = data.split(";");
			for (String a : arrOfStr) {
				workshopList.add(a);
			}
			map.addAttribute("workshopdata", workshopList);
			return new ModelAndView("dashboard");
		} catch (Exception e) {
			logger.info(e.getMessage());
			return new ModelAndView("dashboard");

		}
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView index(HttpSession session, ModelMap map) {
		try {

			List<String> workshopList = new ArrayList<>();
			String data = readFileAsString(env.getProperty("workshopfilepath"));

			if (data.isEmpty()) {
				map.addAttribute("workshopdata", "");
				return new ModelAndView("dashboard");
			}
			String[] arrOfStr = data.split(";");
			for (String a : arrOfStr) {
				workshopList.add(a);
			}
			map.addAttribute("workshopdata", workshopList);
			return new ModelAndView("dashboard");
		} catch (Exception e) {
			logger.info(e.getMessage());
			return new ModelAndView("dashboard");
		}
	}

	// aadhaardatavaultasasolution
	@RequestMapping(value = "/aadhaardatavaultasasolution")
	public ModelAndView getAadhaarDataVaultAsASolution(HttpSession session) {
		return new ModelAndView("aadhaardatavaultasasolution");
	}

	@RequestMapping(value = "/aadhaarValutAsService")
	public ModelAndView aadhaarValut(HttpSession session, org.apache.coyote.Response res) {
		return new ModelAndView("aadhaarValutAsService");
	}

	// description
	@RequestMapping(value = "/description")
	public ModelAndView getDescription(HttpSession session) {
		return new ModelAndView("description");
	}

	// terms
	@RequestMapping(value = "/terms")
	public ModelAndView getTerms(HttpSession session) {

		return new ModelAndView("terms");
	}

	@RequestMapping(value = "/privacy")
	public ModelAndView getPrivacy(HttpSession session) {
		return new ModelAndView("privacy");
	}

	@RequestMapping(value = "/copyright")
	public ModelAndView getCopyright(HttpSession session) {
		return new ModelAndView("copyright");
	}

	// hyperlinking
	@RequestMapping(value = "/hyperlinking")
	public ModelAndView getHyperlinking(HttpSession session) {
		return new ModelAndView("hyperlinking");
	}

	@RequestMapping(value = "/help")
	public ModelAndView getHelp(HttpSession session) {
		return new ModelAndView("help");
	}
	// disclaimer

	@RequestMapping(value = "/disclaimer")
	public ModelAndView getdisclaimer(HttpSession session) {
		return new ModelAndView("disclaimer");
	}

	@RequestMapping(value = "/sitemap")
	public ModelAndView getSiteMap(HttpSession session) {
		return new ModelAndView("sitemap");
	}

	@RequestMapping(value = "/whatisadv")
	public ModelAndView whatIsAdv(HttpSession session) {
		return new ModelAndView("whatisadv");
	}

	@RequestMapping(value = "/whyadv")
	public ModelAndView whyAdv(HttpSession session) {
		return new ModelAndView("whyadv");
	}

	@RequestMapping(value = "/faq")
	public ModelAndView faq(HttpSession session) {
		return new ModelAndView("faq");
	}

	@RequestMapping(value = "/resources")
	public ModelAndView resources(HttpSession session) {
		return new ModelAndView("resources");
	}

	@RequestMapping(value = "/contactus")
	public ModelAndView contactUs(HttpSession session) {
		return new ModelAndView("contactus");
	}

	@RequestMapping(value = "/Sendemail")
	public ModelAndView SendEmail(HttpSession session) {
		return new ModelAndView("SendEmail");
	}

	@RequestMapping(value = "/statistic")
	public ModelAndView elkstats(HttpSession session) {
		return new ModelAndView("statistic");
	}

	@RequestMapping(value = "/ResponsePage")
	public ModelAndView ResponsePage(HttpSession session) {
		return new ModelAndView("ResponsePage");
	}

	@RequestMapping(value = "/download")
	public ModelAndView temp(HttpSession session, Model model) {

		return new ModelAndView("download");
	}

	/*
	 * @RequestMapping(value = "/Chat") public ModelAndView demo(HttpSession
	 * session) { return new ModelAndView("Chatbot"); }
	 */

	// dashboard dept count
	@ResponseBody
	@RequestMapping(value = "/count", method = RequestMethod.GET)
	public int getTotaldeshDeptCount(Model model) {
		return readSer.deptCount();
	}
	
	@ResponseBody
	@RequestMapping(value = "/apiCall", method = RequestMethod.POST)
	public int waitApi() throws InterruptedException {
//		String time = env.getProperty("waittime");
//		Thread.sleep(Integer.parseInt(time));
//		System.out.println("---- apiCall with "+time+" waiting time");
		return 1;
	}

	@ResponseBody
	@RequestMapping(value = "/totalaccount", method = RequestMethod.GET)
	public int getTotaldeshAcCount(Model model) {
		return readSer.apkCount();
	}

	@ResponseBody
	@RequestMapping(value = "/totaltranscount", method = RequestMethod.GET)
	public long getTotaldeshTransCount(Model model) {
		return readSer.totTrnsaction();
	}

	// controller for Chart
	@ResponseBody
	@RequestMapping(value = "/chartfordays", method = RequestMethod.GET)
	public ChartData getAjaxDemo(Model model) {
		return readSer.getDataForChart();
	}

	// controller for Chart
	@ResponseBody
	@RequestMapping(value = "/Chartformonth", method = RequestMethod.GET)
	public ChartData chartForMonth(Model model) {

		return readSer.getDataForChartMonthly();

	}

	// controller for getting Lists of department
	@GetMapping(value = "/deptLists")
	public String deptLists(ModelMap model) {
		try {
			model.addAttribute("deptdata1", readSer.deptList());
			return "/deptLists";
		} catch (Exception e) {
			logger.info(e.getMessage());
			return null;
		}
	}

//	@GetMapping(value = "/deptListsData")
	@ResponseBody
	@RequestMapping(value = "/deptListsData", method = RequestMethod.GET)
	public Map<String, Map<String, Integer>> deptListsData(ModelMap model) {
		try {

			return readSer.deptList();
		} catch (Exception e) {
			logger.info(e.getMessage());
			return null;
		}
	}

	public Map<String, Integer> deptservicewisetransactionFordeptListPage(String deptName) {
		try {
			Map<String, Integer> deptservicetransactions = readSer.getapkAndTransAcToDept(deptName);
			return deptservicetransactions;
		} catch (Exception e) {
			logger.info(e.getMessage());
			return null;
		}
	}

	// controller for getting respective services of department
	@RequestMapping(value = "/getDeptDetails", method = RequestMethod.GET)
	public ModelAndView departmentDetail(@RequestParam String deptName, @RequestParam String deptCode, ModelMap map) {
		map.addAttribute("deptname", deptName);
		HashSet<String> listofapk = readSer.getAppListDeptWise(deptName);
		map.addAttribute("DeptandService", listofapk);
		return new ModelAndView("departmentDetail");

	}

	// controller for getting department and counts of services
	@GetMapping(value = "/deptandServicecount")
	public String getDetailsOfDepartments(ModelMap model) {
		try {
			model.addAttribute("deptdata", readSer.apkWiseCount());
			return "/deptServiceCount";
		} catch (Exception e) {
			logger.info(e.getMessage());
			return null;
		}
	}

//	@GetMapping(value = "/deptandServicecountData")
	@ResponseBody
	@RequestMapping(value = "/deptandServicecountData", method = RequestMethod.GET)
	public Map<String, Integer> getDetailsOfDepartmentsData(ModelMap model) {
		try {

			return readSer.apkWiseCount();
		} catch (Exception e) {
			logger.info(e.getMessage());
			return null;
		}
	}

	// controller for getting dept wise transaction
	@GetMapping(value = "/depttransactions")
	public String depttransaction(ModelMap model) {
		try {
			model.addAttribute("deptdata", readSer.deptWiseCount());
			return "/depttransactions";
		} catch (Exception e) {
			logger.info(e.getMessage());
			return null;
		}
	}

//	@GetMapping(value = "/depttransactionsData")
	@ResponseBody
	@RequestMapping(value = "/depttransactionsData", method = RequestMethod.GET)
	public Map<String, Integer> depttransactionData(ModelMap model) {
		try {

			return readSer.deptWiseCount();
		} catch (Exception e) {
			logger.info(e.getMessage());
			return null;
		}
	}

	// controller for getting dept-service wise transaction
	@GetMapping(value = "/deptservicewisetransaction")
	public String deptservicewisetransaction(@RequestParam String deptName, ModelMap model) {
		try {
			Map<String, Integer> deptservicetransactions = readSer.getapkAndTransAcToDept(deptName);
			model.addAttribute("deptdata", deptservicetransactions);
			return "/deptservicewisetransaction";
		} catch (Exception e) {
			logger.info(e.getMessage());
			return null;
		}
	}

//	    @PostMapping("/deptservicewisetransactionData")
	@ResponseBody
	@RequestMapping(value = "/deptservicewisetransactionData", method = RequestMethod.POST)
	public Map<String, Integer> deptservicewisetransactionData(@RequestBody String deptName) {
		try {
			Map<String, Integer> deptservicetransactions = readSer.getapkAndTransAcToDept(deptName);
			return deptservicetransactions;
		} catch (Exception e) {
			logger.info(e.getMessage());
			return null;
		}
	}

	public static String readFileAsString(String fileName) throws Exception {
		String data = "";
		data = new String(Files.readAllBytes(Paths.get(fileName)));
		return data;
	}

//	this method was for iso file download

//	@GetMapping(value = "/zip-download", produces="application/zip")
//	public void zipDownload(HttpServletResponse response) throws IOException {
//		ZipOutputStream zipOut = new ZipOutputStream(response.getOutputStream());
//			String fileBasePath = env.getProperty("pathforiso");
//			String fileName = env.getProperty("filename");
//			FileSystemResource resource = new FileSystemResource(fileBasePath + fileName);
//			ZipEntry zipEntry = new ZipEntry(resource.getFilename());
//			zipEntry.setSize(resource.contentLength());
//			zipOut.putNextEntry(zipEntry);
//			StreamUtils.copy(resource.getInputStream(), zipOut);
//			zipOut.closeEntry();
//		
//		zipOut.finish();
//		zipOut.close();
//		response.setStatus(HttpServletResponse.SC_OK);
//		response.addHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"");
//	}

}
