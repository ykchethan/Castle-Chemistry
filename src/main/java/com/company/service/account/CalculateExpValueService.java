package com.company.service.account;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Stack;
import java.util.regex.Pattern;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.company.pdf.model.SaltEnum;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Service
@Scope("session")
public class CalculateExpValueService {

	public String calcExp(String json){
		System.out.println("com.company.service.account.calculateexpr json \n"+json);
		double d;

		/*
		 * {
		 * "formatexp":"11*^x*#y*z*11",
		 * "formatexphash":"-2047252217",
		 * "studentAns":[{"value":"0","option":"x","ans":"22"},{"value":"1","option":"y","ans":"22"},{"value":"2","option":"z","ans":"22"}]		 
		 * "from":"3",
		 * "to":"33"
		 * }
		 */
		JsonObject object = new JsonParser().parse(json).getAsJsonObject();
        JsonArray jarr = object.get("expAnsVars").getAsJsonArray();
        String formatString = object.get("formatexp").getAsString();
		String formatHash = formatString + SaltEnum.SALT_NEW_V2;
		formatHash = ""+formatHash.hashCode();
		String formatHashJson = object.get("formatexphash").getAsString();
		
		if(!(formatHash.equals(formatHashJson))){
			return "failed";
		}
		DecimalFormat df = new DecimalFormat("#######.##");
		df.setRoundingMode(RoundingMode.HALF_EVEN);
		for (int i = 0; i < jarr.size(); i++) {
			JsonObject jel = jarr.get(i).getAsJsonObject();
			double tempVal = jel.get("ans").getAsDouble();			
			double tempSq = tempVal*tempVal;
			double tempSqr = Math.sqrt(tempVal);
//			formatString = formatString.replaceAll(Pattern.quote("^"+jel.get("option").getAsString()), Pattern.quote(df.format(tempSq)));
//			formatString = formatString.replaceAll(Pattern.quote("#"+jel.get("option").getAsString()), Pattern.quote(df.format(tempSqr)));
			formatString = formatString.replaceAll(Pattern.quote("^"+jel.get("option").getAsString()), Double.toString(tempSq));
			formatString = formatString.replaceAll(Pattern.quote("#"+jel.get("option").getAsString()), Double.toString(tempSqr));
			formatString = formatString.replaceAll(Pattern.quote(jel.get("option").getAsString()), Double.toString(tempVal));//after the sqares and the sqare roots are replaced
//			formatString = formatString.replaceAll("/^"+jel.get("option").getAsString(), Pattern.quote(df.format(tempSq)));
//			formatString = formatString.replaceAll("/#"+jel.get("option").getAsString(), Pattern.quote(df.format(tempSqr)));
		}
		
		try{
			d = evaluate(formatString);
		}catch(Exception e){
			e.printStackTrace();
			return "failed";

		}
		
		double tempF = object.get("from").getAsDouble();
		double tempT = object.get("to").getAsDouble();
		
		if(d >= tempF){
			if(d <= tempT){
				return "correct";
			}
		}
		
		return "wrong";
		 
	}//calcExp(String json)
	
	static MathContext precisionAndRounding = new MathContext(500,RoundingMode.DOWN);
	//static MathContext precisionAndRoundingReturnDown = new MathContext(4,RoundingMode.DOWN);
	//static MathContext precisionAndRoundingReturnUp = new MathContext(4,RoundingMode.DOWN);

	public static double evaluate(String expression)
	{
		char[] tokens = expression.toCharArray();
		int precision = 7;

		// Stack for numbers: 'values'
		Stack<BigDecimal> values = new Stack<BigDecimal>();

		// Stack for Operators: 'ops'
		Stack<Character> ops = new Stack<Character>();

		for (int i = 0; i < tokens.length; i++)
		{
			// Current token is a whitespace, skip it
			if (tokens[i] == ' ')
				continue;

			// Current token is a number, push it to stack for numbers
			if (tokens[i] >= '0' && tokens[i] <= '9' )
			{
				StringBuffer sbuf = new StringBuffer();
				// There may be more than one digits in number
				while (i < tokens.length && ((tokens[i] >= '0' && tokens[i] <= '9') ||  tokens[i] == '.'))
					sbuf.append(tokens[i++]);
				//values.push(Double.parseDouble(sbuf.toString()));
				values.push(new BigDecimal(sbuf.toString()));
				i--;
			}

			// Current token is an opening brace, push it to 'ops'
			else if (tokens[i] == '(')
				ops.push(tokens[i]);

			// Closing brace encountered, solve entire brace
			else if (tokens[i] == ')')
			{
				while (ops.peek() != '(')
				values.push(applyOp(ops.pop(), values.pop(), values.pop()));
				ops.pop();
			}

			// Current token is an operator.
			else if (tokens[i] == '+' || tokens[i] == '-' ||
					tokens[i] == '*' || tokens[i] == '/')
			{
				// While top of 'ops' has same or greater precedence to current
				// token, which is an operator. Apply operator on top of 'ops'
				// to top two elements in values stack
				while (!ops.empty() && hasPrecedence(tokens[i], ops.peek()))
				values.push(applyOp(ops.pop(), values.pop(), values.pop()));

				// Push current token to 'ops'.
				ops.push(tokens[i]);
			}
		}

		// Entire expression has been parsed at this point, apply remaining
		// ops to remaining values
		while (!ops.empty())
			values.push(applyOp(ops.pop(), values.pop(), values.pop()));

		// Top of 'values' contains result, return it
		//return values.pop().setScale(2, RoundingMode.DOWN).doubleValue();
			BigDecimal ret = values.pop();
			 System.out.println(ret.setScale(7, RoundingMode.DOWN));
			if (ret.compareTo(new BigDecimal(0)) == -1) {
				//return ret.setScale(50, RoundingMode.UP).doubleValue();
				return ret.doubleValue();
			}else{
				//return ret.setScale(50, RoundingMode.DOWN).doubleValue();
				return ret.doubleValue();
			}
			//return values.pop().setScale(2, RoundingMode.DOWN).doubleValue();
	}

	// Returns true if 'op2' has higher or same precedence as 'op1',
	// otherwise returns false.
	public static boolean hasPrecedence(char op1, char op2)
	{
		if (op2 == '(' || op2 == ')')
			return false;
		if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-'))
			return false;
		else
			return true;
	}

	// A utility method to apply an operator 'op' on operands 'a' 
	// and 'b'. Return the result.
	public static BigDecimal applyOp(char op, BigDecimal b, BigDecimal a)
	{
		switch (op)
		{
		case '+':
			BigDecimal add = a.add(b, precisionAndRounding);
			return add;
		case '-':
			BigDecimal subtract = a.subtract(b, precisionAndRounding);
			return subtract;
		case '*':
			BigDecimal multiply = a.multiply(b, precisionAndRounding);
			return multiply;
		case '/':
			if (b.intValue() == 0)
				throw new
				UnsupportedOperationException("Cannot divide by zero");
			BigDecimal divide = a.divide(b, precisionAndRounding);
			return divide;
		}
		return new BigDecimal(0);
	}

}
