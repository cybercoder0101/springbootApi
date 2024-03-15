package com.gestions.produits.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;

@Configuration
@EnableWebSecurity

public class SecurityConfig {

    @Autowired
    AuthenticationManager authMgr;




    @Bean
    public SecurityFilterChain filterChain (HttpSecurity http) throws Exception
    {
        http.sessionManagement( session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                .csrf(AbstractHttpConfigurer::disable)

                .authorizeHttpRequests( requests -> requests


                        .requestMatchers("/produits/api/all/**")
                        .hasAnyAuthority("ADMIN","USER")



                        .requestMatchers("/produits/api/addprod/**")
                        .hasAuthority("ADMIN")

                        .requestMatchers("/produits/api/updateprod/**")
                        .hasAuthority("ADMIN")

                        .requestMatchers("/produits/api/delprod/**")
                        .hasAuthority("ADMIN")


                        .requestMatchers("produits/api/getById/**")
                        .hasAnyAuthority("ADMIN","USER")



                        .anyRequest().authenticated())



                .addFilterBefore(new JWTAuthenticationFilter(authMgr),
                        UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JWTAuthorizationFilter(), BasicAuthenticationFilter.class)
             ;


        return http.build();
    }


}
