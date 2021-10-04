package com.riot.draft;

import com.riot.draft.mapper.BoardMapper;
import com.riot.draft.mapper.TestMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MapperTests {

    @Autowired
    private BoardMapper boardMapper;

    @Autowired
    private TestMapper testMapper;
    @Test
    public void testOfInsert() {


        String result = boardMapper.selectMember("rlaxodid123");
        System.out.println("결과는 " + result + "입니다.");
    }

    @Test
    public void testOfMaria() {
        String result = testMapper.selectTest("hello2");
        System.out.println("결과는 " + result + "입니다.");
    }

}