package com.company.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.company.pdf.model.ExpressionVariable;
import com.company.pdf.model.SaltEnum;
import com.company.persistence.FileStorageService;
import com.company.service.NavigateQuestions;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Controller
@Scope("session")
public class ReadQuestions  extends ReadCreateAssignment{

	@RequestMapping(value="/remove/question")
	public @ResponseBody String readRemoveQuestion(HttpServletRequest request) {
		System.out.println("Reading Remove Question");
		BufferedReader br;
		try {
			br = new BufferedReader(new InputStreamReader(request.getInputStream()));
	        String json = "";
	        if(br != null){
	            json = br.readLine();
	        }
	        
	        System.out.println("Remove Question : "+json);
	        navigate.removeQuestion(json);
		} catch(IOException e) {
			e.printStackTrace();
		}
		
		return "success";
	}	

	@RequestMapping(value="/readmoduleslist")
	public @ResponseBody String readModulesList(HttpServletRequest request) {
		System.out.println("Reading Modules List");
		BufferedReader br;
		try {
			br = new BufferedReader(new InputStreamReader(request.getInputStream()));
	        String json = "";
	        if(br != null){
	            json = br.readLine();
	        }
	        
	 //       System.out.println("readmoduleslist : "+json);
	        
		} catch(IOException e) {
			e.printStackTrace();
		}
		
		return "success";
	}	
	
	/*@RequestMapping(value="/read_order_modules")
	public @ResponseBody String readOrder(HttpServletRequest request) {
		System.out.println("Reading Order Modules");
		BufferedReader br;
		try {
			br = new BufferedReader(new InputStreamReader(request.getInputStream()));
	        String json = "";
	        if(br != null){
	            json = br.readLine();
	        }   
	    //    System.out.println("Order : "+json);
		} catch(IOException e) {
			e.printStackTrace();
		}
		
		return "success";
	}	
*/
	@RequestMapping(value="/readshortdata")
	public @ResponseBody String readShortQuestion(HttpServletRequest request) {
		
		System.out.println("Reading Short Question");
		BufferedReader br;
		try {
			br = new BufferedReader(new InputStreamReader(request.getInputStream()));
	        String json = "";
	        if(br != null){
	            json = br.readLine();
	        }
            System.out.println("SHORT Length : "+json.length());
	       // System.out.println("Short Question : "+json);
	        
	        navigate.parseAnyQuestion(json);
	        
		} catch(IOException e) {
			e.printStackTrace();
		}
		
		return "success";
	}	

	@RequestMapping(value="/readnumdata")
	public @ResponseBody String readNUMQuestion(HttpServletRequest request) {
	
		System.out.println("Reading Numerical Question");
		BufferedReader br;
		try {
			br = new BufferedReader(new InputStreamReader(request.getInputStream()));
	        String json = "";
	        if(br != null){
	            json = br.readLine();
	            System.out.println("\n json from  readnumdata readquestion.java \n"+json);

	        }
            System.out.println("NUM Length : "+json.length());
	      //  System.out.println("Numerical Question : "+json);
	        
	        navigate.parseAnyQuestion(json);
	        
		} catch(IOException e) {
			e.printStackTrace();
		}
		
		return "success";		
	}	
	
