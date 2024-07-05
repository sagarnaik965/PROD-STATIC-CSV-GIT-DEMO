package in.cdac.portal.service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.util.SerializationUtils;
import org.springframework.web.client.RestTemplate;

import in.cdac.portal.dao.UserDao;
import in.cdac.portal.pojo.ChartData;
import in.cdac.portal.pojo.WrapperClass;

@Service
public class UserServiceImpl implements UserService {
//	private final static Logger logger = Logger.getLogger(UserServiceImpl.class);
	private final  static Logger logger = LogManager.getLogger( UserServiceImpl.class );

	@Autowired
	UserDao userDao;
	
	@Autowired
	Environment env;
	
	

	@Override
	public int deptCount() {
		// TODO Auto-generated method stub
		return userDao.deptCount();
	}

	@Override
	public int apkCount() {
		// TODO Auto-generated method stub
		return userDao.apkCount();
	}

	@Override
	public long totTrnsaction() {
		// TODO Auto-generated method stub
		return userDao.totTrnsaction();
	}

	@Override
	public ChartData getDataForChart() {
		// TODO Auto-generated method stub
		long[] chartData = new long[7];
		ChartData chartD = new ChartData();
		ArrayList<String> resAl = new ArrayList<String>();
		String label[] = { "", "", "", "", "", "", "" };
		try {
			resAl = getDataFromIgniteForDays();
			LocalDate localdate = LocalDate.now();
			String date = localdate.toString();
			label[6] = date.toString();
			chartData[6] = userDao.getDataForChart(date.toString() , resAl);

			String dateforchart = findPrevDay(1);
			label[5] = dateforchart;
			chartData[5] = userDao.getDataForChart(dateforchart , resAl);

			dateforchart = findPrevDay(2);
			label[4] = dateforchart;
			chartData[4] = userDao.getDataForChart(dateforchart , resAl);

			dateforchart = findPrevDay(3);
			label[3] = dateforchart;
			chartData[3] = userDao.getDataForChart(dateforchart , resAl);

			dateforchart = findPrevDay(4);
			label[2] = dateforchart;
			chartData[2] = userDao.getDataForChart(dateforchart , resAl);

			dateforchart = findPrevDay(5);
			label[1] = dateforchart;
			chartData[1] = userDao.getDataForChart(dateforchart , resAl);
			dateforchart = findPrevDay(6);
			label[0] = dateforchart;
			chartData[0] = userDao.getDataForChart(dateforchart , resAl);
			
			chartD.setData(chartData);
			chartD.setLabels(label);
			return chartD;
		} catch (Exception e) {
			e.printStackTrace();
			logger.info(e.getMessage());

			return chartD;
		}
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<String> getDataFromIgniteStatic() throws IOException {
		ArrayList<String> resAl = new ArrayList<String>();	
			String url = env.getProperty("apiurl");
			RestTemplate rt = new RestTemplate();

			try {
//				byte[] b = rt.getForObject(url, byte[].class);
//				resAl = (ArrayList<String>) SerializationUtils.deserialize(b);
				WrapperClass b = rt.getForObject(url, WrapperClass.class);
				resAl = (ArrayList<String>) SerializationUtils.deserialize(b.getData());	
				
				
				return resAl;					
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
				return resAl;	
			}
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<String> getDataFromIgniteForDays() throws IOException {
		ArrayList<String> resAl = new ArrayList<String>();	
			String url = env.getProperty("apiurl");
			RestTemplate rt = new RestTemplate();

			try {
//				byte[] b = rt.getForObject(url, byte[].class);
//				resAl = (ArrayList<String>) SerializationUtils.deserialize(b);
				WrapperClass b = rt.getForObject(url, WrapperClass.class);
				resAl = (ArrayList<String>) SerializationUtils.deserialize(b.getData());	
				for (String line : resAl) {
//					System.out.println("days   ----- "+line);
				}
				
				return resAl;					
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
				return resAl;	
			}
	}
	
	
	
	@SuppressWarnings("unchecked")
	public ArrayList<String> getDataFromIgniteForTest() throws IOException {
		ArrayList<String> resAl = new ArrayList<String>();	
			String url = env.getProperty("apiurl");
			RestTemplate rt = new RestTemplate();

			try {
//				byte[] b = rt.getForObject(url, byte[].class);
//				resAl = (ArrayList<String>) SerializationUtils.deserialize(b);
				WrapperClass b = rt.getForObject(url, WrapperClass.class);
				resAl = (ArrayList<String>) SerializationUtils.deserialize(b.getData());	
				for (String line : resAl) {
//					System.out.println(line);
				}
				
				return resAl;					
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
				return resAl;	
			}
	}


	private String findPrevDay(int days) {
		LocalDate localdate = LocalDate.now();
		return localdate.minusDays(days).toString();
	}

	@Override
	public ChartData getDataForChartMonthly() {
		String monthnames[] = { "Jan", "dec", "Jan"};
		long[] monthwisecount = new long[3];
		LocalDate now = LocalDate.now();
		ChartData chartData = new ChartData();
		ArrayList<String> resAl = new ArrayList<String>();
		try {
//			System.out.println(LocalDate.parse(now.toString()).getYear()+" ----here "+LocalDate.parse(now.toString()).getMonth());
//			System.out.println(LocalDate.parse(now.minusMonths(1).toString()).getYear()+" ----here "+ LocalDate.parse(now.minusMonths(1).toString()).getMonth());
//			System.out.println(LocalDate.parse(now.minusMonths(2).toString()).getYear()+" ----here "+ LocalDate.parse(now.minusMonths(2).toString()).getMonth());
			resAl = getDataFromIgniteForDays();
			LocalDate earlier = now.minusMonths(0);
			int year = LocalDate.parse(now.toString()).getYear();
			monthnames[2] = earlier.getMonth().toString();
			
			monthwisecount[2] = userDao.getDataForChartMonthly(earlier.getMonth().toString() ,year ,resAl);

			earlier = now.minusMonths(1);
			year = LocalDate.parse(now.minusMonths(1).toString()).getYear();
			monthnames[1] = earlier.getMonth().toString();
			
			monthwisecount[1] = userDao.getDataForChartMonthly(earlier.getMonth().toString(),year , resAl);

			earlier = now.minusMonths(2);
			year = LocalDate.parse(now.minusMonths(2).toString()).getYear();
			monthnames[0] = earlier.getMonth().toString();
			
			monthwisecount[0] = userDao.getDataForChartMonthly(earlier.getMonth().toString(), year, resAl);
			chartData.setData(monthwisecount);
			chartData.setLabels(monthnames);
			return chartData;
		} catch (Exception e) {
			logger.info(e.getMessage());
			return chartData;
		}
	
	}

	@Override
	public Map<String, Map<String, Integer>> deptList() {
		// TODO Auto-generated method stub
		return userDao.deptList();
	}

	@Override
	public Map<String, Integer> getapkAndTransAcToDept(String deptName) {
		// TODO Auto-generated method stub
		return userDao.getapkAndTransAcToDept(deptName);
	}

	@Override
	public HashSet<String> getAppListDeptWise(String deptName) {
		// TODO Auto-generated method stub
		return userDao.getAppListDeptWise(deptName);
	}

	@Override
	public  Map<String, Integer> apkWiseCount() {
		// TODO Auto-generated method stub
		return userDao.apkWiseCount();
	}

	@Override
	public Map<String, Integer> deptWiseCount() {
		// TODO Auto-generated method stub
		return userDao.deptWiseCount();
	}

}
