package com.tanerus.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcrpytEncoderTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        for (int i=1; i<=10; i++) {
            String encodedString = bCryptPasswordEncoder.encode("dummy");
            System.out.println(encodedString);
        }

    }
}
