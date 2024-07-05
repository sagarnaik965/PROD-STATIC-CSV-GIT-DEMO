package in.cdac.portal.dao;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.util.SerializationUtils;
import org.springframework.web.client.RestTemplate;

import com.opencsv.CSVWriter;

import in.cdac.portal.pojo.WrapperClass;

@Service
public class UserDaoImpl implements UserDao {

	@Autowired
	Environment env;

	static ArrayList<String> resAlstatic = null;

//	private final static Logger logger = Logger.getLogger(UserDaoImpl.class);
	private final static Logger logger = LogManager.getLogger(UserDaoImpl.class);

	public long getDataForChartMonthly(String Month, int year, ArrayList<String> resAl) {
		int count = 0;
		 File file = new File("E:\\months.csv"); 
		 
		try {
			 FileWriter outputfile = new FileWriter(file); 
		        CSVWriter writer = new CSVWriter(outputfile); 
		        
		        
//			ArrayList<String> resAl = getDataFromIgnite();
//			for (String line : resAl) {
//				String[] IgniteData = line.split(",");
//				if (!IgniteData[3].toString().isEmpty() && IgniteData[3].toString() != ""
//						&& !IgniteData[3].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
//					if (Month.equals(LocalDate.parse(IgniteData[3]).getMonth().toString())
//							&& LocalDate.parse(IgniteData[3]).getYear()==Year.now().getValue()
//							&& LocalDate.parse(IgniteData[3]).getMonth().toString() != ""
//							&& !IgniteData[7].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")
//							&& !IgniteData[7].replaceAll("^\"|\"$", "").isEmpty()) {
//						count = count + Integer.parseInt(IgniteData[7]);
//					}
//				}
//			}
			for (String line : resAl) {
				String[] IgniteData = line.split(",");
//				System.out.println(line);
				writer.writeNext(IgniteData);
				if (!IgniteData[3].toString().isEmpty() && IgniteData[3].toString() != ""
						&& !IgniteData[3].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
					if (Month.equals(LocalDate.parse(IgniteData[3]).getMonth().toString())
							&& LocalDate.parse(IgniteData[3]).getYear() == year
							&& LocalDate.parse(IgniteData[3]).getMonth().toString() != ""
							&& !IgniteData[7].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")
							&& !IgniteData[7].replaceAll("^\"|\"$", "").isEmpty()) {
						count = count + Integer.parseInt(IgniteData[7]);
					}
				}
			}
			return count;
		} catch (Exception e) {
			logger.info(e.getMessage());
			return 0;
		}

	}

	public long getDataForChart(String date, ArrayList<String> resAl) {
		int count = 0;
		 File file = new File("E:\\days.csv"); 
		 
			try {
				 FileWriter outputfile = new FileWriter(file); 
			        CSVWriter writer = new CSVWriter(outputfile); 
//			ArrayList<String> resAl = getDataFromIgnite();
			for (String line : resAl) {
				String[] IgniteData = line.split(",");
				writer.writeNext(IgniteData);
				if (!IgniteData[3].toString().isEmpty()) {
					if (date.contentEquals((IgniteData[3])) && IgniteData[3] != ""
							&& !IgniteData[7].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")
							&& !IgniteData[7].replaceAll("^\"|\"$", "").isEmpty()) {
						count = count + Integer.parseInt(IgniteData[7]);
					}
				}
			}
			return count;
		} catch (Exception e) {
			logger.info(e.getMessage());
			return 0;
		}

	}

	public int apkCount() {
		Set<String> apkList = new HashSet<String>();
		try {
			ArrayList<String> resAl = getDataFromIgnite();
			for (String line : resAl) {
				String[] IgniteData = line.split(",");
				if (!IgniteData[1].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")
						&& !IgniteData[1].replaceAll("^\"|\"$", "").isEmpty()) {
					apkList.add(IgniteData[1].replace("\"", "").trim());
				}
			}
			logger.info(apkList.size());
			return apkList.size();
		} catch (Exception e) {
			logger.info(e.getMessage());
			return 0;
		}

	}

