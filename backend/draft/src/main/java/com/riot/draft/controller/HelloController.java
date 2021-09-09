package com.riot.draft.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    @ResponseBody
    public String hello(){
        System.out.println("test");
        return "안녕하세요.";
    }
}