	@RequestMapping(value="/readexpdata")
	public @ResponseBody String readEXPuestion(HttpServletRequest request) {
		String prettyString = "failed";
		System.out.println("Reading EXP Question");
		BufferedReader br;
		try {
			br = new BufferedReader(new InputStreamReader(request.getInputStream()));
	        String json = "";
	        if(br != null){
	        	/**
	        	 * gets the whole JSON content - which will be converted ...
	        	 * 			...into a JSON data object and read in navigate.parseAnyQuestion(json);
	        	 * new _ v2
	        	 */
	            json = br.readLine();
	            System.out.println("\n json from read exp data readquestion.java \n"+json);
	        }
	        JsonObject object = new JsonParser().parse(json).getAsJsonObject();
	        JsonArray jarr = object.get("tokens").getAsJsonArray();
	    	
			//String expPretty = "", expFormat = ""; 
			//JsonObject jobj = jarr.getAsJsonObject();
			boolean prevNum = false;
			int[] arrVar = new int [ExpressionVariable.values.length]; 
			for (int i = 0; i < arrVar.length; i++) {
				arrVar[i] = 0;
			}
			StringBuffer bufPretty = new StringBuffer();
			StringBuffer bufFormat = new StringBuffer();

			for (Iterator<JsonElement> iterator = jarr.iterator(); iterator.hasNext();) {
				JsonElement jsonToken = (JsonElement) iterator.next();
				JsonObject tokenObj = jsonToken.getAsJsonObject();
				//System.out.println(iterator.toString()+ " " + tokenObj);
				//  {"first":"2","second":"3","type":"num"}
				//  {"first":"/","second":"", "type":"opr"}
				//  {"first":"^","second":"y","type":"var"}
				String expType = tokenObj.get("type").getAsString();
			
				if(expType.equals("num")){
					prevNum = true;
					bufFormat.append(tokenObj.get("first").getAsString());
					String tempFirstString = tokenObj.get("first").getAsString();
				//	if(Double.parseDouble(tempFirstString) != 0){
						bufPretty.append(tempFirstString);
				//	}		
				/*
					 * 
					bufFormat.append(tokenObj.get("second").getAsCharacter());
					char tempFirstChar = tokenObj.get("first").getAsCharacter();
					if(tempFirstChar != '0'){
						bufPretty.append(tempFirstChar);
					}
					bufPretty.append(tokenObj.get("second").getAsCharacter());	
					*/			
				}else if(expType.equals("opr")){
					//prevNum = true;
					if(iterator.hasNext()){
						bufFormat.append(tokenObj.get("first").getAsCharacter());
						bufPretty.append(tokenObj.get("first").getAsCharacter());

						switch(tokenObj.get("first").getAsCharacter()){
						case '/':
							prevNum = false;
							break;
						case '*':
							//prevNum = false;//because if the previous token is number and the next token is variable, we should not show the *
							break;
						case '+':
							prevNum = false;
							break;
						case '-':
							prevNum = false;
							break;
							default:
								break;
						}
					}
					
				}else{
					//&sup2; square
					//&radic; sqareroot
					char c = tokenObj.get("second").getAsCharacter();
					arrVar[ExpressionVariable.valueOf(""+c).ordinal()] = 1;
					if(prevNum&&bufPretty.length()>1){
						bufPretty.deleteCharAt(bufPretty.length() - 1);
						bufPretty.deleteCharAt(bufPretty.length() - 1);
						bufPretty.deleteCharAt(bufPretty.length() - 1);
						prevNum = false;
					}
					if(tokenObj.get("first").getAsCharacter() == '^'){					
						bufPretty.append(c);						
						bufPretty.append("&sup2;");	
					}else if(tokenObj.get("first").getAsCharacter() == '#'){
						bufPretty.append("&radic;");	
						bufPretty.append(tokenObj.get("second").getAsCharacter());		
					}else{
						bufPretty.append(tokenObj.get("second").getAsCharacter());		

					}//if(prevNum)
					
					bufFormat.append(tokenObj.get("first").getAsCharacter());
					bufFormat.append(tokenObj.get("second").getAsCharacter());

				}//if(expType.equals("num"))	
				bufPretty.append(' ');	

			}//for (Iterator<JsonElement> iterator = jarr.iterator(); iterator.hasNext();)
			//[{"value":"1","option":"x"},{"value":"2","option":"y"},{"value":"3","option":"z"}]
			String numVarStr = "[";
			for (int i = 0; i < arrVar.length; i++) {
				//{"value":"1","option":"x"}
				if(arrVar[i] > 0){
					numVarStr = numVarStr += "{\"value\":\""+i+"\","+"\"option\":\""+ExpressionVariable.values[i]+"\"},";
				}
			}
			if(numVarStr.endsWith(",")){
				numVarStr = numVarStr.substring(0, numVarStr.length() - 1);
			}
			//"formatexp":"!!format!!","formatexphash":"hashed string",
			//\"formatexp\":\"!!format!!\",\"formatexphash\":\"hashed string\",
			String formatString = bufFormat.toString();
			formatString = formatString.replaceAll("!", "");
			String formatHash = formatString + SaltEnum.SALT_NEW_V2;
			formatHash = ""+formatHash.hashCode();
			String sendJSONFormt = "\"formatexp\":\"" + formatString +"\",\"formatexphash\":\""+formatHash+"\",";
			numVarStr = numVarStr + "]";
			prettyString = bufPretty.toString();
			json = json.replaceAll("!!pretty!!", prettyString);
			//json = json.replaceAll("!!format!!", bufFormat.toString());
			json = json.replaceAll("!!format!!", formatString);
			json = json.replaceAll("!!formatexphash!!", formatHash);
			json = json.replaceAll("\"!!numvar!!\"", numVarStr);
            System.out.println("EXP Length : "+json.length());
	        System.out.println(json);	        
	        navigate.parseAnyQuestion(json);
	        br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("prettyString "+prettyString);
		return prettyString;
	}	
	
	
	@RequestMapping(value="/readmcqdata")
	public @ResponseBody String readMCQQuestion(HttpServletRequest request) {
		System.out.println("Reading MCQ Question");
		BufferedReader br;
		try {
			br = new BufferedReader(new InputStreamReader(request.getInputStream()));
	        String json = "";
	        if(br != null){
	        	/**
	        	 * gets the whole JSON content - which will be converted ...
	        	 * 			...into a JSON data object and read in navigate.parseAnyQuestion(json);
	        	 * New_V2
	        	 */
	            json = br.readLine();
	        }
	        
            System.out.println("MCQ Length : "+json.length());
	        System.out.println(json);
	  
	        navigate.parseAnyQuestion(json);
	        br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "success";
	}

}
