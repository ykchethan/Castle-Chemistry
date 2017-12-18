package com.company.pdf.model;

public enum ExpressionVariable {
	
		a,
		b,
		c;
		
		
		   public static final ExpressionVariable values[] = values();

		   
		   public static ExpressionVariable fromOrdinal(int ordinal) {
			    if(ordinal< 1 || ordinal> 3) return null;
			    return values[ordinal-1];
			  }
	}