	public int deptCount() {
		Set<String> apkList = new HashSet<String>();
		Set<String> deptList = new HashSet<String>();
		try {
			ArrayList<String> resAl = getDataFromIgnite();
			for (String line : resAl) {
				String[] IgniteData = line.split(",");
				if (!IgniteData[1].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")
						&& !IgniteData[0].replaceAll("^\"|\"$", "").isEmpty()
						&& !IgniteData[2].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")
						&& !IgniteData[0].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {

					apkList.add(IgniteData[2].replace("\"", ""));
					deptList.add(IgniteData[0].replace("\"", ""));
				}
			}
			String counts = getDataFromCountsApi();
			String[] countsarr = counts.split(",");
			return Integer.parseInt(countsarr[1]);
//			return deptList.size();
		} catch (Exception e) {
			logger.info(e.getMessage());
			return 0;
		}

	}

	private String getDataFromCountsApi() {
		try {

			String url = env.getProperty("dashCountsurl");
			RestTemplate rt = new RestTemplate();
			String data = rt.getForObject(url, String.class);
			return data;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return "0";
	}

	public Map<String, Map<String, Integer>> deptList() {
		Set<String> apkList = new HashSet<String>();
		Set<String> deptList = new HashSet<String>();
		ArrayList<String> resAl = null;
		try {
			resAlstatic = getDataFromIgniteStatic();
//			resAlstatic = getDataFromIgnite();
			for (String line : resAlstatic) {
				String[] IgniteData = line.split(",");
				if (!IgniteData[0].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")
						&& !IgniteData[0].replaceAll("^\"|\"$", "").isEmpty()
						&& !IgniteData[1].replaceAll("^\"|\"$", "").isEmpty()
						&& !IgniteData[1].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
					apkList.add(IgniteData[1].replace("\"", ""));
					deptList.add(IgniteData[0].replace("\"", ""));
				}
			}
		} catch (Exception e) {
			logger.info(e.getMessage());
		}

		Map<String, Map<String, Integer>> deptcounts = new HashMap<>();
		for (String string : deptList) {
			deptcounts.put(string, getapkCountDeptWise(string, resAlstatic));
		}
		return deptcounts;
	}

	public Map<String, Integer> getapkCountDeptWise(String dept, ArrayList<String> resAl) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		try {
//		ArrayList<String> resAl = getDataFromIgnite();	
			for (String line : resAl) {
				String[] IgniteData = line.split(",");
				if (!IgniteData[0].replaceAll("^\"|\"$", "").isEmpty()
						&& !IgniteData[0].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
					if (dept.contains((IgniteData[0]).replaceAll("^\"|\"$", ""))
							&& !IgniteData[0].replaceAll("^\"|\"$", "").isEmpty()
							&& !IgniteData[0].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
						if (map.get((IgniteData[1]).replaceAll("^\"|\"$", "")) != null
								&& !IgniteData[1].replaceAll("^\"|\"$", "").isEmpty()
								&& !IgniteData[1].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
							if (IgniteData[7].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
								map.put((IgniteData[1]).replaceAll("^\"|\"$", ""),
										map.get((IgniteData[1]).replaceAll("^\"|\"$", "")) + 0);
							} else {
								map.put((IgniteData[1]).replaceAll("^\"|\"$", ""),
										map.get((IgniteData[1]).replaceAll("^\"|\"$", ""))
												+ Integer.parseInt((IgniteData[7]).replaceAll("^\"|\"$", "")));
							}

						} else {
							if (!IgniteData[1].replaceAll("^\"|\"$", "").isEmpty()
									&& !IgniteData[1].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
								if (IgniteData[7].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
									map.put((IgniteData[1]).replaceAll("^\"|\"$", ""), 0);
								} else {

									map.put((IgniteData[1]).replaceAll("^\"|\"$", ""),
											Integer.parseInt((IgniteData[7]).replaceAll("^\"|\"$", "")));
								}

							}
						}
					}
				}
			}
		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		return map;
	}

	public Map<String, Integer> apkWiseCount() {
		Set<String> apkList = new HashSet<String>();
		Map<String, Integer> apkAndCount = new HashMap<String, Integer>();
		try {
			ArrayList<String> resAl = getDataFromIgnite();
			for (String line : resAl) {
				String[] IgniteData = line.split(",");
				if (!IgniteData[1].replace("\"", "").isEmpty() && !IgniteData[1].replaceAll("^\"|\"$", "").isEmpty()) {
					apkList.add(IgniteData[1].replace("\"", "").trim());
					if (apkAndCount.get(IgniteData[1].replace("\"", "").toString()) != null
							&& !IgniteData[1].replace("\"", "").isEmpty()
							&& apkAndCount.containsKey(IgniteData[1].replace("\"", "").trim())) {
//						----------put------------------------
						apkAndCount.put(IgniteData[1].replace("\"", ""),
								apkAndCount.get(IgniteData[1].replace("\"", "").toString())
										+ Integer.parseInt(IgniteData[7].replace("\"", "")));
					} else {
						if (!IgniteData[1].replace("\"", "").isEmpty()
								&& !IgniteData[1].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")
								&& !IgniteData[1].replaceAll("^\"|\"$", "").isEmpty())
							if (IgniteData[7].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
//								----------put------------------------
								apkAndCount.put(IgniteData[1].replace("\"", ""), 0);
							} else {
//								----------put------------------------
								apkAndCount.put(IgniteData[1].replace("\"", ""),
										Integer.parseInt(IgniteData[7].replace("\"", "")));
							}
					}
				}
			}

		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		return apkAndCount;
	}

	public Map<String, Integer> deptWiseCount() {
		Set<String> apkList = new HashSet<String>();
		Set<String> deptList = new HashSet<String>();
		Map<String, Integer> deptAndCount = new HashMap<String, Integer>();
		try {
			ArrayList<String> resAl = getDataFromIgnite();
			for (String line : resAl) {
				String[] IgniteData = line.split(",");
//				if (!IgniteData[2].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")
//						&& !IgniteData[0].replaceAll("^\"|\"$", "").isEmpty()
//						&& !IgniteData[0].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
					apkList.add(IgniteData[2].replace("\"", ""));
					deptList.add(IgniteData[0].replace("\"", ""));
					deptAndCount.put(IgniteData[0].replace("\"", ""), 0);
//				}
			}

			for (String line : resAl) {
				String[] IgniteData = line.split(",");
//				if (!IgniteData[0].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {

					for (Map.Entry<String, Integer> entry : deptAndCount.entrySet()) {
//						System.out.println(IgniteData[0].toString() +"  ------  "+entry.getKey()+" --- "+IgniteData[0].toString().trim().contentEquals(entry.getKey().trim()));
						if (IgniteData[0].toString().trim().contentEquals(entry.getKey().trim())) {
							if (IgniteData[7].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
								entry.setValue(entry.getValue() + 0);
							} else {
								entry.setValue(entry.getValue() + Integer.valueOf(IgniteData[7].replace("\"", "")));
							}
						}
					}
				}
//			}

		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		for (Map.Entry<String, Integer> entry : deptAndCount.entrySet()) {
			String key = entry.getKey();
			Integer val = entry.getValue();
//			System.out.println(key +" key---val "+val);
		}
		return deptAndCount;
	}

	public long totTrnsaction() {
		long totTrasactionCount = 0;
		try {
			ArrayList<String> resAl = getDataFromIgnite();
			for (String line : resAl) {
				String[] IgniteData = line.split(",");
				if (!IgniteData[7].replace("\"", "").isEmpty()
						&& !IgniteData[7].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {

					totTrasactionCount += Long.parseLong(IgniteData[7].replaceAll("^\"|\"$", "").trim());
				}
			}

			return totTrasactionCount;
		} catch (Exception e) {
			logger.info(e.getMessage());
			return 0;
		}

	}

	public HashSet<String> getAppListDeptWise(String dept) {

		ArrayList<String> list = new ArrayList<String>();
		try {
			ArrayList<String> resAl = getDataFromIgnite();
			for (String line : resAl) {
				String[] IgniteData = line.split(",");
				if (!IgniteData[0].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
					if (dept.contains((IgniteData[0]).replaceAll("^\"|\"$", ""))
							&& !IgniteData[0].replaceAll("^\"|\"$", "").isEmpty()) {
						if (!IgniteData[1].replaceAll("^\"|\"$", "").isEmpty()
								&& !IgniteData[1].replaceAll("^\"|\"$", "").equalsIgnoreCase("null"))
							list.add(IgniteData[1].replaceAll("^\"|\"$", ""));
					}
				}
			}
		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		HashSet<String> ret = new HashSet<String>();
		ret.addAll(list);
		return ret;
	}

	public Map<String, Integer> getapkAndTransAcToDept(String dept) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		try {
			ArrayList<String> resAl = getDataFromIgnite();
			for (String line : resAl) {
				String[] IgniteData = line.split(",");
				if (!IgniteData[0].replaceAll("^\"|\"$", "").isEmpty()
						&& !IgniteData[0].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
					if (dept.contains((IgniteData[0]).replaceAll("^\"|\"$", ""))
							&& !IgniteData[0].replaceAll("^\"|\"$", "").isEmpty()
							&& !IgniteData[0].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
						if (map.get((IgniteData[1]).replaceAll("^\"|\"$", "")) != null
								&& !IgniteData[1].replaceAll("^\"|\"$", "").isEmpty()
								&& !IgniteData[1].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
							if (IgniteData[7].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
								map.put((IgniteData[1]).replaceAll("^\"|\"$", ""),
										map.get((IgniteData[1]).replaceAll("^\"|\"$", "")) + 0);
							} else {
								map.put((IgniteData[1]).replaceAll("^\"|\"$", ""),
										map.get((IgniteData[1]).replaceAll("^\"|\"$", ""))
												+ Integer.parseInt((IgniteData[7]).replaceAll("^\"|\"$", "")));
							}

						} else {
							if (!IgniteData[1].replaceAll("^\"|\"$", "").isEmpty()
									&& !IgniteData[1].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
								if (IgniteData[7].replaceAll("^\"|\"$", "").equalsIgnoreCase("null")) {
									map.put((IgniteData[1]).replaceAll("^\"|\"$", ""), 0);
								} else {

									map.put((IgniteData[1]).replaceAll("^\"|\"$", ""),
											Integer.parseInt((IgniteData[7]).replaceAll("^\"|\"$", "")));
								}

							}
						}
					}
				}
			}
		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		return map;
	}

	@SuppressWarnings("unchecked")
	public ArrayList<String> getDataFromIgnite() throws IOException {
		ArrayList<String> resAl = new ArrayList<String>();

		String url = env.getProperty("apiurl");
		RestTemplate rt = new RestTemplate();
//			byte[] b = rt.getForObject(url, byte[].class);
//			resAlstatic = (ArrayList<String>) SerializationUtils.deserialize(b);
		WrapperClass b = rt.getForObject(url, WrapperClass.class);
		resAlstatic = (ArrayList<String>) SerializationUtils.deserialize(b.getData());
		return resAlstatic;

	}

	@SuppressWarnings("unchecked")
	public ArrayList<String> getDataFromIgniteStatic() throws IOException {
//		ArrayList<String> resAl = new ArrayList<String>();

		String url = env.getProperty("apiurl");
		RestTemplate rt = new RestTemplate();
//			byte[] b = rt.getForObject(url, byte[].class);
//			resAlstatic = (ArrayList<String>) SerializationUtils.deserialize(b);

		WrapperClass b = rt.getForObject(url, WrapperClass.class);
		resAlstatic = (ArrayList<String>) SerializationUtils.deserialize(b.getData());

		return resAlstatic;

	}

}
