package com.riot.draft.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {

    public String selectMember(String loginId);
}
