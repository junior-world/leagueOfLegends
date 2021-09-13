package com.riot.draft.config.DB;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@MapperScan(basePackages = "com.riot.draft.mapper")
@Configuration
@Slf4j
public class DatabaseConfig {

    @Autowired
    private ApplicationContext applicationContext;

    public static final String SQL_SESSION_FACTORY_NAME = "mysqlSessionFactory";

    @Bean
    @ConfigurationProperties(prefix = "spring.datasource.hikari")
    public HikariConfig hikariConfig() {
        return new HikariConfig();
    }

    @Bean
    public DataSource dataSource() {
        DataSource dataSource = new HikariDataSource(hikariConfig());
        log.info("datasource : {}", dataSource);
        return dataSource;
    }

    @Bean
    public SqlSessionFactory mysqlSessionFactory() throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource());
        //sqlSessionFactoryBean.setConfigLocation(applicationContext.getResource("classpath:sqlmap-config.xml"));
        sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath*:/mappers/**/*Mapper.xml"));
        return sqlSessionFactoryBean.getObject();
    }

    //@Bean(name="sqlSessionTemplate")
    @Bean(name = "mySqlSessionTemplate", destroyMethod = "clearCache")
    public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(mysqlSessionFactory());
    }


}
