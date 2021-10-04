package com.riot.draft.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TestMapper {
    public String selectTest(String testValue);
}
