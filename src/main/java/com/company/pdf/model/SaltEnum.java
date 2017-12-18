package com.company.pdf.model;

public enum SaltEnum {
	
    SALT_NEW_V2("SLKDJFDSJFJUILKGLKDFGJDFLKJLKJSFLKJDFJGDFLKDFJLKDFJGLKJFKXVCXVLJCXLK");

    private String salt;

    private SaltEnum(String salt) {
        this.salt = salt;
    }
}
